import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_TITLE } from "../../consts";

const CRLF = "\r\n";
const MAX_LINE_OCTETS = 75;
const CONTINUATION = `${CRLF} `;

const MONTH_SLUGS = [
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december",
] as const;

function escapeText(value: string): string {
	return value
		.replace(/\\/g, "\\\\")
		.replace(/;/g, "\\;")
		.replace(/,/g, "\\,")
		.replace(/\r?\n/g, "\\n");
}

// RFC 5545 §3.1: lines must not exceed 75 octets (not characters) excluding CRLF.
// Continuation lines start with a single space. UTF-8 multi-byte sequences must not split.
function foldLine(line: string): string {
	const encoder = new TextEncoder();
	const bytes = encoder.encode(line);
	if (bytes.length <= MAX_LINE_OCTETS) return line;
	const decoder = new TextDecoder();
	const segments: string[] = [];
	let cursor = 0;
	while (cursor < bytes.length) {
		let end = Math.min(cursor + MAX_LINE_OCTETS, bytes.length);
		while (end < bytes.length && (bytes[end]! & 0xc0) === 0x80) end--;
		segments.push(decoder.decode(bytes.subarray(cursor, end)));
		cursor = end;
	}
	return segments.join(CONTINUATION);
}

function formatDate(date: Date): string {
	const y = date.getUTCFullYear().toString().padStart(4, "0");
	const m = (date.getUTCMonth() + 1).toString().padStart(2, "0");
	const d = date.getUTCDate().toString().padStart(2, "0");
	return `${y}${m}${d}`;
}

function formatDateTimeUtc(date: Date): string {
	const y = date.getUTCFullYear().toString().padStart(4, "0");
	const mo = (date.getUTCMonth() + 1).toString().padStart(2, "0");
	const d = date.getUTCDate().toString().padStart(2, "0");
	const h = date.getUTCHours().toString().padStart(2, "0");
	const mi = date.getUTCMinutes().toString().padStart(2, "0");
	const s = date.getUTCSeconds().toString().padStart(2, "0");
	return `${y}${mo}${d}T${h}${mi}${s}Z`;
}

function nextDay(date: Date): Date {
	const next = new Date(date);
	next.setUTCDate(next.getUTCDate() + 1);
	return next;
}

export const GET: APIRoute = async ({ site }) => {
	const events = await getCollection("wheelEvents");
	const sorted = [...events].sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
	const dtstamp = formatDateTimeUtc(new Date());
	const origin = site?.origin ?? "https://technodruid.org";

	const lines: string[] = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Technodruid//Wheel of the Year//EN",
		"CALSCALE:GREGORIAN",
		"METHOD:PUBLISH",
		foldLine(`X-WR-CALNAME:${escapeText(`${SITE_TITLE} — Wheel of the Year`)}`),
		foldLine(`X-WR-CALDESC:${escapeText("The Technodruidic year and its observances.")}`),
	];

	for (const event of sorted) {
		const monthSlug = MONTH_SLUGS[event.data.date.getUTCMonth()];
		lines.push(
			"BEGIN:VEVENT",
			foldLine(`UID:wheel-${event.id}@technodruid.org`),
			`DTSTAMP:${dtstamp}`,
			`DTSTART;VALUE=DATE:${formatDate(event.data.date)}`,
			`DTEND;VALUE=DATE:${formatDate(nextDay(event.data.date))}`,
			foldLine(`SUMMARY:${escapeText(event.data.title)}`),
			foldLine(`DESCRIPTION:${escapeText(event.data.description)}`),
			foldLine(`URL:${origin}/practices/wheel#month-${monthSlug}-heading`),
			"TRANSP:TRANSPARENT",
			"END:VEVENT",
		);
	}

	lines.push("END:VCALENDAR");

	return new Response(lines.join(CRLF) + CRLF, {
		headers: {
			"Content-Type": "text/calendar; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
