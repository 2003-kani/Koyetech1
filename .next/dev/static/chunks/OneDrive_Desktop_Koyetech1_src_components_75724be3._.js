(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Koyetech1/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/Button.tsx
__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/lib/cn.ts [app-client] (ecmascript)");
;
;
;
;
const base = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-via/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-dark shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 px-6 py-2.5 rounded-xl text-sm sm:text-base font-semibold",
    secondary: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm px-6 py-2.5 rounded-xl text-sm sm:text-base font-medium",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 px-4 py-2 rounded-xl text-sm font-medium",
    outline: "text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 px-6 py-2.5 rounded-xl text-sm sm:text-base font-medium",
    link: "text-brand-primary hover:text-brand-dark hover:underline underline-offset-2 p-0 h-auto font-semibold",
    shine: "relative overflow-hidden bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm sm:text-base font-semibold hover:bg-slate-800 shadow-lg after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-[1.2s] after:ease-in-out"
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ variant = 'primary', className, ...props }, ref)=>{
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], className);
    if (props.as === 'link') {
        const { as, ...rest } = props;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: ref,
            className: cls,
            ...rest
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ui/Button.tsx",
            lineNumber: 50,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (props.as === 'a') {
        const { as, ...rest } = props;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            ref: ref,
            className: cls,
            ...rest
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ui/Button.tsx",
            lineNumber: 55,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    const { type = 'button', ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        ref: ref,
        className: cls,
        ...rest
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ui/Button.tsx",
        lineNumber: 59,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Koyetech1/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ContactForm() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        state: "idle"
    });
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });
    async function onSubmit(e) {
        e.preventDefault();
        setStatus({
            state: "submitting"
        });
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const json = await res.json();
            if (!res.ok) {
                setStatus({
                    state: "error",
                    message: json.error || "Submission failed."
                });
                return;
            }
            setStatus({
                state: "success",
                message: json.message || "Thanks! We’ll get back to you soon."
            });
            setForm({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: ""
            });
        } catch  {
            setStatus({
                state: "error",
                message: "Network error. Please try again."
            });
        }
    }
    const disabled = status.state === "submitting";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "grid gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-slate-700",
                                children: "Full Name *"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors",
                                value: form.name,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            name: e.target.value
                                        })),
                                required: true,
                                placeholder: "John Doe"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-slate-700",
                                children: "Email Address *"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                className: "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors",
                                value: form.email,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            email: e.target.value
                                        })),
                                required: true,
                                placeholder: "john@company.com"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-slate-700",
                                children: "Phone Number"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                className: "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors",
                                value: form.phone,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            phone: e.target.value
                                        })),
                                placeholder: "+1 (555) 000-0000"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-slate-700",
                                children: "Company Name"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors",
                                value: form.company,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            company: e.target.value
                                        })),
                                placeholder: "Company Ltd"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-slate-700",
                        children: "Subject *"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors appearance-none",
                        name: "subject",
                        id: "subject",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "General Inquiry"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Project Discussion"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Partnership"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Careers"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-slate-700",
                        children: "Message *"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "mt-2 min-h-32 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-primary/50 transition-colors",
                        value: form.message,
                        onChange: (e)=>setForm((f)=>({
                                    ...f,
                                    message: e.target.value
                                })),
                        required: true,
                        placeholder: "Tell us what you’re looking to build or the roles you need..."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            status.state === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-200",
                children: status.message
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                lineNumber: 128,
                columnNumber: 11
            }, this) : null,
            status.state === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200",
                children: status.message
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                lineNumber: 135,
                columnNumber: 11
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: disabled,
                        className: "bg-brand-accent hover:bg-brand-accent/90 text-white shadow-lg shadow-brand-accent/20",
                        children: status.state === "submitting" ? "Sending…" : "Send message"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Koyetech1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-blue-200/60",
                        children: "We’ll respond as soon as possible."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Koyetech1/src/components/ContactForm.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "A0uTsCGBV1fevZPtAEjdVMXLkzI=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Koyetech1_src_components_75724be3._.js.map