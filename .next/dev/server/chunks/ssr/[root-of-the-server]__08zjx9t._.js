module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/icon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon.0.vnuq~27rkhf.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/icon.svg.mjs { IMAGE => \"[project]/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/icon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 400,
    height: 618
};
}),
"[project]/components/GroupCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
function GroupCard({ groupName, backgroundUrl, teams }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full bg-gray-200 border-2 border-[#1a1a1a] overflow-hidden group transition-transform duration-300 hover:scale-[1.02] shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: backgroundUrl,
                    alt: `Background ${groupName}`,
                    fill: true,
                    className: "object-cover object-center"
                }, void 0, false, {
                    fileName: "[project]/components/GroupCard.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GroupCard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full p-4 sm:p-6 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#1a1a1a] text-white px-5 py-1.5 rounded-t-xl rounded-br-xl inline-flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-fwc2026 text-base sm:text-lg tracking-wide uppercase",
                                children: groupName
                            }, void 0, false, {
                                fileName: "[project]/components/GroupCard.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/GroupCard.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GroupCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5 mt-20 sm:mt-24",
                        children: teams.map((team, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center w-full h-10 sm:h-12 bg-white border-2 border-[#1a1a1a]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-12 sm:w-16 h-full border-r-2 border-[#1a1a1a] bg-gray-300 flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: team.flagUrl,
                                            alt: team.name,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GroupCard.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/GroupCard.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex items-center px-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-widest truncate",
                                            children: team.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/GroupCard.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/GroupCard.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/GroupCard.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/GroupCard.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GroupCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GroupCard.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data/groups.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "groupName": "Grupo A",
        "backgroundUrl": "/images/backgrounds/groupA_bg.svg",
        "teams": [
            {
                "name": "MÉXICO",
                "flagUrl": "/images/flags/mexico.svg"
            },
            {
                "name": "ÁFRICA DO SUL",
                "flagUrl": "/images/flags/south_africa.svg"
            },
            {
                "name": "COREIA DO SUL",
                "flagUrl": "/images/flags/south_korea.svg"
            },
            {
                "name": "TCHÉQUIA",
                "flagUrl": "/images/flags/czechia.svg"
            }
        ]
    },
    {
        "groupName": "Grupo B",
        "backgroundUrl": "/images/backgrounds/groupB_bg.svg",
        "teams": [
            {
                "name": "CANADÁ",
                "flagUrl": "/images/flags/canada.svg"
            },
            {
                "name": "BÓSNIA E HERZEGOVINA",
                "flagUrl": "/images/flags/bosnia_and_herzegovina.svg"
            },
            {
                "name": "QATAR",
                "flagUrl": "/images/flags/qatar.svg"
            },
            {
                "name": "SUÍÇA",
                "flagUrl": "/images/flags/switzerland.svg"
            }
        ]
    },
    {
        "groupName": "Grupo C",
        "backgroundUrl": "/images/backgrounds/groupC_bg.svg",
        "teams": [
            {
                "name": "BRASIL",
                "flagUrl": "/images/flags/brazil.svg"
            },
            {
                "name": "MARROCOS",
                "flagUrl": "/images/flags/morocco.svg"
            },
            {
                "name": "HAITI",
                "flagUrl": "/images/flags/haiti.svg"
            },
            {
                "name": "ESCOCIA",
                "flagUrl": "/images/flags/scotland.svg"
            }
        ]
    },
    {
        "groupName": "Grupo D",
        "backgroundUrl": "/images/backgrounds/groupD_bg.svg",
        "teams": [
            {
                "name": "Estados Unidos",
                "flagUrl": "/images/flags/usa.svg"
            },
            {
                "name": "AUSTRALIA",
                "flagUrl": "/images/flags/australia.svg"
            },
            {
                "name": "PARAGUAI",
                "flagUrl": "/images/flags/paraguay.svg"
            },
            {
                "name": "TURQUIA",
                "flagUrl": "/images/flags/turkey.svg"
            }
        ]
    },
    {
        "groupName": "Grupo E",
        "backgroundUrl": "/images/backgrounds/groupE_bg.svg",
        "teams": [
            {
                "name": "ALEMANHA",
                "flagUrl": "/images/flags/germany.svg"
            },
            {
                "name": "CURAÇAO",
                "flagUrl": "/images/flags/curacao.svg"
            },
            {
                "name": "COSTA DO MARFIM",
                "flagUrl": "/images/flags/cote_d_ivoire.svg"
            },
            {
                "name": "EQUADOR",
                "flagUrl": "/images/flags/ecuador.svg"
            }
        ]
    },
    {
        "groupName": "Grupo F",
        "backgroundUrl": "/images/backgrounds/groupF_bg.svg",
        "teams": [
            {
                "name": "HOLANDA",
                "flagUrl": "/images/flags/netherlands.svg"
            },
            {
                "name": "JAPÃO",
                "flagUrl": "/images/flags/japan.svg"
            },
            {
                "name": "SUÉCIA",
                "flagUrl": "/images/flags/sweden.svg"
            },
            {
                "name": "TUNÍSIA",
                "flagUrl": "/images/flags/tunisia.svg"
            }
        ]
    },
    {
        "groupName": "Grupo G",
        "backgroundUrl": "/images/backgrounds/groupG_bg.svg",
        "teams": [
            {
                "name": "BÉLGICA",
                "flagUrl": "/images/flags/belgium.svg"
            },
            {
                "name": "EGITO",
                "flagUrl": "/images/flags/egypt.svg"
            },
            {
                "name": "IRÃ",
                "flagUrl": "/images/flags/iran.svg"
            },
            {
                "name": "NOVA ZELÂNDIA",
                "flagUrl": "/images/flags/new_zealand.svg"
            }
        ]
    },
    {
        "groupName": "Grupo H",
        "backgroundUrl": "/images/backgrounds/groupH_bg.svg",
        "teams": [
            {
                "name": "ESPANHA",
                "flagUrl": "/images/flags/spain.svg"
            },
            {
                "name": "CABO VERDE",
                "flagUrl": "/images/flags/cabo_verde.svg"
            },
            {
                "name": "ARÁBIA SAUDITA",
                "flagUrl": "/images/flags/saudi_arabia.svg"
            },
            {
                "name": "URUGUAI",
                "flagUrl": "/images/flags/uruguay.svg"
            }
        ]
    },
    {
        "groupName": "Grupo I",
        "backgroundUrl": "/images/backgrounds/groupI_bg.svg",
        "teams": [
            {
                "name": "FRANÇA",
                "flagUrl": "/images/flags/france.svg"
            },
            {
                "name": "SENEGAL",
                "flagUrl": "/images/flags/senegal.svg"
            },
            {
                "name": "IRAQUE",
                "flagUrl": "/images/flags/iraq.svg"
            },
            {
                "name": "NORUEGA",
                "flagUrl": "/images/flags/norway.svg"
            }
        ]
    },
    {
        "groupName": "Grupo J",
        "backgroundUrl": "/images/backgrounds/groupJ_bg.svg",
        "teams": [
            {
                "name": "ARGENTINA",
                "flagUrl": "/images/flags/argentina.svg"
            },
            {
                "name": "ARGÉLIA",
                "flagUrl": "/images/flags/algeria.svg"
            },
            {
                "name": "ÁUSTRIA",
                "flagUrl": "/images/flags/austria.svg"
            },
            {
                "name": "JORDÂNIA",
                "flagUrl": "/images/flags/jordan.svg"
            }
        ]
    },
    {
        "groupName": "Grupo K",
        "backgroundUrl": "/images/backgrounds/groupK_bg.svg",
        "teams": [
            {
                "name": "PORTUGAL",
                "flagUrl": "/images/flags/portugal.svg"
            },
            {
                "name": "RD CONGO",
                "flagUrl": "/images/flags/congo_dr.svg"
            },
            {
                "name": "UZBEQUISTÃO",
                "flagUrl": "/images/flags/uzbekistan.svg"
            },
            {
                "name": "COLÔMBIA",
                "flagUrl": "/images/flags/colombia.svg"
            }
        ]
    },
    {
        "groupName": "Grupo L",
        "backgroundUrl": "/images/backgrounds/groupL_bg.svg",
        "teams": [
            {
                "name": "INGLATERRA",
                "flagUrl": "/images/flags/england.svg"
            },
            {
                "name": "CROÁCIA",
                "flagUrl": "/images/flags/croatia.svg"
            },
            {
                "name": "GANA",
                "flagUrl": "/images/flags/ghana.svg"
            },
            {
                "name": "PANAMÁ",
                "flagUrl": "/images/flags/panama.svg"
            }
        ]
    }
];
}),
"[project]/app/teams/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Teams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GroupCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GroupCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$groups$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/groups.json.[json].cjs [app-rsc] (ecmascript)");
;
;
;
function Teams() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex-1 py-16 px-6 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto mb-16 text-center md:text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-fwc2026 text-white tracking-widest mb-4 drop-shadow-md",
                        children: "GRUPOS E SELEÇÕES"
                    }, void 0, false, {
                        fileName: "[project]/app/teams/page.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 font-noto text-lg max-w-2xl leading-relaxed",
                        children: "Conheça as 48 seleções divididas em 12 grupos. As equipes batalham por uma vaga rumo à glória eterna na Copa do Mundo da FIFA 2026™."
                    }, void 0, false, {
                        fileName: "[project]/app/teams/page.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/teams/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$groups$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GroupCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        groupName: group.groupName,
                        backgroundUrl: group.backgroundUrl,
                        teams: group.teams
                    }, group.groupName, false, {
                        fileName: "[project]/app/teams/page.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/teams/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/teams/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/teams/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/teams/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08zjx9t._.js.map