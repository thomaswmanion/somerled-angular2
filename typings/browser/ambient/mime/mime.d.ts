// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/2e7a477ac2b6471055aa6e0e56b333e8f327d6b7/mime/mime.d.ts
// Type definitions for mime
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts

declare module "mime" {
	export function lookup(path: string): string;
	export function extension(mime: string): string;
	export function load(filepath: string): void;
	export function define(mimes: Object): void;

	interface Charsets {
		lookup(mime: string): string;
	}

	export var charsets: Charsets;
	export var default_type: string;
}