(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__f2b15f93._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
// LOCAL TEST PARAM
const localTestParam = 'jabscnasjchasa';
// PARAM LIST
const paramList = {
    'opportunity': 'kim',
    'revealed': 'rock',
    'exclusive': 'megan'
};
function middleware(req) {
    const { nextUrl } = req;
    const url = nextUrl.toString() || '';
    const host = nextUrl.hostname.toLowerCase() || '';
    const params = nextUrl.searchParams;
    const catParam = params.get('xcat') || '';
    const localParam = params.get('xtest') || '';
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-url', url);
    requestHeaders.set('x-host', host);
    requestHeaders.set('x-params', params.toString());
    requestHeaders.set('x-cat-param', catParam);
    if (localParam === localTestParam) {
        requestHeaders.set('x-local-param', 'true');
    }
    ;
    if (catParam && paramList[catParam]) {
        params.delete('xcat');
        const newUrl = req.nextUrl.clone();
        newUrl.search = params.toString();
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(newUrl, {
            status: 302
        });
        response.cookies.set({
            name: 'xcat_valid',
            value: paramList[catParam],
            path: '/',
            maxAge: 60 * 60 * 72,
            httpOnly: false
        });
        return response;
    }
    ;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: requestHeaders
        }
    });
}
const config = {
    matcher: [
        "/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__f2b15f93._.js.map