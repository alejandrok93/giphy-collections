// navigator.clipboard.d.ts

// Type declarations for Clipboard API
// https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
export interface Clipboard {
	writeText(newClipText: string): Promise<void>;
	// Add any other methods you need here.
}

export interface NavigatorClipboard {
	// Only available in a secure context.
	readonly clipboard?: Clipboard;
}

export interface Navigator extends NavigatorClipboard {}
