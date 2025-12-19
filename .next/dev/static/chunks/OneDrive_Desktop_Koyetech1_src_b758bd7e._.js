(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Koyetech1/src/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...values) {
    return values.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Koyetech1/src/components/ui/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/lib/cn.ts [app-client] (ecmascript)");
;
;
function Container({ className, children, padding, maxWidth, centerX = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(centerX ? "mx-auto" : "", maxWidth ? maxWidth : "max-w-7xl", padding ? padding : "px-4 sm:px-6 lg:px-8", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ui/Container.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Koyetech1/src/lib/nav.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nav",
    ()=>nav
]);
const nav = {
    primary: [
        {
            label: "Home",
            href: "/",
            description: "Return to the homepage"
        },
        {
            label: "Company",
            href: "/company",
            description: "About KoyeTech"
        },
        {
            label: "Business Solutions",
            href: "/business-solutions/product-management"
        },
        {
            label: "Accelerators",
            href: "/accelerators"
        },
        {
            label: "Talent Solution",
            href: "/talent-solution/contract-staff-augmentation"
        },
        {
            label: "Career",
            href: "/career"
        },
        {
            label: "Contact",
            href: "/contact"
        }
    ],
    mega: {
        businessSolutions: {
            label: "Business Solutions",
            items: [
                {
                    label: "Product Management",
                    href: "/business-solutions/product-management",
                    description: "Strategic product planning and roadmap development."
                },
                {
                    label: "AI & ML Solutions",
                    href: "/business-solutions/artificial-intelligence-machine-learning",
                    description: "Harness the power of AI to automate and innovate."
                }
            ]
        },
        talentSolution: {
            label: "Talent Solution",
            items: [
                {
                    label: "Contract Staff Augmentation",
                    href: "/talent-solution/contract-staff-augmentation",
                    description: "Scale your team quickly with skilled IT professionals."
                }
            ]
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Koyetech1/src/components/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/lib/cn.ts [app-client] (ecmascript)");
;
;
;
function Logo({ className, priority }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: "/koyetech-logo.svg",
        alt: "Koyetech",
        width: 170,
        height: 38,
        priority: priority,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-auto", className)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/Logo.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/lib/nav.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/components/Logo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function MenuLink({ href, children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const active = pathname === href;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg", active ? "text-brand-primary bg-brand-primary/10" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"),
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(MenuLink, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MenuLink;
function Dropdown({ label, items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative hidden md:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "inline-flex items-center gap-1 px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100",
                children: [
                    label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-400 text-[10px]",
                        children: "▼"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "invisible absolute right-0 top-full z-50 mt-1 w-[280px] rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-1",
                    children: items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: it.href,
                            className: "rounded-lg px-3 py-2.5 hover:bg-slate-50 transition-colors block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-slate-900",
                                    children: it.label
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                it.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-0.5 text-xs text-slate-500",
                                    children: it.description
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, it.href, true, {
                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = Dropdown;
function SiteHeader() {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const business = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].mega.businessSolutions.items;
    const talent = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].mega.talentSolution.items;
    const mobileGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SiteHeader.useMemo[mobileGroups]": ()=>[
                {
                    label: "Company",
                    items: [
                        {
                            label: "Company",
                            href: "/company"
                        }
                    ]
                },
                {
                    label: "Business Solutions",
                    items: business
                },
                {
                    label: "Accelerators",
                    items: [
                        {
                            label: "Accelerators",
                            href: "/accelerators"
                        }
                    ]
                },
                {
                    label: "Talent Solution",
                    items: talent
                },
                {
                    label: "Career",
                    items: [
                        {
                            label: "Career",
                            href: "/career"
                        }
                    ]
                },
                {
                    label: "Contact",
                    items: [
                        {
                            label: "Contact",
                            href: "/contact"
                        }
                    ]
                }
            ]
    }["SiteHeader.useMemo[mobileGroups]"], [
        business,
        talent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full glass border-b border-white/40 shadow-sm transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-6 md:px-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-24 items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center transition-opacity hover:opacity-80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                    priority: true,
                                    className: "h-10 w-auto text-brand-primary"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center space-x-4 md:flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuLink, {
                                        href: "/",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuLink, {
                                        href: "/company",
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dropdown, {
                                        label: "Business Solutions",
                                        items: business
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuLink, {
                                        href: "/accelerators",
                                        children: "Accelerators"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dropdown, {
                                        label: "Talent Solution",
                                        items: talent
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuLink, {
                                        href: "/career",
                                        children: "Career"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuLink, {
                                        href: "/contact",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 md:hidden",
                            onClick: ()=>setOpen((v)=>!v),
                            "aria-expanded": open,
                            "aria-label": "Toggle menu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: open ? 'Close menu' : 'Open menu'
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out",
                                    "aria-hidden": "true",
                                    style: open ? {
                                        transform: 'rotate(45deg) translate(1px, 1px)'
                                    } : {}
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1 block h-0.5 w-4 bg-current transition-transform duration-300 ease-in-out",
                                    "aria-hidden": "true",
                                    style: open ? {
                                        transform: 'rotate(-45deg) translate(1px, -1px)'
                                    } : {}
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    className: "py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: mobileGroups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
                                        children: g.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 grid gap-2",
                                        children: g.items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: it.href,
                                                onClick: ()=>setOpen(false),
                                                className: "rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50",
                                                children: it.label
                                            }, it.href, false, {
                                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                                lineNumber: 127,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, g.label, true, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                                lineNumber: 121,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteHeader.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s1(SiteHeader, "Y8hAASWvidCl8o4pHBvOLeVlJrg=");
_c2 = SiteHeader;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MenuLink");
__turbopack_context__.k.register(_c1, "Dropdown");
__turbopack_context__.k.register(_c2, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFooter",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/components/ui/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/components/Logo.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const navigation = {
    solutions: [
        {
            name: "Staff Augmentation",
            href: "/talent-solution/contract-staff-augmentation"
        },
        {
            name: "Digital Solutions",
            href: "/business-solutions/product-development"
        },
        {
            name: "Business Consulting",
            href: "/business-solutions/product-management"
        },
        {
            name: "Product Development",
            href: "/business-solutions/product-development"
        }
    ],
    company: [
        {
            name: "About Us",
            href: "/company"
        },
        {
            name: "Our Team",
            href: "/company/team"
        },
        {
            name: "Careers",
            href: "/career"
        },
        {
            name: "Contact Us",
            href: "/contact"
        }
    ],
    resources: [
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Case Studies",
            href: "/case-studies"
        },
        {
            name: "Whitepapers",
            href: "/resources/whitepapers"
        },
        {
            name: "Webinars",
            href: "/resources/webinars"
        }
    ],
    legal: [
        {
            name: "Privacy Policy",
            href: "/privacy"
        },
        {
            name: "Terms of Service",
            href: "/terms"
        },
        {
            name: "Cookie Policy",
            href: "/cookie-policy"
        }
    ],
    social: [
        {
            name: "LinkedIn",
            href: "#",
            icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    ...props,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: "Twitter",
            href: "#",
            icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    ...props,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: "GitHub",
            href: "#",
            icon: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    ...props,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                        clipRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        }
    ]
};
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            className: "px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-12 lg:grid-cols-4 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "inline-block bg-white p-3 rounded-xl shadow-lg shadow-black/5 hover:bg-white/90 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                        className: "h-8 w-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-bold mt-6 mb-4",
                                    children: "About KoyeTech"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-slate-400 mb-6",
                                    children: "Empowering businesses through innovation and exceptional talent. We are a rapidly growing IT consulting and solutions company."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: navigation.social.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-primary transition-all duration-300",
                                            "aria-label": item.name,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                className: "h-4 w-4",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this)
                                        }, item.name, false, {
                                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-0.5 after:bg-brand-primary",
                                    children: "Business Solutions"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            label: 'Product Management',
                                            href: '/business-solutions/product-management'
                                        },
                                        {
                                            label: 'AI & ML Solutions',
                                            href: '/business-solutions/artificial-intelligence-machine-learning'
                                        },
                                        {
                                            label: 'Accelerators',
                                            href: '/accelerators'
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "text-sm text-slate-400 hover:text-brand-primary transition-colors",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        }, item.label, false, {
                                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-0.5 after:bg-brand-primary",
                                    children: "Talent Solutions"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            label: 'Contract Staff Augmentation',
                                            href: '/talent-solution/contract-staff-augmentation'
                                        },
                                        {
                                            label: 'Firm Hire Services',
                                            href: '/talent-solution/contract-staff-augmentation'
                                        },
                                        {
                                            label: 'Contract to Hire',
                                            href: '/talent-solution/contract-staff-augmentation'
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "text-sm text-slate-400 hover:text-brand-primary transition-colors",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        }, item.label, false, {
                                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-0.5 after:bg-brand-primary",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: [
                                        {
                                            label: 'Home',
                                            href: '/'
                                        },
                                        {
                                            label: 'Company',
                                            href: '/company'
                                        },
                                        {
                                            label: 'Career',
                                            href: '/career'
                                        },
                                        {
                                            label: 'Contact',
                                            href: '/contact'
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "text-sm text-slate-400 hover:text-brand-primary transition-colors",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this)
                                        }, item.label, false, {
                                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-slate-800 pt-8 text-center text-slate-500 text-sm",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " KoyeTech. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/SiteFooter.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = SiteFooter;
var _c;
__turbopack_context__.k.register(_c, "SiteFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Koyetech1_src_b758bd7e._.js.map