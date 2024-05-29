"use strict";
/**
 * @file Drawer.tsx
 * @description Composant Drawer pour afficher un tiroir réactif.
 */
// Start of Selection
"use client";
/**
 * @file Drawer.tsx
 * @description Composant Drawer pour afficher un tiroir réactif.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
function Drawer(_a) {
    var title = _a.title, position = _a.position, isOpen = _a.isOpen, setIsOpen = _a.setIsOpen, children = _a.children;
    var right = (0, classnames_1.default)("fixed w-full lg:w-1/3 h-screen right-0 top-0 bg-white shadow-xl delay-400 duration-700 ease-in-out transition-all transform z-50 overflow-y-auto rounded-lg rounded-tr-none rounded-br-none", { "translate-x-0": isOpen, "translate-x-full": !isOpen });
    var left = (0, classnames_1.default)("fixed w-full lg:w-1/3 h-screen left-0 top-0 bg-white shadow-xl delay-400 duration-700 ease-in-out transition-all transform z-50 overflow-y-auto rounded-lg rounded-tr-none rounded-br-none", { "translate-x-0": isOpen, "-translate-x-full": !isOpen });
    var bottom = (0, classnames_1.default)("fixed w-full h-1/3 bottom-0 left-0 bg-white shadow-xl delay-400 duration-700 ease-in-out transition-all transform z-50 overflow-y-auto rounded-lg rounded-tr-none rounded-br-none", { "translate-y-0": isOpen, "translate-y-full": !isOpen });
    var top = (0, classnames_1.default)("fixed w-full h-1/3 top-0 left-0 bg-white shadow-xl delay-400 duration-700 ease-in-out transition-all transform z-50 overflow-y-auto rounded-lg rounded-tr-none rounded-br-none", { "translate-y-0": isOpen, "-translate-y-full": !isOpen });
    return (react_1.default.createElement("section", null,
        isOpen && (react_1.default.createElement("div", { onClick: function () { return setIsOpen(!isOpen); }, className: "fixed inset-0 bg-black opacity-30 z-40" })),
        react_1.default.createElement("div", { className: position === "right"
                ? right
                : position === "left"
                    ? left
                    : position === "top"
                        ? top
                        : position === "bottom"
                            ? bottom
                            : right, "aria-hidden": !isOpen },
            react_1.default.createElement("div", { className: "bg-white border-l-1 border-gray-300 fixed top-0 right-0 bottom-0 w-full" },
                react_1.default.createElement("button", { className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center", onClick: function () { return setIsOpen(!isOpen); } },
                    react_1.default.createElement("svg", { className: "w-3 h-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14" },
                        react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" }))),
                react_1.default.createElement("p", { className: "text-center text-xl mx-auto font-bold p-4" }, title),
                react_1.default.createElement("div", { className: "flex flex-col mx-auto p-4" }, children)))));
}
exports.default = Drawer;
