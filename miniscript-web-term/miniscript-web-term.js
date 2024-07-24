"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@xterm/xterm/lib/xterm.js
  var require_xterm = __commonJS({
    "node_modules/@xterm/xterm/lib/xterm.js"(exports, module) {
      !function(e, t) {
        if ("object" == typeof exports && "object" == typeof module)
          module.exports = t();
        else if ("function" == typeof define && define.amd)
          define([], t);
        else {
          var i = t();
          for (var s in i)
            ("object" == typeof exports ? exports : e)[s] = i[s];
        }
      }(globalThis, () => (() => {
        "use strict";
        var e = { 4567: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.AccessibilityManager = void 0;
          const n = i2(9042), o = i2(9924), a = i2(844), h = i2(4725), c = i2(2585);
          let l = t2.AccessibilityManager = class extends a.Disposable {
            constructor(e3, t3, i3, s3) {
              super(), this._terminal = e3, this._coreBrowserService = i3, this._renderService = s3, this._liveRegionLineCount = 0, this._charsToConsume = [], this._charsToAnnounce = "", this._accessibilityContainer = this._coreBrowserService.mainDocument.createElement("div"), this._accessibilityContainer.classList.add("xterm-accessibility"), this._rowContainer = this._coreBrowserService.mainDocument.createElement("div"), this._rowContainer.setAttribute("role", "list"), this._rowContainer.classList.add("xterm-accessibility-tree"), this._rowElements = [];
              for (let e4 = 0; e4 < this._terminal.rows; e4++)
                this._rowElements[e4] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e4]);
              if (this._topBoundaryFocusListener = (e4) => this._handleBoundaryFocus(e4, 0), this._bottomBoundaryFocusListener = (e4) => this._handleBoundaryFocus(e4, 1), this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions(), this._accessibilityContainer.appendChild(this._rowContainer), this._liveRegion = this._coreBrowserService.mainDocument.createElement("div"), this._liveRegion.classList.add("live-region"), this._liveRegion.setAttribute("aria-live", "assertive"), this._accessibilityContainer.appendChild(this._liveRegion), this._liveRegionDebouncer = this.register(new o.TimeBasedDebouncer(this._renderRows.bind(this))), !this._terminal.element)
                throw new Error("Cannot enable accessibility before Terminal.open");
              this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityContainer), this.register(this._terminal.onResize((e4) => this._handleResize(e4.rows))), this.register(this._terminal.onRender((e4) => this._refreshRows(e4.start, e4.end))), this.register(this._terminal.onScroll(() => this._refreshRows())), this.register(this._terminal.onA11yChar((e4) => this._handleChar(e4))), this.register(this._terminal.onLineFeed(() => this._handleChar("\n"))), this.register(this._terminal.onA11yTab((e4) => this._handleTab(e4))), this.register(this._terminal.onKey((e4) => this._handleKey(e4.key))), this.register(this._terminal.onBlur(() => this._clearLiveRegion())), this.register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions())), this.register(this._coreBrowserService.onDprChange(() => this._refreshRowsDimensions())), this._refreshRows(), this.register((0, a.toDisposable)(() => {
                this._accessibilityContainer.remove(), this._rowElements.length = 0;
              }));
            }
            _handleTab(e3) {
              for (let t3 = 0; t3 < e3; t3++)
                this._handleChar(" ");
            }
            _handleChar(e3) {
              this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e3 && (this._charsToAnnounce += e3) : this._charsToAnnounce += e3, "\n" === e3 && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += n.tooMuchOutput)));
            }
            _clearLiveRegion() {
              this._liveRegion.textContent = "", this._liveRegionLineCount = 0;
            }
            _handleKey(e3) {
              this._clearLiveRegion(), /\p{Control}/u.test(e3) || this._charsToConsume.push(e3);
            }
            _refreshRows(e3, t3) {
              this._liveRegionDebouncer.refresh(e3, t3, this._terminal.rows);
            }
            _renderRows(e3, t3) {
              const i3 = this._terminal.buffer, s3 = i3.lines.length.toString();
              for (let r2 = e3; r2 <= t3; r2++) {
                const e4 = i3.translateBufferLineToString(i3.ydisp + r2, true), t4 = (i3.ydisp + r2 + 1).toString(), n2 = this._rowElements[r2];
                n2 && (0 === e4.length ? n2.innerText = "\xA0" : n2.textContent = e4, n2.setAttribute("aria-posinset", t4), n2.setAttribute("aria-setsize", s3));
              }
              this._announceCharacters();
            }
            _announceCharacters() {
              0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
            }
            _handleBoundaryFocus(e3, t3) {
              const i3 = e3.target, s3 = this._rowElements[0 === t3 ? 1 : this._rowElements.length - 2];
              if (i3.getAttribute("aria-posinset") === (0 === t3 ? "1" : `${this._terminal.buffer.lines.length}`))
                return;
              if (e3.relatedTarget !== s3)
                return;
              let r2, n2;
              if (0 === t3 ? (r2 = i3, n2 = this._rowElements.pop(), this._rowContainer.removeChild(n2)) : (r2 = this._rowElements.shift(), n2 = i3, this._rowContainer.removeChild(r2)), r2.removeEventListener("focus", this._topBoundaryFocusListener), n2.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t3) {
                const e4 = this._createAccessibilityTreeNode();
                this._rowElements.unshift(e4), this._rowContainer.insertAdjacentElement("afterbegin", e4);
              } else {
                const e4 = this._createAccessibilityTreeNode();
                this._rowElements.push(e4), this._rowContainer.appendChild(e4);
              }
              this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t3 ? -1 : 1), this._rowElements[0 === t3 ? 1 : this._rowElements.length - 2].focus(), e3.preventDefault(), e3.stopImmediatePropagation();
            }
            _handleResize(e3) {
              this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
              for (let e4 = this._rowContainer.children.length; e4 < this._terminal.rows; e4++)
                this._rowElements[e4] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e4]);
              for (; this._rowElements.length > e3; )
                this._rowContainer.removeChild(this._rowElements.pop());
              this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
            }
            _createAccessibilityTreeNode() {
              const e3 = this._coreBrowserService.mainDocument.createElement("div");
              return e3.setAttribute("role", "listitem"), e3.tabIndex = -1, this._refreshRowDimensions(e3), e3;
            }
            _refreshRowsDimensions() {
              if (this._renderService.dimensions.css.cell.height) {
                this._accessibilityContainer.style.width = `${this._renderService.dimensions.css.canvas.width}px`, this._rowElements.length !== this._terminal.rows && this._handleResize(this._terminal.rows);
                for (let e3 = 0; e3 < this._terminal.rows; e3++)
                  this._refreshRowDimensions(this._rowElements[e3]);
              }
            }
            _refreshRowDimensions(e3) {
              e3.style.height = `${this._renderService.dimensions.css.cell.height}px`;
            }
          };
          t2.AccessibilityManager = l = s2([r(1, c.IInstantiationService), r(2, h.ICoreBrowserService), r(3, h.IRenderService)], l);
        }, 3614: (e2, t2) => {
          function i2(e3) {
            return e3.replace(/\r?\n/g, "\r");
          }
          function s2(e3, t3) {
            return t3 ? "\x1B[200~" + e3 + "\x1B[201~" : e3;
          }
          function r(e3, t3, r2, n2) {
            e3 = s2(e3 = i2(e3), r2.decPrivateModes.bracketedPasteMode && true !== n2.rawOptions.ignoreBracketedPasteMode), r2.triggerDataEvent(e3, true), t3.value = "";
          }
          function n(e3, t3, i3) {
            const s3 = i3.getBoundingClientRect(), r2 = e3.clientX - s3.left - 10, n2 = e3.clientY - s3.top - 10;
            t3.style.width = "20px", t3.style.height = "20px", t3.style.left = `${r2}px`, t3.style.top = `${n2}px`, t3.style.zIndex = "1000", t3.focus();
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.rightClickHandler = t2.moveTextAreaUnderMouseCursor = t2.paste = t2.handlePasteEvent = t2.copyHandler = t2.bracketTextForPaste = t2.prepareTextForTerminal = void 0, t2.prepareTextForTerminal = i2, t2.bracketTextForPaste = s2, t2.copyHandler = function(e3, t3) {
            e3.clipboardData && e3.clipboardData.setData("text/plain", t3.selectionText), e3.preventDefault();
          }, t2.handlePasteEvent = function(e3, t3, i3, s3) {
            e3.stopPropagation(), e3.clipboardData && r(e3.clipboardData.getData("text/plain"), t3, i3, s3);
          }, t2.paste = r, t2.moveTextAreaUnderMouseCursor = n, t2.rightClickHandler = function(e3, t3, i3, s3, r2) {
            n(e3, t3, i3), r2 && s3.rightClickSelect(e3), t3.value = s3.selectionText, t3.select();
          };
        }, 7239: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorContrastCache = void 0;
          const s2 = i2(1505);
          t2.ColorContrastCache = class {
            constructor() {
              this._color = new s2.TwoKeyMap(), this._css = new s2.TwoKeyMap();
            }
            setCss(e3, t3, i3) {
              this._css.set(e3, t3, i3);
            }
            getCss(e3, t3) {
              return this._css.get(e3, t3);
            }
            setColor(e3, t3, i3) {
              this._color.set(e3, t3, i3);
            }
            getColor(e3, t3) {
              return this._color.get(e3, t3);
            }
            clear() {
              this._color.clear(), this._css.clear();
            }
          };
        }, 3656: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.addDisposableDomListener = void 0, t2.addDisposableDomListener = function(e3, t3, i2, s2) {
            e3.addEventListener(t3, i2, s2);
            let r = false;
            return { dispose: () => {
              r || (r = true, e3.removeEventListener(t3, i2, s2));
            } };
          };
        }, 6465: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Linkifier2 = void 0;
          const n = i2(3656), o = i2(8460), a = i2(844), h = i2(2585);
          let c = t2.Linkifier2 = class extends a.Disposable {
            get currentLink() {
              return this._currentLink;
            }
            constructor(e3) {
              super(), this._bufferService = e3, this._linkProviders = [], this._linkCacheDisposables = [], this._isMouseOut = true, this._wasResized = false, this._activeLine = -1, this._onShowLinkUnderline = this.register(new o.EventEmitter()), this.onShowLinkUnderline = this._onShowLinkUnderline.event, this._onHideLinkUnderline = this.register(new o.EventEmitter()), this.onHideLinkUnderline = this._onHideLinkUnderline.event, this.register((0, a.getDisposeArrayDisposable)(this._linkCacheDisposables)), this.register((0, a.toDisposable)(() => {
                this._lastMouseEvent = void 0;
              })), this.register(this._bufferService.onResize(() => {
                this._clearCurrentLink(), this._wasResized = true;
              }));
            }
            registerLinkProvider(e3) {
              return this._linkProviders.push(e3), { dispose: () => {
                const t3 = this._linkProviders.indexOf(e3);
                -1 !== t3 && this._linkProviders.splice(t3, 1);
              } };
            }
            attachToDom(e3, t3, i3) {
              this._element = e3, this._mouseService = t3, this._renderService = i3, this.register((0, n.addDisposableDomListener)(this._element, "mouseleave", () => {
                this._isMouseOut = true, this._clearCurrentLink();
              })), this.register((0, n.addDisposableDomListener)(this._element, "mousemove", this._handleMouseMove.bind(this))), this.register((0, n.addDisposableDomListener)(this._element, "mousedown", this._handleMouseDown.bind(this))), this.register((0, n.addDisposableDomListener)(this._element, "mouseup", this._handleMouseUp.bind(this)));
            }
            _handleMouseMove(e3) {
              if (this._lastMouseEvent = e3, !this._element || !this._mouseService)
                return;
              const t3 = this._positionFromMouseEvent(e3, this._element, this._mouseService);
              if (!t3)
                return;
              this._isMouseOut = false;
              const i3 = e3.composedPath();
              for (let e4 = 0; e4 < i3.length; e4++) {
                const t4 = i3[e4];
                if (t4.classList.contains("xterm"))
                  break;
                if (t4.classList.contains("xterm-hover"))
                  return;
              }
              this._lastBufferCell && t3.x === this._lastBufferCell.x && t3.y === this._lastBufferCell.y || (this._handleHover(t3), this._lastBufferCell = t3);
            }
            _handleHover(e3) {
              if (this._activeLine !== e3.y || this._wasResized)
                return this._clearCurrentLink(), this._askForLink(e3, false), void (this._wasResized = false);
              this._currentLink && this._linkAtPosition(this._currentLink.link, e3) || (this._clearCurrentLink(), this._askForLink(e3, true));
            }
            _askForLink(e3, t3) {
              this._activeProviderReplies && t3 || (this._activeProviderReplies?.forEach((e4) => {
                e4?.forEach((e5) => {
                  e5.link.dispose && e5.link.dispose();
                });
              }), this._activeProviderReplies = /* @__PURE__ */ new Map(), this._activeLine = e3.y);
              let i3 = false;
              for (const [s3, r2] of this._linkProviders.entries())
                if (t3) {
                  const t4 = this._activeProviderReplies?.get(s3);
                  t4 && (i3 = this._checkLinkProviderResult(s3, e3, i3));
                } else
                  r2.provideLinks(e3.y, (t4) => {
                    if (this._isMouseOut)
                      return;
                    const r3 = t4?.map((e4) => ({ link: e4 }));
                    this._activeProviderReplies?.set(s3, r3), i3 = this._checkLinkProviderResult(s3, e3, i3), this._activeProviderReplies?.size === this._linkProviders.length && this._removeIntersectingLinks(e3.y, this._activeProviderReplies);
                  });
            }
            _removeIntersectingLinks(e3, t3) {
              const i3 = /* @__PURE__ */ new Set();
              for (let s3 = 0; s3 < t3.size; s3++) {
                const r2 = t3.get(s3);
                if (r2)
                  for (let t4 = 0; t4 < r2.length; t4++) {
                    const s4 = r2[t4], n2 = s4.link.range.start.y < e3 ? 0 : s4.link.range.start.x, o2 = s4.link.range.end.y > e3 ? this._bufferService.cols : s4.link.range.end.x;
                    for (let e4 = n2; e4 <= o2; e4++) {
                      if (i3.has(e4)) {
                        r2.splice(t4--, 1);
                        break;
                      }
                      i3.add(e4);
                    }
                  }
              }
            }
            _checkLinkProviderResult(e3, t3, i3) {
              if (!this._activeProviderReplies)
                return i3;
              const s3 = this._activeProviderReplies.get(e3);
              let r2 = false;
              for (let t4 = 0; t4 < e3; t4++)
                this._activeProviderReplies.has(t4) && !this._activeProviderReplies.get(t4) || (r2 = true);
              if (!r2 && s3) {
                const e4 = s3.find((e5) => this._linkAtPosition(e5.link, t3));
                e4 && (i3 = true, this._handleNewLink(e4));
              }
              if (this._activeProviderReplies.size === this._linkProviders.length && !i3)
                for (let e4 = 0; e4 < this._activeProviderReplies.size; e4++) {
                  const s4 = this._activeProviderReplies.get(e4)?.find((e5) => this._linkAtPosition(e5.link, t3));
                  if (s4) {
                    i3 = true, this._handleNewLink(s4);
                    break;
                  }
                }
              return i3;
            }
            _handleMouseDown() {
              this._mouseDownLink = this._currentLink;
            }
            _handleMouseUp(e3) {
              if (!this._element || !this._mouseService || !this._currentLink)
                return;
              const t3 = this._positionFromMouseEvent(e3, this._element, this._mouseService);
              t3 && this._mouseDownLink === this._currentLink && this._linkAtPosition(this._currentLink.link, t3) && this._currentLink.link.activate(e3, this._currentLink.link.text);
            }
            _clearCurrentLink(e3, t3) {
              this._element && this._currentLink && this._lastMouseEvent && (!e3 || !t3 || this._currentLink.link.range.start.y >= e3 && this._currentLink.link.range.end.y <= t3) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, (0, a.disposeArray)(this._linkCacheDisposables));
            }
            _handleNewLink(e3) {
              if (!this._element || !this._lastMouseEvent || !this._mouseService)
                return;
              const t3 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
              t3 && this._linkAtPosition(e3.link, t3) && (this._currentLink = e3, this._currentLink.state = { decorations: { underline: void 0 === e3.link.decorations || e3.link.decorations.underline, pointerCursor: void 0 === e3.link.decorations || e3.link.decorations.pointerCursor }, isHovered: true }, this._linkHover(this._element, e3.link, this._lastMouseEvent), e3.link.decorations = {}, Object.defineProperties(e3.link.decorations, { pointerCursor: { get: () => this._currentLink?.state?.decorations.pointerCursor, set: (e4) => {
                this._currentLink?.state && this._currentLink.state.decorations.pointerCursor !== e4 && (this._currentLink.state.decorations.pointerCursor = e4, this._currentLink.state.isHovered && this._element?.classList.toggle("xterm-cursor-pointer", e4));
              } }, underline: { get: () => this._currentLink?.state?.decorations.underline, set: (t4) => {
                this._currentLink?.state && this._currentLink?.state?.decorations.underline !== t4 && (this._currentLink.state.decorations.underline = t4, this._currentLink.state.isHovered && this._fireUnderlineEvent(e3.link, t4));
              } } }), this._renderService && this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((e4) => {
                if (!this._currentLink)
                  return;
                const t4 = 0 === e4.start ? 0 : e4.start + 1 + this._bufferService.buffer.ydisp, i3 = this._bufferService.buffer.ydisp + 1 + e4.end;
                if (this._currentLink.link.range.start.y >= t4 && this._currentLink.link.range.end.y <= i3 && (this._clearCurrentLink(t4, i3), this._lastMouseEvent && this._element)) {
                  const e5 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                  e5 && this._askForLink(e5, false);
                }
              })));
            }
            _linkHover(e3, t3, i3) {
              this._currentLink?.state && (this._currentLink.state.isHovered = true, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t3, true), this._currentLink.state.decorations.pointerCursor && e3.classList.add("xterm-cursor-pointer")), t3.hover && t3.hover(i3, t3.text);
            }
            _fireUnderlineEvent(e3, t3) {
              const i3 = e3.range, s3 = this._bufferService.buffer.ydisp, r2 = this._createLinkUnderlineEvent(i3.start.x - 1, i3.start.y - s3 - 1, i3.end.x, i3.end.y - s3 - 1, void 0);
              (t3 ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(r2);
            }
            _linkLeave(e3, t3, i3) {
              this._currentLink?.state && (this._currentLink.state.isHovered = false, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t3, false), this._currentLink.state.decorations.pointerCursor && e3.classList.remove("xterm-cursor-pointer")), t3.leave && t3.leave(i3, t3.text);
            }
            _linkAtPosition(e3, t3) {
              const i3 = e3.range.start.y * this._bufferService.cols + e3.range.start.x, s3 = e3.range.end.y * this._bufferService.cols + e3.range.end.x, r2 = t3.y * this._bufferService.cols + t3.x;
              return i3 <= r2 && r2 <= s3;
            }
            _positionFromMouseEvent(e3, t3, i3) {
              const s3 = i3.getCoords(e3, t3, this._bufferService.cols, this._bufferService.rows);
              if (s3)
                return { x: s3[0], y: s3[1] + this._bufferService.buffer.ydisp };
            }
            _createLinkUnderlineEvent(e3, t3, i3, s3, r2) {
              return { x1: e3, y1: t3, x2: i3, y2: s3, cols: this._bufferService.cols, fg: r2 };
            }
          };
          t2.Linkifier2 = c = s2([r(0, h.IBufferService)], c);
        }, 9042: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.tooMuchOutput = t2.promptLabel = void 0, t2.promptLabel = "Terminal input", t2.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
        }, 3730: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.OscLinkProvider = void 0;
          const n = i2(511), o = i2(2585);
          let a = t2.OscLinkProvider = class {
            constructor(e3, t3, i3) {
              this._bufferService = e3, this._optionsService = t3, this._oscLinkService = i3;
            }
            provideLinks(e3, t3) {
              const i3 = this._bufferService.buffer.lines.get(e3 - 1);
              if (!i3)
                return void t3(void 0);
              const s3 = [], r2 = this._optionsService.rawOptions.linkHandler, o2 = new n.CellData(), a2 = i3.getTrimmedLength();
              let c = -1, l = -1, d = false;
              for (let t4 = 0; t4 < a2; t4++)
                if (-1 !== l || i3.hasContent(t4)) {
                  if (i3.loadCell(t4, o2), o2.hasExtendedAttrs() && o2.extended.urlId) {
                    if (-1 === l) {
                      l = t4, c = o2.extended.urlId;
                      continue;
                    }
                    d = o2.extended.urlId !== c;
                  } else
                    -1 !== l && (d = true);
                  if (d || -1 !== l && t4 === a2 - 1) {
                    const i4 = this._oscLinkService.getLinkData(c)?.uri;
                    if (i4) {
                      const n2 = { start: { x: l + 1, y: e3 }, end: { x: t4 + (d || t4 !== a2 - 1 ? 0 : 1), y: e3 } };
                      let o3 = false;
                      if (!r2?.allowNonHttpProtocols)
                        try {
                          const e4 = new URL(i4);
                          ["http:", "https:"].includes(e4.protocol) || (o3 = true);
                        } catch (e4) {
                          o3 = true;
                        }
                      o3 || s3.push({ text: i4, range: n2, activate: (e4, t5) => r2 ? r2.activate(e4, t5, n2) : h(0, t5), hover: (e4, t5) => r2?.hover?.(e4, t5, n2), leave: (e4, t5) => r2?.leave?.(e4, t5, n2) });
                    }
                    d = false, o2.hasExtendedAttrs() && o2.extended.urlId ? (l = t4, c = o2.extended.urlId) : (l = -1, c = -1);
                  }
                }
              t3(s3);
            }
          };
          function h(e3, t3) {
            if (confirm(`Do you want to navigate to ${t3}?

WARNING: This link could potentially be dangerous`)) {
              const e4 = window.open();
              if (e4) {
                try {
                  e4.opener = null;
                } catch {
                }
                e4.location.href = t3;
              } else
                console.warn("Opening link blocked as opener could not be cleared");
            }
          }
          t2.OscLinkProvider = a = s2([r(0, o.IBufferService), r(1, o.IOptionsService), r(2, o.IOscLinkService)], a);
        }, 6193: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RenderDebouncer = void 0, t2.RenderDebouncer = class {
            constructor(e3, t3) {
              this._parentWindow = e3, this._renderCallback = t3, this._refreshCallbacks = [];
            }
            dispose() {
              this._animationFrame && (this._parentWindow.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
            }
            addRefreshCallback(e3) {
              return this._refreshCallbacks.push(e3), this._animationFrame || (this._animationFrame = this._parentWindow.requestAnimationFrame(() => this._innerRefresh())), this._animationFrame;
            }
            refresh(e3, t3, i2) {
              this._rowCount = i2, e3 = void 0 !== e3 ? e3 : 0, t3 = void 0 !== t3 ? t3 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e3) : e3, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t3) : t3, this._animationFrame || (this._animationFrame = this._parentWindow.requestAnimationFrame(() => this._innerRefresh()));
            }
            _innerRefresh() {
              if (this._animationFrame = void 0, void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount)
                return void this._runRefreshCallbacks();
              const e3 = Math.max(this._rowStart, 0), t3 = Math.min(this._rowEnd, this._rowCount - 1);
              this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e3, t3), this._runRefreshCallbacks();
            }
            _runRefreshCallbacks() {
              for (const e3 of this._refreshCallbacks)
                e3(0);
              this._refreshCallbacks = [];
            }
          };
        }, 3236: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Terminal = void 0;
          const s2 = i2(3614), r = i2(3656), n = i2(6465), o = i2(9042), a = i2(3730), h = i2(1680), c = i2(3107), l = i2(5744), d = i2(2950), _ = i2(1296), u = i2(428), f = i2(4269), v = i2(5114), g = i2(8934), p = i2(3230), m = i2(9312), S = i2(4725), C = i2(6731), b = i2(8055), y = i2(8969), w = i2(8460), E = i2(844), k = i2(6114), L = i2(8437), D = i2(2584), R = i2(7399), x = i2(5941), A = i2(9074), B = i2(2585), T = i2(5435), M = i2(4567);
          class O extends y.CoreTerminal {
            get onFocus() {
              return this._onFocus.event;
            }
            get onBlur() {
              return this._onBlur.event;
            }
            get onA11yChar() {
              return this._onA11yCharEmitter.event;
            }
            get onA11yTab() {
              return this._onA11yTabEmitter.event;
            }
            get onWillOpen() {
              return this._onWillOpen.event;
            }
            constructor(e3 = {}) {
              super(e3), this.browser = k, this._keyDownHandled = false, this._keyDownSeen = false, this._keyPressHandled = false, this._unprocessedDeadKey = false, this._accessibilityManager = this.register(new E.MutableDisposable()), this._onCursorMove = this.register(new w.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onKey = this.register(new w.EventEmitter()), this.onKey = this._onKey.event, this._onRender = this.register(new w.EventEmitter()), this.onRender = this._onRender.event, this._onSelectionChange = this.register(new w.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onTitleChange = this.register(new w.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onBell = this.register(new w.EventEmitter()), this.onBell = this._onBell.event, this._onFocus = this.register(new w.EventEmitter()), this._onBlur = this.register(new w.EventEmitter()), this._onA11yCharEmitter = this.register(new w.EventEmitter()), this._onA11yTabEmitter = this.register(new w.EventEmitter()), this._onWillOpen = this.register(new w.EventEmitter()), this._setup(), this.linkifier2 = this.register(this._instantiationService.createInstance(n.Linkifier2)), this.linkifier2.registerLinkProvider(this._instantiationService.createInstance(a.OscLinkProvider)), this._decorationService = this._instantiationService.createInstance(A.DecorationService), this._instantiationService.setService(B.IDecorationService, this._decorationService), this.register(this._inputHandler.onRequestBell(() => this._onBell.fire())), this.register(this._inputHandler.onRequestRefreshRows((e4, t3) => this.refresh(e4, t3))), this.register(this._inputHandler.onRequestSendFocus(() => this._reportFocus())), this.register(this._inputHandler.onRequestReset(() => this.reset())), this.register(this._inputHandler.onRequestWindowsOptionsReport((e4) => this._reportWindowsOptions(e4))), this.register(this._inputHandler.onColor((e4) => this._handleColorEvent(e4))), this.register((0, w.forwardEvent)(this._inputHandler.onCursorMove, this._onCursorMove)), this.register((0, w.forwardEvent)(this._inputHandler.onTitleChange, this._onTitleChange)), this.register((0, w.forwardEvent)(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this.register((0, w.forwardEvent)(this._inputHandler.onA11yTab, this._onA11yTabEmitter)), this.register(this._bufferService.onResize((e4) => this._afterResize(e4.cols, e4.rows))), this.register((0, E.toDisposable)(() => {
                this._customKeyEventHandler = void 0, this.element?.parentNode?.removeChild(this.element);
              }));
            }
            _handleColorEvent(e3) {
              if (this._themeService)
                for (const t3 of e3) {
                  let e4, i3 = "";
                  switch (t3.index) {
                    case 256:
                      e4 = "foreground", i3 = "10";
                      break;
                    case 257:
                      e4 = "background", i3 = "11";
                      break;
                    case 258:
                      e4 = "cursor", i3 = "12";
                      break;
                    default:
                      e4 = "ansi", i3 = "4;" + t3.index;
                  }
                  switch (t3.type) {
                    case 0:
                      const s3 = b.color.toColorRGB("ansi" === e4 ? this._themeService.colors.ansi[t3.index] : this._themeService.colors[e4]);
                      this.coreService.triggerDataEvent(`${D.C0.ESC}]${i3};${(0, x.toRgbString)(s3)}${D.C1_ESCAPED.ST}`);
                      break;
                    case 1:
                      if ("ansi" === e4)
                        this._themeService.modifyColors((e5) => e5.ansi[t3.index] = b.rgba.toColor(...t3.color));
                      else {
                        const i4 = e4;
                        this._themeService.modifyColors((e5) => e5[i4] = b.rgba.toColor(...t3.color));
                      }
                      break;
                    case 2:
                      this._themeService.restoreColor(t3.index);
                  }
                }
            }
            _setup() {
              super._setup(), this._customKeyEventHandler = void 0;
            }
            get buffer() {
              return this.buffers.active;
            }
            focus() {
              this.textarea && this.textarea.focus({ preventScroll: true });
            }
            _handleScreenReaderModeOptionChange(e3) {
              e3 ? !this._accessibilityManager.value && this._renderService && (this._accessibilityManager.value = this._instantiationService.createInstance(M.AccessibilityManager, this)) : this._accessibilityManager.clear();
            }
            _handleTextAreaFocus(e3) {
              this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(D.C0.ESC + "[I"), this.updateCursorStyle(e3), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
            }
            blur() {
              return this.textarea?.blur();
            }
            _handleTextAreaBlur() {
              this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(D.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
            }
            _syncTextArea() {
              if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService)
                return;
              const e3 = this.buffer.ybase + this.buffer.y, t3 = this.buffer.lines.get(e3);
              if (!t3)
                return;
              const i3 = Math.min(this.buffer.x, this.cols - 1), s3 = this._renderService.dimensions.css.cell.height, r2 = t3.getWidth(i3), n2 = this._renderService.dimensions.css.cell.width * r2, o2 = this.buffer.y * this._renderService.dimensions.css.cell.height, a2 = i3 * this._renderService.dimensions.css.cell.width;
              this.textarea.style.left = a2 + "px", this.textarea.style.top = o2 + "px", this.textarea.style.width = n2 + "px", this.textarea.style.height = s3 + "px", this.textarea.style.lineHeight = s3 + "px", this.textarea.style.zIndex = "-5";
            }
            _initGlobal() {
              this._bindKeys(), this.register((0, r.addDisposableDomListener)(this.element, "copy", (e4) => {
                this.hasSelection() && (0, s2.copyHandler)(e4, this._selectionService);
              }));
              const e3 = (e4) => (0, s2.handlePasteEvent)(e4, this.textarea, this.coreService, this.optionsService);
              this.register((0, r.addDisposableDomListener)(this.textarea, "paste", e3)), this.register((0, r.addDisposableDomListener)(this.element, "paste", e3)), k.isFirefox ? this.register((0, r.addDisposableDomListener)(this.element, "mousedown", (e4) => {
                2 === e4.button && (0, s2.rightClickHandler)(e4, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
              })) : this.register((0, r.addDisposableDomListener)(this.element, "contextmenu", (e4) => {
                (0, s2.rightClickHandler)(e4, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
              })), k.isLinux && this.register((0, r.addDisposableDomListener)(this.element, "auxclick", (e4) => {
                1 === e4.button && (0, s2.moveTextAreaUnderMouseCursor)(e4, this.textarea, this.screenElement);
              }));
            }
            _bindKeys() {
              this.register((0, r.addDisposableDomListener)(this.textarea, "keyup", (e3) => this._keyUp(e3), true)), this.register((0, r.addDisposableDomListener)(this.textarea, "keydown", (e3) => this._keyDown(e3), true)), this.register((0, r.addDisposableDomListener)(this.textarea, "keypress", (e3) => this._keyPress(e3), true)), this.register((0, r.addDisposableDomListener)(this.textarea, "compositionstart", () => this._compositionHelper.compositionstart())), this.register((0, r.addDisposableDomListener)(this.textarea, "compositionupdate", (e3) => this._compositionHelper.compositionupdate(e3))), this.register((0, r.addDisposableDomListener)(this.textarea, "compositionend", () => this._compositionHelper.compositionend())), this.register((0, r.addDisposableDomListener)(this.textarea, "input", (e3) => this._inputEvent(e3), true)), this.register(this.onRender(() => this._compositionHelper.updateCompositionElements()));
            }
            open(e3) {
              if (!e3)
                throw new Error("Terminal requires a parent element.");
              if (e3.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this.element?.ownerDocument.defaultView && this._coreBrowserService)
                return void (this.element.ownerDocument.defaultView !== this._coreBrowserService.window && (this._coreBrowserService.window = this.element.ownerDocument.defaultView));
              this._document = e3.ownerDocument, this.options.documentOverride && this.options.documentOverride instanceof Document && (this._document = this.optionsService.rawOptions.documentOverride), this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), e3.appendChild(this.element);
              const t3 = this._document.createDocumentFragment();
              this._viewportElement = this._document.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), t3.appendChild(this._viewportElement), this._viewportScrollArea = this._document.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = this._document.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = this._document.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), t3.appendChild(this.screenElement), this.textarea = this._document.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", o.promptLabel), k.isChromeOS || this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this._coreBrowserService = this.register(this._instantiationService.createInstance(v.CoreBrowserService, this.textarea, e3.ownerDocument.defaultView ?? window, this._document ?? "undefined" != typeof window ? window.document : null)), this._instantiationService.setService(S.ICoreBrowserService, this._coreBrowserService), this.register((0, r.addDisposableDomListener)(this.textarea, "focus", (e4) => this._handleTextAreaFocus(e4))), this.register((0, r.addDisposableDomListener)(this.textarea, "blur", () => this._handleTextAreaBlur())), this._helperContainer.appendChild(this.textarea), this._charSizeService = this._instantiationService.createInstance(u.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(S.ICharSizeService, this._charSizeService), this._themeService = this._instantiationService.createInstance(C.ThemeService), this._instantiationService.setService(S.IThemeService, this._themeService), this._characterJoinerService = this._instantiationService.createInstance(f.CharacterJoinerService), this._instantiationService.setService(S.ICharacterJoinerService, this._characterJoinerService), this._renderService = this.register(this._instantiationService.createInstance(p.RenderService, this.rows, this.screenElement)), this._instantiationService.setService(S.IRenderService, this._renderService), this.register(this._renderService.onRenderedViewportChange((e4) => this._onRender.fire(e4))), this.onResize((e4) => this._renderService.resize(e4.cols, e4.rows)), this._compositionView = this._document.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(d.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this.element.appendChild(t3);
              try {
                this._onWillOpen.fire(this.element);
              } catch {
              }
              this._renderService.hasRenderer() || this._renderService.setRenderer(this._createRenderer()), this._mouseService = this._instantiationService.createInstance(g.MouseService), this._instantiationService.setService(S.IMouseService, this._mouseService), this.viewport = this._instantiationService.createInstance(h.Viewport, this._viewportElement, this._viewportScrollArea), this.viewport.onRequestScrollLines((e4) => this.scrollLines(e4.amount, e4.suppressScrollEvent, 1)), this.register(this._inputHandler.onRequestSyncScrollBar(() => this.viewport.syncScrollArea())), this.register(this.viewport), this.register(this.onCursorMove(() => {
                this._renderService.handleCursorMove(), this._syncTextArea();
              })), this.register(this.onResize(() => this._renderService.handleResize(this.cols, this.rows))), this.register(this.onBlur(() => this._renderService.handleBlur())), this.register(this.onFocus(() => this._renderService.handleFocus())), this.register(this._renderService.onDimensionsChange(() => this.viewport.syncScrollArea())), this._selectionService = this.register(this._instantiationService.createInstance(m.SelectionService, this.element, this.screenElement, this.linkifier2)), this._instantiationService.setService(S.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines((e4) => this.scrollLines(e4.amount, e4.suppressScrollEvent))), this.register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire())), this.register(this._selectionService.onRequestRedraw((e4) => this._renderService.handleSelectionChanged(e4.start, e4.end, e4.columnSelectMode))), this.register(this._selectionService.onLinuxMouseSelection((e4) => {
                this.textarea.value = e4, this.textarea.focus(), this.textarea.select();
              })), this.register(this._onScroll.event((e4) => {
                this.viewport.syncScrollArea(), this._selectionService.refresh();
              })), this.register((0, r.addDisposableDomListener)(this._viewportElement, "scroll", () => this._selectionService.refresh())), this.linkifier2.attachToDom(this.screenElement, this._mouseService, this._renderService), this.register(this._instantiationService.createInstance(c.BufferDecorationRenderer, this.screenElement)), this.register((0, r.addDisposableDomListener)(this.element, "mousedown", (e4) => this._selectionService.handleMouseDown(e4))), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager.value = this._instantiationService.createInstance(M.AccessibilityManager, this)), this.register(this.optionsService.onSpecificOptionChange("screenReaderMode", (e4) => this._handleScreenReaderModeOptionChange(e4))), this.options.overviewRulerWidth && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(l.OverviewRulerRenderer, this._viewportElement, this.screenElement))), this.optionsService.onSpecificOptionChange("overviewRulerWidth", (e4) => {
                !this._overviewRulerRenderer && e4 && this._viewportElement && this.screenElement && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(l.OverviewRulerRenderer, this._viewportElement, this.screenElement)));
              }), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
            }
            _createRenderer() {
              return this._instantiationService.createInstance(_.DomRenderer, this._document, this.element, this.screenElement, this._viewportElement, this._helperContainer, this.linkifier2);
            }
            bindMouse() {
              const e3 = this, t3 = this.element;
              function i3(t4) {
                const i4 = e3._mouseService.getMouseReportCoords(t4, e3.screenElement);
                if (!i4)
                  return false;
                let s4, r2;
                switch (t4.overrideType || t4.type) {
                  case "mousemove":
                    r2 = 32, void 0 === t4.buttons ? (s4 = 3, void 0 !== t4.button && (s4 = t4.button < 3 ? t4.button : 3)) : s4 = 1 & t4.buttons ? 0 : 4 & t4.buttons ? 1 : 2 & t4.buttons ? 2 : 3;
                    break;
                  case "mouseup":
                    r2 = 0, s4 = t4.button < 3 ? t4.button : 3;
                    break;
                  case "mousedown":
                    r2 = 1, s4 = t4.button < 3 ? t4.button : 3;
                    break;
                  case "wheel":
                    if (0 === e3.viewport.getLinesScrolled(t4))
                      return false;
                    r2 = t4.deltaY < 0 ? 0 : 1, s4 = 4;
                    break;
                  default:
                    return false;
                }
                return !(void 0 === r2 || void 0 === s4 || s4 > 4) && e3.coreMouseService.triggerMouseEvent({ col: i4.col, row: i4.row, x: i4.x, y: i4.y, button: s4, action: r2, ctrl: t4.ctrlKey, alt: t4.altKey, shift: t4.shiftKey });
              }
              const s3 = { mouseup: null, wheel: null, mousedrag: null, mousemove: null }, n2 = { mouseup: (e4) => (i3(e4), e4.buttons || (this._document.removeEventListener("mouseup", s3.mouseup), s3.mousedrag && this._document.removeEventListener("mousemove", s3.mousedrag)), this.cancel(e4)), wheel: (e4) => (i3(e4), this.cancel(e4, true)), mousedrag: (e4) => {
                e4.buttons && i3(e4);
              }, mousemove: (e4) => {
                e4.buttons || i3(e4);
              } };
              this.register(this.coreMouseService.onProtocolChange((e4) => {
                e4 ? ("debug" === this.optionsService.rawOptions.logLevel && this._logService.debug("Binding to mouse events:", this.coreMouseService.explainEvents(e4)), this.element.classList.add("enable-mouse-events"), this._selectionService.disable()) : (this._logService.debug("Unbinding from mouse events."), this.element.classList.remove("enable-mouse-events"), this._selectionService.enable()), 8 & e4 ? s3.mousemove || (t3.addEventListener("mousemove", n2.mousemove), s3.mousemove = n2.mousemove) : (t3.removeEventListener("mousemove", s3.mousemove), s3.mousemove = null), 16 & e4 ? s3.wheel || (t3.addEventListener("wheel", n2.wheel, { passive: false }), s3.wheel = n2.wheel) : (t3.removeEventListener("wheel", s3.wheel), s3.wheel = null), 2 & e4 ? s3.mouseup || (s3.mouseup = n2.mouseup) : (this._document.removeEventListener("mouseup", s3.mouseup), s3.mouseup = null), 4 & e4 ? s3.mousedrag || (s3.mousedrag = n2.mousedrag) : (this._document.removeEventListener("mousemove", s3.mousedrag), s3.mousedrag = null);
              })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this.register((0, r.addDisposableDomListener)(t3, "mousedown", (e4) => {
                if (e4.preventDefault(), this.focus(), this.coreMouseService.areMouseEventsActive && !this._selectionService.shouldForceSelection(e4))
                  return i3(e4), s3.mouseup && this._document.addEventListener("mouseup", s3.mouseup), s3.mousedrag && this._document.addEventListener("mousemove", s3.mousedrag), this.cancel(e4);
              })), this.register((0, r.addDisposableDomListener)(t3, "wheel", (e4) => {
                if (!s3.wheel) {
                  if (!this.buffer.hasScrollback) {
                    const t4 = this.viewport.getLinesScrolled(e4);
                    if (0 === t4)
                      return;
                    const i4 = D.C0.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (e4.deltaY < 0 ? "A" : "B");
                    let s4 = "";
                    for (let e5 = 0; e5 < Math.abs(t4); e5++)
                      s4 += i4;
                    return this.coreService.triggerDataEvent(s4, true), this.cancel(e4, true);
                  }
                  return this.viewport.handleWheel(e4) ? this.cancel(e4) : void 0;
                }
              }, { passive: false })), this.register((0, r.addDisposableDomListener)(t3, "touchstart", (e4) => {
                if (!this.coreMouseService.areMouseEventsActive)
                  return this.viewport.handleTouchStart(e4), this.cancel(e4);
              }, { passive: true })), this.register((0, r.addDisposableDomListener)(t3, "touchmove", (e4) => {
                if (!this.coreMouseService.areMouseEventsActive)
                  return this.viewport.handleTouchMove(e4) ? void 0 : this.cancel(e4);
              }, { passive: false }));
            }
            refresh(e3, t3) {
              this._renderService?.refreshRows(e3, t3);
            }
            updateCursorStyle(e3) {
              this._selectionService?.shouldColumnSelect(e3) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
            }
            _showCursor() {
              this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = true, this.refresh(this.buffer.y, this.buffer.y));
            }
            scrollLines(e3, t3, i3 = 0) {
              1 === i3 ? (super.scrollLines(e3, t3, i3), this.refresh(0, this.rows - 1)) : this.viewport?.scrollLines(e3);
            }
            paste(e3) {
              (0, s2.paste)(e3, this.textarea, this.coreService, this.optionsService);
            }
            attachCustomKeyEventHandler(e3) {
              this._customKeyEventHandler = e3;
            }
            registerLinkProvider(e3) {
              return this.linkifier2.registerLinkProvider(e3);
            }
            registerCharacterJoiner(e3) {
              if (!this._characterJoinerService)
                throw new Error("Terminal must be opened first");
              const t3 = this._characterJoinerService.register(e3);
              return this.refresh(0, this.rows - 1), t3;
            }
            deregisterCharacterJoiner(e3) {
              if (!this._characterJoinerService)
                throw new Error("Terminal must be opened first");
              this._characterJoinerService.deregister(e3) && this.refresh(0, this.rows - 1);
            }
            get markers() {
              return this.buffer.markers;
            }
            registerMarker(e3) {
              return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e3);
            }
            registerDecoration(e3) {
              return this._decorationService.registerDecoration(e3);
            }
            hasSelection() {
              return !!this._selectionService && this._selectionService.hasSelection;
            }
            select(e3, t3, i3) {
              this._selectionService.setSelection(e3, t3, i3);
            }
            getSelection() {
              return this._selectionService ? this._selectionService.selectionText : "";
            }
            getSelectionPosition() {
              if (this._selectionService && this._selectionService.hasSelection)
                return { start: { x: this._selectionService.selectionStart[0], y: this._selectionService.selectionStart[1] }, end: { x: this._selectionService.selectionEnd[0], y: this._selectionService.selectionEnd[1] } };
            }
            clearSelection() {
              this._selectionService?.clearSelection();
            }
            selectAll() {
              this._selectionService?.selectAll();
            }
            selectLines(e3, t3) {
              this._selectionService?.selectLines(e3, t3);
            }
            _keyDown(e3) {
              if (this._keyDownHandled = false, this._keyDownSeen = true, this._customKeyEventHandler && false === this._customKeyEventHandler(e3))
                return false;
              const t3 = this.browser.isMac && this.options.macOptionIsMeta && e3.altKey;
              if (!t3 && !this._compositionHelper.keydown(e3))
                return this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), false;
              t3 || "Dead" !== e3.key && "AltGraph" !== e3.key || (this._unprocessedDeadKey = true);
              const i3 = (0, R.evaluateKeyboardEvent)(e3, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
              if (this.updateCursorStyle(e3), 3 === i3.type || 2 === i3.type) {
                const t4 = this.rows - 1;
                return this.scrollLines(2 === i3.type ? -t4 : t4), this.cancel(e3, true);
              }
              return 1 === i3.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e3) || (i3.cancel && this.cancel(e3, true), !i3.key || !!(e3.key && !e3.ctrlKey && !e3.altKey && !e3.metaKey && 1 === e3.key.length && e3.key.charCodeAt(0) >= 65 && e3.key.charCodeAt(0) <= 90) || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = false, true) : (i3.key !== D.C0.ETX && i3.key !== D.C0.CR || (this.textarea.value = ""), this._onKey.fire({ key: i3.key, domEvent: e3 }), this._showCursor(), this.coreService.triggerDataEvent(i3.key, true), !this.optionsService.rawOptions.screenReaderMode || e3.altKey || e3.ctrlKey ? this.cancel(e3, true) : void (this._keyDownHandled = true))));
            }
            _isThirdLevelShift(e3, t3) {
              const i3 = e3.isMac && !this.options.macOptionIsMeta && t3.altKey && !t3.ctrlKey && !t3.metaKey || e3.isWindows && t3.altKey && t3.ctrlKey && !t3.metaKey || e3.isWindows && t3.getModifierState("AltGraph");
              return "keypress" === t3.type ? i3 : i3 && (!t3.keyCode || t3.keyCode > 47);
            }
            _keyUp(e3) {
              this._keyDownSeen = false, this._customKeyEventHandler && false === this._customKeyEventHandler(e3) || (function(e4) {
                return 16 === e4.keyCode || 17 === e4.keyCode || 18 === e4.keyCode;
              }(e3) || this.focus(), this.updateCursorStyle(e3), this._keyPressHandled = false);
            }
            _keyPress(e3) {
              let t3;
              if (this._keyPressHandled = false, this._keyDownHandled)
                return false;
              if (this._customKeyEventHandler && false === this._customKeyEventHandler(e3))
                return false;
              if (this.cancel(e3), e3.charCode)
                t3 = e3.charCode;
              else if (null === e3.which || void 0 === e3.which)
                t3 = e3.keyCode;
              else {
                if (0 === e3.which || 0 === e3.charCode)
                  return false;
                t3 = e3.which;
              }
              return !(!t3 || (e3.altKey || e3.ctrlKey || e3.metaKey) && !this._isThirdLevelShift(this.browser, e3) || (t3 = String.fromCharCode(t3), this._onKey.fire({ key: t3, domEvent: e3 }), this._showCursor(), this.coreService.triggerDataEvent(t3, true), this._keyPressHandled = true, this._unprocessedDeadKey = false, 0));
            }
            _inputEvent(e3) {
              if (e3.data && "insertText" === e3.inputType && (!e3.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
                if (this._keyPressHandled)
                  return false;
                this._unprocessedDeadKey = false;
                const t3 = e3.data;
                return this.coreService.triggerDataEvent(t3, true), this.cancel(e3), true;
              }
              return false;
            }
            resize(e3, t3) {
              e3 !== this.cols || t3 !== this.rows ? super.resize(e3, t3) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
            }
            _afterResize(e3, t3) {
              this._charSizeService?.measure(), this.viewport?.syncScrollArea(true);
            }
            clear() {
              if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                for (let e3 = 1; e3 < this.rows; e3++)
                  this.buffer.lines.push(this.buffer.getBlankLine(L.DEFAULT_ATTR_DATA));
                this._onScroll.fire({ position: this.buffer.ydisp, source: 0 }), this.viewport?.reset(), this.refresh(0, this.rows - 1);
              }
            }
            reset() {
              this.options.rows = this.rows, this.options.cols = this.cols;
              const e3 = this._customKeyEventHandler;
              this._setup(), super.reset(), this._selectionService?.reset(), this._decorationService.reset(), this.viewport?.reset(), this._customKeyEventHandler = e3, this.refresh(0, this.rows - 1);
            }
            clearTextureAtlas() {
              this._renderService?.clearTextureAtlas();
            }
            _reportFocus() {
              this.element?.classList.contains("focus") ? this.coreService.triggerDataEvent(D.C0.ESC + "[I") : this.coreService.triggerDataEvent(D.C0.ESC + "[O");
            }
            _reportWindowsOptions(e3) {
              if (this._renderService)
                switch (e3) {
                  case T.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                    const e4 = this._renderService.dimensions.css.canvas.width.toFixed(0), t3 = this._renderService.dimensions.css.canvas.height.toFixed(0);
                    this.coreService.triggerDataEvent(`${D.C0.ESC}[4;${t3};${e4}t`);
                    break;
                  case T.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                    const i3 = this._renderService.dimensions.css.cell.width.toFixed(0), s3 = this._renderService.dimensions.css.cell.height.toFixed(0);
                    this.coreService.triggerDataEvent(`${D.C0.ESC}[6;${s3};${i3}t`);
                }
            }
            cancel(e3, t3) {
              if (this.options.cancelEvents || t3)
                return e3.preventDefault(), e3.stopPropagation(), false;
            }
          }
          t2.Terminal = O;
        }, 9924: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.TimeBasedDebouncer = void 0, t2.TimeBasedDebouncer = class {
            constructor(e3, t3 = 1e3) {
              this._renderCallback = e3, this._debounceThresholdMS = t3, this._lastRefreshMs = 0, this._additionalRefreshRequested = false;
            }
            dispose() {
              this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
            }
            refresh(e3, t3, i2) {
              this._rowCount = i2, e3 = void 0 !== e3 ? e3 : 0, t3 = void 0 !== t3 ? t3 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e3) : e3, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t3) : t3;
              const s2 = Date.now();
              if (s2 - this._lastRefreshMs >= this._debounceThresholdMS)
                this._lastRefreshMs = s2, this._innerRefresh();
              else if (!this._additionalRefreshRequested) {
                const e4 = s2 - this._lastRefreshMs, t4 = this._debounceThresholdMS - e4;
                this._additionalRefreshRequested = true, this._refreshTimeoutID = window.setTimeout(() => {
                  this._lastRefreshMs = Date.now(), this._innerRefresh(), this._additionalRefreshRequested = false, this._refreshTimeoutID = void 0;
                }, t4);
              }
            }
            _innerRefresh() {
              if (void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount)
                return;
              const e3 = Math.max(this._rowStart, 0), t3 = Math.min(this._rowEnd, this._rowCount - 1);
              this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e3, t3);
            }
          };
        }, 1680: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Viewport = void 0;
          const n = i2(3656), o = i2(4725), a = i2(8460), h = i2(844), c = i2(2585);
          let l = t2.Viewport = class extends h.Disposable {
            constructor(e3, t3, i3, s3, r2, o2, h2, c2) {
              super(), this._viewportElement = e3, this._scrollArea = t3, this._bufferService = i3, this._optionsService = s3, this._charSizeService = r2, this._renderService = o2, this._coreBrowserService = h2, this.scrollBarWidth = 0, this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._wheelPartialScroll = 0, this._refreshAnimationFrame = null, this._ignoreNextScrollEvent = false, this._smoothScrollState = { startTime: 0, origin: -1, target: -1 }, this._onRequestScrollLines = this.register(new a.EventEmitter()), this.onRequestScrollLines = this._onRequestScrollLines.event, this.scrollBarWidth = this._viewportElement.offsetWidth - this._scrollArea.offsetWidth || 15, this.register((0, n.addDisposableDomListener)(this._viewportElement, "scroll", this._handleScroll.bind(this))), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e4) => this._activeBuffer = e4.activeBuffer)), this._renderDimensions = this._renderService.dimensions, this.register(this._renderService.onDimensionsChange((e4) => this._renderDimensions = e4)), this._handleThemeChange(c2.colors), this.register(c2.onChangeColors((e4) => this._handleThemeChange(e4))), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.syncScrollArea())), setTimeout(() => this.syncScrollArea());
            }
            _handleThemeChange(e3) {
              this._viewportElement.style.backgroundColor = e3.background.css;
            }
            reset() {
              this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._coreBrowserService.window.requestAnimationFrame(() => this.syncScrollArea());
            }
            _refresh(e3) {
              if (e3)
                return this._innerRefresh(), void (null !== this._refreshAnimationFrame && this._coreBrowserService.window.cancelAnimationFrame(this._refreshAnimationFrame));
              null === this._refreshAnimationFrame && (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
            }
            _innerRefresh() {
              if (this._charSizeService.height > 0) {
                this._currentRowHeight = this._renderDimensions.device.cell.height / this._coreBrowserService.dpr, this._currentDeviceCellHeight = this._renderDimensions.device.cell.height, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                const e4 = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderDimensions.css.canvas.height);
                this._lastRecordedBufferHeight !== e4 && (this._lastRecordedBufferHeight = e4, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
              }
              const e3 = this._bufferService.buffer.ydisp * this._currentRowHeight;
              this._viewportElement.scrollTop !== e3 && (this._ignoreNextScrollEvent = true, this._viewportElement.scrollTop = e3), this._refreshAnimationFrame = null;
            }
            syncScrollArea(e3 = false) {
              if (this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length)
                return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e3);
              this._lastRecordedViewportHeight === this._renderService.dimensions.css.canvas.height && this._lastScrollTop === this._activeBuffer.ydisp * this._currentRowHeight && this._renderDimensions.device.cell.height === this._currentDeviceCellHeight || this._refresh(e3);
            }
            _handleScroll(e3) {
              if (this._lastScrollTop = this._viewportElement.scrollTop, !this._viewportElement.offsetParent)
                return;
              if (this._ignoreNextScrollEvent)
                return this._ignoreNextScrollEvent = false, void this._onRequestScrollLines.fire({ amount: 0, suppressScrollEvent: true });
              const t3 = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
              this._onRequestScrollLines.fire({ amount: t3, suppressScrollEvent: true });
            }
            _smoothScroll() {
              if (this._isDisposed || -1 === this._smoothScrollState.origin || -1 === this._smoothScrollState.target)
                return;
              const e3 = this._smoothScrollPercent();
              this._viewportElement.scrollTop = this._smoothScrollState.origin + Math.round(e3 * (this._smoothScrollState.target - this._smoothScrollState.origin)), e3 < 1 ? this._coreBrowserService.window.requestAnimationFrame(() => this._smoothScroll()) : this._clearSmoothScrollState();
            }
            _smoothScrollPercent() {
              return this._optionsService.rawOptions.smoothScrollDuration && this._smoothScrollState.startTime ? Math.max(Math.min((Date.now() - this._smoothScrollState.startTime) / this._optionsService.rawOptions.smoothScrollDuration, 1), 0) : 1;
            }
            _clearSmoothScrollState() {
              this._smoothScrollState.startTime = 0, this._smoothScrollState.origin = -1, this._smoothScrollState.target = -1;
            }
            _bubbleScroll(e3, t3) {
              const i3 = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
              return !(t3 < 0 && 0 !== this._viewportElement.scrollTop || t3 > 0 && i3 < this._lastRecordedBufferHeight) || (e3.cancelable && e3.preventDefault(), false);
            }
            handleWheel(e3) {
              const t3 = this._getPixelsScrolled(e3);
              return 0 !== t3 && (this._optionsService.rawOptions.smoothScrollDuration ? (this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, -1 === this._smoothScrollState.target ? this._smoothScrollState.target = this._viewportElement.scrollTop + t3 : this._smoothScrollState.target += t3, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState()) : this._viewportElement.scrollTop += t3, this._bubbleScroll(e3, t3));
            }
            scrollLines(e3) {
              if (0 !== e3)
                if (this._optionsService.rawOptions.smoothScrollDuration) {
                  const t3 = e3 * this._currentRowHeight;
                  this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, this._smoothScrollState.target = this._smoothScrollState.origin + t3, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState();
                } else
                  this._onRequestScrollLines.fire({ amount: e3, suppressScrollEvent: false });
            }
            _getPixelsScrolled(e3) {
              if (0 === e3.deltaY || e3.shiftKey)
                return 0;
              let t3 = this._applyScrollModifier(e3.deltaY, e3);
              return e3.deltaMode === WheelEvent.DOM_DELTA_LINE ? t3 *= this._currentRowHeight : e3.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t3 *= this._currentRowHeight * this._bufferService.rows), t3;
            }
            getBufferElements(e3, t3) {
              let i3, s3 = "";
              const r2 = [], n2 = t3 ?? this._bufferService.buffer.lines.length, o2 = this._bufferService.buffer.lines;
              for (let t4 = e3; t4 < n2; t4++) {
                const e4 = o2.get(t4);
                if (!e4)
                  continue;
                const n3 = o2.get(t4 + 1)?.isWrapped;
                if (s3 += e4.translateToString(!n3), !n3 || t4 === o2.length - 1) {
                  const e5 = document.createElement("div");
                  e5.textContent = s3, r2.push(e5), s3.length > 0 && (i3 = e5), s3 = "";
                }
              }
              return { bufferElements: r2, cursorElement: i3 };
            }
            getLinesScrolled(e3) {
              if (0 === e3.deltaY || e3.shiftKey)
                return 0;
              let t3 = this._applyScrollModifier(e3.deltaY, e3);
              return e3.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t3 /= this._currentRowHeight + 0, this._wheelPartialScroll += t3, t3 = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e3.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t3 *= this._bufferService.rows), t3;
            }
            _applyScrollModifier(e3, t3) {
              const i3 = this._optionsService.rawOptions.fastScrollModifier;
              return "alt" === i3 && t3.altKey || "ctrl" === i3 && t3.ctrlKey || "shift" === i3 && t3.shiftKey ? e3 * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e3 * this._optionsService.rawOptions.scrollSensitivity;
            }
            handleTouchStart(e3) {
              this._lastTouchY = e3.touches[0].pageY;
            }
            handleTouchMove(e3) {
              const t3 = this._lastTouchY - e3.touches[0].pageY;
              return this._lastTouchY = e3.touches[0].pageY, 0 !== t3 && (this._viewportElement.scrollTop += t3, this._bubbleScroll(e3, t3));
            }
          };
          t2.Viewport = l = s2([r(2, c.IBufferService), r(3, c.IOptionsService), r(4, o.ICharSizeService), r(5, o.IRenderService), r(6, o.ICoreBrowserService), r(7, o.IThemeService)], l);
        }, 3107: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferDecorationRenderer = void 0;
          const n = i2(4725), o = i2(844), a = i2(2585);
          let h = t2.BufferDecorationRenderer = class extends o.Disposable {
            constructor(e3, t3, i3, s3, r2) {
              super(), this._screenElement = e3, this._bufferService = t3, this._coreBrowserService = i3, this._decorationService = s3, this._renderService = r2, this._decorationElements = /* @__PURE__ */ new Map(), this._altBufferIsActive = false, this._dimensionsChanged = false, this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), this._screenElement.appendChild(this._container), this.register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations())), this.register(this._renderService.onDimensionsChange(() => {
                this._dimensionsChanged = true, this._queueRefresh();
              })), this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
                this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
              })), this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh())), this.register(this._decorationService.onDecorationRemoved((e4) => this._removeDecoration(e4))), this.register((0, o.toDisposable)(() => {
                this._container.remove(), this._decorationElements.clear();
              }));
            }
            _queueRefresh() {
              void 0 === this._animationFrame && (this._animationFrame = this._renderService.addRefreshCallback(() => {
                this._doRefreshDecorations(), this._animationFrame = void 0;
              }));
            }
            _doRefreshDecorations() {
              for (const e3 of this._decorationService.decorations)
                this._renderDecoration(e3);
              this._dimensionsChanged = false;
            }
            _renderDecoration(e3) {
              this._refreshStyle(e3), this._dimensionsChanged && this._refreshXPosition(e3);
            }
            _createElement(e3) {
              const t3 = this._coreBrowserService.mainDocument.createElement("div");
              t3.classList.add("xterm-decoration"), t3.classList.toggle("xterm-decoration-top-layer", "top" === e3?.options?.layer), t3.style.width = `${Math.round((e3.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, t3.style.height = (e3.options.height || 1) * this._renderService.dimensions.css.cell.height + "px", t3.style.top = (e3.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height + "px", t3.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
              const i3 = e3.options.x ?? 0;
              return i3 && i3 > this._bufferService.cols && (t3.style.display = "none"), this._refreshXPosition(e3, t3), t3;
            }
            _refreshStyle(e3) {
              const t3 = e3.marker.line - this._bufferService.buffers.active.ydisp;
              if (t3 < 0 || t3 >= this._bufferService.rows)
                e3.element && (e3.element.style.display = "none", e3.onRenderEmitter.fire(e3.element));
              else {
                let i3 = this._decorationElements.get(e3);
                i3 || (i3 = this._createElement(e3), e3.element = i3, this._decorationElements.set(e3, i3), this._container.appendChild(i3), e3.onDispose(() => {
                  this._decorationElements.delete(e3), i3.remove();
                })), i3.style.top = t3 * this._renderService.dimensions.css.cell.height + "px", i3.style.display = this._altBufferIsActive ? "none" : "block", e3.onRenderEmitter.fire(i3);
              }
            }
            _refreshXPosition(e3, t3 = e3.element) {
              if (!t3)
                return;
              const i3 = e3.options.x ?? 0;
              "right" === (e3.options.anchor || "left") ? t3.style.right = i3 ? i3 * this._renderService.dimensions.css.cell.width + "px" : "" : t3.style.left = i3 ? i3 * this._renderService.dimensions.css.cell.width + "px" : "";
            }
            _removeDecoration(e3) {
              this._decorationElements.get(e3)?.remove(), this._decorationElements.delete(e3), e3.dispose();
            }
          };
          t2.BufferDecorationRenderer = h = s2([r(1, a.IBufferService), r(2, n.ICoreBrowserService), r(3, a.IDecorationService), r(4, n.IRenderService)], h);
        }, 5871: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorZoneStore = void 0, t2.ColorZoneStore = class {
            constructor() {
              this._zones = [], this._zonePool = [], this._zonePoolIndex = 0, this._linePadding = { full: 0, left: 0, center: 0, right: 0 };
            }
            get zones() {
              return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
            }
            clear() {
              this._zones.length = 0, this._zonePoolIndex = 0;
            }
            addDecoration(e3) {
              if (e3.options.overviewRulerOptions) {
                for (const t3 of this._zones)
                  if (t3.color === e3.options.overviewRulerOptions.color && t3.position === e3.options.overviewRulerOptions.position) {
                    if (this._lineIntersectsZone(t3, e3.marker.line))
                      return;
                    if (this._lineAdjacentToZone(t3, e3.marker.line, e3.options.overviewRulerOptions.position))
                      return void this._addLineToZone(t3, e3.marker.line);
                  }
                if (this._zonePoolIndex < this._zonePool.length)
                  return this._zonePool[this._zonePoolIndex].color = e3.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = e3.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = e3.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = e3.marker.line, void this._zones.push(this._zonePool[this._zonePoolIndex++]);
                this._zones.push({ color: e3.options.overviewRulerOptions.color, position: e3.options.overviewRulerOptions.position, startBufferLine: e3.marker.line, endBufferLine: e3.marker.line }), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
              }
            }
            setPadding(e3) {
              this._linePadding = e3;
            }
            _lineIntersectsZone(e3, t3) {
              return t3 >= e3.startBufferLine && t3 <= e3.endBufferLine;
            }
            _lineAdjacentToZone(e3, t3, i2) {
              return t3 >= e3.startBufferLine - this._linePadding[i2 || "full"] && t3 <= e3.endBufferLine + this._linePadding[i2 || "full"];
            }
            _addLineToZone(e3, t3) {
              e3.startBufferLine = Math.min(e3.startBufferLine, t3), e3.endBufferLine = Math.max(e3.endBufferLine, t3);
            }
          };
        }, 5744: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.OverviewRulerRenderer = void 0;
          const n = i2(5871), o = i2(4725), a = i2(844), h = i2(2585), c = { full: 0, left: 0, center: 0, right: 0 }, l = { full: 0, left: 0, center: 0, right: 0 }, d = { full: 0, left: 0, center: 0, right: 0 };
          let _ = t2.OverviewRulerRenderer = class extends a.Disposable {
            get _width() {
              return this._optionsService.options.overviewRulerWidth || 0;
            }
            constructor(e3, t3, i3, s3, r2, o2, h2) {
              super(), this._viewportElement = e3, this._screenElement = t3, this._bufferService = i3, this._decorationService = s3, this._renderService = r2, this._optionsService = o2, this._coreBrowserService = h2, this._colorZoneStore = new n.ColorZoneStore(), this._shouldUpdateDimensions = true, this._shouldUpdateAnchor = true, this._lastKnownBufferLength = 0, this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"), this._canvas.classList.add("xterm-decoration-overview-ruler"), this._refreshCanvasDimensions(), this._viewportElement.parentElement?.insertBefore(this._canvas, this._viewportElement);
              const c2 = this._canvas.getContext("2d");
              if (!c2)
                throw new Error("Ctx cannot be null");
              this._ctx = c2, this._registerDecorationListeners(), this._registerBufferChangeListeners(), this._registerDimensionChangeListeners(), this.register((0, a.toDisposable)(() => {
                this._canvas?.remove();
              }));
            }
            _registerDecorationListeners() {
              this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh(void 0, true))), this.register(this._decorationService.onDecorationRemoved(() => this._queueRefresh(void 0, true)));
            }
            _registerBufferChangeListeners() {
              this.register(this._renderService.onRenderedViewportChange(() => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
                this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
              })), this.register(this._bufferService.onScroll(() => {
                this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length && (this._refreshDrawHeightConstants(), this._refreshColorZonePadding());
              }));
            }
            _registerDimensionChangeListeners() {
              this.register(this._renderService.onRender(() => {
                this._containerHeight && this._containerHeight === this._screenElement.clientHeight || (this._queueRefresh(true), this._containerHeight = this._screenElement.clientHeight);
              })), this.register(this._optionsService.onSpecificOptionChange("overviewRulerWidth", () => this._queueRefresh(true))), this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh(true))), this._queueRefresh(true);
            }
            _refreshDrawConstants() {
              const e3 = Math.floor(this._canvas.width / 3), t3 = Math.ceil(this._canvas.width / 3);
              l.full = this._canvas.width, l.left = e3, l.center = t3, l.right = e3, this._refreshDrawHeightConstants(), d.full = 0, d.left = 0, d.center = l.left, d.right = l.left + l.center;
            }
            _refreshDrawHeightConstants() {
              c.full = Math.round(2 * this._coreBrowserService.dpr);
              const e3 = this._canvas.height / this._bufferService.buffer.lines.length, t3 = Math.round(Math.max(Math.min(e3, 12), 6) * this._coreBrowserService.dpr);
              c.left = t3, c.center = t3, c.right = t3;
            }
            _refreshColorZonePadding() {
              this._colorZoneStore.setPadding({ full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.full), left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.left), center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.center), right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.right) }), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
            }
            _refreshCanvasDimensions() {
              this._canvas.style.width = `${this._width}px`, this._canvas.width = Math.round(this._width * this._coreBrowserService.dpr), this._canvas.style.height = `${this._screenElement.clientHeight}px`, this._canvas.height = Math.round(this._screenElement.clientHeight * this._coreBrowserService.dpr), this._refreshDrawConstants(), this._refreshColorZonePadding();
            }
            _refreshDecorations() {
              this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
              for (const e4 of this._decorationService.decorations)
                this._colorZoneStore.addDecoration(e4);
              this._ctx.lineWidth = 1;
              const e3 = this._colorZoneStore.zones;
              for (const t3 of e3)
                "full" !== t3.position && this._renderColorZone(t3);
              for (const t3 of e3)
                "full" === t3.position && this._renderColorZone(t3);
              this._shouldUpdateDimensions = false, this._shouldUpdateAnchor = false;
            }
            _renderColorZone(e3) {
              this._ctx.fillStyle = e3.color, this._ctx.fillRect(d[e3.position || "full"], Math.round((this._canvas.height - 1) * (e3.startBufferLine / this._bufferService.buffers.active.lines.length) - c[e3.position || "full"] / 2), l[e3.position || "full"], Math.round((this._canvas.height - 1) * ((e3.endBufferLine - e3.startBufferLine) / this._bufferService.buffers.active.lines.length) + c[e3.position || "full"]));
            }
            _queueRefresh(e3, t3) {
              this._shouldUpdateDimensions = e3 || this._shouldUpdateDimensions, this._shouldUpdateAnchor = t3 || this._shouldUpdateAnchor, void 0 === this._animationFrame && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                this._refreshDecorations(), this._animationFrame = void 0;
              }));
            }
          };
          t2.OverviewRulerRenderer = _ = s2([r(2, h.IBufferService), r(3, h.IDecorationService), r(4, o.IRenderService), r(5, h.IOptionsService), r(6, o.ICoreBrowserService)], _);
        }, 2950: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CompositionHelper = void 0;
          const n = i2(4725), o = i2(2585), a = i2(2584);
          let h = t2.CompositionHelper = class {
            get isComposing() {
              return this._isComposing;
            }
            constructor(e3, t3, i3, s3, r2, n2) {
              this._textarea = e3, this._compositionView = t3, this._bufferService = i3, this._optionsService = s3, this._coreService = r2, this._renderService = n2, this._isComposing = false, this._isSendingComposition = false, this._compositionPosition = { start: 0, end: 0 }, this._dataAlreadySent = "";
            }
            compositionstart() {
              this._isComposing = true, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
            }
            compositionupdate(e3) {
              this._compositionView.textContent = e3.data, this.updateCompositionElements(), setTimeout(() => {
                this._compositionPosition.end = this._textarea.value.length;
              }, 0);
            }
            compositionend() {
              this._finalizeComposition(true);
            }
            keydown(e3) {
              if (this._isComposing || this._isSendingComposition) {
                if (229 === e3.keyCode)
                  return false;
                if (16 === e3.keyCode || 17 === e3.keyCode || 18 === e3.keyCode)
                  return false;
                this._finalizeComposition(false);
              }
              return 229 !== e3.keyCode || (this._handleAnyTextareaChanges(), false);
            }
            _finalizeComposition(e3) {
              if (this._compositionView.classList.remove("active"), this._isComposing = false, e3) {
                const e4 = { start: this._compositionPosition.start, end: this._compositionPosition.end };
                this._isSendingComposition = true, setTimeout(() => {
                  if (this._isSendingComposition) {
                    let t3;
                    this._isSendingComposition = false, e4.start += this._dataAlreadySent.length, t3 = this._isComposing ? this._textarea.value.substring(e4.start, e4.end) : this._textarea.value.substring(e4.start), t3.length > 0 && this._coreService.triggerDataEvent(t3, true);
                  }
                }, 0);
              } else {
                this._isSendingComposition = false;
                const e4 = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                this._coreService.triggerDataEvent(e4, true);
              }
            }
            _handleAnyTextareaChanges() {
              const e3 = this._textarea.value;
              setTimeout(() => {
                if (!this._isComposing) {
                  const t3 = this._textarea.value, i3 = t3.replace(e3, "");
                  this._dataAlreadySent = i3, t3.length > e3.length ? this._coreService.triggerDataEvent(i3, true) : t3.length < e3.length ? this._coreService.triggerDataEvent(`${a.C0.DEL}`, true) : t3.length === e3.length && t3 !== e3 && this._coreService.triggerDataEvent(t3, true);
                }
              }, 0);
            }
            updateCompositionElements(e3) {
              if (this._isComposing) {
                if (this._bufferService.buffer.isCursorInViewport) {
                  const e4 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), t3 = this._renderService.dimensions.css.cell.height, i3 = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height, s3 = e4 * this._renderService.dimensions.css.cell.width;
                  this._compositionView.style.left = s3 + "px", this._compositionView.style.top = i3 + "px", this._compositionView.style.height = t3 + "px", this._compositionView.style.lineHeight = t3 + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                  const r2 = this._compositionView.getBoundingClientRect();
                  this._textarea.style.left = s3 + "px", this._textarea.style.top = i3 + "px", this._textarea.style.width = Math.max(r2.width, 1) + "px", this._textarea.style.height = Math.max(r2.height, 1) + "px", this._textarea.style.lineHeight = r2.height + "px";
                }
                e3 || setTimeout(() => this.updateCompositionElements(true), 0);
              }
            }
          };
          t2.CompositionHelper = h = s2([r(2, o.IBufferService), r(3, o.IOptionsService), r(4, o.ICoreService), r(5, n.IRenderService)], h);
        }, 9806: (e2, t2) => {
          function i2(e3, t3, i3) {
            const s2 = i3.getBoundingClientRect(), r = e3.getComputedStyle(i3), n = parseInt(r.getPropertyValue("padding-left")), o = parseInt(r.getPropertyValue("padding-top"));
            return [t3.clientX - s2.left - n, t3.clientY - s2.top - o];
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getCoords = t2.getCoordsRelativeToElement = void 0, t2.getCoordsRelativeToElement = i2, t2.getCoords = function(e3, t3, s2, r, n, o, a, h, c) {
            if (!o)
              return;
            const l = i2(e3, t3, s2);
            return l ? (l[0] = Math.ceil((l[0] + (c ? a / 2 : 0)) / a), l[1] = Math.ceil(l[1] / h), l[0] = Math.min(Math.max(l[0], 1), r + (c ? 1 : 0)), l[1] = Math.min(Math.max(l[1], 1), n), l) : void 0;
          };
        }, 9504: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.moveToCellSequence = void 0;
          const s2 = i2(2584);
          function r(e3, t3, i3, s3) {
            const r2 = e3 - n(e3, i3), a2 = t3 - n(t3, i3), l = Math.abs(r2 - a2) - function(e4, t4, i4) {
              let s4 = 0;
              const r3 = e4 - n(e4, i4), a3 = t4 - n(t4, i4);
              for (let n2 = 0; n2 < Math.abs(r3 - a3); n2++) {
                const a4 = "A" === o(e4, t4) ? -1 : 1, h2 = i4.buffer.lines.get(r3 + a4 * n2);
                h2?.isWrapped && s4++;
              }
              return s4;
            }(e3, t3, i3);
            return c(l, h(o(e3, t3), s3));
          }
          function n(e3, t3) {
            let i3 = 0, s3 = t3.buffer.lines.get(e3), r2 = s3?.isWrapped;
            for (; r2 && e3 >= 0 && e3 < t3.rows; )
              i3++, s3 = t3.buffer.lines.get(--e3), r2 = s3?.isWrapped;
            return i3;
          }
          function o(e3, t3) {
            return e3 > t3 ? "A" : "B";
          }
          function a(e3, t3, i3, s3, r2, n2) {
            let o2 = e3, a2 = t3, h2 = "";
            for (; o2 !== i3 || a2 !== s3; )
              o2 += r2 ? 1 : -1, r2 && o2 > n2.cols - 1 ? (h2 += n2.buffer.translateBufferLineToString(a2, false, e3, o2), o2 = 0, e3 = 0, a2++) : !r2 && o2 < 0 && (h2 += n2.buffer.translateBufferLineToString(a2, false, 0, e3 + 1), o2 = n2.cols - 1, e3 = o2, a2--);
            return h2 + n2.buffer.translateBufferLineToString(a2, false, e3, o2);
          }
          function h(e3, t3) {
            const i3 = t3 ? "O" : "[";
            return s2.C0.ESC + i3 + e3;
          }
          function c(e3, t3) {
            e3 = Math.floor(e3);
            let i3 = "";
            for (let s3 = 0; s3 < e3; s3++)
              i3 += t3;
            return i3;
          }
          t2.moveToCellSequence = function(e3, t3, i3, s3) {
            const o2 = i3.buffer.x, l = i3.buffer.y;
            if (!i3.buffer.hasScrollback)
              return function(e4, t4, i4, s4, o3, l2) {
                return 0 === r(t4, s4, o3, l2).length ? "" : c(a(e4, t4, e4, t4 - n(t4, o3), false, o3).length, h("D", l2));
              }(o2, l, 0, t3, i3, s3) + r(l, t3, i3, s3) + function(e4, t4, i4, s4, o3, l2) {
                let d2;
                d2 = r(t4, s4, o3, l2).length > 0 ? s4 - n(s4, o3) : t4;
                const _2 = s4, u = function(e5, t5, i5, s5, o4, a2) {
                  let h2;
                  return h2 = r(i5, s5, o4, a2).length > 0 ? s5 - n(s5, o4) : t5, e5 < i5 && h2 <= s5 || e5 >= i5 && h2 < s5 ? "C" : "D";
                }(e4, t4, i4, s4, o3, l2);
                return c(a(e4, d2, i4, _2, "C" === u, o3).length, h(u, l2));
              }(o2, l, e3, t3, i3, s3);
            let d;
            if (l === t3)
              return d = o2 > e3 ? "D" : "C", c(Math.abs(o2 - e3), h(d, s3));
            d = l > t3 ? "D" : "C";
            const _ = Math.abs(l - t3);
            return c(function(e4, t4) {
              return t4.cols - e4;
            }(l > t3 ? e3 : o2, i3) + (_ - 1) * i3.cols + 1 + ((l > t3 ? o2 : e3) - 1), h(d, s3));
          };
        }, 1296: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DomRenderer = void 0;
          const n = i2(3787), o = i2(2550), a = i2(2223), h = i2(6171), c = i2(4725), l = i2(8055), d = i2(8460), _ = i2(844), u = i2(2585), f = "xterm-dom-renderer-owner-", v = "xterm-rows", g = "xterm-fg-", p = "xterm-bg-", m = "xterm-focus", S = "xterm-selection";
          let C = 1, b = t2.DomRenderer = class extends _.Disposable {
            constructor(e3, t3, i3, s3, r2, a2, c2, l2, u2, g2, p2, m2) {
              super(), this._document = e3, this._element = t3, this._screenElement = i3, this._viewportElement = s3, this._helperContainer = r2, this._linkifier2 = a2, this._charSizeService = l2, this._optionsService = u2, this._bufferService = g2, this._coreBrowserService = p2, this._themeService = m2, this._terminalClass = C++, this._rowElements = [], this.onRequestRedraw = this.register(new d.EventEmitter()).event, this._rowContainer = this._document.createElement("div"), this._rowContainer.classList.add(v), this._rowContainer.style.lineHeight = "normal", this._rowContainer.setAttribute("aria-hidden", "true"), this._refreshRowElements(this._bufferService.cols, this._bufferService.rows), this._selectionContainer = this._document.createElement("div"), this._selectionContainer.classList.add(S), this._selectionContainer.setAttribute("aria-hidden", "true"), this.dimensions = (0, h.createRenderDimensions)(), this._updateDimensions(), this.register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this.register(this._themeService.onChangeColors((e4) => this._injectCss(e4))), this._injectCss(this._themeService.colors), this._rowFactory = c2.createInstance(n.DomRendererRowFactory, document), this._element.classList.add(f + this._terminalClass), this._screenElement.appendChild(this._rowContainer), this._screenElement.appendChild(this._selectionContainer), this.register(this._linkifier2.onShowLinkUnderline((e4) => this._handleLinkHover(e4))), this.register(this._linkifier2.onHideLinkUnderline((e4) => this._handleLinkLeave(e4))), this.register((0, _.toDisposable)(() => {
                this._element.classList.remove(f + this._terminalClass), this._rowContainer.remove(), this._selectionContainer.remove(), this._widthCache.dispose(), this._themeStyleElement.remove(), this._dimensionsStyleElement.remove();
              })), this._widthCache = new o.WidthCache(this._document, this._helperContainer), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
            }
            _updateDimensions() {
              const e3 = this._coreBrowserService.dpr;
              this.dimensions.device.char.width = this._charSizeService.width * e3, this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e3), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.left = 0, this.dimensions.device.char.top = 0, this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols, this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows, this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e3), this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e3), this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols, this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
              for (const e4 of this._rowElements)
                e4.style.width = `${this.dimensions.css.canvas.width}px`, e4.style.height = `${this.dimensions.css.cell.height}px`, e4.style.lineHeight = `${this.dimensions.css.cell.height}px`, e4.style.overflow = "hidden";
              this._dimensionsStyleElement || (this._dimensionsStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
              const t3 = `${this._terminalSelector} .${v} span { display: inline-block; height: 100%; vertical-align: top;}`;
              this._dimensionsStyleElement.textContent = t3, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
            }
            _injectCss(e3) {
              this._themeStyleElement || (this._themeStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
              let t3 = `${this._terminalSelector} .${v} { color: ${e3.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;
              t3 += `${this._terminalSelector} .${v} .xterm-dim { color: ${l.color.multiplyOpacity(e3.foreground, 0.5).css};}`, t3 += `${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`, t3 += "@keyframes blink_box_shadow_" + this._terminalClass + " { 50% {  border-bottom-style: hidden; }}", t3 += "@keyframes blink_block_" + this._terminalClass + ` { 0% {  background-color: ${e3.cursor.css};  color: ${e3.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${e3.cursor.css}; }}`, t3 += `${this._terminalSelector} .${v}.${m} .xterm-cursor.xterm-cursor-blink:not(.xterm-cursor-block) { animation: blink_box_shadow_` + this._terminalClass + ` 1s step-end infinite;}${this._terminalSelector} .${v}.${m} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: blink_block_` + this._terminalClass + ` 1s step-end infinite;}${this._terminalSelector} .${v} .xterm-cursor.xterm-cursor-block { background-color: ${e3.cursor.css} !important; color: ${e3.cursorAccent.css} !important;}${this._terminalSelector} .${v} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${e3.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${v} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e3.cursor.css} inset;}${this._terminalSelector} .${v} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${e3.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`, t3 += `${this._terminalSelector} .${S} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${S} div { position: absolute; background-color: ${e3.selectionBackgroundOpaque.css};}${this._terminalSelector} .${S} div { position: absolute; background-color: ${e3.selectionInactiveBackgroundOpaque.css};}`;
              for (const [i3, s3] of e3.ansi.entries())
                t3 += `${this._terminalSelector} .${g}${i3} { color: ${s3.css}; }${this._terminalSelector} .${g}${i3}.xterm-dim { color: ${l.color.multiplyOpacity(s3, 0.5).css}; }${this._terminalSelector} .${p}${i3} { background-color: ${s3.css}; }`;
              t3 += `${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR} { color: ${l.color.opaque(e3.background).css}; }${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR}.xterm-dim { color: ${l.color.multiplyOpacity(l.color.opaque(e3.background), 0.5).css}; }${this._terminalSelector} .${p}${a.INVERTED_DEFAULT_COLOR} { background-color: ${e3.foreground.css}; }`, this._themeStyleElement.textContent = t3;
            }
            _setDefaultSpacing() {
              const e3 = this.dimensions.css.cell.width - this._widthCache.get("W", false, false);
              this._rowContainer.style.letterSpacing = `${e3}px`, this._rowFactory.defaultSpacing = e3;
            }
            handleDevicePixelRatioChange() {
              this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
            }
            _refreshRowElements(e3, t3) {
              for (let e4 = this._rowElements.length; e4 <= t3; e4++) {
                const e5 = this._document.createElement("div");
                this._rowContainer.appendChild(e5), this._rowElements.push(e5);
              }
              for (; this._rowElements.length > t3; )
                this._rowContainer.removeChild(this._rowElements.pop());
            }
            handleResize(e3, t3) {
              this._refreshRowElements(e3, t3), this._updateDimensions();
            }
            handleCharSizeChanged() {
              this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
            }
            handleBlur() {
              this._rowContainer.classList.remove(m), this.renderRows(0, this._bufferService.rows - 1);
            }
            handleFocus() {
              this._rowContainer.classList.add(m), this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
            }
            handleSelectionChanged(e3, t3, i3) {
              if (this._selectionContainer.replaceChildren(), this._rowFactory.handleSelectionChanged(e3, t3, i3), this.renderRows(0, this._bufferService.rows - 1), !e3 || !t3)
                return;
              const s3 = e3[1] - this._bufferService.buffer.ydisp, r2 = t3[1] - this._bufferService.buffer.ydisp, n2 = Math.max(s3, 0), o2 = Math.min(r2, this._bufferService.rows - 1);
              if (n2 >= this._bufferService.rows || o2 < 0)
                return;
              const a2 = this._document.createDocumentFragment();
              if (i3) {
                const i4 = e3[0] > t3[0];
                a2.appendChild(this._createSelectionElement(n2, i4 ? t3[0] : e3[0], i4 ? e3[0] : t3[0], o2 - n2 + 1));
              } else {
                const i4 = s3 === n2 ? e3[0] : 0, h2 = n2 === r2 ? t3[0] : this._bufferService.cols;
                a2.appendChild(this._createSelectionElement(n2, i4, h2));
                const c2 = o2 - n2 - 1;
                if (a2.appendChild(this._createSelectionElement(n2 + 1, 0, this._bufferService.cols, c2)), n2 !== o2) {
                  const e4 = r2 === o2 ? t3[0] : this._bufferService.cols;
                  a2.appendChild(this._createSelectionElement(o2, 0, e4));
                }
              }
              this._selectionContainer.appendChild(a2);
            }
            _createSelectionElement(e3, t3, i3, s3 = 1) {
              const r2 = this._document.createElement("div");
              return r2.style.height = s3 * this.dimensions.css.cell.height + "px", r2.style.top = e3 * this.dimensions.css.cell.height + "px", r2.style.left = t3 * this.dimensions.css.cell.width + "px", r2.style.width = this.dimensions.css.cell.width * (i3 - t3) + "px", r2;
            }
            handleCursorMove() {
            }
            _handleOptionsChanged() {
              this._updateDimensions(), this._injectCss(this._themeService.colors), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
            }
            clear() {
              for (const e3 of this._rowElements)
                e3.replaceChildren();
            }
            renderRows(e3, t3) {
              const i3 = this._bufferService.buffer, s3 = i3.ybase + i3.y, r2 = Math.min(i3.x, this._bufferService.cols - 1), n2 = this._optionsService.rawOptions.cursorBlink, o2 = this._optionsService.rawOptions.cursorStyle, a2 = this._optionsService.rawOptions.cursorInactiveStyle;
              for (let h2 = e3; h2 <= t3; h2++) {
                const e4 = h2 + i3.ydisp, t4 = this._rowElements[h2], c2 = i3.lines.get(e4);
                if (!t4 || !c2)
                  break;
                t4.replaceChildren(...this._rowFactory.createRow(c2, e4, e4 === s3, o2, a2, r2, n2, this.dimensions.css.cell.width, this._widthCache, -1, -1));
              }
            }
            get _terminalSelector() {
              return `.${f}${this._terminalClass}`;
            }
            _handleLinkHover(e3) {
              this._setCellUnderline(e3.x1, e3.x2, e3.y1, e3.y2, e3.cols, true);
            }
            _handleLinkLeave(e3) {
              this._setCellUnderline(e3.x1, e3.x2, e3.y1, e3.y2, e3.cols, false);
            }
            _setCellUnderline(e3, t3, i3, s3, r2, n2) {
              i3 < 0 && (e3 = 0), s3 < 0 && (t3 = 0);
              const o2 = this._bufferService.rows - 1;
              i3 = Math.max(Math.min(i3, o2), 0), s3 = Math.max(Math.min(s3, o2), 0), r2 = Math.min(r2, this._bufferService.cols);
              const a2 = this._bufferService.buffer, h2 = a2.ybase + a2.y, c2 = Math.min(a2.x, r2 - 1), l2 = this._optionsService.rawOptions.cursorBlink, d2 = this._optionsService.rawOptions.cursorStyle, _2 = this._optionsService.rawOptions.cursorInactiveStyle;
              for (let o3 = i3; o3 <= s3; ++o3) {
                const u2 = o3 + a2.ydisp, f2 = this._rowElements[o3], v2 = a2.lines.get(u2);
                if (!f2 || !v2)
                  break;
                f2.replaceChildren(...this._rowFactory.createRow(v2, u2, u2 === h2, d2, _2, c2, l2, this.dimensions.css.cell.width, this._widthCache, n2 ? o3 === i3 ? e3 : 0 : -1, n2 ? (o3 === s3 ? t3 : r2) - 1 : -1));
              }
            }
          };
          t2.DomRenderer = b = s2([r(6, u.IInstantiationService), r(7, c.ICharSizeService), r(8, u.IOptionsService), r(9, u.IBufferService), r(10, c.ICoreBrowserService), r(11, c.IThemeService)], b);
        }, 3787: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DomRendererRowFactory = void 0;
          const n = i2(2223), o = i2(643), a = i2(511), h = i2(2585), c = i2(8055), l = i2(4725), d = i2(4269), _ = i2(6171), u = i2(3734);
          let f = t2.DomRendererRowFactory = class {
            constructor(e3, t3, i3, s3, r2, n2, o2) {
              this._document = e3, this._characterJoinerService = t3, this._optionsService = i3, this._coreBrowserService = s3, this._coreService = r2, this._decorationService = n2, this._themeService = o2, this._workCell = new a.CellData(), this._columnSelectMode = false, this.defaultSpacing = 0;
            }
            handleSelectionChanged(e3, t3, i3) {
              this._selectionStart = e3, this._selectionEnd = t3, this._columnSelectMode = i3;
            }
            createRow(e3, t3, i3, s3, r2, a2, h2, l2, _2, f2, g) {
              const p = [], m = this._characterJoinerService.getJoinedCharacters(t3), S = this._themeService.colors;
              let C, b = e3.getNoBgTrimmedLength();
              i3 && b < a2 + 1 && (b = a2 + 1);
              let y = 0, w = "", E = 0, k = 0, L = 0, D = false, R = 0, x = false, A = 0;
              const B = [], T = -1 !== f2 && -1 !== g;
              for (let M = 0; M < b; M++) {
                e3.loadCell(M, this._workCell);
                let b2 = this._workCell.getWidth();
                if (0 === b2)
                  continue;
                let O = false, P = M, I = this._workCell;
                if (m.length > 0 && M === m[0][0]) {
                  O = true;
                  const t4 = m.shift();
                  I = new d.JoinedCellData(this._workCell, e3.translateToString(true, t4[0], t4[1]), t4[1] - t4[0]), P = t4[1] - 1, b2 = I.getWidth();
                }
                const H = this._isCellInSelection(M, t3), F = i3 && M === a2, W = T && M >= f2 && M <= g;
                let U = false;
                this._decorationService.forEachDecorationAtCell(M, t3, void 0, (e4) => {
                  U = true;
                });
                let N = I.getChars() || o.WHITESPACE_CELL_CHAR;
                if (" " === N && (I.isUnderline() || I.isOverline()) && (N = "\xA0"), A = b2 * l2 - _2.get(N, I.isBold(), I.isItalic()), C) {
                  if (y && (H && x || !H && !x && I.bg === E) && (H && x && S.selectionForeground || I.fg === k) && I.extended.ext === L && W === D && A === R && !F && !O && !U) {
                    I.isInvisible() ? w += o.WHITESPACE_CELL_CHAR : w += N, y++;
                    continue;
                  }
                  y && (C.textContent = w), C = this._document.createElement("span"), y = 0, w = "";
                } else
                  C = this._document.createElement("span");
                if (E = I.bg, k = I.fg, L = I.extended.ext, D = W, R = A, x = H, O && a2 >= M && a2 <= P && (a2 = M), !this._coreService.isCursorHidden && F && this._coreService.isCursorInitialized) {
                  if (B.push("xterm-cursor"), this._coreBrowserService.isFocused)
                    h2 && B.push("xterm-cursor-blink"), B.push("bar" === s3 ? "xterm-cursor-bar" : "underline" === s3 ? "xterm-cursor-underline" : "xterm-cursor-block");
                  else if (r2)
                    switch (r2) {
                      case "outline":
                        B.push("xterm-cursor-outline");
                        break;
                      case "block":
                        B.push("xterm-cursor-block");
                        break;
                      case "bar":
                        B.push("xterm-cursor-bar");
                        break;
                      case "underline":
                        B.push("xterm-cursor-underline");
                    }
                }
                if (I.isBold() && B.push("xterm-bold"), I.isItalic() && B.push("xterm-italic"), I.isDim() && B.push("xterm-dim"), w = I.isInvisible() ? o.WHITESPACE_CELL_CHAR : I.getChars() || o.WHITESPACE_CELL_CHAR, I.isUnderline() && (B.push(`xterm-underline-${I.extended.underlineStyle}`), " " === w && (w = "\xA0"), !I.isUnderlineColorDefault()))
                  if (I.isUnderlineColorRGB())
                    C.style.textDecorationColor = `rgb(${u.AttributeData.toColorRGB(I.getUnderlineColor()).join(",")})`;
                  else {
                    let e4 = I.getUnderlineColor();
                    this._optionsService.rawOptions.drawBoldTextInBrightColors && I.isBold() && e4 < 8 && (e4 += 8), C.style.textDecorationColor = S.ansi[e4].css;
                  }
                I.isOverline() && (B.push("xterm-overline"), " " === w && (w = "\xA0")), I.isStrikethrough() && B.push("xterm-strikethrough"), W && (C.style.textDecoration = "underline");
                let $ = I.getFgColor(), j = I.getFgColorMode(), z = I.getBgColor(), K = I.getBgColorMode();
                const q = !!I.isInverse();
                if (q) {
                  const e4 = $;
                  $ = z, z = e4;
                  const t4 = j;
                  j = K, K = t4;
                }
                let V, G, X, J = false;
                switch (this._decorationService.forEachDecorationAtCell(M, t3, void 0, (e4) => {
                  "top" !== e4.options.layer && J || (e4.backgroundColorRGB && (K = 50331648, z = e4.backgroundColorRGB.rgba >> 8 & 16777215, V = e4.backgroundColorRGB), e4.foregroundColorRGB && (j = 50331648, $ = e4.foregroundColorRGB.rgba >> 8 & 16777215, G = e4.foregroundColorRGB), J = "top" === e4.options.layer);
                }), !J && H && (V = this._coreBrowserService.isFocused ? S.selectionBackgroundOpaque : S.selectionInactiveBackgroundOpaque, z = V.rgba >> 8 & 16777215, K = 50331648, J = true, S.selectionForeground && (j = 50331648, $ = S.selectionForeground.rgba >> 8 & 16777215, G = S.selectionForeground)), J && B.push("xterm-decoration-top"), K) {
                  case 16777216:
                  case 33554432:
                    X = S.ansi[z], B.push(`xterm-bg-${z}`);
                    break;
                  case 50331648:
                    X = c.rgba.toColor(z >> 16, z >> 8 & 255, 255 & z), this._addStyle(C, `background-color:#${v((z >>> 0).toString(16), "0", 6)}`);
                    break;
                  default:
                    q ? (X = S.foreground, B.push(`xterm-bg-${n.INVERTED_DEFAULT_COLOR}`)) : X = S.background;
                }
                switch (V || I.isDim() && (V = c.color.multiplyOpacity(X, 0.5)), j) {
                  case 16777216:
                  case 33554432:
                    I.isBold() && $ < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && ($ += 8), this._applyMinimumContrast(C, X, S.ansi[$], I, V, void 0) || B.push(`xterm-fg-${$}`);
                    break;
                  case 50331648:
                    const e4 = c.rgba.toColor($ >> 16 & 255, $ >> 8 & 255, 255 & $);
                    this._applyMinimumContrast(C, X, e4, I, V, G) || this._addStyle(C, `color:#${v($.toString(16), "0", 6)}`);
                    break;
                  default:
                    this._applyMinimumContrast(C, X, S.foreground, I, V, G) || q && B.push(`xterm-fg-${n.INVERTED_DEFAULT_COLOR}`);
                }
                B.length && (C.className = B.join(" "), B.length = 0), F || O || U ? C.textContent = w : y++, A !== this.defaultSpacing && (C.style.letterSpacing = `${A}px`), p.push(C), M = P;
              }
              return C && y && (C.textContent = w), p;
            }
            _applyMinimumContrast(e3, t3, i3, s3, r2, n2) {
              if (1 === this._optionsService.rawOptions.minimumContrastRatio || (0, _.excludeFromContrastRatioDemands)(s3.getCode()))
                return false;
              const o2 = this._getContrastCache(s3);
              let a2;
              if (r2 || n2 || (a2 = o2.getColor(t3.rgba, i3.rgba)), void 0 === a2) {
                const e4 = this._optionsService.rawOptions.minimumContrastRatio / (s3.isDim() ? 2 : 1);
                a2 = c.color.ensureContrastRatio(r2 || t3, n2 || i3, e4), o2.setColor((r2 || t3).rgba, (n2 || i3).rgba, a2 ?? null);
              }
              return !!a2 && (this._addStyle(e3, `color:${a2.css}`), true);
            }
            _getContrastCache(e3) {
              return e3.isDim() ? this._themeService.colors.halfContrastCache : this._themeService.colors.contrastCache;
            }
            _addStyle(e3, t3) {
              e3.setAttribute("style", `${e3.getAttribute("style") || ""}${t3};`);
            }
            _isCellInSelection(e3, t3) {
              const i3 = this._selectionStart, s3 = this._selectionEnd;
              return !(!i3 || !s3) && (this._columnSelectMode ? i3[0] <= s3[0] ? e3 >= i3[0] && t3 >= i3[1] && e3 < s3[0] && t3 <= s3[1] : e3 < i3[0] && t3 >= i3[1] && e3 >= s3[0] && t3 <= s3[1] : t3 > i3[1] && t3 < s3[1] || i3[1] === s3[1] && t3 === i3[1] && e3 >= i3[0] && e3 < s3[0] || i3[1] < s3[1] && t3 === s3[1] && e3 < s3[0] || i3[1] < s3[1] && t3 === i3[1] && e3 >= i3[0]);
            }
          };
          function v(e3, t3, i3) {
            for (; e3.length < i3; )
              e3 = t3 + e3;
            return e3;
          }
          t2.DomRendererRowFactory = f = s2([r(1, l.ICharacterJoinerService), r(2, h.IOptionsService), r(3, l.ICoreBrowserService), r(4, h.ICoreService), r(5, h.IDecorationService), r(6, l.IThemeService)], f);
        }, 2550: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.WidthCache = void 0, t2.WidthCache = class {
            constructor(e3, t3) {
              this._flat = new Float32Array(256), this._font = "", this._fontSize = 0, this._weight = "normal", this._weightBold = "bold", this._measureElements = [], this._container = e3.createElement("div"), this._container.classList.add("xterm-width-cache-measure-container"), this._container.setAttribute("aria-hidden", "true"), this._container.style.whiteSpace = "pre", this._container.style.fontKerning = "none";
              const i2 = e3.createElement("span");
              i2.classList.add("xterm-char-measure-element");
              const s2 = e3.createElement("span");
              s2.classList.add("xterm-char-measure-element"), s2.style.fontWeight = "bold";
              const r = e3.createElement("span");
              r.classList.add("xterm-char-measure-element"), r.style.fontStyle = "italic";
              const n = e3.createElement("span");
              n.classList.add("xterm-char-measure-element"), n.style.fontWeight = "bold", n.style.fontStyle = "italic", this._measureElements = [i2, s2, r, n], this._container.appendChild(i2), this._container.appendChild(s2), this._container.appendChild(r), this._container.appendChild(n), t3.appendChild(this._container), this.clear();
            }
            dispose() {
              this._container.remove(), this._measureElements.length = 0, this._holey = void 0;
            }
            clear() {
              this._flat.fill(-9999), this._holey = /* @__PURE__ */ new Map();
            }
            setFont(e3, t3, i2, s2) {
              e3 === this._font && t3 === this._fontSize && i2 === this._weight && s2 === this._weightBold || (this._font = e3, this._fontSize = t3, this._weight = i2, this._weightBold = s2, this._container.style.fontFamily = this._font, this._container.style.fontSize = `${this._fontSize}px`, this._measureElements[0].style.fontWeight = `${i2}`, this._measureElements[1].style.fontWeight = `${s2}`, this._measureElements[2].style.fontWeight = `${i2}`, this._measureElements[3].style.fontWeight = `${s2}`, this.clear());
            }
            get(e3, t3, i2) {
              let s2 = 0;
              if (!t3 && !i2 && 1 === e3.length && (s2 = e3.charCodeAt(0)) < 256)
                return -9999 !== this._flat[s2] ? this._flat[s2] : this._flat[s2] = this._measure(e3, 0);
              let r = e3;
              t3 && (r += "B"), i2 && (r += "I");
              let n = this._holey.get(r);
              if (void 0 === n) {
                let s3 = 0;
                t3 && (s3 |= 1), i2 && (s3 |= 2), n = this._measure(e3, s3), this._holey.set(r, n);
              }
              return n;
            }
            _measure(e3, t3) {
              const i2 = this._measureElements[t3];
              return i2.textContent = e3.repeat(32), i2.offsetWidth / 32;
            }
          };
        }, 2223: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.TEXT_BASELINE = t2.DIM_OPACITY = t2.INVERTED_DEFAULT_COLOR = void 0;
          const s2 = i2(6114);
          t2.INVERTED_DEFAULT_COLOR = 257, t2.DIM_OPACITY = 0.5, t2.TEXT_BASELINE = s2.isFirefox || s2.isLegacyEdge ? "bottom" : "ideographic";
        }, 6171: (e2, t2) => {
          function i2(e3) {
            return 57508 <= e3 && e3 <= 57558;
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createRenderDimensions = t2.excludeFromContrastRatioDemands = t2.isRestrictedPowerlineGlyph = t2.isPowerlineGlyph = t2.throwIfFalsy = void 0, t2.throwIfFalsy = function(e3) {
            if (!e3)
              throw new Error("value must not be falsy");
            return e3;
          }, t2.isPowerlineGlyph = i2, t2.isRestrictedPowerlineGlyph = function(e3) {
            return 57520 <= e3 && e3 <= 57527;
          }, t2.excludeFromContrastRatioDemands = function(e3) {
            return i2(e3) || function(e4) {
              return 9472 <= e4 && e4 <= 9631;
            }(e3);
          }, t2.createRenderDimensions = function() {
            return { css: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 } }, device: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 }, char: { width: 0, height: 0, left: 0, top: 0 } } };
          };
        }, 456: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionModel = void 0, t2.SelectionModel = class {
            constructor(e3) {
              this._bufferService = e3, this.isSelectAllActive = false, this.selectionStartLength = 0;
            }
            clearSelection() {
              this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = false, this.selectionStartLength = 0;
            }
            get finalSelectionStart() {
              return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
            }
            get finalSelectionEnd() {
              if (this.isSelectAllActive)
                return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
              if (this.selectionStart) {
                if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                  const e3 = this.selectionStart[0] + this.selectionStartLength;
                  return e3 > this._bufferService.cols ? e3 % this._bufferService.cols == 0 ? [this._bufferService.cols, this.selectionStart[1] + Math.floor(e3 / this._bufferService.cols) - 1] : [e3 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e3 / this._bufferService.cols)] : [e3, this.selectionStart[1]];
                }
                if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
                  const e3 = this.selectionStart[0] + this.selectionStartLength;
                  return e3 > this._bufferService.cols ? [e3 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e3 / this._bufferService.cols)] : [Math.max(e3, this.selectionEnd[0]), this.selectionEnd[1]];
                }
                return this.selectionEnd;
              }
            }
            areSelectionValuesReversed() {
              const e3 = this.selectionStart, t3 = this.selectionEnd;
              return !(!e3 || !t3) && (e3[1] > t3[1] || e3[1] === t3[1] && e3[0] > t3[0]);
            }
            handleTrim(e3) {
              return this.selectionStart && (this.selectionStart[1] -= e3), this.selectionEnd && (this.selectionEnd[1] -= e3), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), true) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), false);
            }
          };
        }, 428: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CharSizeService = void 0;
          const n = i2(2585), o = i2(8460), a = i2(844);
          let h = t2.CharSizeService = class extends a.Disposable {
            get hasValidSize() {
              return this.width > 0 && this.height > 0;
            }
            constructor(e3, t3, i3) {
              super(), this._optionsService = i3, this.width = 0, this.height = 0, this._onCharSizeChange = this.register(new o.EventEmitter()), this.onCharSizeChange = this._onCharSizeChange.event, this._measureStrategy = new c(e3, t3, this._optionsService), this.register(this._optionsService.onMultipleOptionChange(["fontFamily", "fontSize"], () => this.measure()));
            }
            measure() {
              const e3 = this._measureStrategy.measure();
              e3.width === this.width && e3.height === this.height || (this.width = e3.width, this.height = e3.height, this._onCharSizeChange.fire());
            }
          };
          t2.CharSizeService = h = s2([r(2, n.IOptionsService)], h);
          class c {
            constructor(e3, t3, i3) {
              this._document = e3, this._parentElement = t3, this._optionsService = i3, this._result = { width: 0, height: 0 }, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W".repeat(32), this._measureElement.setAttribute("aria-hidden", "true"), this._measureElement.style.whiteSpace = "pre", this._measureElement.style.fontKerning = "none", this._parentElement.appendChild(this._measureElement);
            }
            measure() {
              this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`;
              const e3 = { height: Number(this._measureElement.offsetHeight), width: Number(this._measureElement.offsetWidth) };
              return 0 !== e3.width && 0 !== e3.height && (this._result.width = e3.width / 32, this._result.height = Math.ceil(e3.height)), this._result;
            }
          }
        }, 4269: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CharacterJoinerService = t2.JoinedCellData = void 0;
          const n = i2(3734), o = i2(643), a = i2(511), h = i2(2585);
          class c extends n.AttributeData {
            constructor(e3, t3, i3) {
              super(), this.content = 0, this.combinedData = "", this.fg = e3.fg, this.bg = e3.bg, this.combinedData = t3, this._width = i3;
            }
            isCombined() {
              return 2097152;
            }
            getWidth() {
              return this._width;
            }
            getChars() {
              return this.combinedData;
            }
            getCode() {
              return 2097151;
            }
            setFromCharData(e3) {
              throw new Error("not implemented");
            }
            getAsCharData() {
              return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
            }
          }
          t2.JoinedCellData = c;
          let l = t2.CharacterJoinerService = class e3 {
            constructor(e4) {
              this._bufferService = e4, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a.CellData();
            }
            register(e4) {
              const t3 = { id: this._nextCharacterJoinerId++, handler: e4 };
              return this._characterJoiners.push(t3), t3.id;
            }
            deregister(e4) {
              for (let t3 = 0; t3 < this._characterJoiners.length; t3++)
                if (this._characterJoiners[t3].id === e4)
                  return this._characterJoiners.splice(t3, 1), true;
              return false;
            }
            getJoinedCharacters(e4) {
              if (0 === this._characterJoiners.length)
                return [];
              const t3 = this._bufferService.buffer.lines.get(e4);
              if (!t3 || 0 === t3.length)
                return [];
              const i3 = [], s3 = t3.translateToString(true);
              let r2 = 0, n2 = 0, a2 = 0, h2 = t3.getFg(0), c2 = t3.getBg(0);
              for (let e5 = 0; e5 < t3.getTrimmedLength(); e5++)
                if (t3.loadCell(e5, this._workCell), 0 !== this._workCell.getWidth()) {
                  if (this._workCell.fg !== h2 || this._workCell.bg !== c2) {
                    if (e5 - r2 > 1) {
                      const e6 = this._getJoinedRanges(s3, a2, n2, t3, r2);
                      for (let t4 = 0; t4 < e6.length; t4++)
                        i3.push(e6[t4]);
                    }
                    r2 = e5, a2 = n2, h2 = this._workCell.fg, c2 = this._workCell.bg;
                  }
                  n2 += this._workCell.getChars().length || o.WHITESPACE_CELL_CHAR.length;
                }
              if (this._bufferService.cols - r2 > 1) {
                const e5 = this._getJoinedRanges(s3, a2, n2, t3, r2);
                for (let t4 = 0; t4 < e5.length; t4++)
                  i3.push(e5[t4]);
              }
              return i3;
            }
            _getJoinedRanges(t3, i3, s3, r2, n2) {
              const o2 = t3.substring(i3, s3);
              let a2 = [];
              try {
                a2 = this._characterJoiners[0].handler(o2);
              } catch (e4) {
                console.error(e4);
              }
              for (let t4 = 1; t4 < this._characterJoiners.length; t4++)
                try {
                  const i4 = this._characterJoiners[t4].handler(o2);
                  for (let t5 = 0; t5 < i4.length; t5++)
                    e3._mergeRanges(a2, i4[t5]);
                } catch (e4) {
                  console.error(e4);
                }
              return this._stringRangesToCellRanges(a2, r2, n2), a2;
            }
            _stringRangesToCellRanges(e4, t3, i3) {
              let s3 = 0, r2 = false, n2 = 0, a2 = e4[s3];
              if (a2) {
                for (let h2 = i3; h2 < this._bufferService.cols; h2++) {
                  const i4 = t3.getWidth(h2), c2 = t3.getString(h2).length || o.WHITESPACE_CELL_CHAR.length;
                  if (0 !== i4) {
                    if (!r2 && a2[0] <= n2 && (a2[0] = h2, r2 = true), a2[1] <= n2) {
                      if (a2[1] = h2, a2 = e4[++s3], !a2)
                        break;
                      a2[0] <= n2 ? (a2[0] = h2, r2 = true) : r2 = false;
                    }
                    n2 += c2;
                  }
                }
                a2 && (a2[1] = this._bufferService.cols);
              }
            }
            static _mergeRanges(e4, t3) {
              let i3 = false;
              for (let s3 = 0; s3 < e4.length; s3++) {
                const r2 = e4[s3];
                if (i3) {
                  if (t3[1] <= r2[0])
                    return e4[s3 - 1][1] = t3[1], e4;
                  if (t3[1] <= r2[1])
                    return e4[s3 - 1][1] = Math.max(t3[1], r2[1]), e4.splice(s3, 1), e4;
                  e4.splice(s3, 1), s3--;
                } else {
                  if (t3[1] <= r2[0])
                    return e4.splice(s3, 0, t3), e4;
                  if (t3[1] <= r2[1])
                    return r2[0] = Math.min(t3[0], r2[0]), e4;
                  t3[0] < r2[1] && (r2[0] = Math.min(t3[0], r2[0]), i3 = true);
                }
              }
              return i3 ? e4[e4.length - 1][1] = t3[1] : e4.push(t3), e4;
            }
          };
          t2.CharacterJoinerService = l = s2([r(0, h.IBufferService)], l);
        }, 5114: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreBrowserService = void 0;
          const s2 = i2(844), r = i2(8460), n = i2(3656);
          class o extends s2.Disposable {
            constructor(e3, t3, i3) {
              super(), this._textarea = e3, this._window = t3, this.mainDocument = i3, this._isFocused = false, this._cachedIsFocused = void 0, this._screenDprMonitor = new a(this._window), this._onDprChange = this.register(new r.EventEmitter()), this.onDprChange = this._onDprChange.event, this._onWindowChange = this.register(new r.EventEmitter()), this.onWindowChange = this._onWindowChange.event, this.register(this.onWindowChange((e4) => this._screenDprMonitor.setWindow(e4))), this.register((0, r.forwardEvent)(this._screenDprMonitor.onDprChange, this._onDprChange)), this._textarea.addEventListener("focus", () => this._isFocused = true), this._textarea.addEventListener("blur", () => this._isFocused = false);
            }
            get window() {
              return this._window;
            }
            set window(e3) {
              this._window !== e3 && (this._window = e3, this._onWindowChange.fire(this._window));
            }
            get dpr() {
              return this.window.devicePixelRatio;
            }
            get isFocused() {
              return void 0 === this._cachedIsFocused && (this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus(), queueMicrotask(() => this._cachedIsFocused = void 0)), this._cachedIsFocused;
            }
          }
          t2.CoreBrowserService = o;
          class a extends s2.Disposable {
            constructor(e3) {
              super(), this._parentWindow = e3, this._windowResizeListener = this.register(new s2.MutableDisposable()), this._onDprChange = this.register(new r.EventEmitter()), this.onDprChange = this._onDprChange.event, this._outerListener = () => this._setDprAndFireIfDiffers(), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._updateDpr(), this._setWindowResizeListener(), this.register((0, s2.toDisposable)(() => this.clearListener()));
            }
            setWindow(e3) {
              this._parentWindow = e3, this._setWindowResizeListener(), this._setDprAndFireIfDiffers();
            }
            _setWindowResizeListener() {
              this._windowResizeListener.value = (0, n.addDisposableDomListener)(this._parentWindow, "resize", () => this._setDprAndFireIfDiffers());
            }
            _setDprAndFireIfDiffers() {
              this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio && this._onDprChange.fire(this._parentWindow.devicePixelRatio), this._updateDpr();
            }
            _updateDpr() {
              this._outerListener && (this._resolutionMediaMatchList?.removeListener(this._outerListener), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`), this._resolutionMediaMatchList.addListener(this._outerListener));
            }
            clearListener() {
              this._resolutionMediaMatchList && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._outerListener = void 0);
            }
          }
        }, 8934: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.MouseService = void 0;
          const n = i2(4725), o = i2(9806);
          let a = t2.MouseService = class {
            constructor(e3, t3) {
              this._renderService = e3, this._charSizeService = t3;
            }
            getCoords(e3, t3, i3, s3, r2) {
              return (0, o.getCoords)(window, e3, t3, i3, s3, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, r2);
            }
            getMouseReportCoords(e3, t3) {
              const i3 = (0, o.getCoordsRelativeToElement)(window, e3, t3);
              if (this._charSizeService.hasValidSize)
                return i3[0] = Math.min(Math.max(i3[0], 0), this._renderService.dimensions.css.canvas.width - 1), i3[1] = Math.min(Math.max(i3[1], 0), this._renderService.dimensions.css.canvas.height - 1), { col: Math.floor(i3[0] / this._renderService.dimensions.css.cell.width), row: Math.floor(i3[1] / this._renderService.dimensions.css.cell.height), x: Math.floor(i3[0]), y: Math.floor(i3[1]) };
            }
          };
          t2.MouseService = a = s2([r(0, n.IRenderService), r(1, n.ICharSizeService)], a);
        }, 3230: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RenderService = void 0;
          const n = i2(6193), o = i2(4725), a = i2(8460), h = i2(844), c = i2(7226), l = i2(2585);
          let d = t2.RenderService = class extends h.Disposable {
            get dimensions() {
              return this._renderer.value.dimensions;
            }
            constructor(e3, t3, i3, s3, r2, o2, l2, d2, _) {
              if (super(), this._rowCount = e3, this._charSizeService = s3, this._renderer = this.register(new h.MutableDisposable()), this._pausedResizeTask = new c.DebouncedIdleTask(), this._isPaused = false, this._needsFullRefresh = false, this._isNextRenderRedrawOnly = true, this._needsSelectionRefresh = false, this._canvasWidth = 0, this._canvasHeight = 0, this._selectionState = { start: void 0, end: void 0, columnSelectMode: false }, this._onDimensionsChange = this.register(new a.EventEmitter()), this.onDimensionsChange = this._onDimensionsChange.event, this._onRenderedViewportChange = this.register(new a.EventEmitter()), this.onRenderedViewportChange = this._onRenderedViewportChange.event, this._onRender = this.register(new a.EventEmitter()), this.onRender = this._onRender.event, this._onRefreshRequest = this.register(new a.EventEmitter()), this.onRefreshRequest = this._onRefreshRequest.event, this._renderDebouncer = new n.RenderDebouncer(l2.window, (e4, t4) => this._renderRows(e4, t4)), this.register(this._renderDebouncer), this.register(l2.onDprChange(() => this.handleDevicePixelRatioChange())), this.register(o2.onResize(() => this._fullRefresh())), this.register(o2.buffers.onBufferActivate(() => this._renderer.value?.clear())), this.register(i3.onOptionChange(() => this._handleOptionsChanged())), this.register(this._charSizeService.onCharSizeChange(() => this.handleCharSizeChanged())), this.register(r2.onDecorationRegistered(() => this._fullRefresh())), this.register(r2.onDecorationRemoved(() => this._fullRefresh())), this.register(i3.onMultipleOptionChange(["customGlyphs", "drawBoldTextInBrightColors", "letterSpacing", "lineHeight", "fontFamily", "fontSize", "fontWeight", "fontWeightBold", "minimumContrastRatio"], () => {
                this.clear(), this.handleResize(o2.cols, o2.rows), this._fullRefresh();
              })), this.register(i3.onMultipleOptionChange(["cursorBlink", "cursorStyle"], () => this.refreshRows(o2.buffer.y, o2.buffer.y, true))), this.register(_.onChangeColors(() => this._fullRefresh())), "IntersectionObserver" in l2.window) {
                const e4 = new l2.window.IntersectionObserver((e5) => this._handleIntersectionChange(e5[e5.length - 1]), { threshold: 0 });
                e4.observe(t3), this.register({ dispose: () => e4.disconnect() });
              }
            }
            _handleIntersectionChange(e3) {
              this._isPaused = void 0 === e3.isIntersecting ? 0 === e3.intersectionRatio : !e3.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this._pausedResizeTask.flush(), this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = false);
            }
            refreshRows(e3, t3, i3 = false) {
              this._isPaused ? this._needsFullRefresh = true : (i3 || (this._isNextRenderRedrawOnly = false), this._renderDebouncer.refresh(e3, t3, this._rowCount));
            }
            _renderRows(e3, t3) {
              this._renderer.value && (e3 = Math.min(e3, this._rowCount - 1), t3 = Math.min(t3, this._rowCount - 1), this._renderer.value.renderRows(e3, t3), this._needsSelectionRefresh && (this._renderer.value.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = false), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({ start: e3, end: t3 }), this._onRender.fire({ start: e3, end: t3 }), this._isNextRenderRedrawOnly = true);
            }
            resize(e3, t3) {
              this._rowCount = t3, this._fireOnCanvasResize();
            }
            _handleOptionsChanged() {
              this._renderer.value && (this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize());
            }
            _fireOnCanvasResize() {
              this._renderer.value && (this._renderer.value.dimensions.css.canvas.width === this._canvasWidth && this._renderer.value.dimensions.css.canvas.height === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.value.dimensions));
            }
            hasRenderer() {
              return !!this._renderer.value;
            }
            setRenderer(e3) {
              this._renderer.value = e3, this._renderer.value && (this._renderer.value.onRequestRedraw((e4) => this.refreshRows(e4.start, e4.end, true)), this._needsSelectionRefresh = true, this._fullRefresh());
            }
            addRefreshCallback(e3) {
              return this._renderDebouncer.addRefreshCallback(e3);
            }
            _fullRefresh() {
              this._isPaused ? this._needsFullRefresh = true : this.refreshRows(0, this._rowCount - 1);
            }
            clearTextureAtlas() {
              this._renderer.value && (this._renderer.value.clearTextureAtlas?.(), this._fullRefresh());
            }
            handleDevicePixelRatioChange() {
              this._charSizeService.measure(), this._renderer.value && (this._renderer.value.handleDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1));
            }
            handleResize(e3, t3) {
              this._renderer.value && (this._isPaused ? this._pausedResizeTask.set(() => this._renderer.value.handleResize(e3, t3)) : this._renderer.value.handleResize(e3, t3), this._fullRefresh());
            }
            handleCharSizeChanged() {
              this._renderer.value?.handleCharSizeChanged();
            }
            handleBlur() {
              this._renderer.value?.handleBlur();
            }
            handleFocus() {
              this._renderer.value?.handleFocus();
            }
            handleSelectionChanged(e3, t3, i3) {
              this._selectionState.start = e3, this._selectionState.end = t3, this._selectionState.columnSelectMode = i3, this._renderer.value?.handleSelectionChanged(e3, t3, i3);
            }
            handleCursorMove() {
              this._renderer.value?.handleCursorMove();
            }
            clear() {
              this._renderer.value?.clear();
            }
          };
          t2.RenderService = d = s2([r(2, l.IOptionsService), r(3, o.ICharSizeService), r(4, l.IDecorationService), r(5, l.IBufferService), r(6, o.ICoreBrowserService), r(7, l.IInstantiationService), r(8, o.IThemeService)], d);
        }, 9312: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionService = void 0;
          const n = i2(9806), o = i2(9504), a = i2(456), h = i2(4725), c = i2(8460), l = i2(844), d = i2(6114), _ = i2(4841), u = i2(511), f = i2(2585), v = String.fromCharCode(160), g = new RegExp(v, "g");
          let p = t2.SelectionService = class extends l.Disposable {
            constructor(e3, t3, i3, s3, r2, n2, o2, h2, d2) {
              super(), this._element = e3, this._screenElement = t3, this._linkifier = i3, this._bufferService = s3, this._coreService = r2, this._mouseService = n2, this._optionsService = o2, this._renderService = h2, this._coreBrowserService = d2, this._dragScrollAmount = 0, this._enabled = true, this._workCell = new u.CellData(), this._mouseDownTimeStamp = 0, this._oldHasSelection = false, this._oldSelectionStart = void 0, this._oldSelectionEnd = void 0, this._onLinuxMouseSelection = this.register(new c.EventEmitter()), this.onLinuxMouseSelection = this._onLinuxMouseSelection.event, this._onRedrawRequest = this.register(new c.EventEmitter()), this.onRequestRedraw = this._onRedrawRequest.event, this._onSelectionChange = this.register(new c.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onRequestScrollLines = this.register(new c.EventEmitter()), this.onRequestScrollLines = this._onRequestScrollLines.event, this._mouseMoveListener = (e4) => this._handleMouseMove(e4), this._mouseUpListener = (e4) => this._handleMouseUp(e4), this._coreService.onUserInput(() => {
                this.hasSelection && this.clearSelection();
              }), this._trimListener = this._bufferService.buffer.lines.onTrim((e4) => this._handleTrim(e4)), this.register(this._bufferService.buffers.onBufferActivate((e4) => this._handleBufferActivate(e4))), this.enable(), this._model = new a.SelectionModel(this._bufferService), this._activeSelectionMode = 0, this.register((0, l.toDisposable)(() => {
                this._removeMouseDownListeners();
              }));
            }
            reset() {
              this.clearSelection();
            }
            disable() {
              this.clearSelection(), this._enabled = false;
            }
            enable() {
              this._enabled = true;
            }
            get selectionStart() {
              return this._model.finalSelectionStart;
            }
            get selectionEnd() {
              return this._model.finalSelectionEnd;
            }
            get hasSelection() {
              const e3 = this._model.finalSelectionStart, t3 = this._model.finalSelectionEnd;
              return !(!e3 || !t3 || e3[0] === t3[0] && e3[1] === t3[1]);
            }
            get selectionText() {
              const e3 = this._model.finalSelectionStart, t3 = this._model.finalSelectionEnd;
              if (!e3 || !t3)
                return "";
              const i3 = this._bufferService.buffer, s3 = [];
              if (3 === this._activeSelectionMode) {
                if (e3[0] === t3[0])
                  return "";
                const r2 = e3[0] < t3[0] ? e3[0] : t3[0], n2 = e3[0] < t3[0] ? t3[0] : e3[0];
                for (let o2 = e3[1]; o2 <= t3[1]; o2++) {
                  const e4 = i3.translateBufferLineToString(o2, true, r2, n2);
                  s3.push(e4);
                }
              } else {
                const r2 = e3[1] === t3[1] ? t3[0] : void 0;
                s3.push(i3.translateBufferLineToString(e3[1], true, e3[0], r2));
                for (let r3 = e3[1] + 1; r3 <= t3[1] - 1; r3++) {
                  const e4 = i3.lines.get(r3), t4 = i3.translateBufferLineToString(r3, true);
                  e4?.isWrapped ? s3[s3.length - 1] += t4 : s3.push(t4);
                }
                if (e3[1] !== t3[1]) {
                  const e4 = i3.lines.get(t3[1]), r3 = i3.translateBufferLineToString(t3[1], true, 0, t3[0]);
                  e4 && e4.isWrapped ? s3[s3.length - 1] += r3 : s3.push(r3);
                }
              }
              return s3.map((e4) => e4.replace(g, " ")).join(d.isWindows ? "\r\n" : "\n");
            }
            clearSelection() {
              this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
            }
            refresh(e3) {
              this._refreshAnimationFrame || (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._refresh())), d.isLinux && e3 && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
            }
            _refresh() {
              this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({ start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd, columnSelectMode: 3 === this._activeSelectionMode });
            }
            _isClickInSelection(e3) {
              const t3 = this._getMouseBufferCoords(e3), i3 = this._model.finalSelectionStart, s3 = this._model.finalSelectionEnd;
              return !!(i3 && s3 && t3) && this._areCoordsInSelection(t3, i3, s3);
            }
            isCellInSelection(e3, t3) {
              const i3 = this._model.finalSelectionStart, s3 = this._model.finalSelectionEnd;
              return !(!i3 || !s3) && this._areCoordsInSelection([e3, t3], i3, s3);
            }
            _areCoordsInSelection(e3, t3, i3) {
              return e3[1] > t3[1] && e3[1] < i3[1] || t3[1] === i3[1] && e3[1] === t3[1] && e3[0] >= t3[0] && e3[0] < i3[0] || t3[1] < i3[1] && e3[1] === i3[1] && e3[0] < i3[0] || t3[1] < i3[1] && e3[1] === t3[1] && e3[0] >= t3[0];
            }
            _selectWordAtCursor(e3, t3) {
              const i3 = this._linkifier.currentLink?.link?.range;
              if (i3)
                return this._model.selectionStart = [i3.start.x - 1, i3.start.y - 1], this._model.selectionStartLength = (0, _.getRangeLength)(i3, this._bufferService.cols), this._model.selectionEnd = void 0, true;
              const s3 = this._getMouseBufferCoords(e3);
              return !!s3 && (this._selectWordAt(s3, t3), this._model.selectionEnd = void 0, true);
            }
            selectAll() {
              this._model.isSelectAllActive = true, this.refresh(), this._onSelectionChange.fire();
            }
            selectLines(e3, t3) {
              this._model.clearSelection(), e3 = Math.max(e3, 0), t3 = Math.min(t3, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e3], this._model.selectionEnd = [this._bufferService.cols, t3], this.refresh(), this._onSelectionChange.fire();
            }
            _handleTrim(e3) {
              this._model.handleTrim(e3) && this.refresh();
            }
            _getMouseBufferCoords(e3) {
              const t3 = this._mouseService.getCoords(e3, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
              if (t3)
                return t3[0]--, t3[1]--, t3[1] += this._bufferService.buffer.ydisp, t3;
            }
            _getMouseEventScrollAmount(e3) {
              let t3 = (0, n.getCoordsRelativeToElement)(this._coreBrowserService.window, e3, this._screenElement)[1];
              const i3 = this._renderService.dimensions.css.canvas.height;
              return t3 >= 0 && t3 <= i3 ? 0 : (t3 > i3 && (t3 -= i3), t3 = Math.min(Math.max(t3, -50), 50), t3 /= 50, t3 / Math.abs(t3) + Math.round(14 * t3));
            }
            shouldForceSelection(e3) {
              return d.isMac ? e3.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e3.shiftKey;
            }
            handleMouseDown(e3) {
              if (this._mouseDownTimeStamp = e3.timeStamp, (2 !== e3.button || !this.hasSelection) && 0 === e3.button) {
                if (!this._enabled) {
                  if (!this.shouldForceSelection(e3))
                    return;
                  e3.stopPropagation();
                }
                e3.preventDefault(), this._dragScrollAmount = 0, this._enabled && e3.shiftKey ? this._handleIncrementalClick(e3) : 1 === e3.detail ? this._handleSingleClick(e3) : 2 === e3.detail ? this._handleDoubleClick(e3) : 3 === e3.detail && this._handleTripleClick(e3), this._addMouseDownListeners(), this.refresh(true);
              }
            }
            _addMouseDownListeners() {
              this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), 50);
            }
            _removeMouseDownListeners() {
              this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
            }
            _handleIncrementalClick(e3) {
              this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e3));
            }
            _handleSingleClick(e3) {
              if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = false, this._activeSelectionMode = this.shouldColumnSelect(e3) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e3), !this._model.selectionStart)
                return;
              this._model.selectionEnd = void 0;
              const t3 = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
              t3 && t3.length !== this._model.selectionStart[0] && 0 === t3.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++;
            }
            _handleDoubleClick(e3) {
              this._selectWordAtCursor(e3, true) && (this._activeSelectionMode = 1);
            }
            _handleTripleClick(e3) {
              const t3 = this._getMouseBufferCoords(e3);
              t3 && (this._activeSelectionMode = 2, this._selectLineAt(t3[1]));
            }
            shouldColumnSelect(e3) {
              return e3.altKey && !(d.isMac && this._optionsService.rawOptions.macOptionClickForcesSelection);
            }
            _handleMouseMove(e3) {
              if (e3.stopImmediatePropagation(), !this._model.selectionStart)
                return;
              const t3 = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
              if (this._model.selectionEnd = this._getMouseBufferCoords(e3), !this._model.selectionEnd)
                return void this.refresh(true);
              2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e3), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
              const i3 = this._bufferService.buffer;
              if (this._model.selectionEnd[1] < i3.lines.length) {
                const e4 = i3.lines.get(this._model.selectionEnd[1]);
                e4 && 0 === e4.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0] < this._bufferService.cols && this._model.selectionEnd[0]++;
              }
              t3 && t3[0] === this._model.selectionEnd[0] && t3[1] === this._model.selectionEnd[1] || this.refresh(true);
            }
            _dragScroll() {
              if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
                this._onRequestScrollLines.fire({ amount: this._dragScrollAmount, suppressScrollEvent: false });
                const e3 = this._bufferService.buffer;
                this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e3.ydisp + this._bufferService.rows, e3.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e3.ydisp), this.refresh();
              }
            }
            _handleMouseUp(e3) {
              const t3 = e3.timeStamp - this._mouseDownTimeStamp;
              if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t3 < 500 && e3.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
                if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                  const t4 = this._mouseService.getCoords(e3, this._element, this._bufferService.cols, this._bufferService.rows, false);
                  if (t4 && void 0 !== t4[0] && void 0 !== t4[1]) {
                    const e4 = (0, o.moveToCellSequence)(t4[0] - 1, t4[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                    this._coreService.triggerDataEvent(e4, true);
                  }
                }
              } else
                this._fireEventIfSelectionChanged();
            }
            _fireEventIfSelectionChanged() {
              const e3 = this._model.finalSelectionStart, t3 = this._model.finalSelectionEnd, i3 = !(!e3 || !t3 || e3[0] === t3[0] && e3[1] === t3[1]);
              i3 ? e3 && t3 && (this._oldSelectionStart && this._oldSelectionEnd && e3[0] === this._oldSelectionStart[0] && e3[1] === this._oldSelectionStart[1] && t3[0] === this._oldSelectionEnd[0] && t3[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e3, t3, i3)) : this._oldHasSelection && this._fireOnSelectionChange(e3, t3, i3);
            }
            _fireOnSelectionChange(e3, t3, i3) {
              this._oldSelectionStart = e3, this._oldSelectionEnd = t3, this._oldHasSelection = i3, this._onSelectionChange.fire();
            }
            _handleBufferActivate(e3) {
              this.clearSelection(), this._trimListener.dispose(), this._trimListener = e3.activeBuffer.lines.onTrim((e4) => this._handleTrim(e4));
            }
            _convertViewportColToCharacterIndex(e3, t3) {
              let i3 = t3;
              for (let s3 = 0; t3 >= s3; s3++) {
                const r2 = e3.loadCell(s3, this._workCell).getChars().length;
                0 === this._workCell.getWidth() ? i3-- : r2 > 1 && t3 !== s3 && (i3 += r2 - 1);
              }
              return i3;
            }
            setSelection(e3, t3, i3) {
              this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e3, t3], this._model.selectionStartLength = i3, this.refresh(), this._fireEventIfSelectionChanged();
            }
            rightClickSelect(e3) {
              this._isClickInSelection(e3) || (this._selectWordAtCursor(e3, false) && this.refresh(true), this._fireEventIfSelectionChanged());
            }
            _getWordAt(e3, t3, i3 = true, s3 = true) {
              if (e3[0] >= this._bufferService.cols)
                return;
              const r2 = this._bufferService.buffer, n2 = r2.lines.get(e3[1]);
              if (!n2)
                return;
              const o2 = r2.translateBufferLineToString(e3[1], false);
              let a2 = this._convertViewportColToCharacterIndex(n2, e3[0]), h2 = a2;
              const c2 = e3[0] - a2;
              let l2 = 0, d2 = 0, _2 = 0, u2 = 0;
              if (" " === o2.charAt(a2)) {
                for (; a2 > 0 && " " === o2.charAt(a2 - 1); )
                  a2--;
                for (; h2 < o2.length && " " === o2.charAt(h2 + 1); )
                  h2++;
              } else {
                let t4 = e3[0], i4 = e3[0];
                0 === n2.getWidth(t4) && (l2++, t4--), 2 === n2.getWidth(i4) && (d2++, i4++);
                const s4 = n2.getString(i4).length;
                for (s4 > 1 && (u2 += s4 - 1, h2 += s4 - 1); t4 > 0 && a2 > 0 && !this._isCharWordSeparator(n2.loadCell(t4 - 1, this._workCell)); ) {
                  n2.loadCell(t4 - 1, this._workCell);
                  const e4 = this._workCell.getChars().length;
                  0 === this._workCell.getWidth() ? (l2++, t4--) : e4 > 1 && (_2 += e4 - 1, a2 -= e4 - 1), a2--, t4--;
                }
                for (; i4 < n2.length && h2 + 1 < o2.length && !this._isCharWordSeparator(n2.loadCell(i4 + 1, this._workCell)); ) {
                  n2.loadCell(i4 + 1, this._workCell);
                  const e4 = this._workCell.getChars().length;
                  2 === this._workCell.getWidth() ? (d2++, i4++) : e4 > 1 && (u2 += e4 - 1, h2 += e4 - 1), h2++, i4++;
                }
              }
              h2++;
              let f2 = a2 + c2 - l2 + _2, v2 = Math.min(this._bufferService.cols, h2 - a2 + l2 + d2 - _2 - u2);
              if (t3 || "" !== o2.slice(a2, h2).trim()) {
                if (i3 && 0 === f2 && 32 !== n2.getCodePoint(0)) {
                  const t4 = r2.lines.get(e3[1] - 1);
                  if (t4 && n2.isWrapped && 32 !== t4.getCodePoint(this._bufferService.cols - 1)) {
                    const t5 = this._getWordAt([this._bufferService.cols - 1, e3[1] - 1], false, true, false);
                    if (t5) {
                      const e4 = this._bufferService.cols - t5.start;
                      f2 -= e4, v2 += e4;
                    }
                  }
                }
                if (s3 && f2 + v2 === this._bufferService.cols && 32 !== n2.getCodePoint(this._bufferService.cols - 1)) {
                  const t4 = r2.lines.get(e3[1] + 1);
                  if (t4?.isWrapped && 32 !== t4.getCodePoint(0)) {
                    const t5 = this._getWordAt([0, e3[1] + 1], false, false, true);
                    t5 && (v2 += t5.length);
                  }
                }
                return { start: f2, length: v2 };
              }
            }
            _selectWordAt(e3, t3) {
              const i3 = this._getWordAt(e3, t3);
              if (i3) {
                for (; i3.start < 0; )
                  i3.start += this._bufferService.cols, e3[1]--;
                this._model.selectionStart = [i3.start, e3[1]], this._model.selectionStartLength = i3.length;
              }
            }
            _selectToWordAt(e3) {
              const t3 = this._getWordAt(e3, true);
              if (t3) {
                let i3 = e3[1];
                for (; t3.start < 0; )
                  t3.start += this._bufferService.cols, i3--;
                if (!this._model.areSelectionValuesReversed())
                  for (; t3.start + t3.length > this._bufferService.cols; )
                    t3.length -= this._bufferService.cols, i3++;
                this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t3.start : t3.start + t3.length, i3];
              }
            }
            _isCharWordSeparator(e3) {
              return 0 !== e3.getWidth() && this._optionsService.rawOptions.wordSeparator.indexOf(e3.getChars()) >= 0;
            }
            _selectLineAt(e3) {
              const t3 = this._bufferService.buffer.getWrappedRangeForLine(e3), i3 = { start: { x: 0, y: t3.first }, end: { x: this._bufferService.cols - 1, y: t3.last } };
              this._model.selectionStart = [0, t3.first], this._model.selectionEnd = void 0, this._model.selectionStartLength = (0, _.getRangeLength)(i3, this._bufferService.cols);
            }
          };
          t2.SelectionService = p = s2([r(3, f.IBufferService), r(4, f.ICoreService), r(5, h.IMouseService), r(6, f.IOptionsService), r(7, h.IRenderService), r(8, h.ICoreBrowserService)], p);
        }, 4725: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.IThemeService = t2.ICharacterJoinerService = t2.ISelectionService = t2.IRenderService = t2.IMouseService = t2.ICoreBrowserService = t2.ICharSizeService = void 0;
          const s2 = i2(8343);
          t2.ICharSizeService = (0, s2.createDecorator)("CharSizeService"), t2.ICoreBrowserService = (0, s2.createDecorator)("CoreBrowserService"), t2.IMouseService = (0, s2.createDecorator)("MouseService"), t2.IRenderService = (0, s2.createDecorator)("RenderService"), t2.ISelectionService = (0, s2.createDecorator)("SelectionService"), t2.ICharacterJoinerService = (0, s2.createDecorator)("CharacterJoinerService"), t2.IThemeService = (0, s2.createDecorator)("ThemeService");
        }, 6731: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ThemeService = t2.DEFAULT_ANSI_COLORS = void 0;
          const n = i2(7239), o = i2(8055), a = i2(8460), h = i2(844), c = i2(2585), l = o.css.toColor("#ffffff"), d = o.css.toColor("#000000"), _ = o.css.toColor("#ffffff"), u = o.css.toColor("#000000"), f = { css: "rgba(255, 255, 255, 0.3)", rgba: 4294967117 };
          t2.DEFAULT_ANSI_COLORS = Object.freeze((() => {
            const e3 = [o.css.toColor("#2e3436"), o.css.toColor("#cc0000"), o.css.toColor("#4e9a06"), o.css.toColor("#c4a000"), o.css.toColor("#3465a4"), o.css.toColor("#75507b"), o.css.toColor("#06989a"), o.css.toColor("#d3d7cf"), o.css.toColor("#555753"), o.css.toColor("#ef2929"), o.css.toColor("#8ae234"), o.css.toColor("#fce94f"), o.css.toColor("#729fcf"), o.css.toColor("#ad7fa8"), o.css.toColor("#34e2e2"), o.css.toColor("#eeeeec")], t3 = [0, 95, 135, 175, 215, 255];
            for (let i3 = 0; i3 < 216; i3++) {
              const s3 = t3[i3 / 36 % 6 | 0], r2 = t3[i3 / 6 % 6 | 0], n2 = t3[i3 % 6];
              e3.push({ css: o.channels.toCss(s3, r2, n2), rgba: o.channels.toRgba(s3, r2, n2) });
            }
            for (let t4 = 0; t4 < 24; t4++) {
              const i3 = 8 + 10 * t4;
              e3.push({ css: o.channels.toCss(i3, i3, i3), rgba: o.channels.toRgba(i3, i3, i3) });
            }
            return e3;
          })());
          let v = t2.ThemeService = class extends h.Disposable {
            get colors() {
              return this._colors;
            }
            constructor(e3) {
              super(), this._optionsService = e3, this._contrastCache = new n.ColorContrastCache(), this._halfContrastCache = new n.ColorContrastCache(), this._onChangeColors = this.register(new a.EventEmitter()), this.onChangeColors = this._onChangeColors.event, this._colors = { foreground: l, background: d, cursor: _, cursorAccent: u, selectionForeground: void 0, selectionBackgroundTransparent: f, selectionBackgroundOpaque: o.color.blend(d, f), selectionInactiveBackgroundTransparent: f, selectionInactiveBackgroundOpaque: o.color.blend(d, f), ansi: t2.DEFAULT_ANSI_COLORS.slice(), contrastCache: this._contrastCache, halfContrastCache: this._halfContrastCache }, this._updateRestoreColors(), this._setTheme(this._optionsService.rawOptions.theme), this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", () => this._contrastCache.clear())), this.register(this._optionsService.onSpecificOptionChange("theme", () => this._setTheme(this._optionsService.rawOptions.theme)));
            }
            _setTheme(e3 = {}) {
              const i3 = this._colors;
              if (i3.foreground = g(e3.foreground, l), i3.background = g(e3.background, d), i3.cursor = g(e3.cursor, _), i3.cursorAccent = g(e3.cursorAccent, u), i3.selectionBackgroundTransparent = g(e3.selectionBackground, f), i3.selectionBackgroundOpaque = o.color.blend(i3.background, i3.selectionBackgroundTransparent), i3.selectionInactiveBackgroundTransparent = g(e3.selectionInactiveBackground, i3.selectionBackgroundTransparent), i3.selectionInactiveBackgroundOpaque = o.color.blend(i3.background, i3.selectionInactiveBackgroundTransparent), i3.selectionForeground = e3.selectionForeground ? g(e3.selectionForeground, o.NULL_COLOR) : void 0, i3.selectionForeground === o.NULL_COLOR && (i3.selectionForeground = void 0), o.color.isOpaque(i3.selectionBackgroundTransparent)) {
                const e4 = 0.3;
                i3.selectionBackgroundTransparent = o.color.opacity(i3.selectionBackgroundTransparent, e4);
              }
              if (o.color.isOpaque(i3.selectionInactiveBackgroundTransparent)) {
                const e4 = 0.3;
                i3.selectionInactiveBackgroundTransparent = o.color.opacity(i3.selectionInactiveBackgroundTransparent, e4);
              }
              if (i3.ansi = t2.DEFAULT_ANSI_COLORS.slice(), i3.ansi[0] = g(e3.black, t2.DEFAULT_ANSI_COLORS[0]), i3.ansi[1] = g(e3.red, t2.DEFAULT_ANSI_COLORS[1]), i3.ansi[2] = g(e3.green, t2.DEFAULT_ANSI_COLORS[2]), i3.ansi[3] = g(e3.yellow, t2.DEFAULT_ANSI_COLORS[3]), i3.ansi[4] = g(e3.blue, t2.DEFAULT_ANSI_COLORS[4]), i3.ansi[5] = g(e3.magenta, t2.DEFAULT_ANSI_COLORS[5]), i3.ansi[6] = g(e3.cyan, t2.DEFAULT_ANSI_COLORS[6]), i3.ansi[7] = g(e3.white, t2.DEFAULT_ANSI_COLORS[7]), i3.ansi[8] = g(e3.brightBlack, t2.DEFAULT_ANSI_COLORS[8]), i3.ansi[9] = g(e3.brightRed, t2.DEFAULT_ANSI_COLORS[9]), i3.ansi[10] = g(e3.brightGreen, t2.DEFAULT_ANSI_COLORS[10]), i3.ansi[11] = g(e3.brightYellow, t2.DEFAULT_ANSI_COLORS[11]), i3.ansi[12] = g(e3.brightBlue, t2.DEFAULT_ANSI_COLORS[12]), i3.ansi[13] = g(e3.brightMagenta, t2.DEFAULT_ANSI_COLORS[13]), i3.ansi[14] = g(e3.brightCyan, t2.DEFAULT_ANSI_COLORS[14]), i3.ansi[15] = g(e3.brightWhite, t2.DEFAULT_ANSI_COLORS[15]), e3.extendedAnsi) {
                const s3 = Math.min(i3.ansi.length - 16, e3.extendedAnsi.length);
                for (let r2 = 0; r2 < s3; r2++)
                  i3.ansi[r2 + 16] = g(e3.extendedAnsi[r2], t2.DEFAULT_ANSI_COLORS[r2 + 16]);
              }
              this._contrastCache.clear(), this._halfContrastCache.clear(), this._updateRestoreColors(), this._onChangeColors.fire(this.colors);
            }
            restoreColor(e3) {
              this._restoreColor(e3), this._onChangeColors.fire(this.colors);
            }
            _restoreColor(e3) {
              if (void 0 !== e3)
                switch (e3) {
                  case 256:
                    this._colors.foreground = this._restoreColors.foreground;
                    break;
                  case 257:
                    this._colors.background = this._restoreColors.background;
                    break;
                  case 258:
                    this._colors.cursor = this._restoreColors.cursor;
                    break;
                  default:
                    this._colors.ansi[e3] = this._restoreColors.ansi[e3];
                }
              else
                for (let e4 = 0; e4 < this._restoreColors.ansi.length; ++e4)
                  this._colors.ansi[e4] = this._restoreColors.ansi[e4];
            }
            modifyColors(e3) {
              e3(this._colors), this._onChangeColors.fire(this.colors);
            }
            _updateRestoreColors() {
              this._restoreColors = { foreground: this._colors.foreground, background: this._colors.background, cursor: this._colors.cursor, ansi: this._colors.ansi.slice() };
            }
          };
          function g(e3, t3) {
            if (void 0 !== e3)
              try {
                return o.css.toColor(e3);
              } catch {
              }
            return t3;
          }
          t2.ThemeService = v = s2([r(0, c.IOptionsService)], v);
        }, 6349: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CircularList = void 0;
          const s2 = i2(8460), r = i2(844);
          class n extends r.Disposable {
            constructor(e3) {
              super(), this._maxLength = e3, this.onDeleteEmitter = this.register(new s2.EventEmitter()), this.onDelete = this.onDeleteEmitter.event, this.onInsertEmitter = this.register(new s2.EventEmitter()), this.onInsert = this.onInsertEmitter.event, this.onTrimEmitter = this.register(new s2.EventEmitter()), this.onTrim = this.onTrimEmitter.event, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
            }
            get maxLength() {
              return this._maxLength;
            }
            set maxLength(e3) {
              if (this._maxLength === e3)
                return;
              const t3 = new Array(e3);
              for (let i3 = 0; i3 < Math.min(e3, this.length); i3++)
                t3[i3] = this._array[this._getCyclicIndex(i3)];
              this._array = t3, this._maxLength = e3, this._startIndex = 0;
            }
            get length() {
              return this._length;
            }
            set length(e3) {
              if (e3 > this._length)
                for (let t3 = this._length; t3 < e3; t3++)
                  this._array[t3] = void 0;
              this._length = e3;
            }
            get(e3) {
              return this._array[this._getCyclicIndex(e3)];
            }
            set(e3, t3) {
              this._array[this._getCyclicIndex(e3)] = t3;
            }
            push(e3) {
              this._array[this._getCyclicIndex(this._length)] = e3, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
            }
            recycle() {
              if (this._length !== this._maxLength)
                throw new Error("Can only recycle when the buffer is full");
              return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
            }
            get isFull() {
              return this._length === this._maxLength;
            }
            pop() {
              return this._array[this._getCyclicIndex(this._length-- - 1)];
            }
            splice(e3, t3, ...i3) {
              if (t3) {
                for (let i4 = e3; i4 < this._length - t3; i4++)
                  this._array[this._getCyclicIndex(i4)] = this._array[this._getCyclicIndex(i4 + t3)];
                this._length -= t3, this.onDeleteEmitter.fire({ index: e3, amount: t3 });
              }
              for (let t4 = this._length - 1; t4 >= e3; t4--)
                this._array[this._getCyclicIndex(t4 + i3.length)] = this._array[this._getCyclicIndex(t4)];
              for (let t4 = 0; t4 < i3.length; t4++)
                this._array[this._getCyclicIndex(e3 + t4)] = i3[t4];
              if (i3.length && this.onInsertEmitter.fire({ index: e3, amount: i3.length }), this._length + i3.length > this._maxLength) {
                const e4 = this._length + i3.length - this._maxLength;
                this._startIndex += e4, this._length = this._maxLength, this.onTrimEmitter.fire(e4);
              } else
                this._length += i3.length;
            }
            trimStart(e3) {
              e3 > this._length && (e3 = this._length), this._startIndex += e3, this._length -= e3, this.onTrimEmitter.fire(e3);
            }
            shiftElements(e3, t3, i3) {
              if (!(t3 <= 0)) {
                if (e3 < 0 || e3 >= this._length)
                  throw new Error("start argument out of range");
                if (e3 + i3 < 0)
                  throw new Error("Cannot shift elements in list beyond index 0");
                if (i3 > 0) {
                  for (let s4 = t3 - 1; s4 >= 0; s4--)
                    this.set(e3 + s4 + i3, this.get(e3 + s4));
                  const s3 = e3 + t3 + i3 - this._length;
                  if (s3 > 0)
                    for (this._length += s3; this._length > this._maxLength; )
                      this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
                } else
                  for (let s3 = 0; s3 < t3; s3++)
                    this.set(e3 + s3 + i3, this.get(e3 + s3));
              }
            }
            _getCyclicIndex(e3) {
              return (this._startIndex + e3) % this._maxLength;
            }
          }
          t2.CircularList = n;
        }, 1439: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.clone = void 0, t2.clone = function e3(t3, i2 = 5) {
            if ("object" != typeof t3)
              return t3;
            const s2 = Array.isArray(t3) ? [] : {};
            for (const r in t3)
              s2[r] = i2 <= 1 ? t3[r] : t3[r] && e3(t3[r], i2 - 1);
            return s2;
          };
        }, 8055: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.contrastRatio = t2.toPaddedHex = t2.rgba = t2.rgb = t2.css = t2.color = t2.channels = t2.NULL_COLOR = void 0;
          const s2 = i2(6114);
          let r = 0, n = 0, o = 0, a = 0;
          var h, c, l, d, _;
          function u(e3) {
            const t3 = e3.toString(16);
            return t3.length < 2 ? "0" + t3 : t3;
          }
          function f(e3, t3) {
            return e3 < t3 ? (t3 + 0.05) / (e3 + 0.05) : (e3 + 0.05) / (t3 + 0.05);
          }
          t2.NULL_COLOR = { css: "#00000000", rgba: 0 }, function(e3) {
            e3.toCss = function(e4, t3, i3, s3) {
              return void 0 !== s3 ? `#${u(e4)}${u(t3)}${u(i3)}${u(s3)}` : `#${u(e4)}${u(t3)}${u(i3)}`;
            }, e3.toRgba = function(e4, t3, i3, s3 = 255) {
              return (e4 << 24 | t3 << 16 | i3 << 8 | s3) >>> 0;
            };
          }(h || (t2.channels = h = {})), function(e3) {
            function t3(e4, t4) {
              return a = Math.round(255 * t4), [r, n, o] = _.toChannels(e4.rgba), { css: h.toCss(r, n, o, a), rgba: h.toRgba(r, n, o, a) };
            }
            e3.blend = function(e4, t4) {
              if (a = (255 & t4.rgba) / 255, 1 === a)
                return { css: t4.css, rgba: t4.rgba };
              const i3 = t4.rgba >> 24 & 255, s3 = t4.rgba >> 16 & 255, c2 = t4.rgba >> 8 & 255, l2 = e4.rgba >> 24 & 255, d2 = e4.rgba >> 16 & 255, _2 = e4.rgba >> 8 & 255;
              return r = l2 + Math.round((i3 - l2) * a), n = d2 + Math.round((s3 - d2) * a), o = _2 + Math.round((c2 - _2) * a), { css: h.toCss(r, n, o), rgba: h.toRgba(r, n, o) };
            }, e3.isOpaque = function(e4) {
              return 255 == (255 & e4.rgba);
            }, e3.ensureContrastRatio = function(e4, t4, i3) {
              const s3 = _.ensureContrastRatio(e4.rgba, t4.rgba, i3);
              if (s3)
                return _.toColor(s3 >> 24 & 255, s3 >> 16 & 255, s3 >> 8 & 255);
            }, e3.opaque = function(e4) {
              const t4 = (255 | e4.rgba) >>> 0;
              return [r, n, o] = _.toChannels(t4), { css: h.toCss(r, n, o), rgba: t4 };
            }, e3.opacity = t3, e3.multiplyOpacity = function(e4, i3) {
              return a = 255 & e4.rgba, t3(e4, a * i3 / 255);
            }, e3.toColorRGB = function(e4) {
              return [e4.rgba >> 24 & 255, e4.rgba >> 16 & 255, e4.rgba >> 8 & 255];
            };
          }(c || (t2.color = c = {})), function(e3) {
            let t3, i3;
            if (!s2.isNode) {
              const e4 = document.createElement("canvas");
              e4.width = 1, e4.height = 1;
              const s3 = e4.getContext("2d", { willReadFrequently: true });
              s3 && (t3 = s3, t3.globalCompositeOperation = "copy", i3 = t3.createLinearGradient(0, 0, 1, 1));
            }
            e3.toColor = function(e4) {
              if (e4.match(/#[\da-f]{3,8}/i))
                switch (e4.length) {
                  case 4:
                    return r = parseInt(e4.slice(1, 2).repeat(2), 16), n = parseInt(e4.slice(2, 3).repeat(2), 16), o = parseInt(e4.slice(3, 4).repeat(2), 16), _.toColor(r, n, o);
                  case 5:
                    return r = parseInt(e4.slice(1, 2).repeat(2), 16), n = parseInt(e4.slice(2, 3).repeat(2), 16), o = parseInt(e4.slice(3, 4).repeat(2), 16), a = parseInt(e4.slice(4, 5).repeat(2), 16), _.toColor(r, n, o, a);
                  case 7:
                    return { css: e4, rgba: (parseInt(e4.slice(1), 16) << 8 | 255) >>> 0 };
                  case 9:
                    return { css: e4, rgba: parseInt(e4.slice(1), 16) >>> 0 };
                }
              const s3 = e4.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
              if (s3)
                return r = parseInt(s3[1]), n = parseInt(s3[2]), o = parseInt(s3[3]), a = Math.round(255 * (void 0 === s3[5] ? 1 : parseFloat(s3[5]))), _.toColor(r, n, o, a);
              if (!t3 || !i3)
                throw new Error("css.toColor: Unsupported css format");
              if (t3.fillStyle = i3, t3.fillStyle = e4, "string" != typeof t3.fillStyle)
                throw new Error("css.toColor: Unsupported css format");
              if (t3.fillRect(0, 0, 1, 1), [r, n, o, a] = t3.getImageData(0, 0, 1, 1).data, 255 !== a)
                throw new Error("css.toColor: Unsupported css format");
              return { rgba: h.toRgba(r, n, o, a), css: e4 };
            };
          }(l || (t2.css = l = {})), function(e3) {
            function t3(e4, t4, i3) {
              const s3 = e4 / 255, r2 = t4 / 255, n2 = i3 / 255;
              return 0.2126 * (s3 <= 0.03928 ? s3 / 12.92 : Math.pow((s3 + 0.055) / 1.055, 2.4)) + 0.7152 * (r2 <= 0.03928 ? r2 / 12.92 : Math.pow((r2 + 0.055) / 1.055, 2.4)) + 0.0722 * (n2 <= 0.03928 ? n2 / 12.92 : Math.pow((n2 + 0.055) / 1.055, 2.4));
            }
            e3.relativeLuminance = function(e4) {
              return t3(e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4);
            }, e3.relativeLuminance2 = t3;
          }(d || (t2.rgb = d = {})), function(e3) {
            function t3(e4, t4, i4) {
              const s3 = e4 >> 24 & 255, r2 = e4 >> 16 & 255, n2 = e4 >> 8 & 255;
              let o2 = t4 >> 24 & 255, a2 = t4 >> 16 & 255, h2 = t4 >> 8 & 255, c2 = f(d.relativeLuminance2(o2, a2, h2), d.relativeLuminance2(s3, r2, n2));
              for (; c2 < i4 && (o2 > 0 || a2 > 0 || h2 > 0); )
                o2 -= Math.max(0, Math.ceil(0.1 * o2)), a2 -= Math.max(0, Math.ceil(0.1 * a2)), h2 -= Math.max(0, Math.ceil(0.1 * h2)), c2 = f(d.relativeLuminance2(o2, a2, h2), d.relativeLuminance2(s3, r2, n2));
              return (o2 << 24 | a2 << 16 | h2 << 8 | 255) >>> 0;
            }
            function i3(e4, t4, i4) {
              const s3 = e4 >> 24 & 255, r2 = e4 >> 16 & 255, n2 = e4 >> 8 & 255;
              let o2 = t4 >> 24 & 255, a2 = t4 >> 16 & 255, h2 = t4 >> 8 & 255, c2 = f(d.relativeLuminance2(o2, a2, h2), d.relativeLuminance2(s3, r2, n2));
              for (; c2 < i4 && (o2 < 255 || a2 < 255 || h2 < 255); )
                o2 = Math.min(255, o2 + Math.ceil(0.1 * (255 - o2))), a2 = Math.min(255, a2 + Math.ceil(0.1 * (255 - a2))), h2 = Math.min(255, h2 + Math.ceil(0.1 * (255 - h2))), c2 = f(d.relativeLuminance2(o2, a2, h2), d.relativeLuminance2(s3, r2, n2));
              return (o2 << 24 | a2 << 16 | h2 << 8 | 255) >>> 0;
            }
            e3.ensureContrastRatio = function(e4, s3, r2) {
              const n2 = d.relativeLuminance(e4 >> 8), o2 = d.relativeLuminance(s3 >> 8);
              if (f(n2, o2) < r2) {
                if (o2 < n2) {
                  const o3 = t3(e4, s3, r2), a3 = f(n2, d.relativeLuminance(o3 >> 8));
                  if (a3 < r2) {
                    const t4 = i3(e4, s3, r2);
                    return a3 > f(n2, d.relativeLuminance(t4 >> 8)) ? o3 : t4;
                  }
                  return o3;
                }
                const a2 = i3(e4, s3, r2), h2 = f(n2, d.relativeLuminance(a2 >> 8));
                if (h2 < r2) {
                  const i4 = t3(e4, s3, r2);
                  return h2 > f(n2, d.relativeLuminance(i4 >> 8)) ? a2 : i4;
                }
                return a2;
              }
            }, e3.reduceLuminance = t3, e3.increaseLuminance = i3, e3.toChannels = function(e4) {
              return [e4 >> 24 & 255, e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4];
            }, e3.toColor = function(e4, t4, i4, s3) {
              return { css: h.toCss(e4, t4, i4, s3), rgba: h.toRgba(e4, t4, i4, s3) };
            };
          }(_ || (t2.rgba = _ = {})), t2.toPaddedHex = u, t2.contrastRatio = f;
        }, 8969: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreTerminal = void 0;
          const s2 = i2(844), r = i2(2585), n = i2(4348), o = i2(7866), a = i2(744), h = i2(7302), c = i2(6975), l = i2(8460), d = i2(1753), _ = i2(1480), u = i2(7994), f = i2(9282), v = i2(5435), g = i2(5981), p = i2(2660);
          let m = false;
          class S extends s2.Disposable {
            get onScroll() {
              return this._onScrollApi || (this._onScrollApi = this.register(new l.EventEmitter()), this._onScroll.event((e3) => {
                this._onScrollApi?.fire(e3.position);
              })), this._onScrollApi.event;
            }
            get cols() {
              return this._bufferService.cols;
            }
            get rows() {
              return this._bufferService.rows;
            }
            get buffers() {
              return this._bufferService.buffers;
            }
            get options() {
              return this.optionsService.options;
            }
            set options(e3) {
              for (const t3 in e3)
                this.optionsService.options[t3] = e3[t3];
            }
            constructor(e3) {
              super(), this._windowsWrappingHeuristics = this.register(new s2.MutableDisposable()), this._onBinary = this.register(new l.EventEmitter()), this.onBinary = this._onBinary.event, this._onData = this.register(new l.EventEmitter()), this.onData = this._onData.event, this._onLineFeed = this.register(new l.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onResize = this.register(new l.EventEmitter()), this.onResize = this._onResize.event, this._onWriteParsed = this.register(new l.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event, this._onScroll = this.register(new l.EventEmitter()), this._instantiationService = new n.InstantiationService(), this.optionsService = this.register(new h.OptionsService(e3)), this._instantiationService.setService(r.IOptionsService, this.optionsService), this._bufferService = this.register(this._instantiationService.createInstance(a.BufferService)), this._instantiationService.setService(r.IBufferService, this._bufferService), this._logService = this.register(this._instantiationService.createInstance(o.LogService)), this._instantiationService.setService(r.ILogService, this._logService), this.coreService = this.register(this._instantiationService.createInstance(c.CoreService)), this._instantiationService.setService(r.ICoreService, this.coreService), this.coreMouseService = this.register(this._instantiationService.createInstance(d.CoreMouseService)), this._instantiationService.setService(r.ICoreMouseService, this.coreMouseService), this.unicodeService = this.register(this._instantiationService.createInstance(_.UnicodeService)), this._instantiationService.setService(r.IUnicodeService, this.unicodeService), this._charsetService = this._instantiationService.createInstance(u.CharsetService), this._instantiationService.setService(r.ICharsetService, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(p.OscLinkService), this._instantiationService.setService(r.IOscLinkService, this._oscLinkService), this._inputHandler = this.register(new v.InputHandler(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService)), this.register((0, l.forwardEvent)(this._inputHandler.onLineFeed, this._onLineFeed)), this.register(this._inputHandler), this.register((0, l.forwardEvent)(this._bufferService.onResize, this._onResize)), this.register((0, l.forwardEvent)(this.coreService.onData, this._onData)), this.register((0, l.forwardEvent)(this.coreService.onBinary, this._onBinary)), this.register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom())), this.register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())), this.register(this.optionsService.onMultipleOptionChange(["windowsMode", "windowsPty"], () => this._handleWindowsPtyOptionChange())), this.register(this._bufferService.onScroll((e4) => {
                this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
              })), this.register(this._inputHandler.onScroll((e4) => {
                this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
              })), this._writeBuffer = this.register(new g.WriteBuffer((e4, t3) => this._inputHandler.parse(e4, t3))), this.register((0, l.forwardEvent)(this._writeBuffer.onWriteParsed, this._onWriteParsed));
            }
            write(e3, t3) {
              this._writeBuffer.write(e3, t3);
            }
            writeSync(e3, t3) {
              this._logService.logLevel <= r.LogLevelEnum.WARN && !m && (this._logService.warn("writeSync is unreliable and will be removed soon."), m = true), this._writeBuffer.writeSync(e3, t3);
            }
            resize(e3, t3) {
              isNaN(e3) || isNaN(t3) || (e3 = Math.max(e3, a.MINIMUM_COLS), t3 = Math.max(t3, a.MINIMUM_ROWS), this._bufferService.resize(e3, t3));
            }
            scroll(e3, t3 = false) {
              this._bufferService.scroll(e3, t3);
            }
            scrollLines(e3, t3, i3) {
              this._bufferService.scrollLines(e3, t3, i3);
            }
            scrollPages(e3) {
              this.scrollLines(e3 * (this.rows - 1));
            }
            scrollToTop() {
              this.scrollLines(-this._bufferService.buffer.ydisp);
            }
            scrollToBottom() {
              this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
            }
            scrollToLine(e3) {
              const t3 = e3 - this._bufferService.buffer.ydisp;
              0 !== t3 && this.scrollLines(t3);
            }
            registerEscHandler(e3, t3) {
              return this._inputHandler.registerEscHandler(e3, t3);
            }
            registerDcsHandler(e3, t3) {
              return this._inputHandler.registerDcsHandler(e3, t3);
            }
            registerCsiHandler(e3, t3) {
              return this._inputHandler.registerCsiHandler(e3, t3);
            }
            registerOscHandler(e3, t3) {
              return this._inputHandler.registerOscHandler(e3, t3);
            }
            _setup() {
              this._handleWindowsPtyOptionChange();
            }
            reset() {
              this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
            }
            _handleWindowsPtyOptionChange() {
              let e3 = false;
              const t3 = this.optionsService.rawOptions.windowsPty;
              t3 && void 0 !== t3.buildNumber && void 0 !== t3.buildNumber ? e3 = !!("conpty" === t3.backend && t3.buildNumber < 21376) : this.optionsService.rawOptions.windowsMode && (e3 = true), e3 ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear();
            }
            _enableWindowsWrappingHeuristics() {
              if (!this._windowsWrappingHeuristics.value) {
                const e3 = [];
                e3.push(this.onLineFeed(f.updateWindowsModeWrappedState.bind(null, this._bufferService))), e3.push(this.registerCsiHandler({ final: "H" }, () => ((0, f.updateWindowsModeWrappedState)(this._bufferService), false))), this._windowsWrappingHeuristics.value = (0, s2.toDisposable)(() => {
                  for (const t3 of e3)
                    t3.dispose();
                });
              }
            }
          }
          t2.CoreTerminal = S;
        }, 8460: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.runAndSubscribe = t2.forwardEvent = t2.EventEmitter = void 0, t2.EventEmitter = class {
            constructor() {
              this._listeners = [], this._disposed = false;
            }
            get event() {
              return this._event || (this._event = (e3) => (this._listeners.push(e3), { dispose: () => {
                if (!this._disposed) {
                  for (let t3 = 0; t3 < this._listeners.length; t3++)
                    if (this._listeners[t3] === e3)
                      return void this._listeners.splice(t3, 1);
                }
              } })), this._event;
            }
            fire(e3, t3) {
              const i2 = [];
              for (let e4 = 0; e4 < this._listeners.length; e4++)
                i2.push(this._listeners[e4]);
              for (let s2 = 0; s2 < i2.length; s2++)
                i2[s2].call(void 0, e3, t3);
            }
            dispose() {
              this.clearListeners(), this._disposed = true;
            }
            clearListeners() {
              this._listeners && (this._listeners.length = 0);
            }
          }, t2.forwardEvent = function(e3, t3) {
            return e3((e4) => t3.fire(e4));
          }, t2.runAndSubscribe = function(e3, t3) {
            return t3(void 0), e3((e4) => t3(e4));
          };
        }, 5435: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.InputHandler = t2.WindowsOptionsReportType = void 0;
          const n = i2(2584), o = i2(7116), a = i2(2015), h = i2(844), c = i2(482), l = i2(8437), d = i2(8460), _ = i2(643), u = i2(511), f = i2(3734), v = i2(2585), g = i2(1480), p = i2(6242), m = i2(6351), S = i2(5941), C = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 }, b = 131072;
          function y(e3, t3) {
            if (e3 > 24)
              return t3.setWinLines || false;
            switch (e3) {
              case 1:
                return !!t3.restoreWin;
              case 2:
                return !!t3.minimizeWin;
              case 3:
                return !!t3.setWinPosition;
              case 4:
                return !!t3.setWinSizePixels;
              case 5:
                return !!t3.raiseWin;
              case 6:
                return !!t3.lowerWin;
              case 7:
                return !!t3.refreshWin;
              case 8:
                return !!t3.setWinSizeChars;
              case 9:
                return !!t3.maximizeWin;
              case 10:
                return !!t3.fullscreenWin;
              case 11:
                return !!t3.getWinState;
              case 13:
                return !!t3.getWinPosition;
              case 14:
                return !!t3.getWinSizePixels;
              case 15:
                return !!t3.getScreenSizePixels;
              case 16:
                return !!t3.getCellSizePixels;
              case 18:
                return !!t3.getWinSizeChars;
              case 19:
                return !!t3.getScreenSizeChars;
              case 20:
                return !!t3.getIconTitle;
              case 21:
                return !!t3.getWinTitle;
              case 22:
                return !!t3.pushTitle;
              case 23:
                return !!t3.popTitle;
              case 24:
                return !!t3.setWinLines;
            }
            return false;
          }
          var w;
          !function(e3) {
            e3[e3.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e3[e3.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
          }(w || (t2.WindowsOptionsReportType = w = {}));
          let E = 0;
          class k extends h.Disposable {
            getAttrData() {
              return this._curAttrData;
            }
            constructor(e3, t3, i3, s3, r2, h2, _2, f2, v2 = new a.EscapeSequenceParser()) {
              super(), this._bufferService = e3, this._charsetService = t3, this._coreService = i3, this._logService = s3, this._optionsService = r2, this._oscLinkService = h2, this._coreMouseService = _2, this._unicodeService = f2, this._parser = v2, this._parseBuffer = new Uint32Array(4096), this._stringDecoder = new c.StringToUtf32(), this._utf8Decoder = new c.Utf8ToUtf32(), this._workCell = new u.CellData(), this._windowTitle = "", this._iconName = "", this._windowTitleStack = [], this._iconNameStack = [], this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone(), this._onRequestBell = this.register(new d.EventEmitter()), this.onRequestBell = this._onRequestBell.event, this._onRequestRefreshRows = this.register(new d.EventEmitter()), this.onRequestRefreshRows = this._onRequestRefreshRows.event, this._onRequestReset = this.register(new d.EventEmitter()), this.onRequestReset = this._onRequestReset.event, this._onRequestSendFocus = this.register(new d.EventEmitter()), this.onRequestSendFocus = this._onRequestSendFocus.event, this._onRequestSyncScrollBar = this.register(new d.EventEmitter()), this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event, this._onRequestWindowsOptionsReport = this.register(new d.EventEmitter()), this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event, this._onA11yChar = this.register(new d.EventEmitter()), this.onA11yChar = this._onA11yChar.event, this._onA11yTab = this.register(new d.EventEmitter()), this.onA11yTab = this._onA11yTab.event, this._onCursorMove = this.register(new d.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onLineFeed = this.register(new d.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onScroll = this.register(new d.EventEmitter()), this.onScroll = this._onScroll.event, this._onTitleChange = this.register(new d.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onColor = this.register(new d.EventEmitter()), this.onColor = this._onColor.event, this._parseStack = { paused: false, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 }, this._specialColors = [256, 257, 258], this.register(this._parser), this._dirtyRowTracker = new L(this._bufferService), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e4) => this._activeBuffer = e4.activeBuffer)), this._parser.setCsiHandlerFallback((e4, t4) => {
                this._logService.debug("Unknown CSI code: ", { identifier: this._parser.identToString(e4), params: t4.toArray() });
              }), this._parser.setEscHandlerFallback((e4) => {
                this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(e4) });
              }), this._parser.setExecuteHandlerFallback((e4) => {
                this._logService.debug("Unknown EXECUTE code: ", { code: e4 });
              }), this._parser.setOscHandlerFallback((e4, t4, i4) => {
                this._logService.debug("Unknown OSC code: ", { identifier: e4, action: t4, data: i4 });
              }), this._parser.setDcsHandlerFallback((e4, t4, i4) => {
                "HOOK" === t4 && (i4 = i4.toArray()), this._logService.debug("Unknown DCS code: ", { identifier: this._parser.identToString(e4), action: t4, payload: i4 });
              }), this._parser.setPrintHandler((e4, t4, i4) => this.print(e4, t4, i4)), this._parser.registerCsiHandler({ final: "@" }, (e4) => this.insertChars(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "@" }, (e4) => this.scrollLeft(e4)), this._parser.registerCsiHandler({ final: "A" }, (e4) => this.cursorUp(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "A" }, (e4) => this.scrollRight(e4)), this._parser.registerCsiHandler({ final: "B" }, (e4) => this.cursorDown(e4)), this._parser.registerCsiHandler({ final: "C" }, (e4) => this.cursorForward(e4)), this._parser.registerCsiHandler({ final: "D" }, (e4) => this.cursorBackward(e4)), this._parser.registerCsiHandler({ final: "E" }, (e4) => this.cursorNextLine(e4)), this._parser.registerCsiHandler({ final: "F" }, (e4) => this.cursorPrecedingLine(e4)), this._parser.registerCsiHandler({ final: "G" }, (e4) => this.cursorCharAbsolute(e4)), this._parser.registerCsiHandler({ final: "H" }, (e4) => this.cursorPosition(e4)), this._parser.registerCsiHandler({ final: "I" }, (e4) => this.cursorForwardTab(e4)), this._parser.registerCsiHandler({ final: "J" }, (e4) => this.eraseInDisplay(e4, false)), this._parser.registerCsiHandler({ prefix: "?", final: "J" }, (e4) => this.eraseInDisplay(e4, true)), this._parser.registerCsiHandler({ final: "K" }, (e4) => this.eraseInLine(e4, false)), this._parser.registerCsiHandler({ prefix: "?", final: "K" }, (e4) => this.eraseInLine(e4, true)), this._parser.registerCsiHandler({ final: "L" }, (e4) => this.insertLines(e4)), this._parser.registerCsiHandler({ final: "M" }, (e4) => this.deleteLines(e4)), this._parser.registerCsiHandler({ final: "P" }, (e4) => this.deleteChars(e4)), this._parser.registerCsiHandler({ final: "S" }, (e4) => this.scrollUp(e4)), this._parser.registerCsiHandler({ final: "T" }, (e4) => this.scrollDown(e4)), this._parser.registerCsiHandler({ final: "X" }, (e4) => this.eraseChars(e4)), this._parser.registerCsiHandler({ final: "Z" }, (e4) => this.cursorBackwardTab(e4)), this._parser.registerCsiHandler({ final: "`" }, (e4) => this.charPosAbsolute(e4)), this._parser.registerCsiHandler({ final: "a" }, (e4) => this.hPositionRelative(e4)), this._parser.registerCsiHandler({ final: "b" }, (e4) => this.repeatPrecedingCharacter(e4)), this._parser.registerCsiHandler({ final: "c" }, (e4) => this.sendDeviceAttributesPrimary(e4)), this._parser.registerCsiHandler({ prefix: ">", final: "c" }, (e4) => this.sendDeviceAttributesSecondary(e4)), this._parser.registerCsiHandler({ final: "d" }, (e4) => this.linePosAbsolute(e4)), this._parser.registerCsiHandler({ final: "e" }, (e4) => this.vPositionRelative(e4)), this._parser.registerCsiHandler({ final: "f" }, (e4) => this.hVPosition(e4)), this._parser.registerCsiHandler({ final: "g" }, (e4) => this.tabClear(e4)), this._parser.registerCsiHandler({ final: "h" }, (e4) => this.setMode(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "h" }, (e4) => this.setModePrivate(e4)), this._parser.registerCsiHandler({ final: "l" }, (e4) => this.resetMode(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "l" }, (e4) => this.resetModePrivate(e4)), this._parser.registerCsiHandler({ final: "m" }, (e4) => this.charAttributes(e4)), this._parser.registerCsiHandler({ final: "n" }, (e4) => this.deviceStatus(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "n" }, (e4) => this.deviceStatusPrivate(e4)), this._parser.registerCsiHandler({ intermediates: "!", final: "p" }, (e4) => this.softReset(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "q" }, (e4) => this.setCursorStyle(e4)), this._parser.registerCsiHandler({ final: "r" }, (e4) => this.setScrollRegion(e4)), this._parser.registerCsiHandler({ final: "s" }, (e4) => this.saveCursor(e4)), this._parser.registerCsiHandler({ final: "t" }, (e4) => this.windowOptions(e4)), this._parser.registerCsiHandler({ final: "u" }, (e4) => this.restoreCursor(e4)), this._parser.registerCsiHandler({ intermediates: "'", final: "}" }, (e4) => this.insertColumns(e4)), this._parser.registerCsiHandler({ intermediates: "'", final: "~" }, (e4) => this.deleteColumns(e4)), this._parser.registerCsiHandler({ intermediates: '"', final: "q" }, (e4) => this.selectProtected(e4)), this._parser.registerCsiHandler({ intermediates: "$", final: "p" }, (e4) => this.requestMode(e4, true)), this._parser.registerCsiHandler({ prefix: "?", intermediates: "$", final: "p" }, (e4) => this.requestMode(e4, false)), this._parser.setExecuteHandler(n.C0.BEL, () => this.bell()), this._parser.setExecuteHandler(n.C0.LF, () => this.lineFeed()), this._parser.setExecuteHandler(n.C0.VT, () => this.lineFeed()), this._parser.setExecuteHandler(n.C0.FF, () => this.lineFeed()), this._parser.setExecuteHandler(n.C0.CR, () => this.carriageReturn()), this._parser.setExecuteHandler(n.C0.BS, () => this.backspace()), this._parser.setExecuteHandler(n.C0.HT, () => this.tab()), this._parser.setExecuteHandler(n.C0.SO, () => this.shiftOut()), this._parser.setExecuteHandler(n.C0.SI, () => this.shiftIn()), this._parser.setExecuteHandler(n.C1.IND, () => this.index()), this._parser.setExecuteHandler(n.C1.NEL, () => this.nextLine()), this._parser.setExecuteHandler(n.C1.HTS, () => this.tabSet()), this._parser.registerOscHandler(0, new p.OscHandler((e4) => (this.setTitle(e4), this.setIconName(e4), true))), this._parser.registerOscHandler(1, new p.OscHandler((e4) => this.setIconName(e4))), this._parser.registerOscHandler(2, new p.OscHandler((e4) => this.setTitle(e4))), this._parser.registerOscHandler(4, new p.OscHandler((e4) => this.setOrReportIndexedColor(e4))), this._parser.registerOscHandler(8, new p.OscHandler((e4) => this.setHyperlink(e4))), this._parser.registerOscHandler(10, new p.OscHandler((e4) => this.setOrReportFgColor(e4))), this._parser.registerOscHandler(11, new p.OscHandler((e4) => this.setOrReportBgColor(e4))), this._parser.registerOscHandler(12, new p.OscHandler((e4) => this.setOrReportCursorColor(e4))), this._parser.registerOscHandler(104, new p.OscHandler((e4) => this.restoreIndexedColor(e4))), this._parser.registerOscHandler(110, new p.OscHandler((e4) => this.restoreFgColor(e4))), this._parser.registerOscHandler(111, new p.OscHandler((e4) => this.restoreBgColor(e4))), this._parser.registerOscHandler(112, new p.OscHandler((e4) => this.restoreCursorColor(e4))), this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()), this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()), this._parser.registerEscHandler({ final: "D" }, () => this.index()), this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()), this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()), this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()), this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()), this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()), this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()), this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)), this._parser.registerEscHandler({ intermediates: "%", final: "@" }, () => this.selectDefaultCharset()), this._parser.registerEscHandler({ intermediates: "%", final: "G" }, () => this.selectDefaultCharset());
              for (const e4 in o.CHARSETS)
                this._parser.registerEscHandler({ intermediates: "(", final: e4 }, () => this.selectCharset("(" + e4)), this._parser.registerEscHandler({ intermediates: ")", final: e4 }, () => this.selectCharset(")" + e4)), this._parser.registerEscHandler({ intermediates: "*", final: e4 }, () => this.selectCharset("*" + e4)), this._parser.registerEscHandler({ intermediates: "+", final: e4 }, () => this.selectCharset("+" + e4)), this._parser.registerEscHandler({ intermediates: "-", final: e4 }, () => this.selectCharset("-" + e4)), this._parser.registerEscHandler({ intermediates: ".", final: e4 }, () => this.selectCharset("." + e4)), this._parser.registerEscHandler({ intermediates: "/", final: e4 }, () => this.selectCharset("/" + e4));
              this._parser.registerEscHandler({ intermediates: "#", final: "8" }, () => this.screenAlignmentPattern()), this._parser.setErrorHandler((e4) => (this._logService.error("Parsing error: ", e4), e4)), this._parser.registerDcsHandler({ intermediates: "$", final: "q" }, new m.DcsHandler((e4, t4) => this.requestStatusString(e4, t4)));
            }
            _preserveStack(e3, t3, i3, s3) {
              this._parseStack.paused = true, this._parseStack.cursorStartX = e3, this._parseStack.cursorStartY = t3, this._parseStack.decodedLength = i3, this._parseStack.position = s3;
            }
            _logSlowResolvingAsync(e3) {
              this._logService.logLevel <= v.LogLevelEnum.WARN && Promise.race([e3, new Promise((e4, t3) => setTimeout(() => t3("#SLOW_TIMEOUT"), 5e3))]).catch((e4) => {
                if ("#SLOW_TIMEOUT" !== e4)
                  throw e4;
                console.warn("async parser handler taking longer than 5000 ms");
              });
            }
            _getCurrentLinkId() {
              return this._curAttrData.extended.urlId;
            }
            parse(e3, t3) {
              let i3, s3 = this._activeBuffer.x, r2 = this._activeBuffer.y, n2 = 0;
              const o2 = this._parseStack.paused;
              if (o2) {
                if (i3 = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t3))
                  return this._logSlowResolvingAsync(i3), i3;
                s3 = this._parseStack.cursorStartX, r2 = this._parseStack.cursorStartY, this._parseStack.paused = false, e3.length > b && (n2 = this._parseStack.position + b);
              }
              if (this._logService.logLevel <= v.LogLevelEnum.DEBUG && this._logService.debug("parsing data" + ("string" == typeof e3 ? ` "${e3}"` : ` "${Array.prototype.map.call(e3, (e4) => String.fromCharCode(e4)).join("")}"`), "string" == typeof e3 ? e3.split("").map((e4) => e4.charCodeAt(0)) : e3), this._parseBuffer.length < e3.length && this._parseBuffer.length < b && (this._parseBuffer = new Uint32Array(Math.min(e3.length, b))), o2 || this._dirtyRowTracker.clearRange(), e3.length > b)
                for (let t4 = n2; t4 < e3.length; t4 += b) {
                  const n3 = t4 + b < e3.length ? t4 + b : e3.length, o3 = "string" == typeof e3 ? this._stringDecoder.decode(e3.substring(t4, n3), this._parseBuffer) : this._utf8Decoder.decode(e3.subarray(t4, n3), this._parseBuffer);
                  if (i3 = this._parser.parse(this._parseBuffer, o3))
                    return this._preserveStack(s3, r2, o3, t4), this._logSlowResolvingAsync(i3), i3;
                }
              else if (!o2) {
                const t4 = "string" == typeof e3 ? this._stringDecoder.decode(e3, this._parseBuffer) : this._utf8Decoder.decode(e3, this._parseBuffer);
                if (i3 = this._parser.parse(this._parseBuffer, t4))
                  return this._preserveStack(s3, r2, t4, 0), this._logSlowResolvingAsync(i3), i3;
              }
              this._activeBuffer.x === s3 && this._activeBuffer.y === r2 || this._onCursorMove.fire();
              const a2 = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp), h2 = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
              h2 < this._bufferService.rows && this._onRequestRefreshRows.fire(Math.min(h2, this._bufferService.rows - 1), Math.min(a2, this._bufferService.rows - 1));
            }
            print(e3, t3, i3) {
              let s3, r2;
              const n2 = this._charsetService.charset, o2 = this._optionsService.rawOptions.screenReaderMode, a2 = this._bufferService.cols, h2 = this._coreService.decPrivateModes.wraparound, d2 = this._coreService.modes.insertMode, u2 = this._curAttrData;
              let f2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && i3 - t3 > 0 && 2 === f2.getWidth(this._activeBuffer.x - 1) && f2.setCellFromCodePoint(this._activeBuffer.x - 1, 0, 1, u2.fg, u2.bg, u2.extended);
              let v2 = this._parser.precedingJoinState;
              for (let p2 = t3; p2 < i3; ++p2) {
                if (s3 = e3[p2], s3 < 127 && n2) {
                  const e4 = n2[String.fromCharCode(s3)];
                  e4 && (s3 = e4.charCodeAt(0));
                }
                const t4 = this._unicodeService.charProperties(s3, v2);
                r2 = g.UnicodeService.extractWidth(t4);
                const i4 = g.UnicodeService.extractShouldJoin(t4), m2 = i4 ? g.UnicodeService.extractWidth(v2) : 0;
                if (v2 = t4, o2 && this._onA11yChar.fire((0, c.stringFromCodePoint)(s3)), this._getCurrentLinkId() && this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y), this._activeBuffer.x + r2 - m2 > a2) {
                  if (h2) {
                    const e4 = f2;
                    let t5 = this._activeBuffer.x - m2;
                    for (this._activeBuffer.x = m2, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), true)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = true), f2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y), m2 > 0 && f2 instanceof l.BufferLine && f2.copyCellsFrom(e4, t5, 0, m2, false); t5 < a2; )
                      e4.setCellFromCodePoint(t5++, 0, 1, u2.fg, u2.bg, u2.extended);
                  } else if (this._activeBuffer.x = a2 - 1, 2 === r2)
                    continue;
                }
                if (i4 && this._activeBuffer.x) {
                  const e4 = f2.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
                  f2.addCodepointToCell(this._activeBuffer.x - e4, s3, r2);
                  for (let e5 = r2 - m2; --e5 >= 0; )
                    f2.setCellFromCodePoint(this._activeBuffer.x++, 0, 0, u2.fg, u2.bg, u2.extended);
                } else if (d2 && (f2.insertCells(this._activeBuffer.x, r2 - m2, this._activeBuffer.getNullCell(u2), u2), 2 === f2.getWidth(a2 - 1) && f2.setCellFromCodePoint(a2 - 1, _.NULL_CELL_CODE, _.NULL_CELL_WIDTH, u2.fg, u2.bg, u2.extended)), f2.setCellFromCodePoint(this._activeBuffer.x++, s3, r2, u2.fg, u2.bg, u2.extended), r2 > 0)
                  for (; --r2; )
                    f2.setCellFromCodePoint(this._activeBuffer.x++, 0, 0, u2.fg, u2.bg, u2.extended);
              }
              this._parser.precedingJoinState = v2, this._activeBuffer.x < a2 && i3 - t3 > 0 && 0 === f2.getWidth(this._activeBuffer.x) && !f2.hasContent(this._activeBuffer.x) && f2.setCellFromCodePoint(this._activeBuffer.x, 0, 1, u2.fg, u2.bg, u2.extended), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            }
            registerCsiHandler(e3, t3) {
              return "t" !== e3.final || e3.prefix || e3.intermediates ? this._parser.registerCsiHandler(e3, t3) : this._parser.registerCsiHandler(e3, (e4) => !y(e4.params[0], this._optionsService.rawOptions.windowOptions) || t3(e4));
            }
            registerDcsHandler(e3, t3) {
              return this._parser.registerDcsHandler(e3, new m.DcsHandler(t3));
            }
            registerEscHandler(e3, t3) {
              return this._parser.registerEscHandler(e3, t3);
            }
            registerOscHandler(e3, t3) {
              return this._parser.registerOscHandler(e3, new p.OscHandler(t3));
            }
            bell() {
              return this._onRequestBell.fire(), true;
            }
            lineFeed() {
              return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows ? this._activeBuffer.y = this._bufferService.rows - 1 : this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), true;
            }
            carriageReturn() {
              return this._activeBuffer.x = 0, true;
            }
            backspace() {
              if (!this._coreService.decPrivateModes.reverseWraparound)
                return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, true;
              if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0)
                this._activeBuffer.x--;
              else if (0 === this._activeBuffer.x && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped) {
                this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
                const e3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                e3.hasWidth(this._activeBuffer.x) && !e3.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
              }
              return this._restrictCursor(), true;
            }
            tab() {
              if (this._activeBuffer.x >= this._bufferService.cols)
                return true;
              const e3 = this._activeBuffer.x;
              return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e3), true;
            }
            shiftOut() {
              return this._charsetService.setgLevel(1), true;
            }
            shiftIn() {
              return this._charsetService.setgLevel(0), true;
            }
            _restrictCursor(e3 = this._bufferService.cols - 1) {
              this._activeBuffer.x = Math.min(e3, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            }
            _setCursor(e3, t3) {
              this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e3, this._activeBuffer.y = this._activeBuffer.scrollTop + t3) : (this._activeBuffer.x = e3, this._activeBuffer.y = t3), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            }
            _moveCursor(e3, t3) {
              this._restrictCursor(), this._setCursor(this._activeBuffer.x + e3, this._activeBuffer.y + t3);
            }
            cursorUp(e3) {
              const t3 = this._activeBuffer.y - this._activeBuffer.scrollTop;
              return t3 >= 0 ? this._moveCursor(0, -Math.min(t3, e3.params[0] || 1)) : this._moveCursor(0, -(e3.params[0] || 1)), true;
            }
            cursorDown(e3) {
              const t3 = this._activeBuffer.scrollBottom - this._activeBuffer.y;
              return t3 >= 0 ? this._moveCursor(0, Math.min(t3, e3.params[0] || 1)) : this._moveCursor(0, e3.params[0] || 1), true;
            }
            cursorForward(e3) {
              return this._moveCursor(e3.params[0] || 1, 0), true;
            }
            cursorBackward(e3) {
              return this._moveCursor(-(e3.params[0] || 1), 0), true;
            }
            cursorNextLine(e3) {
              return this.cursorDown(e3), this._activeBuffer.x = 0, true;
            }
            cursorPrecedingLine(e3) {
              return this.cursorUp(e3), this._activeBuffer.x = 0, true;
            }
            cursorCharAbsolute(e3) {
              return this._setCursor((e3.params[0] || 1) - 1, this._activeBuffer.y), true;
            }
            cursorPosition(e3) {
              return this._setCursor(e3.length >= 2 ? (e3.params[1] || 1) - 1 : 0, (e3.params[0] || 1) - 1), true;
            }
            charPosAbsolute(e3) {
              return this._setCursor((e3.params[0] || 1) - 1, this._activeBuffer.y), true;
            }
            hPositionRelative(e3) {
              return this._moveCursor(e3.params[0] || 1, 0), true;
            }
            linePosAbsolute(e3) {
              return this._setCursor(this._activeBuffer.x, (e3.params[0] || 1) - 1), true;
            }
            vPositionRelative(e3) {
              return this._moveCursor(0, e3.params[0] || 1), true;
            }
            hVPosition(e3) {
              return this.cursorPosition(e3), true;
            }
            tabClear(e3) {
              const t3 = e3.params[0];
              return 0 === t3 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : 3 === t3 && (this._activeBuffer.tabs = {}), true;
            }
            cursorForwardTab(e3) {
              if (this._activeBuffer.x >= this._bufferService.cols)
                return true;
              let t3 = e3.params[0] || 1;
              for (; t3--; )
                this._activeBuffer.x = this._activeBuffer.nextStop();
              return true;
            }
            cursorBackwardTab(e3) {
              if (this._activeBuffer.x >= this._bufferService.cols)
                return true;
              let t3 = e3.params[0] || 1;
              for (; t3--; )
                this._activeBuffer.x = this._activeBuffer.prevStop();
              return true;
            }
            selectProtected(e3) {
              const t3 = e3.params[0];
              return 1 === t3 && (this._curAttrData.bg |= 536870912), 2 !== t3 && 0 !== t3 || (this._curAttrData.bg &= -536870913), true;
            }
            _eraseInBufferLine(e3, t3, i3, s3 = false, r2 = false) {
              const n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e3);
              n2.replaceCells(t3, i3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData(), r2), s3 && (n2.isWrapped = false);
            }
            _resetBufferLine(e3, t3 = false) {
              const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e3);
              i3 && (i3.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), t3), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e3), i3.isWrapped = false);
            }
            eraseInDisplay(e3, t3 = false) {
              let i3;
              switch (this._restrictCursor(this._bufferService.cols), e3.params[0]) {
                case 0:
                  for (i3 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i3), this._eraseInBufferLine(i3++, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t3); i3 < this._bufferService.rows; i3++)
                    this._resetBufferLine(i3, t3);
                  this._dirtyRowTracker.markDirty(i3);
                  break;
                case 1:
                  for (i3 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i3), this._eraseInBufferLine(i3, 0, this._activeBuffer.x + 1, true, t3), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(i3 + 1).isWrapped = false); i3--; )
                    this._resetBufferLine(i3, t3);
                  this._dirtyRowTracker.markDirty(0);
                  break;
                case 2:
                  for (i3 = this._bufferService.rows, this._dirtyRowTracker.markDirty(i3 - 1); i3--; )
                    this._resetBufferLine(i3, t3);
                  this._dirtyRowTracker.markDirty(0);
                  break;
                case 3:
                  const e4 = this._activeBuffer.lines.length - this._bufferService.rows;
                  e4 > 0 && (this._activeBuffer.lines.trimStart(e4), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - e4, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - e4, 0), this._onScroll.fire(0));
              }
              return true;
            }
            eraseInLine(e3, t3 = false) {
              switch (this._restrictCursor(this._bufferService.cols), e3.params[0]) {
                case 0:
                  this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t3);
                  break;
                case 1:
                  this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, false, t3);
                  break;
                case 2:
                  this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, true, t3);
              }
              return this._dirtyRowTracker.markDirty(this._activeBuffer.y), true;
            }
            insertLines(e3) {
              this._restrictCursor();
              let t3 = e3.params[0] || 1;
              if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                return true;
              const i3 = this._activeBuffer.ybase + this._activeBuffer.y, s3 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r2 = this._bufferService.rows - 1 + this._activeBuffer.ybase - s3 + 1;
              for (; t3--; )
                this._activeBuffer.lines.splice(r2 - 1, 1), this._activeBuffer.lines.splice(i3, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
              return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
            }
            deleteLines(e3) {
              this._restrictCursor();
              let t3 = e3.params[0] || 1;
              if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                return true;
              const i3 = this._activeBuffer.ybase + this._activeBuffer.y;
              let s3;
              for (s3 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, s3 = this._bufferService.rows - 1 + this._activeBuffer.ybase - s3; t3--; )
                this._activeBuffer.lines.splice(i3, 1), this._activeBuffer.lines.splice(s3, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
              return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
            }
            insertChars(e3) {
              this._restrictCursor();
              const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              return t3 && (t3.insertCells(this._activeBuffer.x, e3.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
            }
            deleteChars(e3) {
              this._restrictCursor();
              const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              return t3 && (t3.deleteCells(this._activeBuffer.x, e3.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
            }
            scrollUp(e3) {
              let t3 = e3.params[0] || 1;
              for (; t3--; )
                this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
              return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
            }
            scrollDown(e3) {
              let t3 = e3.params[0] || 1;
              for (; t3--; )
                this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(l.DEFAULT_ATTR_DATA));
              return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
            }
            scrollLeft(e3) {
              if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                return true;
              const t3 = e3.params[0] || 1;
              for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
                const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                i3.deleteCells(0, t3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i3.isWrapped = false;
              }
              return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
            }
            scrollRight(e3) {
              if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                return true;
              const t3 = e3.params[0] || 1;
              for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
                const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                i3.insertCells(0, t3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i3.isWrapped = false;
              }
              return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
            }
            insertColumns(e3) {
              if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                return true;
              const t3 = e3.params[0] || 1;
              for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
                const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                i3.insertCells(this._activeBuffer.x, t3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i3.isWrapped = false;
              }
              return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
            }
            deleteColumns(e3) {
              if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                return true;
              const t3 = e3.params[0] || 1;
              for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
                const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                i3.deleteCells(this._activeBuffer.x, t3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i3.isWrapped = false;
              }
              return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
            }
            eraseChars(e3) {
              this._restrictCursor();
              const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              return t3 && (t3.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e3.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
            }
            repeatPrecedingCharacter(e3) {
              const t3 = this._parser.precedingJoinState;
              if (!t3)
                return true;
              const i3 = e3.params[0] || 1, s3 = g.UnicodeService.extractWidth(t3), r2 = this._activeBuffer.x - s3, n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(r2), o2 = new Uint32Array(n2.length * i3);
              let a2 = 0;
              for (let e4 = 0; e4 < n2.length; ) {
                const t4 = n2.codePointAt(e4) || 0;
                o2[a2++] = t4, e4 += t4 > 65535 ? 2 : 1;
              }
              let h2 = a2;
              for (let e4 = 1; e4 < i3; ++e4)
                o2.copyWithin(h2, 0, a2), h2 += a2;
              return this.print(o2, 0, h2), true;
            }
            sendDeviceAttributesPrimary(e3) {
              return e3.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(n.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(n.C0.ESC + "[?6c")), true;
            }
            sendDeviceAttributesSecondary(e3) {
              return e3.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(n.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(n.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e3.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(n.C0.ESC + "[>83;40003;0c")), true;
            }
            _is(e3) {
              return 0 === (this._optionsService.rawOptions.termName + "").indexOf(e3);
            }
            setMode(e3) {
              for (let t3 = 0; t3 < e3.length; t3++)
                switch (e3.params[t3]) {
                  case 4:
                    this._coreService.modes.insertMode = true;
                    break;
                  case 20:
                    this._optionsService.options.convertEol = true;
                }
              return true;
            }
            setModePrivate(e3) {
              for (let t3 = 0; t3 < e3.length; t3++)
                switch (e3.params[t3]) {
                  case 1:
                    this._coreService.decPrivateModes.applicationCursorKeys = true;
                    break;
                  case 2:
                    this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), this._charsetService.setgCharset(1, o.DEFAULT_CHARSET), this._charsetService.setgCharset(2, o.DEFAULT_CHARSET), this._charsetService.setgCharset(3, o.DEFAULT_CHARSET);
                    break;
                  case 3:
                    this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                    break;
                  case 6:
                    this._coreService.decPrivateModes.origin = true, this._setCursor(0, 0);
                    break;
                  case 7:
                    this._coreService.decPrivateModes.wraparound = true;
                    break;
                  case 12:
                    this._optionsService.options.cursorBlink = true;
                    break;
                  case 45:
                    this._coreService.decPrivateModes.reverseWraparound = true;
                    break;
                  case 66:
                    this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire();
                    break;
                  case 9:
                    this._coreMouseService.activeProtocol = "X10";
                    break;
                  case 1e3:
                    this._coreMouseService.activeProtocol = "VT200";
                    break;
                  case 1002:
                    this._coreMouseService.activeProtocol = "DRAG";
                    break;
                  case 1003:
                    this._coreMouseService.activeProtocol = "ANY";
                    break;
                  case 1004:
                    this._coreService.decPrivateModes.sendFocus = true, this._onRequestSendFocus.fire();
                    break;
                  case 1005:
                    this._logService.debug("DECSET 1005 not supported (see #2507)");
                    break;
                  case 1006:
                    this._coreMouseService.activeEncoding = "SGR";
                    break;
                  case 1015:
                    this._logService.debug("DECSET 1015 not supported (see #2507)");
                    break;
                  case 1016:
                    this._coreMouseService.activeEncoding = "SGR_PIXELS";
                    break;
                  case 25:
                    this._coreService.isCursorHidden = false;
                    break;
                  case 1048:
                    this.saveCursor();
                    break;
                  case 1049:
                    this.saveCursor();
                  case 47:
                  case 1047:
                    this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                    break;
                  case 2004:
                    this._coreService.decPrivateModes.bracketedPasteMode = true;
                }
              return true;
            }
            resetMode(e3) {
              for (let t3 = 0; t3 < e3.length; t3++)
                switch (e3.params[t3]) {
                  case 4:
                    this._coreService.modes.insertMode = false;
                    break;
                  case 20:
                    this._optionsService.options.convertEol = false;
                }
              return true;
            }
            resetModePrivate(e3) {
              for (let t3 = 0; t3 < e3.length; t3++)
                switch (e3.params[t3]) {
                  case 1:
                    this._coreService.decPrivateModes.applicationCursorKeys = false;
                    break;
                  case 3:
                    this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                    break;
                  case 6:
                    this._coreService.decPrivateModes.origin = false, this._setCursor(0, 0);
                    break;
                  case 7:
                    this._coreService.decPrivateModes.wraparound = false;
                    break;
                  case 12:
                    this._optionsService.options.cursorBlink = false;
                    break;
                  case 45:
                    this._coreService.decPrivateModes.reverseWraparound = false;
                    break;
                  case 66:
                    this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire();
                    break;
                  case 9:
                  case 1e3:
                  case 1002:
                  case 1003:
                    this._coreMouseService.activeProtocol = "NONE";
                    break;
                  case 1004:
                    this._coreService.decPrivateModes.sendFocus = false;
                    break;
                  case 1005:
                    this._logService.debug("DECRST 1005 not supported (see #2507)");
                    break;
                  case 1006:
                  case 1016:
                    this._coreMouseService.activeEncoding = "DEFAULT";
                    break;
                  case 1015:
                    this._logService.debug("DECRST 1015 not supported (see #2507)");
                    break;
                  case 25:
                    this._coreService.isCursorHidden = true;
                    break;
                  case 1048:
                    this.restoreCursor();
                    break;
                  case 1049:
                  case 47:
                  case 1047:
                    this._bufferService.buffers.activateNormalBuffer(), 1049 === e3.params[t3] && this.restoreCursor(), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                    break;
                  case 2004:
                    this._coreService.decPrivateModes.bracketedPasteMode = false;
                }
              return true;
            }
            requestMode(e3, t3) {
              const i3 = this._coreService.decPrivateModes, { activeProtocol: s3, activeEncoding: r2 } = this._coreMouseService, o2 = this._coreService, { buffers: a2, cols: h2 } = this._bufferService, { active: c2, alt: l2 } = a2, d2 = this._optionsService.rawOptions, _2 = (e4) => e4 ? 1 : 2, u2 = e3.params[0];
              return f2 = u2, v2 = t3 ? 2 === u2 ? 4 : 4 === u2 ? _2(o2.modes.insertMode) : 12 === u2 ? 3 : 20 === u2 ? _2(d2.convertEol) : 0 : 1 === u2 ? _2(i3.applicationCursorKeys) : 3 === u2 ? d2.windowOptions.setWinLines ? 80 === h2 ? 2 : 132 === h2 ? 1 : 0 : 0 : 6 === u2 ? _2(i3.origin) : 7 === u2 ? _2(i3.wraparound) : 8 === u2 ? 3 : 9 === u2 ? _2("X10" === s3) : 12 === u2 ? _2(d2.cursorBlink) : 25 === u2 ? _2(!o2.isCursorHidden) : 45 === u2 ? _2(i3.reverseWraparound) : 66 === u2 ? _2(i3.applicationKeypad) : 67 === u2 ? 4 : 1e3 === u2 ? _2("VT200" === s3) : 1002 === u2 ? _2("DRAG" === s3) : 1003 === u2 ? _2("ANY" === s3) : 1004 === u2 ? _2(i3.sendFocus) : 1005 === u2 ? 4 : 1006 === u2 ? _2("SGR" === r2) : 1015 === u2 ? 4 : 1016 === u2 ? _2("SGR_PIXELS" === r2) : 1048 === u2 ? 1 : 47 === u2 || 1047 === u2 || 1049 === u2 ? _2(c2 === l2) : 2004 === u2 ? _2(i3.bracketedPasteMode) : 0, o2.triggerDataEvent(`${n.C0.ESC}[${t3 ? "" : "?"}${f2};${v2}$y`), true;
              var f2, v2;
            }
            _updateAttrColor(e3, t3, i3, s3, r2) {
              return 2 === t3 ? (e3 |= 50331648, e3 &= -16777216, e3 |= f.AttributeData.fromColorRGB([i3, s3, r2])) : 5 === t3 && (e3 &= -50331904, e3 |= 33554432 | 255 & i3), e3;
            }
            _extractColor(e3, t3, i3) {
              const s3 = [0, 0, -1, 0, 0, 0];
              let r2 = 0, n2 = 0;
              do {
                if (s3[n2 + r2] = e3.params[t3 + n2], e3.hasSubParams(t3 + n2)) {
                  const i4 = e3.getSubParams(t3 + n2);
                  let o2 = 0;
                  do {
                    5 === s3[1] && (r2 = 1), s3[n2 + o2 + 1 + r2] = i4[o2];
                  } while (++o2 < i4.length && o2 + n2 + 1 + r2 < s3.length);
                  break;
                }
                if (5 === s3[1] && n2 + r2 >= 2 || 2 === s3[1] && n2 + r2 >= 5)
                  break;
                s3[1] && (r2 = 1);
              } while (++n2 + t3 < e3.length && n2 + r2 < s3.length);
              for (let e4 = 2; e4 < s3.length; ++e4)
                -1 === s3[e4] && (s3[e4] = 0);
              switch (s3[0]) {
                case 38:
                  i3.fg = this._updateAttrColor(i3.fg, s3[1], s3[3], s3[4], s3[5]);
                  break;
                case 48:
                  i3.bg = this._updateAttrColor(i3.bg, s3[1], s3[3], s3[4], s3[5]);
                  break;
                case 58:
                  i3.extended = i3.extended.clone(), i3.extended.underlineColor = this._updateAttrColor(i3.extended.underlineColor, s3[1], s3[3], s3[4], s3[5]);
              }
              return n2;
            }
            _processUnderline(e3, t3) {
              t3.extended = t3.extended.clone(), (!~e3 || e3 > 5) && (e3 = 1), t3.extended.underlineStyle = e3, t3.fg |= 268435456, 0 === e3 && (t3.fg &= -268435457), t3.updateExtended();
            }
            _processSGR0(e3) {
              e3.fg = l.DEFAULT_ATTR_DATA.fg, e3.bg = l.DEFAULT_ATTR_DATA.bg, e3.extended = e3.extended.clone(), e3.extended.underlineStyle = 0, e3.extended.underlineColor &= -67108864, e3.updateExtended();
            }
            charAttributes(e3) {
              if (1 === e3.length && 0 === e3.params[0])
                return this._processSGR0(this._curAttrData), true;
              const t3 = e3.length;
              let i3;
              const s3 = this._curAttrData;
              for (let r2 = 0; r2 < t3; r2++)
                i3 = e3.params[r2], i3 >= 30 && i3 <= 37 ? (s3.fg &= -50331904, s3.fg |= 16777216 | i3 - 30) : i3 >= 40 && i3 <= 47 ? (s3.bg &= -50331904, s3.bg |= 16777216 | i3 - 40) : i3 >= 90 && i3 <= 97 ? (s3.fg &= -50331904, s3.fg |= 16777224 | i3 - 90) : i3 >= 100 && i3 <= 107 ? (s3.bg &= -50331904, s3.bg |= 16777224 | i3 - 100) : 0 === i3 ? this._processSGR0(s3) : 1 === i3 ? s3.fg |= 134217728 : 3 === i3 ? s3.bg |= 67108864 : 4 === i3 ? (s3.fg |= 268435456, this._processUnderline(e3.hasSubParams(r2) ? e3.getSubParams(r2)[0] : 1, s3)) : 5 === i3 ? s3.fg |= 536870912 : 7 === i3 ? s3.fg |= 67108864 : 8 === i3 ? s3.fg |= 1073741824 : 9 === i3 ? s3.fg |= 2147483648 : 2 === i3 ? s3.bg |= 134217728 : 21 === i3 ? this._processUnderline(2, s3) : 22 === i3 ? (s3.fg &= -134217729, s3.bg &= -134217729) : 23 === i3 ? s3.bg &= -67108865 : 24 === i3 ? (s3.fg &= -268435457, this._processUnderline(0, s3)) : 25 === i3 ? s3.fg &= -536870913 : 27 === i3 ? s3.fg &= -67108865 : 28 === i3 ? s3.fg &= -1073741825 : 29 === i3 ? s3.fg &= 2147483647 : 39 === i3 ? (s3.fg &= -67108864, s3.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg) : 49 === i3 ? (s3.bg &= -67108864, s3.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : 38 === i3 || 48 === i3 || 58 === i3 ? r2 += this._extractColor(e3, r2, s3) : 53 === i3 ? s3.bg |= 1073741824 : 55 === i3 ? s3.bg &= -1073741825 : 59 === i3 ? (s3.extended = s3.extended.clone(), s3.extended.underlineColor = -1, s3.updateExtended()) : 100 === i3 ? (s3.fg &= -67108864, s3.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg, s3.bg &= -67108864, s3.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", i3);
              return true;
            }
            deviceStatus(e3) {
              switch (e3.params[0]) {
                case 5:
                  this._coreService.triggerDataEvent(`${n.C0.ESC}[0n`);
                  break;
                case 6:
                  const e4 = this._activeBuffer.y + 1, t3 = this._activeBuffer.x + 1;
                  this._coreService.triggerDataEvent(`${n.C0.ESC}[${e4};${t3}R`);
              }
              return true;
            }
            deviceStatusPrivate(e3) {
              if (6 === e3.params[0]) {
                const e4 = this._activeBuffer.y + 1, t3 = this._activeBuffer.x + 1;
                this._coreService.triggerDataEvent(`${n.C0.ESC}[?${e4};${t3}R`);
              }
              return true;
            }
            softReset(e3) {
              return this._coreService.isCursorHidden = false, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = false, true;
            }
            setCursorStyle(e3) {
              const t3 = e3.params[0] || 1;
              switch (t3) {
                case 1:
                case 2:
                  this._optionsService.options.cursorStyle = "block";
                  break;
                case 3:
                case 4:
                  this._optionsService.options.cursorStyle = "underline";
                  break;
                case 5:
                case 6:
                  this._optionsService.options.cursorStyle = "bar";
              }
              const i3 = t3 % 2 == 1;
              return this._optionsService.options.cursorBlink = i3, true;
            }
            setScrollRegion(e3) {
              const t3 = e3.params[0] || 1;
              let i3;
              return (e3.length < 2 || (i3 = e3.params[1]) > this._bufferService.rows || 0 === i3) && (i3 = this._bufferService.rows), i3 > t3 && (this._activeBuffer.scrollTop = t3 - 1, this._activeBuffer.scrollBottom = i3 - 1, this._setCursor(0, 0)), true;
            }
            windowOptions(e3) {
              if (!y(e3.params[0], this._optionsService.rawOptions.windowOptions))
                return true;
              const t3 = e3.length > 1 ? e3.params[1] : 0;
              switch (e3.params[0]) {
                case 14:
                  2 !== t3 && this._onRequestWindowsOptionsReport.fire(w.GET_WIN_SIZE_PIXELS);
                  break;
                case 16:
                  this._onRequestWindowsOptionsReport.fire(w.GET_CELL_SIZE_PIXELS);
                  break;
                case 18:
                  this._bufferService && this._coreService.triggerDataEvent(`${n.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
                  break;
                case 22:
                  0 !== t3 && 2 !== t3 || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t3 && 1 !== t3 || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                  break;
                case 23:
                  0 !== t3 && 2 !== t3 || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t3 && 1 !== t3 || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
              }
              return true;
            }
            saveCursor(e3) {
              return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, true;
            }
            restoreCursor(e3) {
              return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), true;
            }
            setTitle(e3) {
              return this._windowTitle = e3, this._onTitleChange.fire(e3), true;
            }
            setIconName(e3) {
              return this._iconName = e3, true;
            }
            setOrReportIndexedColor(e3) {
              const t3 = [], i3 = e3.split(";");
              for (; i3.length > 1; ) {
                const e4 = i3.shift(), s3 = i3.shift();
                if (/^\d+$/.exec(e4)) {
                  const i4 = parseInt(e4);
                  if (D(i4))
                    if ("?" === s3)
                      t3.push({ type: 0, index: i4 });
                    else {
                      const e5 = (0, S.parseColor)(s3);
                      e5 && t3.push({ type: 1, index: i4, color: e5 });
                    }
                }
              }
              return t3.length && this._onColor.fire(t3), true;
            }
            setHyperlink(e3) {
              const t3 = e3.split(";");
              return !(t3.length < 2) && (t3[1] ? this._createHyperlink(t3[0], t3[1]) : !t3[0] && this._finishHyperlink());
            }
            _createHyperlink(e3, t3) {
              this._getCurrentLinkId() && this._finishHyperlink();
              const i3 = e3.split(":");
              let s3;
              const r2 = i3.findIndex((e4) => e4.startsWith("id="));
              return -1 !== r2 && (s3 = i3[r2].slice(3) || void 0), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({ id: s3, uri: t3 }), this._curAttrData.updateExtended(), true;
            }
            _finishHyperlink() {
              return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), true;
            }
            _setOrReportSpecialColor(e3, t3) {
              const i3 = e3.split(";");
              for (let e4 = 0; e4 < i3.length && !(t3 >= this._specialColors.length); ++e4, ++t3)
                if ("?" === i3[e4])
                  this._onColor.fire([{ type: 0, index: this._specialColors[t3] }]);
                else {
                  const s3 = (0, S.parseColor)(i3[e4]);
                  s3 && this._onColor.fire([{ type: 1, index: this._specialColors[t3], color: s3 }]);
                }
              return true;
            }
            setOrReportFgColor(e3) {
              return this._setOrReportSpecialColor(e3, 0);
            }
            setOrReportBgColor(e3) {
              return this._setOrReportSpecialColor(e3, 1);
            }
            setOrReportCursorColor(e3) {
              return this._setOrReportSpecialColor(e3, 2);
            }
            restoreIndexedColor(e3) {
              if (!e3)
                return this._onColor.fire([{ type: 2 }]), true;
              const t3 = [], i3 = e3.split(";");
              for (let e4 = 0; e4 < i3.length; ++e4)
                if (/^\d+$/.exec(i3[e4])) {
                  const s3 = parseInt(i3[e4]);
                  D(s3) && t3.push({ type: 2, index: s3 });
                }
              return t3.length && this._onColor.fire(t3), true;
            }
            restoreFgColor(e3) {
              return this._onColor.fire([{ type: 2, index: 256 }]), true;
            }
            restoreBgColor(e3) {
              return this._onColor.fire([{ type: 2, index: 257 }]), true;
            }
            restoreCursorColor(e3) {
              return this._onColor.fire([{ type: 2, index: 258 }]), true;
            }
            nextLine() {
              return this._activeBuffer.x = 0, this.index(), true;
            }
            keypadApplicationMode() {
              return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire(), true;
            }
            keypadNumericMode() {
              return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire(), true;
            }
            selectDefaultCharset() {
              return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), true;
            }
            selectCharset(e3) {
              return 2 !== e3.length ? (this.selectDefaultCharset(), true) : ("/" === e3[0] || this._charsetService.setgCharset(C[e3[0]], o.CHARSETS[e3[1]] || o.DEFAULT_CHARSET), true);
            }
            index() {
              return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), true;
            }
            tabSet() {
              return this._activeBuffer.tabs[this._activeBuffer.x] = true, true;
            }
            reverseIndex() {
              if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
                const e3 = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
                this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e3, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
              } else
                this._activeBuffer.y--, this._restrictCursor();
              return true;
            }
            fullReset() {
              return this._parser.reset(), this._onRequestReset.fire(), true;
            }
            reset() {
              this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone();
            }
            _eraseAttrData() {
              return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
            }
            setgLevel(e3) {
              return this._charsetService.setgLevel(e3), true;
            }
            screenAlignmentPattern() {
              const e3 = new u.CellData();
              e3.content = 1 << 22 | "E".charCodeAt(0), e3.fg = this._curAttrData.fg, e3.bg = this._curAttrData.bg, this._setCursor(0, 0);
              for (let t3 = 0; t3 < this._bufferService.rows; ++t3) {
                const i3 = this._activeBuffer.ybase + this._activeBuffer.y + t3, s3 = this._activeBuffer.lines.get(i3);
                s3 && (s3.fill(e3), s3.isWrapped = false);
              }
              return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), true;
            }
            requestStatusString(e3, t3) {
              const i3 = this._bufferService.buffer, s3 = this._optionsService.rawOptions;
              return ((e4) => (this._coreService.triggerDataEvent(`${n.C0.ESC}${e4}${n.C0.ESC}\\`), true))('"q' === e3 ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : '"p' === e3 ? 'P1$r61;1"p' : "r" === e3 ? `P1$r${i3.scrollTop + 1};${i3.scrollBottom + 1}r` : "m" === e3 ? "P1$r0m" : " q" === e3 ? `P1$r${{ block: 2, underline: 4, bar: 6 }[s3.cursorStyle] - (s3.cursorBlink ? 1 : 0)} q` : "P0$r");
            }
            markRangeDirty(e3, t3) {
              this._dirtyRowTracker.markRangeDirty(e3, t3);
            }
          }
          t2.InputHandler = k;
          let L = class {
            constructor(e3) {
              this._bufferService = e3, this.clearRange();
            }
            clearRange() {
              this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
            }
            markDirty(e3) {
              e3 < this.start ? this.start = e3 : e3 > this.end && (this.end = e3);
            }
            markRangeDirty(e3, t3) {
              e3 > t3 && (E = e3, e3 = t3, t3 = E), e3 < this.start && (this.start = e3), t3 > this.end && (this.end = t3);
            }
            markAllDirty() {
              this.markRangeDirty(0, this._bufferService.rows - 1);
            }
          };
          function D(e3) {
            return 0 <= e3 && e3 < 256;
          }
          L = s2([r(0, v.IBufferService)], L);
        }, 844: (e2, t2) => {
          function i2(e3) {
            for (const t3 of e3)
              t3.dispose();
            e3.length = 0;
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getDisposeArrayDisposable = t2.disposeArray = t2.toDisposable = t2.MutableDisposable = t2.Disposable = void 0, t2.Disposable = class {
            constructor() {
              this._disposables = [], this._isDisposed = false;
            }
            dispose() {
              this._isDisposed = true;
              for (const e3 of this._disposables)
                e3.dispose();
              this._disposables.length = 0;
            }
            register(e3) {
              return this._disposables.push(e3), e3;
            }
            unregister(e3) {
              const t3 = this._disposables.indexOf(e3);
              -1 !== t3 && this._disposables.splice(t3, 1);
            }
          }, t2.MutableDisposable = class {
            constructor() {
              this._isDisposed = false;
            }
            get value() {
              return this._isDisposed ? void 0 : this._value;
            }
            set value(e3) {
              this._isDisposed || e3 === this._value || (this._value?.dispose(), this._value = e3);
            }
            clear() {
              this.value = void 0;
            }
            dispose() {
              this._isDisposed = true, this._value?.dispose(), this._value = void 0;
            }
          }, t2.toDisposable = function(e3) {
            return { dispose: e3 };
          }, t2.disposeArray = i2, t2.getDisposeArrayDisposable = function(e3) {
            return { dispose: () => i2(e3) };
          };
        }, 1505: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.FourKeyMap = t2.TwoKeyMap = void 0;
          class i2 {
            constructor() {
              this._data = {};
            }
            set(e3, t3, i3) {
              this._data[e3] || (this._data[e3] = {}), this._data[e3][t3] = i3;
            }
            get(e3, t3) {
              return this._data[e3] ? this._data[e3][t3] : void 0;
            }
            clear() {
              this._data = {};
            }
          }
          t2.TwoKeyMap = i2, t2.FourKeyMap = class {
            constructor() {
              this._data = new i2();
            }
            set(e3, t3, s2, r, n) {
              this._data.get(e3, t3) || this._data.set(e3, t3, new i2()), this._data.get(e3, t3).set(s2, r, n);
            }
            get(e3, t3, i3, s2) {
              return this._data.get(e3, t3)?.get(i3, s2);
            }
            clear() {
              this._data.clear();
            }
          };
        }, 6114: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.isChromeOS = t2.isLinux = t2.isWindows = t2.isIphone = t2.isIpad = t2.isMac = t2.getSafariVersion = t2.isSafari = t2.isLegacyEdge = t2.isFirefox = t2.isNode = void 0, t2.isNode = "undefined" != typeof process;
          const i2 = t2.isNode ? "node" : navigator.userAgent, s2 = t2.isNode ? "node" : navigator.platform;
          t2.isFirefox = i2.includes("Firefox"), t2.isLegacyEdge = i2.includes("Edge"), t2.isSafari = /^((?!chrome|android).)*safari/i.test(i2), t2.getSafariVersion = function() {
            if (!t2.isSafari)
              return 0;
            const e3 = i2.match(/Version\/(\d+)/);
            return null === e3 || e3.length < 2 ? 0 : parseInt(e3[1]);
          }, t2.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(s2), t2.isIpad = "iPad" === s2, t2.isIphone = "iPhone" === s2, t2.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(s2), t2.isLinux = s2.indexOf("Linux") >= 0, t2.isChromeOS = /\bCrOS\b/.test(i2);
        }, 6106: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SortedList = void 0;
          let i2 = 0;
          t2.SortedList = class {
            constructor(e3) {
              this._getKey = e3, this._array = [];
            }
            clear() {
              this._array.length = 0;
            }
            insert(e3) {
              0 !== this._array.length ? (i2 = this._search(this._getKey(e3)), this._array.splice(i2, 0, e3)) : this._array.push(e3);
            }
            delete(e3) {
              if (0 === this._array.length)
                return false;
              const t3 = this._getKey(e3);
              if (void 0 === t3)
                return false;
              if (i2 = this._search(t3), -1 === i2)
                return false;
              if (this._getKey(this._array[i2]) !== t3)
                return false;
              do {
                if (this._array[i2] === e3)
                  return this._array.splice(i2, 1), true;
              } while (++i2 < this._array.length && this._getKey(this._array[i2]) === t3);
              return false;
            }
            *getKeyIterator(e3) {
              if (0 !== this._array.length && (i2 = this._search(e3), !(i2 < 0 || i2 >= this._array.length) && this._getKey(this._array[i2]) === e3))
                do {
                  yield this._array[i2];
                } while (++i2 < this._array.length && this._getKey(this._array[i2]) === e3);
            }
            forEachByKey(e3, t3) {
              if (0 !== this._array.length && (i2 = this._search(e3), !(i2 < 0 || i2 >= this._array.length) && this._getKey(this._array[i2]) === e3))
                do {
                  t3(this._array[i2]);
                } while (++i2 < this._array.length && this._getKey(this._array[i2]) === e3);
            }
            values() {
              return [...this._array].values();
            }
            _search(e3) {
              let t3 = 0, i3 = this._array.length - 1;
              for (; i3 >= t3; ) {
                let s2 = t3 + i3 >> 1;
                const r = this._getKey(this._array[s2]);
                if (r > e3)
                  i3 = s2 - 1;
                else {
                  if (!(r < e3)) {
                    for (; s2 > 0 && this._getKey(this._array[s2 - 1]) === e3; )
                      s2--;
                    return s2;
                  }
                  t3 = s2 + 1;
                }
              }
              return t3;
            }
          };
        }, 7226: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DebouncedIdleTask = t2.IdleTaskQueue = t2.PriorityTaskQueue = void 0;
          const s2 = i2(6114);
          class r {
            constructor() {
              this._tasks = [], this._i = 0;
            }
            enqueue(e3) {
              this._tasks.push(e3), this._start();
            }
            flush() {
              for (; this._i < this._tasks.length; )
                this._tasks[this._i]() || this._i++;
              this.clear();
            }
            clear() {
              this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
            }
            _start() {
              this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
            }
            _process(e3) {
              this._idleCallback = void 0;
              let t3 = 0, i3 = 0, s3 = e3.timeRemaining(), r2 = 0;
              for (; this._i < this._tasks.length; ) {
                if (t3 = Date.now(), this._tasks[this._i]() || this._i++, t3 = Math.max(1, Date.now() - t3), i3 = Math.max(t3, i3), r2 = e3.timeRemaining(), 1.5 * i3 > r2)
                  return s3 - t3 < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s3 - t3))}ms`), void this._start();
                s3 = r2;
              }
              this.clear();
            }
          }
          class n extends r {
            _requestCallback(e3) {
              return setTimeout(() => e3(this._createDeadline(16)));
            }
            _cancelCallback(e3) {
              clearTimeout(e3);
            }
            _createDeadline(e3) {
              const t3 = Date.now() + e3;
              return { timeRemaining: () => Math.max(0, t3 - Date.now()) };
            }
          }
          t2.PriorityTaskQueue = n, t2.IdleTaskQueue = !s2.isNode && "requestIdleCallback" in window ? class extends r {
            _requestCallback(e3) {
              return requestIdleCallback(e3);
            }
            _cancelCallback(e3) {
              cancelIdleCallback(e3);
            }
          } : n, t2.DebouncedIdleTask = class {
            constructor() {
              this._queue = new t2.IdleTaskQueue();
            }
            set(e3) {
              this._queue.clear(), this._queue.enqueue(e3);
            }
            flush() {
              this._queue.flush();
            }
          };
        }, 9282: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.updateWindowsModeWrappedState = void 0;
          const s2 = i2(643);
          t2.updateWindowsModeWrappedState = function(e3) {
            const t3 = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y - 1), i3 = t3?.get(e3.cols - 1), r = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y);
            r && i3 && (r.isWrapped = i3[s2.CHAR_DATA_CODE_INDEX] !== s2.NULL_CELL_CODE && i3[s2.CHAR_DATA_CODE_INDEX] !== s2.WHITESPACE_CELL_CODE);
          };
        }, 3734: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ExtendedAttrs = t2.AttributeData = void 0;
          class i2 {
            constructor() {
              this.fg = 0, this.bg = 0, this.extended = new s2();
            }
            static toColorRGB(e3) {
              return [e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3];
            }
            static fromColorRGB(e3) {
              return (255 & e3[0]) << 16 | (255 & e3[1]) << 8 | 255 & e3[2];
            }
            clone() {
              const e3 = new i2();
              return e3.fg = this.fg, e3.bg = this.bg, e3.extended = this.extended.clone(), e3;
            }
            isInverse() {
              return 67108864 & this.fg;
            }
            isBold() {
              return 134217728 & this.fg;
            }
            isUnderline() {
              return this.hasExtendedAttrs() && 0 !== this.extended.underlineStyle ? 1 : 268435456 & this.fg;
            }
            isBlink() {
              return 536870912 & this.fg;
            }
            isInvisible() {
              return 1073741824 & this.fg;
            }
            isItalic() {
              return 67108864 & this.bg;
            }
            isDim() {
              return 134217728 & this.bg;
            }
            isStrikethrough() {
              return 2147483648 & this.fg;
            }
            isProtected() {
              return 536870912 & this.bg;
            }
            isOverline() {
              return 1073741824 & this.bg;
            }
            getFgColorMode() {
              return 50331648 & this.fg;
            }
            getBgColorMode() {
              return 50331648 & this.bg;
            }
            isFgRGB() {
              return 50331648 == (50331648 & this.fg);
            }
            isBgRGB() {
              return 50331648 == (50331648 & this.bg);
            }
            isFgPalette() {
              return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
            }
            isBgPalette() {
              return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
            }
            isFgDefault() {
              return 0 == (50331648 & this.fg);
            }
            isBgDefault() {
              return 0 == (50331648 & this.bg);
            }
            isAttributeDefault() {
              return 0 === this.fg && 0 === this.bg;
            }
            getFgColor() {
              switch (50331648 & this.fg) {
                case 16777216:
                case 33554432:
                  return 255 & this.fg;
                case 50331648:
                  return 16777215 & this.fg;
                default:
                  return -1;
              }
            }
            getBgColor() {
              switch (50331648 & this.bg) {
                case 16777216:
                case 33554432:
                  return 255 & this.bg;
                case 50331648:
                  return 16777215 & this.bg;
                default:
                  return -1;
              }
            }
            hasExtendedAttrs() {
              return 268435456 & this.bg;
            }
            updateExtended() {
              this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
            }
            getUnderlineColor() {
              if (268435456 & this.bg && ~this.extended.underlineColor)
                switch (50331648 & this.extended.underlineColor) {
                  case 16777216:
                  case 33554432:
                    return 255 & this.extended.underlineColor;
                  case 50331648:
                    return 16777215 & this.extended.underlineColor;
                  default:
                    return this.getFgColor();
                }
              return this.getFgColor();
            }
            getUnderlineColorMode() {
              return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
            }
            isUnderlineColorRGB() {
              return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB();
            }
            isUnderlineColorPalette() {
              return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette();
            }
            isUnderlineColorDefault() {
              return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
            }
            getUnderlineStyle() {
              return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
            }
          }
          t2.AttributeData = i2;
          class s2 {
            get ext() {
              return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
            }
            set ext(e3) {
              this._ext = e3;
            }
            get underlineStyle() {
              return this._urlId ? 5 : (469762048 & this._ext) >> 26;
            }
            set underlineStyle(e3) {
              this._ext &= -469762049, this._ext |= e3 << 26 & 469762048;
            }
            get underlineColor() {
              return 67108863 & this._ext;
            }
            set underlineColor(e3) {
              this._ext &= -67108864, this._ext |= 67108863 & e3;
            }
            get urlId() {
              return this._urlId;
            }
            set urlId(e3) {
              this._urlId = e3;
            }
            constructor(e3 = 0, t3 = 0) {
              this._ext = 0, this._urlId = 0, this._ext = e3, this._urlId = t3;
            }
            clone() {
              return new s2(this._ext, this._urlId);
            }
            isEmpty() {
              return 0 === this.underlineStyle && 0 === this._urlId;
            }
          }
          t2.ExtendedAttrs = s2;
        }, 9092: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Buffer = t2.MAX_BUFFER_SIZE = void 0;
          const s2 = i2(6349), r = i2(7226), n = i2(3734), o = i2(8437), a = i2(4634), h = i2(511), c = i2(643), l = i2(4863), d = i2(7116);
          t2.MAX_BUFFER_SIZE = 4294967295, t2.Buffer = class {
            constructor(e3, t3, i3) {
              this._hasScrollback = e3, this._optionsService = t3, this._bufferService = i3, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.tabs = {}, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = o.DEFAULT_ATTR_DATA.clone(), this.savedCharset = d.DEFAULT_CHARSET, this.markers = [], this._nullCell = h.CellData.fromCharData([0, c.NULL_CELL_CHAR, c.NULL_CELL_WIDTH, c.NULL_CELL_CODE]), this._whitespaceCell = h.CellData.fromCharData([0, c.WHITESPACE_CELL_CHAR, c.WHITESPACE_CELL_WIDTH, c.WHITESPACE_CELL_CODE]), this._isClearing = false, this._memoryCleanupQueue = new r.IdleTaskQueue(), this._memoryCleanupPosition = 0, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new s2.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
            }
            getNullCell(e3) {
              return e3 ? (this._nullCell.fg = e3.fg, this._nullCell.bg = e3.bg, this._nullCell.extended = e3.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new n.ExtendedAttrs()), this._nullCell;
            }
            getWhitespaceCell(e3) {
              return e3 ? (this._whitespaceCell.fg = e3.fg, this._whitespaceCell.bg = e3.bg, this._whitespaceCell.extended = e3.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new n.ExtendedAttrs()), this._whitespaceCell;
            }
            getBlankLine(e3, t3) {
              return new o.BufferLine(this._bufferService.cols, this.getNullCell(e3), t3);
            }
            get hasScrollback() {
              return this._hasScrollback && this.lines.maxLength > this._rows;
            }
            get isCursorInViewport() {
              const e3 = this.ybase + this.y - this.ydisp;
              return e3 >= 0 && e3 < this._rows;
            }
            _getCorrectBufferLength(e3) {
              if (!this._hasScrollback)
                return e3;
              const i3 = e3 + this._optionsService.rawOptions.scrollback;
              return i3 > t2.MAX_BUFFER_SIZE ? t2.MAX_BUFFER_SIZE : i3;
            }
            fillViewportRows(e3) {
              if (0 === this.lines.length) {
                void 0 === e3 && (e3 = o.DEFAULT_ATTR_DATA);
                let t3 = this._rows;
                for (; t3--; )
                  this.lines.push(this.getBlankLine(e3));
              }
            }
            clear() {
              this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new s2.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
            }
            resize(e3, t3) {
              const i3 = this.getNullCell(o.DEFAULT_ATTR_DATA);
              let s3 = 0;
              const r2 = this._getCorrectBufferLength(t3);
              if (r2 > this.lines.maxLength && (this.lines.maxLength = r2), this.lines.length > 0) {
                if (this._cols < e3)
                  for (let t4 = 0; t4 < this.lines.length; t4++)
                    s3 += +this.lines.get(t4).resize(e3, i3);
                let n2 = 0;
                if (this._rows < t3)
                  for (let s4 = this._rows; s4 < t3; s4++)
                    this.lines.length < t3 + this.ybase && (this._optionsService.rawOptions.windowsMode || void 0 !== this._optionsService.rawOptions.windowsPty.backend || void 0 !== this._optionsService.rawOptions.windowsPty.buildNumber ? this.lines.push(new o.BufferLine(e3, i3)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + n2 + 1 ? (this.ybase--, n2++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new o.BufferLine(e3, i3)));
                else
                  for (let e4 = this._rows; e4 > t3; e4--)
                    this.lines.length > t3 + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                if (r2 < this.lines.maxLength) {
                  const e4 = this.lines.length - r2;
                  e4 > 0 && (this.lines.trimStart(e4), this.ybase = Math.max(this.ybase - e4, 0), this.ydisp = Math.max(this.ydisp - e4, 0), this.savedY = Math.max(this.savedY - e4, 0)), this.lines.maxLength = r2;
                }
                this.x = Math.min(this.x, e3 - 1), this.y = Math.min(this.y, t3 - 1), n2 && (this.y += n2), this.savedX = Math.min(this.savedX, e3 - 1), this.scrollTop = 0;
              }
              if (this.scrollBottom = t3 - 1, this._isReflowEnabled && (this._reflow(e3, t3), this._cols > e3))
                for (let t4 = 0; t4 < this.lines.length; t4++)
                  s3 += +this.lines.get(t4).resize(e3, i3);
              this._cols = e3, this._rows = t3, this._memoryCleanupQueue.clear(), s3 > 0.1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup()));
            }
            _batchedMemoryCleanup() {
              let e3 = true;
              this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, e3 = false);
              let t3 = 0;
              for (; this._memoryCleanupPosition < this.lines.length; )
                if (t3 += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), t3 > 100)
                  return true;
              return e3;
            }
            get _isReflowEnabled() {
              const e3 = this._optionsService.rawOptions.windowsPty;
              return e3 && e3.buildNumber ? this._hasScrollback && "conpty" === e3.backend && e3.buildNumber >= 21376 : this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
            }
            _reflow(e3, t3) {
              this._cols !== e3 && (e3 > this._cols ? this._reflowLarger(e3, t3) : this._reflowSmaller(e3, t3));
            }
            _reflowLarger(e3, t3) {
              const i3 = (0, a.reflowLargerGetLinesToRemove)(this.lines, this._cols, e3, this.ybase + this.y, this.getNullCell(o.DEFAULT_ATTR_DATA));
              if (i3.length > 0) {
                const s3 = (0, a.reflowLargerCreateNewLayout)(this.lines, i3);
                (0, a.reflowLargerApplyNewLayout)(this.lines, s3.layout), this._reflowLargerAdjustViewport(e3, t3, s3.countRemoved);
              }
            }
            _reflowLargerAdjustViewport(e3, t3, i3) {
              const s3 = this.getNullCell(o.DEFAULT_ATTR_DATA);
              let r2 = i3;
              for (; r2-- > 0; )
                0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t3 && this.lines.push(new o.BufferLine(e3, s3))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
              this.savedY = Math.max(this.savedY - i3, 0);
            }
            _reflowSmaller(e3, t3) {
              const i3 = this.getNullCell(o.DEFAULT_ATTR_DATA), s3 = [];
              let r2 = 0;
              for (let n2 = this.lines.length - 1; n2 >= 0; n2--) {
                let h2 = this.lines.get(n2);
                if (!h2 || !h2.isWrapped && h2.getTrimmedLength() <= e3)
                  continue;
                const c2 = [h2];
                for (; h2.isWrapped && n2 > 0; )
                  h2 = this.lines.get(--n2), c2.unshift(h2);
                const l2 = this.ybase + this.y;
                if (l2 >= n2 && l2 < n2 + c2.length)
                  continue;
                const d2 = c2[c2.length - 1].getTrimmedLength(), _ = (0, a.reflowSmallerGetNewLineLengths)(c2, this._cols, e3), u = _.length - c2.length;
                let f;
                f = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + u) : Math.max(0, this.lines.length - this.lines.maxLength + u);
                const v = [];
                for (let e4 = 0; e4 < u; e4++) {
                  const e5 = this.getBlankLine(o.DEFAULT_ATTR_DATA, true);
                  v.push(e5);
                }
                v.length > 0 && (s3.push({ start: n2 + c2.length + r2, newLines: v }), r2 += v.length), c2.push(...v);
                let g = _.length - 1, p = _[g];
                0 === p && (g--, p = _[g]);
                let m = c2.length - u - 1, S = d2;
                for (; m >= 0; ) {
                  const e4 = Math.min(S, p);
                  if (void 0 === c2[g])
                    break;
                  if (c2[g].copyCellsFrom(c2[m], S - e4, p - e4, e4, true), p -= e4, 0 === p && (g--, p = _[g]), S -= e4, 0 === S) {
                    m--;
                    const e5 = Math.max(m, 0);
                    S = (0, a.getWrappedLineTrimmedLength)(c2, e5, this._cols);
                  }
                }
                for (let t4 = 0; t4 < c2.length; t4++)
                  _[t4] < e3 && c2[t4].setCell(_[t4], i3);
                let C = u - f;
                for (; C-- > 0; )
                  0 === this.ybase ? this.y < t3 - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + r2) - t3 && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                this.savedY = Math.min(this.savedY + u, this.ybase + t3 - 1);
              }
              if (s3.length > 0) {
                const e4 = [], t4 = [];
                for (let e5 = 0; e5 < this.lines.length; e5++)
                  t4.push(this.lines.get(e5));
                const i4 = this.lines.length;
                let n2 = i4 - 1, o2 = 0, a2 = s3[o2];
                this.lines.length = Math.min(this.lines.maxLength, this.lines.length + r2);
                let h2 = 0;
                for (let c3 = Math.min(this.lines.maxLength - 1, i4 + r2 - 1); c3 >= 0; c3--)
                  if (a2 && a2.start > n2 + h2) {
                    for (let e5 = a2.newLines.length - 1; e5 >= 0; e5--)
                      this.lines.set(c3--, a2.newLines[e5]);
                    c3++, e4.push({ index: n2 + 1, amount: a2.newLines.length }), h2 += a2.newLines.length, a2 = s3[++o2];
                  } else
                    this.lines.set(c3, t4[n2--]);
                let c2 = 0;
                for (let t5 = e4.length - 1; t5 >= 0; t5--)
                  e4[t5].index += c2, this.lines.onInsertEmitter.fire(e4[t5]), c2 += e4[t5].amount;
                const l2 = Math.max(0, i4 + r2 - this.lines.maxLength);
                l2 > 0 && this.lines.onTrimEmitter.fire(l2);
              }
            }
            translateBufferLineToString(e3, t3, i3 = 0, s3) {
              const r2 = this.lines.get(e3);
              return r2 ? r2.translateToString(t3, i3, s3) : "";
            }
            getWrappedRangeForLine(e3) {
              let t3 = e3, i3 = e3;
              for (; t3 > 0 && this.lines.get(t3).isWrapped; )
                t3--;
              for (; i3 + 1 < this.lines.length && this.lines.get(i3 + 1).isWrapped; )
                i3++;
              return { first: t3, last: i3 };
            }
            setupTabStops(e3) {
              for (null != e3 ? this.tabs[e3] || (e3 = this.prevStop(e3)) : (this.tabs = {}, e3 = 0); e3 < this._cols; e3 += this._optionsService.rawOptions.tabStopWidth)
                this.tabs[e3] = true;
            }
            prevStop(e3) {
              for (null == e3 && (e3 = this.x); !this.tabs[--e3] && e3 > 0; )
                ;
              return e3 >= this._cols ? this._cols - 1 : e3 < 0 ? 0 : e3;
            }
            nextStop(e3) {
              for (null == e3 && (e3 = this.x); !this.tabs[++e3] && e3 < this._cols; )
                ;
              return e3 >= this._cols ? this._cols - 1 : e3 < 0 ? 0 : e3;
            }
            clearMarkers(e3) {
              this._isClearing = true;
              for (let t3 = 0; t3 < this.markers.length; t3++)
                this.markers[t3].line === e3 && (this.markers[t3].dispose(), this.markers.splice(t3--, 1));
              this._isClearing = false;
            }
            clearAllMarkers() {
              this._isClearing = true;
              for (let e3 = 0; e3 < this.markers.length; e3++)
                this.markers[e3].dispose(), this.markers.splice(e3--, 1);
              this._isClearing = false;
            }
            addMarker(e3) {
              const t3 = new l.Marker(e3);
              return this.markers.push(t3), t3.register(this.lines.onTrim((e4) => {
                t3.line -= e4, t3.line < 0 && t3.dispose();
              })), t3.register(this.lines.onInsert((e4) => {
                t3.line >= e4.index && (t3.line += e4.amount);
              })), t3.register(this.lines.onDelete((e4) => {
                t3.line >= e4.index && t3.line < e4.index + e4.amount && t3.dispose(), t3.line > e4.index && (t3.line -= e4.amount);
              })), t3.register(t3.onDispose(() => this._removeMarker(t3))), t3;
            }
            _removeMarker(e3) {
              this._isClearing || this.markers.splice(this.markers.indexOf(e3), 1);
            }
          };
        }, 8437: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLine = t2.DEFAULT_ATTR_DATA = void 0;
          const s2 = i2(3734), r = i2(511), n = i2(643), o = i2(482);
          t2.DEFAULT_ATTR_DATA = Object.freeze(new s2.AttributeData());
          let a = 0;
          class h {
            constructor(e3, t3, i3 = false) {
              this.isWrapped = i3, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e3);
              const s3 = t3 || r.CellData.fromCharData([0, n.NULL_CELL_CHAR, n.NULL_CELL_WIDTH, n.NULL_CELL_CODE]);
              for (let t4 = 0; t4 < e3; ++t4)
                this.setCell(t4, s3);
              this.length = e3;
            }
            get(e3) {
              const t3 = this._data[3 * e3 + 0], i3 = 2097151 & t3;
              return [this._data[3 * e3 + 1], 2097152 & t3 ? this._combined[e3] : i3 ? (0, o.stringFromCodePoint)(i3) : "", t3 >> 22, 2097152 & t3 ? this._combined[e3].charCodeAt(this._combined[e3].length - 1) : i3];
            }
            set(e3, t3) {
              this._data[3 * e3 + 1] = t3[n.CHAR_DATA_ATTR_INDEX], t3[n.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e3] = t3[1], this._data[3 * e3 + 0] = 2097152 | e3 | t3[n.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e3 + 0] = t3[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t3[n.CHAR_DATA_WIDTH_INDEX] << 22;
            }
            getWidth(e3) {
              return this._data[3 * e3 + 0] >> 22;
            }
            hasWidth(e3) {
              return 12582912 & this._data[3 * e3 + 0];
            }
            getFg(e3) {
              return this._data[3 * e3 + 1];
            }
            getBg(e3) {
              return this._data[3 * e3 + 2];
            }
            hasContent(e3) {
              return 4194303 & this._data[3 * e3 + 0];
            }
            getCodePoint(e3) {
              const t3 = this._data[3 * e3 + 0];
              return 2097152 & t3 ? this._combined[e3].charCodeAt(this._combined[e3].length - 1) : 2097151 & t3;
            }
            isCombined(e3) {
              return 2097152 & this._data[3 * e3 + 0];
            }
            getString(e3) {
              const t3 = this._data[3 * e3 + 0];
              return 2097152 & t3 ? this._combined[e3] : 2097151 & t3 ? (0, o.stringFromCodePoint)(2097151 & t3) : "";
            }
            isProtected(e3) {
              return 536870912 & this._data[3 * e3 + 2];
            }
            loadCell(e3, t3) {
              return a = 3 * e3, t3.content = this._data[a + 0], t3.fg = this._data[a + 1], t3.bg = this._data[a + 2], 2097152 & t3.content && (t3.combinedData = this._combined[e3]), 268435456 & t3.bg && (t3.extended = this._extendedAttrs[e3]), t3;
            }
            setCell(e3, t3) {
              2097152 & t3.content && (this._combined[e3] = t3.combinedData), 268435456 & t3.bg && (this._extendedAttrs[e3] = t3.extended), this._data[3 * e3 + 0] = t3.content, this._data[3 * e3 + 1] = t3.fg, this._data[3 * e3 + 2] = t3.bg;
            }
            setCellFromCodePoint(e3, t3, i3, s3, r2, n2) {
              268435456 & r2 && (this._extendedAttrs[e3] = n2), this._data[3 * e3 + 0] = t3 | i3 << 22, this._data[3 * e3 + 1] = s3, this._data[3 * e3 + 2] = r2;
            }
            addCodepointToCell(e3, t3, i3) {
              let s3 = this._data[3 * e3 + 0];
              2097152 & s3 ? this._combined[e3] += (0, o.stringFromCodePoint)(t3) : 2097151 & s3 ? (this._combined[e3] = (0, o.stringFromCodePoint)(2097151 & s3) + (0, o.stringFromCodePoint)(t3), s3 &= -2097152, s3 |= 2097152) : s3 = t3 | 1 << 22, i3 && (s3 &= -12582913, s3 |= i3 << 22), this._data[3 * e3 + 0] = s3;
            }
            insertCells(e3, t3, i3, n2) {
              if ((e3 %= this.length) && 2 === this.getWidth(e3 - 1) && this.setCellFromCodePoint(e3 - 1, 0, 1, n2?.fg || 0, n2?.bg || 0, n2?.extended || new s2.ExtendedAttrs()), t3 < this.length - e3) {
                const s3 = new r.CellData();
                for (let i4 = this.length - e3 - t3 - 1; i4 >= 0; --i4)
                  this.setCell(e3 + t3 + i4, this.loadCell(e3 + i4, s3));
                for (let s4 = 0; s4 < t3; ++s4)
                  this.setCell(e3 + s4, i3);
              } else
                for (let t4 = e3; t4 < this.length; ++t4)
                  this.setCell(t4, i3);
              2 === this.getWidth(this.length - 1) && this.setCellFromCodePoint(this.length - 1, 0, 1, n2?.fg || 0, n2?.bg || 0, n2?.extended || new s2.ExtendedAttrs());
            }
            deleteCells(e3, t3, i3, n2) {
              if (e3 %= this.length, t3 < this.length - e3) {
                const s3 = new r.CellData();
                for (let i4 = 0; i4 < this.length - e3 - t3; ++i4)
                  this.setCell(e3 + i4, this.loadCell(e3 + t3 + i4, s3));
                for (let e4 = this.length - t3; e4 < this.length; ++e4)
                  this.setCell(e4, i3);
              } else
                for (let t4 = e3; t4 < this.length; ++t4)
                  this.setCell(t4, i3);
              e3 && 2 === this.getWidth(e3 - 1) && this.setCellFromCodePoint(e3 - 1, 0, 1, n2?.fg || 0, n2?.bg || 0, n2?.extended || new s2.ExtendedAttrs()), 0 !== this.getWidth(e3) || this.hasContent(e3) || this.setCellFromCodePoint(e3, 0, 1, n2?.fg || 0, n2?.bg || 0, n2?.extended || new s2.ExtendedAttrs());
            }
            replaceCells(e3, t3, i3, r2, n2 = false) {
              if (n2)
                for (e3 && 2 === this.getWidth(e3 - 1) && !this.isProtected(e3 - 1) && this.setCellFromCodePoint(e3 - 1, 0, 1, r2?.fg || 0, r2?.bg || 0, r2?.extended || new s2.ExtendedAttrs()), t3 < this.length && 2 === this.getWidth(t3 - 1) && !this.isProtected(t3) && this.setCellFromCodePoint(t3, 0, 1, r2?.fg || 0, r2?.bg || 0, r2?.extended || new s2.ExtendedAttrs()); e3 < t3 && e3 < this.length; )
                  this.isProtected(e3) || this.setCell(e3, i3), e3++;
              else
                for (e3 && 2 === this.getWidth(e3 - 1) && this.setCellFromCodePoint(e3 - 1, 0, 1, r2?.fg || 0, r2?.bg || 0, r2?.extended || new s2.ExtendedAttrs()), t3 < this.length && 2 === this.getWidth(t3 - 1) && this.setCellFromCodePoint(t3, 0, 1, r2?.fg || 0, r2?.bg || 0, r2?.extended || new s2.ExtendedAttrs()); e3 < t3 && e3 < this.length; )
                  this.setCell(e3++, i3);
            }
            resize(e3, t3) {
              if (e3 === this.length)
                return 4 * this._data.length * 2 < this._data.buffer.byteLength;
              const i3 = 3 * e3;
              if (e3 > this.length) {
                if (this._data.buffer.byteLength >= 4 * i3)
                  this._data = new Uint32Array(this._data.buffer, 0, i3);
                else {
                  const e4 = new Uint32Array(i3);
                  e4.set(this._data), this._data = e4;
                }
                for (let i4 = this.length; i4 < e3; ++i4)
                  this.setCell(i4, t3);
              } else {
                this._data = this._data.subarray(0, i3);
                const t4 = Object.keys(this._combined);
                for (let i4 = 0; i4 < t4.length; i4++) {
                  const s4 = parseInt(t4[i4], 10);
                  s4 >= e3 && delete this._combined[s4];
                }
                const s3 = Object.keys(this._extendedAttrs);
                for (let t5 = 0; t5 < s3.length; t5++) {
                  const i4 = parseInt(s3[t5], 10);
                  i4 >= e3 && delete this._extendedAttrs[i4];
                }
              }
              return this.length = e3, 4 * i3 * 2 < this._data.buffer.byteLength;
            }
            cleanupMemory() {
              if (4 * this._data.length * 2 < this._data.buffer.byteLength) {
                const e3 = new Uint32Array(this._data.length);
                return e3.set(this._data), this._data = e3, 1;
              }
              return 0;
            }
            fill(e3, t3 = false) {
              if (t3)
                for (let t4 = 0; t4 < this.length; ++t4)
                  this.isProtected(t4) || this.setCell(t4, e3);
              else {
                this._combined = {}, this._extendedAttrs = {};
                for (let t4 = 0; t4 < this.length; ++t4)
                  this.setCell(t4, e3);
              }
            }
            copyFrom(e3) {
              this.length !== e3.length ? this._data = new Uint32Array(e3._data) : this._data.set(e3._data), this.length = e3.length, this._combined = {};
              for (const t3 in e3._combined)
                this._combined[t3] = e3._combined[t3];
              this._extendedAttrs = {};
              for (const t3 in e3._extendedAttrs)
                this._extendedAttrs[t3] = e3._extendedAttrs[t3];
              this.isWrapped = e3.isWrapped;
            }
            clone() {
              const e3 = new h(0);
              e3._data = new Uint32Array(this._data), e3.length = this.length;
              for (const t3 in this._combined)
                e3._combined[t3] = this._combined[t3];
              for (const t3 in this._extendedAttrs)
                e3._extendedAttrs[t3] = this._extendedAttrs[t3];
              return e3.isWrapped = this.isWrapped, e3;
            }
            getTrimmedLength() {
              for (let e3 = this.length - 1; e3 >= 0; --e3)
                if (4194303 & this._data[3 * e3 + 0])
                  return e3 + (this._data[3 * e3 + 0] >> 22);
              return 0;
            }
            getNoBgTrimmedLength() {
              for (let e3 = this.length - 1; e3 >= 0; --e3)
                if (4194303 & this._data[3 * e3 + 0] || 50331648 & this._data[3 * e3 + 2])
                  return e3 + (this._data[3 * e3 + 0] >> 22);
              return 0;
            }
            copyCellsFrom(e3, t3, i3, s3, r2) {
              const n2 = e3._data;
              if (r2)
                for (let r3 = s3 - 1; r3 >= 0; r3--) {
                  for (let e4 = 0; e4 < 3; e4++)
                    this._data[3 * (i3 + r3) + e4] = n2[3 * (t3 + r3) + e4];
                  268435456 & n2[3 * (t3 + r3) + 2] && (this._extendedAttrs[i3 + r3] = e3._extendedAttrs[t3 + r3]);
                }
              else
                for (let r3 = 0; r3 < s3; r3++) {
                  for (let e4 = 0; e4 < 3; e4++)
                    this._data[3 * (i3 + r3) + e4] = n2[3 * (t3 + r3) + e4];
                  268435456 & n2[3 * (t3 + r3) + 2] && (this._extendedAttrs[i3 + r3] = e3._extendedAttrs[t3 + r3]);
                }
              const o2 = Object.keys(e3._combined);
              for (let s4 = 0; s4 < o2.length; s4++) {
                const r3 = parseInt(o2[s4], 10);
                r3 >= t3 && (this._combined[r3 - t3 + i3] = e3._combined[r3]);
              }
            }
            translateToString(e3 = false, t3 = 0, i3 = this.length) {
              e3 && (i3 = Math.min(i3, this.getTrimmedLength()));
              let s3 = "";
              for (; t3 < i3; ) {
                const e4 = this._data[3 * t3 + 0], i4 = 2097151 & e4;
                s3 += 2097152 & e4 ? this._combined[t3] : i4 ? (0, o.stringFromCodePoint)(i4) : n.WHITESPACE_CELL_CHAR, t3 += e4 >> 22 || 1;
              }
              return s3;
            }
          }
          t2.BufferLine = h;
        }, 4841: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getRangeLength = void 0, t2.getRangeLength = function(e3, t3) {
            if (e3.start.y > e3.end.y)
              throw new Error(`Buffer range end (${e3.end.x}, ${e3.end.y}) cannot be before start (${e3.start.x}, ${e3.start.y})`);
            return t3 * (e3.end.y - e3.start.y) + (e3.end.x - e3.start.x + 1);
          };
        }, 4634: (e2, t2) => {
          function i2(e3, t3, i3) {
            if (t3 === e3.length - 1)
              return e3[t3].getTrimmedLength();
            const s2 = !e3[t3].hasContent(i3 - 1) && 1 === e3[t3].getWidth(i3 - 1), r = 2 === e3[t3 + 1].getWidth(0);
            return s2 && r ? i3 - 1 : i3;
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getWrappedLineTrimmedLength = t2.reflowSmallerGetNewLineLengths = t2.reflowLargerApplyNewLayout = t2.reflowLargerCreateNewLayout = t2.reflowLargerGetLinesToRemove = void 0, t2.reflowLargerGetLinesToRemove = function(e3, t3, s2, r, n) {
            const o = [];
            for (let a = 0; a < e3.length - 1; a++) {
              let h = a, c = e3.get(++h);
              if (!c.isWrapped)
                continue;
              const l = [e3.get(a)];
              for (; h < e3.length && c.isWrapped; )
                l.push(c), c = e3.get(++h);
              if (r >= a && r < h) {
                a += l.length - 1;
                continue;
              }
              let d = 0, _ = i2(l, d, t3), u = 1, f = 0;
              for (; u < l.length; ) {
                const e4 = i2(l, u, t3), r2 = e4 - f, o2 = s2 - _, a2 = Math.min(r2, o2);
                l[d].copyCellsFrom(l[u], f, _, a2, false), _ += a2, _ === s2 && (d++, _ = 0), f += a2, f === e4 && (u++, f = 0), 0 === _ && 0 !== d && 2 === l[d - 1].getWidth(s2 - 1) && (l[d].copyCellsFrom(l[d - 1], s2 - 1, _++, 1, false), l[d - 1].setCell(s2 - 1, n));
              }
              l[d].replaceCells(_, s2, n);
              let v = 0;
              for (let e4 = l.length - 1; e4 > 0 && (e4 > d || 0 === l[e4].getTrimmedLength()); e4--)
                v++;
              v > 0 && (o.push(a + l.length - v), o.push(v)), a += l.length - 1;
            }
            return o;
          }, t2.reflowLargerCreateNewLayout = function(e3, t3) {
            const i3 = [];
            let s2 = 0, r = t3[s2], n = 0;
            for (let o = 0; o < e3.length; o++)
              if (r === o) {
                const i4 = t3[++s2];
                e3.onDeleteEmitter.fire({ index: o - n, amount: i4 }), o += i4 - 1, n += i4, r = t3[++s2];
              } else
                i3.push(o);
            return { layout: i3, countRemoved: n };
          }, t2.reflowLargerApplyNewLayout = function(e3, t3) {
            const i3 = [];
            for (let s2 = 0; s2 < t3.length; s2++)
              i3.push(e3.get(t3[s2]));
            for (let t4 = 0; t4 < i3.length; t4++)
              e3.set(t4, i3[t4]);
            e3.length = t3.length;
          }, t2.reflowSmallerGetNewLineLengths = function(e3, t3, s2) {
            const r = [], n = e3.map((s3, r2) => i2(e3, r2, t3)).reduce((e4, t4) => e4 + t4);
            let o = 0, a = 0, h = 0;
            for (; h < n; ) {
              if (n - h < s2) {
                r.push(n - h);
                break;
              }
              o += s2;
              const c = i2(e3, a, t3);
              o > c && (o -= c, a++);
              const l = 2 === e3[a].getWidth(o - 1);
              l && o--;
              const d = l ? s2 - 1 : s2;
              r.push(d), h += d;
            }
            return r;
          }, t2.getWrappedLineTrimmedLength = i2;
        }, 5295: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferSet = void 0;
          const s2 = i2(8460), r = i2(844), n = i2(9092);
          class o extends r.Disposable {
            constructor(e3, t3) {
              super(), this._optionsService = e3, this._bufferService = t3, this._onBufferActivate = this.register(new s2.EventEmitter()), this.onBufferActivate = this._onBufferActivate.event, this.reset(), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows))), this.register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
            }
            reset() {
              this._normal = new n.Buffer(true, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new n.Buffer(false, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }), this.setupTabStops();
            }
            get alt() {
              return this._alt;
            }
            get active() {
              return this._activeBuffer;
            }
            get normal() {
              return this._normal;
            }
            activateNormalBuffer() {
              this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
            }
            activateAltBuffer(e3) {
              this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e3), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
            }
            resize(e3, t3) {
              this._normal.resize(e3, t3), this._alt.resize(e3, t3), this.setupTabStops(e3);
            }
            setupTabStops(e3) {
              this._normal.setupTabStops(e3), this._alt.setupTabStops(e3);
            }
          }
          t2.BufferSet = o;
        }, 511: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CellData = void 0;
          const s2 = i2(482), r = i2(643), n = i2(3734);
          class o extends n.AttributeData {
            constructor() {
              super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new n.ExtendedAttrs(), this.combinedData = "";
            }
            static fromCharData(e3) {
              const t3 = new o();
              return t3.setFromCharData(e3), t3;
            }
            isCombined() {
              return 2097152 & this.content;
            }
            getWidth() {
              return this.content >> 22;
            }
            getChars() {
              return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, s2.stringFromCodePoint)(2097151 & this.content) : "";
            }
            getCode() {
              return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
            }
            setFromCharData(e3) {
              this.fg = e3[r.CHAR_DATA_ATTR_INDEX], this.bg = 0;
              let t3 = false;
              if (e3[r.CHAR_DATA_CHAR_INDEX].length > 2)
                t3 = true;
              else if (2 === e3[r.CHAR_DATA_CHAR_INDEX].length) {
                const i3 = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                if (55296 <= i3 && i3 <= 56319) {
                  const s3 = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                  56320 <= s3 && s3 <= 57343 ? this.content = 1024 * (i3 - 55296) + s3 - 56320 + 65536 | e3[r.CHAR_DATA_WIDTH_INDEX] << 22 : t3 = true;
                } else
                  t3 = true;
              } else
                this.content = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e3[r.CHAR_DATA_WIDTH_INDEX] << 22;
              t3 && (this.combinedData = e3[r.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e3[r.CHAR_DATA_WIDTH_INDEX] << 22);
            }
            getAsCharData() {
              return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
            }
          }
          t2.CellData = o;
        }, 643: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.WHITESPACE_CELL_CODE = t2.WHITESPACE_CELL_WIDTH = t2.WHITESPACE_CELL_CHAR = t2.NULL_CELL_CODE = t2.NULL_CELL_WIDTH = t2.NULL_CELL_CHAR = t2.CHAR_DATA_CODE_INDEX = t2.CHAR_DATA_WIDTH_INDEX = t2.CHAR_DATA_CHAR_INDEX = t2.CHAR_DATA_ATTR_INDEX = t2.DEFAULT_EXT = t2.DEFAULT_ATTR = t2.DEFAULT_COLOR = void 0, t2.DEFAULT_COLOR = 0, t2.DEFAULT_ATTR = 256 | t2.DEFAULT_COLOR << 9, t2.DEFAULT_EXT = 0, t2.CHAR_DATA_ATTR_INDEX = 0, t2.CHAR_DATA_CHAR_INDEX = 1, t2.CHAR_DATA_WIDTH_INDEX = 2, t2.CHAR_DATA_CODE_INDEX = 3, t2.NULL_CELL_CHAR = "", t2.NULL_CELL_WIDTH = 1, t2.NULL_CELL_CODE = 0, t2.WHITESPACE_CELL_CHAR = " ", t2.WHITESPACE_CELL_WIDTH = 1, t2.WHITESPACE_CELL_CODE = 32;
        }, 4863: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Marker = void 0;
          const s2 = i2(8460), r = i2(844);
          class n {
            get id() {
              return this._id;
            }
            constructor(e3) {
              this.line = e3, this.isDisposed = false, this._disposables = [], this._id = n._nextId++, this._onDispose = this.register(new s2.EventEmitter()), this.onDispose = this._onDispose.event;
            }
            dispose() {
              this.isDisposed || (this.isDisposed = true, this.line = -1, this._onDispose.fire(), (0, r.disposeArray)(this._disposables), this._disposables.length = 0);
            }
            register(e3) {
              return this._disposables.push(e3), e3;
            }
          }
          t2.Marker = n, n._nextId = 1;
        }, 7116: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DEFAULT_CHARSET = t2.CHARSETS = void 0, t2.CHARSETS = {}, t2.DEFAULT_CHARSET = t2.CHARSETS.B, t2.CHARSETS[0] = { "`": "\u25C6", a: "\u2592", b: "\u2409", c: "\u240C", d: "\u240D", e: "\u240A", f: "\xB0", g: "\xB1", h: "\u2424", i: "\u240B", j: "\u2518", k: "\u2510", l: "\u250C", m: "\u2514", n: "\u253C", o: "\u23BA", p: "\u23BB", q: "\u2500", r: "\u23BC", s: "\u23BD", t: "\u251C", u: "\u2524", v: "\u2534", w: "\u252C", x: "\u2502", y: "\u2264", z: "\u2265", "{": "\u03C0", "|": "\u2260", "}": "\xA3", "~": "\xB7" }, t2.CHARSETS.A = { "#": "\xA3" }, t2.CHARSETS.B = void 0, t2.CHARSETS[4] = { "#": "\xA3", "@": "\xBE", "[": "ij", "\\": "\xBD", "]": "|", "{": "\xA8", "|": "f", "}": "\xBC", "~": "\xB4" }, t2.CHARSETS.C = t2.CHARSETS[5] = { "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.R = { "#": "\xA3", "@": "\xE0", "[": "\xB0", "\\": "\xE7", "]": "\xA7", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xA8" }, t2.CHARSETS.Q = { "@": "\xE0", "[": "\xE2", "\\": "\xE7", "]": "\xEA", "^": "\xEE", "`": "\xF4", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xFB" }, t2.CHARSETS.K = { "@": "\xA7", "[": "\xC4", "\\": "\xD6", "]": "\xDC", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xDF" }, t2.CHARSETS.Y = { "#": "\xA3", "@": "\xA7", "[": "\xB0", "\\": "\xE7", "]": "\xE9", "`": "\xF9", "{": "\xE0", "|": "\xF2", "}": "\xE8", "~": "\xEC" }, t2.CHARSETS.E = t2.CHARSETS[6] = { "@": "\xC4", "[": "\xC6", "\\": "\xD8", "]": "\xC5", "^": "\xDC", "`": "\xE4", "{": "\xE6", "|": "\xF8", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.Z = { "#": "\xA3", "@": "\xA7", "[": "\xA1", "\\": "\xD1", "]": "\xBF", "{": "\xB0", "|": "\xF1", "}": "\xE7" }, t2.CHARSETS.H = t2.CHARSETS[7] = { "@": "\xC9", "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS["="] = { "#": "\xF9", "@": "\xE0", "[": "\xE9", "\\": "\xE7", "]": "\xEA", "^": "\xEE", _: "\xE8", "`": "\xF4", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xFB" };
        }, 2584: (e2, t2) => {
          var i2, s2, r;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.C1_ESCAPED = t2.C1 = t2.C0 = void 0, function(e3) {
            e3.NUL = "\0", e3.SOH = "", e3.STX = "", e3.ETX = "", e3.EOT = "", e3.ENQ = "", e3.ACK = "", e3.BEL = "\x07", e3.BS = "\b", e3.HT = "	", e3.LF = "\n", e3.VT = "\v", e3.FF = "\f", e3.CR = "\r", e3.SO = "", e3.SI = "", e3.DLE = "", e3.DC1 = "", e3.DC2 = "", e3.DC3 = "", e3.DC4 = "", e3.NAK = "", e3.SYN = "", e3.ETB = "", e3.CAN = "", e3.EM = "", e3.SUB = "", e3.ESC = "\x1B", e3.FS = "", e3.GS = "", e3.RS = "", e3.US = "", e3.SP = " ", e3.DEL = "\x7F";
          }(i2 || (t2.C0 = i2 = {})), function(e3) {
            e3.PAD = "\x80", e3.HOP = "\x81", e3.BPH = "\x82", e3.NBH = "\x83", e3.IND = "\x84", e3.NEL = "\x85", e3.SSA = "\x86", e3.ESA = "\x87", e3.HTS = "\x88", e3.HTJ = "\x89", e3.VTS = "\x8A", e3.PLD = "\x8B", e3.PLU = "\x8C", e3.RI = "\x8D", e3.SS2 = "\x8E", e3.SS3 = "\x8F", e3.DCS = "\x90", e3.PU1 = "\x91", e3.PU2 = "\x92", e3.STS = "\x93", e3.CCH = "\x94", e3.MW = "\x95", e3.SPA = "\x96", e3.EPA = "\x97", e3.SOS = "\x98", e3.SGCI = "\x99", e3.SCI = "\x9A", e3.CSI = "\x9B", e3.ST = "\x9C", e3.OSC = "\x9D", e3.PM = "\x9E", e3.APC = "\x9F";
          }(s2 || (t2.C1 = s2 = {})), function(e3) {
            e3.ST = `${i2.ESC}\\`;
          }(r || (t2.C1_ESCAPED = r = {}));
        }, 7399: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.evaluateKeyboardEvent = void 0;
          const s2 = i2(2584), r = { 48: ["0", ")"], 49: ["1", "!"], 50: ["2", "@"], 51: ["3", "#"], 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["'", '"'] };
          t2.evaluateKeyboardEvent = function(e3, t3, i3, n) {
            const o = { type: 0, cancel: false, key: void 0 }, a = (e3.shiftKey ? 1 : 0) | (e3.altKey ? 2 : 0) | (e3.ctrlKey ? 4 : 0) | (e3.metaKey ? 8 : 0);
            switch (e3.keyCode) {
              case 0:
                "UIKeyInputUpArrow" === e3.key ? o.key = t3 ? s2.C0.ESC + "OA" : s2.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e3.key ? o.key = t3 ? s2.C0.ESC + "OD" : s2.C0.ESC + "[D" : "UIKeyInputRightArrow" === e3.key ? o.key = t3 ? s2.C0.ESC + "OC" : s2.C0.ESC + "[C" : "UIKeyInputDownArrow" === e3.key && (o.key = t3 ? s2.C0.ESC + "OB" : s2.C0.ESC + "[B");
                break;
              case 8:
                if (e3.altKey) {
                  o.key = s2.C0.ESC + s2.C0.DEL;
                  break;
                }
                o.key = s2.C0.DEL;
                break;
              case 9:
                if (e3.shiftKey) {
                  o.key = s2.C0.ESC + "[Z";
                  break;
                }
                o.key = s2.C0.HT, o.cancel = true;
                break;
              case 13:
                o.key = e3.altKey ? s2.C0.ESC + s2.C0.CR : s2.C0.CR, o.cancel = true;
                break;
              case 27:
                o.key = s2.C0.ESC, e3.altKey && (o.key = s2.C0.ESC + s2.C0.ESC), o.cancel = true;
                break;
              case 37:
                if (e3.metaKey)
                  break;
                a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "D", o.key === s2.C0.ESC + "[1;3D" && (o.key = s2.C0.ESC + (i3 ? "b" : "[1;5D"))) : o.key = t3 ? s2.C0.ESC + "OD" : s2.C0.ESC + "[D";
                break;
              case 39:
                if (e3.metaKey)
                  break;
                a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "C", o.key === s2.C0.ESC + "[1;3C" && (o.key = s2.C0.ESC + (i3 ? "f" : "[1;5C"))) : o.key = t3 ? s2.C0.ESC + "OC" : s2.C0.ESC + "[C";
                break;
              case 38:
                if (e3.metaKey)
                  break;
                a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "A", i3 || o.key !== s2.C0.ESC + "[1;3A" || (o.key = s2.C0.ESC + "[1;5A")) : o.key = t3 ? s2.C0.ESC + "OA" : s2.C0.ESC + "[A";
                break;
              case 40:
                if (e3.metaKey)
                  break;
                a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "B", i3 || o.key !== s2.C0.ESC + "[1;3B" || (o.key = s2.C0.ESC + "[1;5B")) : o.key = t3 ? s2.C0.ESC + "OB" : s2.C0.ESC + "[B";
                break;
              case 45:
                e3.shiftKey || e3.ctrlKey || (o.key = s2.C0.ESC + "[2~");
                break;
              case 46:
                o.key = a ? s2.C0.ESC + "[3;" + (a + 1) + "~" : s2.C0.ESC + "[3~";
                break;
              case 36:
                o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "H" : t3 ? s2.C0.ESC + "OH" : s2.C0.ESC + "[H";
                break;
              case 35:
                o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "F" : t3 ? s2.C0.ESC + "OF" : s2.C0.ESC + "[F";
                break;
              case 33:
                e3.shiftKey ? o.type = 2 : e3.ctrlKey ? o.key = s2.C0.ESC + "[5;" + (a + 1) + "~" : o.key = s2.C0.ESC + "[5~";
                break;
              case 34:
                e3.shiftKey ? o.type = 3 : e3.ctrlKey ? o.key = s2.C0.ESC + "[6;" + (a + 1) + "~" : o.key = s2.C0.ESC + "[6~";
                break;
              case 112:
                o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "P" : s2.C0.ESC + "OP";
                break;
              case 113:
                o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "Q" : s2.C0.ESC + "OQ";
                break;
              case 114:
                o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "R" : s2.C0.ESC + "OR";
                break;
              case 115:
                o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "S" : s2.C0.ESC + "OS";
                break;
              case 116:
                o.key = a ? s2.C0.ESC + "[15;" + (a + 1) + "~" : s2.C0.ESC + "[15~";
                break;
              case 117:
                o.key = a ? s2.C0.ESC + "[17;" + (a + 1) + "~" : s2.C0.ESC + "[17~";
                break;
              case 118:
                o.key = a ? s2.C0.ESC + "[18;" + (a + 1) + "~" : s2.C0.ESC + "[18~";
                break;
              case 119:
                o.key = a ? s2.C0.ESC + "[19;" + (a + 1) + "~" : s2.C0.ESC + "[19~";
                break;
              case 120:
                o.key = a ? s2.C0.ESC + "[20;" + (a + 1) + "~" : s2.C0.ESC + "[20~";
                break;
              case 121:
                o.key = a ? s2.C0.ESC + "[21;" + (a + 1) + "~" : s2.C0.ESC + "[21~";
                break;
              case 122:
                o.key = a ? s2.C0.ESC + "[23;" + (a + 1) + "~" : s2.C0.ESC + "[23~";
                break;
              case 123:
                o.key = a ? s2.C0.ESC + "[24;" + (a + 1) + "~" : s2.C0.ESC + "[24~";
                break;
              default:
                if (!e3.ctrlKey || e3.shiftKey || e3.altKey || e3.metaKey)
                  if (i3 && !n || !e3.altKey || e3.metaKey)
                    !i3 || e3.altKey || e3.ctrlKey || e3.shiftKey || !e3.metaKey ? e3.key && !e3.ctrlKey && !e3.altKey && !e3.metaKey && e3.keyCode >= 48 && 1 === e3.key.length ? o.key = e3.key : e3.key && e3.ctrlKey && ("_" === e3.key && (o.key = s2.C0.US), "@" === e3.key && (o.key = s2.C0.NUL)) : 65 === e3.keyCode && (o.type = 1);
                  else {
                    const t4 = r[e3.keyCode], i4 = t4?.[e3.shiftKey ? 1 : 0];
                    if (i4)
                      o.key = s2.C0.ESC + i4;
                    else if (e3.keyCode >= 65 && e3.keyCode <= 90) {
                      const t5 = e3.ctrlKey ? e3.keyCode - 64 : e3.keyCode + 32;
                      let i5 = String.fromCharCode(t5);
                      e3.shiftKey && (i5 = i5.toUpperCase()), o.key = s2.C0.ESC + i5;
                    } else if (32 === e3.keyCode)
                      o.key = s2.C0.ESC + (e3.ctrlKey ? s2.C0.NUL : " ");
                    else if ("Dead" === e3.key && e3.code.startsWith("Key")) {
                      let t5 = e3.code.slice(3, 4);
                      e3.shiftKey || (t5 = t5.toLowerCase()), o.key = s2.C0.ESC + t5, o.cancel = true;
                    }
                  }
                else
                  e3.keyCode >= 65 && e3.keyCode <= 90 ? o.key = String.fromCharCode(e3.keyCode - 64) : 32 === e3.keyCode ? o.key = s2.C0.NUL : e3.keyCode >= 51 && e3.keyCode <= 55 ? o.key = String.fromCharCode(e3.keyCode - 51 + 27) : 56 === e3.keyCode ? o.key = s2.C0.DEL : 219 === e3.keyCode ? o.key = s2.C0.ESC : 220 === e3.keyCode ? o.key = s2.C0.FS : 221 === e3.keyCode && (o.key = s2.C0.GS);
            }
            return o;
          };
        }, 482: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Utf8ToUtf32 = t2.StringToUtf32 = t2.utf32ToString = t2.stringFromCodePoint = void 0, t2.stringFromCodePoint = function(e3) {
            return e3 > 65535 ? (e3 -= 65536, String.fromCharCode(55296 + (e3 >> 10)) + String.fromCharCode(e3 % 1024 + 56320)) : String.fromCharCode(e3);
          }, t2.utf32ToString = function(e3, t3 = 0, i2 = e3.length) {
            let s2 = "";
            for (let r = t3; r < i2; ++r) {
              let t4 = e3[r];
              t4 > 65535 ? (t4 -= 65536, s2 += String.fromCharCode(55296 + (t4 >> 10)) + String.fromCharCode(t4 % 1024 + 56320)) : s2 += String.fromCharCode(t4);
            }
            return s2;
          }, t2.StringToUtf32 = class {
            constructor() {
              this._interim = 0;
            }
            clear() {
              this._interim = 0;
            }
            decode(e3, t3) {
              const i2 = e3.length;
              if (!i2)
                return 0;
              let s2 = 0, r = 0;
              if (this._interim) {
                const i3 = e3.charCodeAt(r++);
                56320 <= i3 && i3 <= 57343 ? t3[s2++] = 1024 * (this._interim - 55296) + i3 - 56320 + 65536 : (t3[s2++] = this._interim, t3[s2++] = i3), this._interim = 0;
              }
              for (let n = r; n < i2; ++n) {
                const r2 = e3.charCodeAt(n);
                if (55296 <= r2 && r2 <= 56319) {
                  if (++n >= i2)
                    return this._interim = r2, s2;
                  const o = e3.charCodeAt(n);
                  56320 <= o && o <= 57343 ? t3[s2++] = 1024 * (r2 - 55296) + o - 56320 + 65536 : (t3[s2++] = r2, t3[s2++] = o);
                } else
                  65279 !== r2 && (t3[s2++] = r2);
              }
              return s2;
            }
          }, t2.Utf8ToUtf32 = class {
            constructor() {
              this.interim = new Uint8Array(3);
            }
            clear() {
              this.interim.fill(0);
            }
            decode(e3, t3) {
              const i2 = e3.length;
              if (!i2)
                return 0;
              let s2, r, n, o, a = 0, h = 0, c = 0;
              if (this.interim[0]) {
                let s3 = false, r2 = this.interim[0];
                r2 &= 192 == (224 & r2) ? 31 : 224 == (240 & r2) ? 15 : 7;
                let n2, o2 = 0;
                for (; (n2 = 63 & this.interim[++o2]) && o2 < 4; )
                  r2 <<= 6, r2 |= n2;
                const h2 = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, l2 = h2 - o2;
                for (; c < l2; ) {
                  if (c >= i2)
                    return 0;
                  if (n2 = e3[c++], 128 != (192 & n2)) {
                    c--, s3 = true;
                    break;
                  }
                  this.interim[o2++] = n2, r2 <<= 6, r2 |= 63 & n2;
                }
                s3 || (2 === h2 ? r2 < 128 ? c-- : t3[a++] = r2 : 3 === h2 ? r2 < 2048 || r2 >= 55296 && r2 <= 57343 || 65279 === r2 || (t3[a++] = r2) : r2 < 65536 || r2 > 1114111 || (t3[a++] = r2)), this.interim.fill(0);
              }
              const l = i2 - 4;
              let d = c;
              for (; d < i2; ) {
                for (; !(!(d < l) || 128 & (s2 = e3[d]) || 128 & (r = e3[d + 1]) || 128 & (n = e3[d + 2]) || 128 & (o = e3[d + 3])); )
                  t3[a++] = s2, t3[a++] = r, t3[a++] = n, t3[a++] = o, d += 4;
                if (s2 = e3[d++], s2 < 128)
                  t3[a++] = s2;
                else if (192 == (224 & s2)) {
                  if (d >= i2)
                    return this.interim[0] = s2, a;
                  if (r = e3[d++], 128 != (192 & r)) {
                    d--;
                    continue;
                  }
                  if (h = (31 & s2) << 6 | 63 & r, h < 128) {
                    d--;
                    continue;
                  }
                  t3[a++] = h;
                } else if (224 == (240 & s2)) {
                  if (d >= i2)
                    return this.interim[0] = s2, a;
                  if (r = e3[d++], 128 != (192 & r)) {
                    d--;
                    continue;
                  }
                  if (d >= i2)
                    return this.interim[0] = s2, this.interim[1] = r, a;
                  if (n = e3[d++], 128 != (192 & n)) {
                    d--;
                    continue;
                  }
                  if (h = (15 & s2) << 12 | (63 & r) << 6 | 63 & n, h < 2048 || h >= 55296 && h <= 57343 || 65279 === h)
                    continue;
                  t3[a++] = h;
                } else if (240 == (248 & s2)) {
                  if (d >= i2)
                    return this.interim[0] = s2, a;
                  if (r = e3[d++], 128 != (192 & r)) {
                    d--;
                    continue;
                  }
                  if (d >= i2)
                    return this.interim[0] = s2, this.interim[1] = r, a;
                  if (n = e3[d++], 128 != (192 & n)) {
                    d--;
                    continue;
                  }
                  if (d >= i2)
                    return this.interim[0] = s2, this.interim[1] = r, this.interim[2] = n, a;
                  if (o = e3[d++], 128 != (192 & o)) {
                    d--;
                    continue;
                  }
                  if (h = (7 & s2) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & o, h < 65536 || h > 1114111)
                    continue;
                  t3[a++] = h;
                }
              }
              return a;
            }
          };
        }, 225: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeV6 = void 0;
          const s2 = i2(1480), r = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]], n = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
          let o;
          t2.UnicodeV6 = class {
            constructor() {
              if (this.version = "6", !o) {
                o = new Uint8Array(65536), o.fill(1), o[0] = 0, o.fill(0, 1, 32), o.fill(0, 127, 160), o.fill(2, 4352, 4448), o[9001] = 2, o[9002] = 2, o.fill(2, 11904, 42192), o[12351] = 1, o.fill(2, 44032, 55204), o.fill(2, 63744, 64256), o.fill(2, 65040, 65050), o.fill(2, 65072, 65136), o.fill(2, 65280, 65377), o.fill(2, 65504, 65511);
                for (let e3 = 0; e3 < r.length; ++e3)
                  o.fill(0, r[e3][0], r[e3][1] + 1);
              }
            }
            wcwidth(e3) {
              return e3 < 32 ? 0 : e3 < 127 ? 1 : e3 < 65536 ? o[e3] : function(e4, t3) {
                let i3, s3 = 0, r2 = t3.length - 1;
                if (e4 < t3[0][0] || e4 > t3[r2][1])
                  return false;
                for (; r2 >= s3; )
                  if (i3 = s3 + r2 >> 1, e4 > t3[i3][1])
                    s3 = i3 + 1;
                  else {
                    if (!(e4 < t3[i3][0]))
                      return true;
                    r2 = i3 - 1;
                  }
                return false;
              }(e3, n) ? 0 : e3 >= 131072 && e3 <= 196605 || e3 >= 196608 && e3 <= 262141 ? 2 : 1;
            }
            charProperties(e3, t3) {
              let i3 = this.wcwidth(e3), r2 = 0 === i3 && 0 !== t3;
              if (r2) {
                const e4 = s2.UnicodeService.extractWidth(t3);
                0 === e4 ? r2 = false : e4 > i3 && (i3 = e4);
              }
              return s2.UnicodeService.createPropertyValue(0, i3, r2);
            }
          };
        }, 5981: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.WriteBuffer = void 0;
          const s2 = i2(8460), r = i2(844);
          class n extends r.Disposable {
            constructor(e3) {
              super(), this._action = e3, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = false, this._syncCalls = 0, this._didUserInput = false, this._onWriteParsed = this.register(new s2.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event;
            }
            handleUserInput() {
              this._didUserInput = true;
            }
            writeSync(e3, t3) {
              if (void 0 !== t3 && this._syncCalls > t3)
                return void (this._syncCalls = 0);
              if (this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(void 0), this._syncCalls++, this._isSyncWriting)
                return;
              let i3;
              for (this._isSyncWriting = true; i3 = this._writeBuffer.shift(); ) {
                this._action(i3);
                const e4 = this._callbacks.shift();
                e4 && e4();
              }
              this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = false, this._syncCalls = 0;
            }
            write(e3, t3) {
              if (this._pendingData > 5e7)
                throw new Error("write data discarded, use flow control to avoid losing data");
              if (!this._writeBuffer.length) {
                if (this._bufferOffset = 0, this._didUserInput)
                  return this._didUserInput = false, this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(t3), void this._innerWrite();
                setTimeout(() => this._innerWrite());
              }
              this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(t3);
            }
            _innerWrite(e3 = 0, t3 = true) {
              const i3 = e3 || Date.now();
              for (; this._writeBuffer.length > this._bufferOffset; ) {
                const e4 = this._writeBuffer[this._bufferOffset], s3 = this._action(e4, t3);
                if (s3) {
                  const e5 = (e6) => Date.now() - i3 >= 12 ? setTimeout(() => this._innerWrite(0, e6)) : this._innerWrite(i3, e6);
                  return void s3.catch((e6) => (queueMicrotask(() => {
                    throw e6;
                  }), Promise.resolve(false))).then(e5);
                }
                const r2 = this._callbacks[this._bufferOffset];
                if (r2 && r2(), this._bufferOffset++, this._pendingData -= e4.length, Date.now() - i3 >= 12)
                  break;
              }
              this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(() => this._innerWrite())) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
            }
          }
          t2.WriteBuffer = n;
        }, 5941: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.toRgbString = t2.parseColor = void 0;
          const i2 = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, s2 = /^[\da-f]+$/;
          function r(e3, t3) {
            const i3 = e3.toString(16), s3 = i3.length < 2 ? "0" + i3 : i3;
            switch (t3) {
              case 4:
                return i3[0];
              case 8:
                return s3;
              case 12:
                return (s3 + s3).slice(0, 3);
              default:
                return s3 + s3;
            }
          }
          t2.parseColor = function(e3) {
            if (!e3)
              return;
            let t3 = e3.toLowerCase();
            if (0 === t3.indexOf("rgb:")) {
              t3 = t3.slice(4);
              const e4 = i2.exec(t3);
              if (e4) {
                const t4 = e4[1] ? 15 : e4[4] ? 255 : e4[7] ? 4095 : 65535;
                return [Math.round(parseInt(e4[1] || e4[4] || e4[7] || e4[10], 16) / t4 * 255), Math.round(parseInt(e4[2] || e4[5] || e4[8] || e4[11], 16) / t4 * 255), Math.round(parseInt(e4[3] || e4[6] || e4[9] || e4[12], 16) / t4 * 255)];
              }
            } else if (0 === t3.indexOf("#") && (t3 = t3.slice(1), s2.exec(t3) && [3, 6, 9, 12].includes(t3.length))) {
              const e4 = t3.length / 3, i3 = [0, 0, 0];
              for (let s3 = 0; s3 < 3; ++s3) {
                const r2 = parseInt(t3.slice(e4 * s3, e4 * s3 + e4), 16);
                i3[s3] = 1 === e4 ? r2 << 4 : 2 === e4 ? r2 : 3 === e4 ? r2 >> 4 : r2 >> 8;
              }
              return i3;
            }
          }, t2.toRgbString = function(e3, t3 = 16) {
            const [i3, s3, n] = e3;
            return `rgb:${r(i3, t3)}/${r(s3, t3)}/${r(n, t3)}`;
          };
        }, 5770: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.PAYLOAD_LIMIT = void 0, t2.PAYLOAD_LIMIT = 1e7;
        }, 6351: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DcsHandler = t2.DcsParser = void 0;
          const s2 = i2(482), r = i2(8742), n = i2(5770), o = [];
          t2.DcsParser = class {
            constructor() {
              this._handlers = /* @__PURE__ */ Object.create(null), this._active = o, this._ident = 0, this._handlerFb = () => {
              }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
            }
            dispose() {
              this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
              }, this._active = o;
            }
            registerHandler(e3, t3) {
              void 0 === this._handlers[e3] && (this._handlers[e3] = []);
              const i3 = this._handlers[e3];
              return i3.push(t3), { dispose: () => {
                const e4 = i3.indexOf(t3);
                -1 !== e4 && i3.splice(e4, 1);
              } };
            }
            clearHandler(e3) {
              this._handlers[e3] && delete this._handlers[e3];
            }
            setHandlerFallback(e3) {
              this._handlerFb = e3;
            }
            reset() {
              if (this._active.length)
                for (let e3 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e3 >= 0; --e3)
                  this._active[e3].unhook(false);
              this._stack.paused = false, this._active = o, this._ident = 0;
            }
            hook(e3, t3) {
              if (this.reset(), this._ident = e3, this._active = this._handlers[e3] || o, this._active.length)
                for (let e4 = this._active.length - 1; e4 >= 0; e4--)
                  this._active[e4].hook(t3);
              else
                this._handlerFb(this._ident, "HOOK", t3);
            }
            put(e3, t3, i3) {
              if (this._active.length)
                for (let s3 = this._active.length - 1; s3 >= 0; s3--)
                  this._active[s3].put(e3, t3, i3);
              else
                this._handlerFb(this._ident, "PUT", (0, s2.utf32ToString)(e3, t3, i3));
            }
            unhook(e3, t3 = true) {
              if (this._active.length) {
                let i3 = false, s3 = this._active.length - 1, r2 = false;
                if (this._stack.paused && (s3 = this._stack.loopPosition - 1, i3 = t3, r2 = this._stack.fallThrough, this._stack.paused = false), !r2 && false === i3) {
                  for (; s3 >= 0 && (i3 = this._active[s3].unhook(e3), true !== i3); s3--)
                    if (i3 instanceof Promise)
                      return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = false, i3;
                  s3--;
                }
                for (; s3 >= 0; s3--)
                  if (i3 = this._active[s3].unhook(false), i3 instanceof Promise)
                    return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = true, i3;
              } else
                this._handlerFb(this._ident, "UNHOOK", e3);
              this._active = o, this._ident = 0;
            }
          };
          const a = new r.Params();
          a.addParam(0), t2.DcsHandler = class {
            constructor(e3) {
              this._handler = e3, this._data = "", this._params = a, this._hitLimit = false;
            }
            hook(e3) {
              this._params = e3.length > 1 || e3.params[0] ? e3.clone() : a, this._data = "", this._hitLimit = false;
            }
            put(e3, t3, i3) {
              this._hitLimit || (this._data += (0, s2.utf32ToString)(e3, t3, i3), this._data.length > n.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
            }
            unhook(e3) {
              let t3 = false;
              if (this._hitLimit)
                t3 = false;
              else if (e3 && (t3 = this._handler(this._data, this._params), t3 instanceof Promise))
                return t3.then((e4) => (this._params = a, this._data = "", this._hitLimit = false, e4));
              return this._params = a, this._data = "", this._hitLimit = false, t3;
            }
          };
        }, 2015: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.EscapeSequenceParser = t2.VT500_TRANSITION_TABLE = t2.TransitionTable = void 0;
          const s2 = i2(844), r = i2(8742), n = i2(6242), o = i2(6351);
          class a {
            constructor(e3) {
              this.table = new Uint8Array(e3);
            }
            setDefault(e3, t3) {
              this.table.fill(e3 << 4 | t3);
            }
            add(e3, t3, i3, s3) {
              this.table[t3 << 8 | e3] = i3 << 4 | s3;
            }
            addMany(e3, t3, i3, s3) {
              for (let r2 = 0; r2 < e3.length; r2++)
                this.table[t3 << 8 | e3[r2]] = i3 << 4 | s3;
            }
          }
          t2.TransitionTable = a;
          const h = 160;
          t2.VT500_TRANSITION_TABLE = function() {
            const e3 = new a(4095), t3 = Array.apply(null, Array(256)).map((e4, t4) => t4), i3 = (e4, i4) => t3.slice(e4, i4), s3 = i3(32, 127), r2 = i3(0, 24);
            r2.push(25), r2.push.apply(r2, i3(28, 32));
            const n2 = i3(0, 14);
            let o2;
            for (o2 in e3.setDefault(1, 0), e3.addMany(s3, 0, 2, 0), n2)
              e3.addMany([24, 26, 153, 154], o2, 3, 0), e3.addMany(i3(128, 144), o2, 3, 0), e3.addMany(i3(144, 152), o2, 3, 0), e3.add(156, o2, 0, 0), e3.add(27, o2, 11, 1), e3.add(157, o2, 4, 8), e3.addMany([152, 158, 159], o2, 0, 7), e3.add(155, o2, 11, 3), e3.add(144, o2, 11, 9);
            return e3.addMany(r2, 0, 3, 0), e3.addMany(r2, 1, 3, 1), e3.add(127, 1, 0, 1), e3.addMany(r2, 8, 0, 8), e3.addMany(r2, 3, 3, 3), e3.add(127, 3, 0, 3), e3.addMany(r2, 4, 3, 4), e3.add(127, 4, 0, 4), e3.addMany(r2, 6, 3, 6), e3.addMany(r2, 5, 3, 5), e3.add(127, 5, 0, 5), e3.addMany(r2, 2, 3, 2), e3.add(127, 2, 0, 2), e3.add(93, 1, 4, 8), e3.addMany(s3, 8, 5, 8), e3.add(127, 8, 5, 8), e3.addMany([156, 27, 24, 26, 7], 8, 6, 0), e3.addMany(i3(28, 32), 8, 0, 8), e3.addMany([88, 94, 95], 1, 0, 7), e3.addMany(s3, 7, 0, 7), e3.addMany(r2, 7, 0, 7), e3.add(156, 7, 0, 0), e3.add(127, 7, 0, 7), e3.add(91, 1, 11, 3), e3.addMany(i3(64, 127), 3, 7, 0), e3.addMany(i3(48, 60), 3, 8, 4), e3.addMany([60, 61, 62, 63], 3, 9, 4), e3.addMany(i3(48, 60), 4, 8, 4), e3.addMany(i3(64, 127), 4, 7, 0), e3.addMany([60, 61, 62, 63], 4, 0, 6), e3.addMany(i3(32, 64), 6, 0, 6), e3.add(127, 6, 0, 6), e3.addMany(i3(64, 127), 6, 0, 0), e3.addMany(i3(32, 48), 3, 9, 5), e3.addMany(i3(32, 48), 5, 9, 5), e3.addMany(i3(48, 64), 5, 0, 6), e3.addMany(i3(64, 127), 5, 7, 0), e3.addMany(i3(32, 48), 4, 9, 5), e3.addMany(i3(32, 48), 1, 9, 2), e3.addMany(i3(32, 48), 2, 9, 2), e3.addMany(i3(48, 127), 2, 10, 0), e3.addMany(i3(48, 80), 1, 10, 0), e3.addMany(i3(81, 88), 1, 10, 0), e3.addMany([89, 90, 92], 1, 10, 0), e3.addMany(i3(96, 127), 1, 10, 0), e3.add(80, 1, 11, 9), e3.addMany(r2, 9, 0, 9), e3.add(127, 9, 0, 9), e3.addMany(i3(28, 32), 9, 0, 9), e3.addMany(i3(32, 48), 9, 9, 12), e3.addMany(i3(48, 60), 9, 8, 10), e3.addMany([60, 61, 62, 63], 9, 9, 10), e3.addMany(r2, 11, 0, 11), e3.addMany(i3(32, 128), 11, 0, 11), e3.addMany(i3(28, 32), 11, 0, 11), e3.addMany(r2, 10, 0, 10), e3.add(127, 10, 0, 10), e3.addMany(i3(28, 32), 10, 0, 10), e3.addMany(i3(48, 60), 10, 8, 10), e3.addMany([60, 61, 62, 63], 10, 0, 11), e3.addMany(i3(32, 48), 10, 9, 12), e3.addMany(r2, 12, 0, 12), e3.add(127, 12, 0, 12), e3.addMany(i3(28, 32), 12, 0, 12), e3.addMany(i3(32, 48), 12, 9, 12), e3.addMany(i3(48, 64), 12, 0, 11), e3.addMany(i3(64, 127), 12, 12, 13), e3.addMany(i3(64, 127), 10, 12, 13), e3.addMany(i3(64, 127), 9, 12, 13), e3.addMany(r2, 13, 13, 13), e3.addMany(s3, 13, 13, 13), e3.add(127, 13, 0, 13), e3.addMany([27, 156, 24, 26], 13, 14, 0), e3.add(h, 0, 2, 0), e3.add(h, 8, 5, 8), e3.add(h, 6, 0, 6), e3.add(h, 11, 0, 11), e3.add(h, 13, 13, 13), e3;
          }();
          class c extends s2.Disposable {
            constructor(e3 = t2.VT500_TRANSITION_TABLE) {
              super(), this._transitions = e3, this._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 }, this.initialState = 0, this.currentState = this.initialState, this._params = new r.Params(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._printHandlerFb = (e4, t3, i3) => {
              }, this._executeHandlerFb = (e4) => {
              }, this._csiHandlerFb = (e4, t3) => {
              }, this._escHandlerFb = (e4) => {
              }, this._errorHandlerFb = (e4) => e4, this._printHandler = this._printHandlerFb, this._executeHandlers = /* @__PURE__ */ Object.create(null), this._csiHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null), this.register((0, s2.toDisposable)(() => {
                this._csiHandlers = /* @__PURE__ */ Object.create(null), this._executeHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null);
              })), this._oscParser = this.register(new n.OscParser()), this._dcsParser = this.register(new o.DcsParser()), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({ final: "\\" }, () => true);
            }
            _identifier(e3, t3 = [64, 126]) {
              let i3 = 0;
              if (e3.prefix) {
                if (e3.prefix.length > 1)
                  throw new Error("only one byte as prefix supported");
                if (i3 = e3.prefix.charCodeAt(0), i3 && 60 > i3 || i3 > 63)
                  throw new Error("prefix must be in range 0x3c .. 0x3f");
              }
              if (e3.intermediates) {
                if (e3.intermediates.length > 2)
                  throw new Error("only two bytes as intermediates are supported");
                for (let t4 = 0; t4 < e3.intermediates.length; ++t4) {
                  const s4 = e3.intermediates.charCodeAt(t4);
                  if (32 > s4 || s4 > 47)
                    throw new Error("intermediate must be in range 0x20 .. 0x2f");
                  i3 <<= 8, i3 |= s4;
                }
              }
              if (1 !== e3.final.length)
                throw new Error("final must be a single byte");
              const s3 = e3.final.charCodeAt(0);
              if (t3[0] > s3 || s3 > t3[1])
                throw new Error(`final must be in range ${t3[0]} .. ${t3[1]}`);
              return i3 <<= 8, i3 |= s3, i3;
            }
            identToString(e3) {
              const t3 = [];
              for (; e3; )
                t3.push(String.fromCharCode(255 & e3)), e3 >>= 8;
              return t3.reverse().join("");
            }
            setPrintHandler(e3) {
              this._printHandler = e3;
            }
            clearPrintHandler() {
              this._printHandler = this._printHandlerFb;
            }
            registerEscHandler(e3, t3) {
              const i3 = this._identifier(e3, [48, 126]);
              void 0 === this._escHandlers[i3] && (this._escHandlers[i3] = []);
              const s3 = this._escHandlers[i3];
              return s3.push(t3), { dispose: () => {
                const e4 = s3.indexOf(t3);
                -1 !== e4 && s3.splice(e4, 1);
              } };
            }
            clearEscHandler(e3) {
              this._escHandlers[this._identifier(e3, [48, 126])] && delete this._escHandlers[this._identifier(e3, [48, 126])];
            }
            setEscHandlerFallback(e3) {
              this._escHandlerFb = e3;
            }
            setExecuteHandler(e3, t3) {
              this._executeHandlers[e3.charCodeAt(0)] = t3;
            }
            clearExecuteHandler(e3) {
              this._executeHandlers[e3.charCodeAt(0)] && delete this._executeHandlers[e3.charCodeAt(0)];
            }
            setExecuteHandlerFallback(e3) {
              this._executeHandlerFb = e3;
            }
            registerCsiHandler(e3, t3) {
              const i3 = this._identifier(e3);
              void 0 === this._csiHandlers[i3] && (this._csiHandlers[i3] = []);
              const s3 = this._csiHandlers[i3];
              return s3.push(t3), { dispose: () => {
                const e4 = s3.indexOf(t3);
                -1 !== e4 && s3.splice(e4, 1);
              } };
            }
            clearCsiHandler(e3) {
              this._csiHandlers[this._identifier(e3)] && delete this._csiHandlers[this._identifier(e3)];
            }
            setCsiHandlerFallback(e3) {
              this._csiHandlerFb = e3;
            }
            registerDcsHandler(e3, t3) {
              return this._dcsParser.registerHandler(this._identifier(e3), t3);
            }
            clearDcsHandler(e3) {
              this._dcsParser.clearHandler(this._identifier(e3));
            }
            setDcsHandlerFallback(e3) {
              this._dcsParser.setHandlerFallback(e3);
            }
            registerOscHandler(e3, t3) {
              return this._oscParser.registerHandler(e3, t3);
            }
            clearOscHandler(e3) {
              this._oscParser.clearHandler(e3);
            }
            setOscHandlerFallback(e3) {
              this._oscParser.setHandlerFallback(e3);
            }
            setErrorHandler(e3) {
              this._errorHandler = e3;
            }
            clearErrorHandler() {
              this._errorHandler = this._errorHandlerFb;
            }
            reset() {
              this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, 0 !== this._parseStack.state && (this._parseStack.state = 2, this._parseStack.handlers = []);
            }
            _preserveStack(e3, t3, i3, s3, r2) {
              this._parseStack.state = e3, this._parseStack.handlers = t3, this._parseStack.handlerPos = i3, this._parseStack.transition = s3, this._parseStack.chunkPos = r2;
            }
            parse(e3, t3, i3) {
              let s3, r2 = 0, n2 = 0, o2 = 0;
              if (this._parseStack.state)
                if (2 === this._parseStack.state)
                  this._parseStack.state = 0, o2 = this._parseStack.chunkPos + 1;
                else {
                  if (void 0 === i3 || 1 === this._parseStack.state)
                    throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
                  const t4 = this._parseStack.handlers;
                  let n3 = this._parseStack.handlerPos - 1;
                  switch (this._parseStack.state) {
                    case 3:
                      if (false === i3 && n3 > -1) {
                        for (; n3 >= 0 && (s3 = t4[n3](this._params), true !== s3); n3--)
                          if (s3 instanceof Promise)
                            return this._parseStack.handlerPos = n3, s3;
                      }
                      this._parseStack.handlers = [];
                      break;
                    case 4:
                      if (false === i3 && n3 > -1) {
                        for (; n3 >= 0 && (s3 = t4[n3](), true !== s3); n3--)
                          if (s3 instanceof Promise)
                            return this._parseStack.handlerPos = n3, s3;
                      }
                      this._parseStack.handlers = [];
                      break;
                    case 6:
                      if (r2 = e3[this._parseStack.chunkPos], s3 = this._dcsParser.unhook(24 !== r2 && 26 !== r2, i3), s3)
                        return s3;
                      27 === r2 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                      break;
                    case 5:
                      if (r2 = e3[this._parseStack.chunkPos], s3 = this._oscParser.end(24 !== r2 && 26 !== r2, i3), s3)
                        return s3;
                      27 === r2 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                  }
                  this._parseStack.state = 0, o2 = this._parseStack.chunkPos + 1, this.precedingJoinState = 0, this.currentState = 15 & this._parseStack.transition;
                }
              for (let i4 = o2; i4 < t3; ++i4) {
                switch (r2 = e3[i4], n2 = this._transitions.table[this.currentState << 8 | (r2 < 160 ? r2 : h)], n2 >> 4) {
                  case 2:
                    for (let s4 = i4 + 1; ; ++s4) {
                      if (s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                        this._printHandler(e3, i4, s4), i4 = s4 - 1;
                        break;
                      }
                      if (++s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                        this._printHandler(e3, i4, s4), i4 = s4 - 1;
                        break;
                      }
                      if (++s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                        this._printHandler(e3, i4, s4), i4 = s4 - 1;
                        break;
                      }
                      if (++s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                        this._printHandler(e3, i4, s4), i4 = s4 - 1;
                        break;
                      }
                    }
                    break;
                  case 3:
                    this._executeHandlers[r2] ? this._executeHandlers[r2]() : this._executeHandlerFb(r2), this.precedingJoinState = 0;
                    break;
                  case 0:
                    break;
                  case 1:
                    if (this._errorHandler({ position: i4, code: r2, currentState: this.currentState, collect: this._collect, params: this._params, abort: false }).abort)
                      return;
                    break;
                  case 7:
                    const o3 = this._csiHandlers[this._collect << 8 | r2];
                    let a2 = o3 ? o3.length - 1 : -1;
                    for (; a2 >= 0 && (s3 = o3[a2](this._params), true !== s3); a2--)
                      if (s3 instanceof Promise)
                        return this._preserveStack(3, o3, a2, n2, i4), s3;
                    a2 < 0 && this._csiHandlerFb(this._collect << 8 | r2, this._params), this.precedingJoinState = 0;
                    break;
                  case 8:
                    do {
                      switch (r2) {
                        case 59:
                          this._params.addParam(0);
                          break;
                        case 58:
                          this._params.addSubParam(-1);
                          break;
                        default:
                          this._params.addDigit(r2 - 48);
                      }
                    } while (++i4 < t3 && (r2 = e3[i4]) > 47 && r2 < 60);
                    i4--;
                    break;
                  case 9:
                    this._collect <<= 8, this._collect |= r2;
                    break;
                  case 10:
                    const c2 = this._escHandlers[this._collect << 8 | r2];
                    let l = c2 ? c2.length - 1 : -1;
                    for (; l >= 0 && (s3 = c2[l](), true !== s3); l--)
                      if (s3 instanceof Promise)
                        return this._preserveStack(4, c2, l, n2, i4), s3;
                    l < 0 && this._escHandlerFb(this._collect << 8 | r2), this.precedingJoinState = 0;
                    break;
                  case 11:
                    this._params.reset(), this._params.addParam(0), this._collect = 0;
                    break;
                  case 12:
                    this._dcsParser.hook(this._collect << 8 | r2, this._params);
                    break;
                  case 13:
                    for (let s4 = i4 + 1; ; ++s4)
                      if (s4 >= t3 || 24 === (r2 = e3[s4]) || 26 === r2 || 27 === r2 || r2 > 127 && r2 < h) {
                        this._dcsParser.put(e3, i4, s4), i4 = s4 - 1;
                        break;
                      }
                    break;
                  case 14:
                    if (s3 = this._dcsParser.unhook(24 !== r2 && 26 !== r2), s3)
                      return this._preserveStack(6, [], 0, n2, i4), s3;
                    27 === r2 && (n2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
                    break;
                  case 4:
                    this._oscParser.start();
                    break;
                  case 5:
                    for (let s4 = i4 + 1; ; s4++)
                      if (s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 127 && r2 < h) {
                        this._oscParser.put(e3, i4, s4), i4 = s4 - 1;
                        break;
                      }
                    break;
                  case 6:
                    if (s3 = this._oscParser.end(24 !== r2 && 26 !== r2), s3)
                      return this._preserveStack(5, [], 0, n2, i4), s3;
                    27 === r2 && (n2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
                }
                this.currentState = 15 & n2;
              }
            }
          }
          t2.EscapeSequenceParser = c;
        }, 6242: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.OscHandler = t2.OscParser = void 0;
          const s2 = i2(5770), r = i2(482), n = [];
          t2.OscParser = class {
            constructor() {
              this._state = 0, this._active = n, this._id = -1, this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
              }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
            }
            registerHandler(e3, t3) {
              void 0 === this._handlers[e3] && (this._handlers[e3] = []);
              const i3 = this._handlers[e3];
              return i3.push(t3), { dispose: () => {
                const e4 = i3.indexOf(t3);
                -1 !== e4 && i3.splice(e4, 1);
              } };
            }
            clearHandler(e3) {
              this._handlers[e3] && delete this._handlers[e3];
            }
            setHandlerFallback(e3) {
              this._handlerFb = e3;
            }
            dispose() {
              this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
              }, this._active = n;
            }
            reset() {
              if (2 === this._state)
                for (let e3 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e3 >= 0; --e3)
                  this._active[e3].end(false);
              this._stack.paused = false, this._active = n, this._id = -1, this._state = 0;
            }
            _start() {
              if (this._active = this._handlers[this._id] || n, this._active.length)
                for (let e3 = this._active.length - 1; e3 >= 0; e3--)
                  this._active[e3].start();
              else
                this._handlerFb(this._id, "START");
            }
            _put(e3, t3, i3) {
              if (this._active.length)
                for (let s3 = this._active.length - 1; s3 >= 0; s3--)
                  this._active[s3].put(e3, t3, i3);
              else
                this._handlerFb(this._id, "PUT", (0, r.utf32ToString)(e3, t3, i3));
            }
            start() {
              this.reset(), this._state = 1;
            }
            put(e3, t3, i3) {
              if (3 !== this._state) {
                if (1 === this._state)
                  for (; t3 < i3; ) {
                    const i4 = e3[t3++];
                    if (59 === i4) {
                      this._state = 2, this._start();
                      break;
                    }
                    if (i4 < 48 || 57 < i4)
                      return void (this._state = 3);
                    -1 === this._id && (this._id = 0), this._id = 10 * this._id + i4 - 48;
                  }
                2 === this._state && i3 - t3 > 0 && this._put(e3, t3, i3);
              }
            }
            end(e3, t3 = true) {
              if (0 !== this._state) {
                if (3 !== this._state)
                  if (1 === this._state && this._start(), this._active.length) {
                    let i3 = false, s3 = this._active.length - 1, r2 = false;
                    if (this._stack.paused && (s3 = this._stack.loopPosition - 1, i3 = t3, r2 = this._stack.fallThrough, this._stack.paused = false), !r2 && false === i3) {
                      for (; s3 >= 0 && (i3 = this._active[s3].end(e3), true !== i3); s3--)
                        if (i3 instanceof Promise)
                          return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = false, i3;
                      s3--;
                    }
                    for (; s3 >= 0; s3--)
                      if (i3 = this._active[s3].end(false), i3 instanceof Promise)
                        return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = true, i3;
                  } else
                    this._handlerFb(this._id, "END", e3);
                this._active = n, this._id = -1, this._state = 0;
              }
            }
          }, t2.OscHandler = class {
            constructor(e3) {
              this._handler = e3, this._data = "", this._hitLimit = false;
            }
            start() {
              this._data = "", this._hitLimit = false;
            }
            put(e3, t3, i3) {
              this._hitLimit || (this._data += (0, r.utf32ToString)(e3, t3, i3), this._data.length > s2.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
            }
            end(e3) {
              let t3 = false;
              if (this._hitLimit)
                t3 = false;
              else if (e3 && (t3 = this._handler(this._data), t3 instanceof Promise))
                return t3.then((e4) => (this._data = "", this._hitLimit = false, e4));
              return this._data = "", this._hitLimit = false, t3;
            }
          };
        }, 8742: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Params = void 0;
          const i2 = 2147483647;
          class s2 {
            static fromArray(e3) {
              const t3 = new s2();
              if (!e3.length)
                return t3;
              for (let i3 = Array.isArray(e3[0]) ? 1 : 0; i3 < e3.length; ++i3) {
                const s3 = e3[i3];
                if (Array.isArray(s3))
                  for (let e4 = 0; e4 < s3.length; ++e4)
                    t3.addSubParam(s3[e4]);
                else
                  t3.addParam(s3);
              }
              return t3;
            }
            constructor(e3 = 32, t3 = 32) {
              if (this.maxLength = e3, this.maxSubParamsLength = t3, t3 > 256)
                throw new Error("maxSubParamsLength must not be greater than 256");
              this.params = new Int32Array(e3), this.length = 0, this._subParams = new Int32Array(t3), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e3), this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
            }
            clone() {
              const e3 = new s2(this.maxLength, this.maxSubParamsLength);
              return e3.params.set(this.params), e3.length = this.length, e3._subParams.set(this._subParams), e3._subParamsLength = this._subParamsLength, e3._subParamsIdx.set(this._subParamsIdx), e3._rejectDigits = this._rejectDigits, e3._rejectSubDigits = this._rejectSubDigits, e3._digitIsSub = this._digitIsSub, e3;
            }
            toArray() {
              const e3 = [];
              for (let t3 = 0; t3 < this.length; ++t3) {
                e3.push(this.params[t3]);
                const i3 = this._subParamsIdx[t3] >> 8, s3 = 255 & this._subParamsIdx[t3];
                s3 - i3 > 0 && e3.push(Array.prototype.slice.call(this._subParams, i3, s3));
              }
              return e3;
            }
            reset() {
              this.length = 0, this._subParamsLength = 0, this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
            }
            addParam(e3) {
              if (this._digitIsSub = false, this.length >= this.maxLength)
                this._rejectDigits = true;
              else {
                if (e3 < -1)
                  throw new Error("values lesser than -1 are not allowed");
                this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e3 > i2 ? i2 : e3;
              }
            }
            addSubParam(e3) {
              if (this._digitIsSub = true, this.length)
                if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength)
                  this._rejectSubDigits = true;
                else {
                  if (e3 < -1)
                    throw new Error("values lesser than -1 are not allowed");
                  this._subParams[this._subParamsLength++] = e3 > i2 ? i2 : e3, this._subParamsIdx[this.length - 1]++;
                }
            }
            hasSubParams(e3) {
              return (255 & this._subParamsIdx[e3]) - (this._subParamsIdx[e3] >> 8) > 0;
            }
            getSubParams(e3) {
              const t3 = this._subParamsIdx[e3] >> 8, i3 = 255 & this._subParamsIdx[e3];
              return i3 - t3 > 0 ? this._subParams.subarray(t3, i3) : null;
            }
            getSubParamsAll() {
              const e3 = {};
              for (let t3 = 0; t3 < this.length; ++t3) {
                const i3 = this._subParamsIdx[t3] >> 8, s3 = 255 & this._subParamsIdx[t3];
                s3 - i3 > 0 && (e3[t3] = this._subParams.slice(i3, s3));
              }
              return e3;
            }
            addDigit(e3) {
              let t3;
              if (this._rejectDigits || !(t3 = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)
                return;
              const s3 = this._digitIsSub ? this._subParams : this.params, r = s3[t3 - 1];
              s3[t3 - 1] = ~r ? Math.min(10 * r + e3, i2) : e3;
            }
          }
          t2.Params = s2;
        }, 5741: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.AddonManager = void 0, t2.AddonManager = class {
            constructor() {
              this._addons = [];
            }
            dispose() {
              for (let e3 = this._addons.length - 1; e3 >= 0; e3--)
                this._addons[e3].instance.dispose();
            }
            loadAddon(e3, t3) {
              const i2 = { instance: t3, dispose: t3.dispose, isDisposed: false };
              this._addons.push(i2), t3.dispose = () => this._wrappedAddonDispose(i2), t3.activate(e3);
            }
            _wrappedAddonDispose(e3) {
              if (e3.isDisposed)
                return;
              let t3 = -1;
              for (let i2 = 0; i2 < this._addons.length; i2++)
                if (this._addons[i2] === e3) {
                  t3 = i2;
                  break;
                }
              if (-1 === t3)
                throw new Error("Could not dispose an addon that has not been loaded");
              e3.isDisposed = true, e3.dispose.apply(e3.instance), this._addons.splice(t3, 1);
            }
          };
        }, 8771: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferApiView = void 0;
          const s2 = i2(3785), r = i2(511);
          t2.BufferApiView = class {
            constructor(e3, t3) {
              this._buffer = e3, this.type = t3;
            }
            init(e3) {
              return this._buffer = e3, this;
            }
            get cursorY() {
              return this._buffer.y;
            }
            get cursorX() {
              return this._buffer.x;
            }
            get viewportY() {
              return this._buffer.ydisp;
            }
            get baseY() {
              return this._buffer.ybase;
            }
            get length() {
              return this._buffer.lines.length;
            }
            getLine(e3) {
              const t3 = this._buffer.lines.get(e3);
              if (t3)
                return new s2.BufferLineApiView(t3);
            }
            getNullCell() {
              return new r.CellData();
            }
          };
        }, 3785: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLineApiView = void 0;
          const s2 = i2(511);
          t2.BufferLineApiView = class {
            constructor(e3) {
              this._line = e3;
            }
            get isWrapped() {
              return this._line.isWrapped;
            }
            get length() {
              return this._line.length;
            }
            getCell(e3, t3) {
              if (!(e3 < 0 || e3 >= this._line.length))
                return t3 ? (this._line.loadCell(e3, t3), t3) : this._line.loadCell(e3, new s2.CellData());
            }
            translateToString(e3, t3, i3) {
              return this._line.translateToString(e3, t3, i3);
            }
          };
        }, 8285: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferNamespaceApi = void 0;
          const s2 = i2(8771), r = i2(8460), n = i2(844);
          class o extends n.Disposable {
            constructor(e3) {
              super(), this._core = e3, this._onBufferChange = this.register(new r.EventEmitter()), this.onBufferChange = this._onBufferChange.event, this._normal = new s2.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new s2.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active));
            }
            get active() {
              if (this._core.buffers.active === this._core.buffers.normal)
                return this.normal;
              if (this._core.buffers.active === this._core.buffers.alt)
                return this.alternate;
              throw new Error("Active buffer is neither normal nor alternate");
            }
            get normal() {
              return this._normal.init(this._core.buffers.normal);
            }
            get alternate() {
              return this._alternate.init(this._core.buffers.alt);
            }
          }
          t2.BufferNamespaceApi = o;
        }, 7975: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ParserApi = void 0, t2.ParserApi = class {
            constructor(e3) {
              this._core = e3;
            }
            registerCsiHandler(e3, t3) {
              return this._core.registerCsiHandler(e3, (e4) => t3(e4.toArray()));
            }
            addCsiHandler(e3, t3) {
              return this.registerCsiHandler(e3, t3);
            }
            registerDcsHandler(e3, t3) {
              return this._core.registerDcsHandler(e3, (e4, i2) => t3(e4, i2.toArray()));
            }
            addDcsHandler(e3, t3) {
              return this.registerDcsHandler(e3, t3);
            }
            registerEscHandler(e3, t3) {
              return this._core.registerEscHandler(e3, t3);
            }
            addEscHandler(e3, t3) {
              return this.registerEscHandler(e3, t3);
            }
            registerOscHandler(e3, t3) {
              return this._core.registerOscHandler(e3, t3);
            }
            addOscHandler(e3, t3) {
              return this.registerOscHandler(e3, t3);
            }
          };
        }, 7090: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeApi = void 0, t2.UnicodeApi = class {
            constructor(e3) {
              this._core = e3;
            }
            register(e3) {
              this._core.unicodeService.register(e3);
            }
            get versions() {
              return this._core.unicodeService.versions;
            }
            get activeVersion() {
              return this._core.unicodeService.activeVersion;
            }
            set activeVersion(e3) {
              this._core.unicodeService.activeVersion = e3;
            }
          };
        }, 744: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferService = t2.MINIMUM_ROWS = t2.MINIMUM_COLS = void 0;
          const n = i2(8460), o = i2(844), a = i2(5295), h = i2(2585);
          t2.MINIMUM_COLS = 2, t2.MINIMUM_ROWS = 1;
          let c = t2.BufferService = class extends o.Disposable {
            get buffer() {
              return this.buffers.active;
            }
            constructor(e3) {
              super(), this.isUserScrolling = false, this._onResize = this.register(new n.EventEmitter()), this.onResize = this._onResize.event, this._onScroll = this.register(new n.EventEmitter()), this.onScroll = this._onScroll.event, this.cols = Math.max(e3.rawOptions.cols || 0, t2.MINIMUM_COLS), this.rows = Math.max(e3.rawOptions.rows || 0, t2.MINIMUM_ROWS), this.buffers = this.register(new a.BufferSet(e3, this));
            }
            resize(e3, t3) {
              this.cols = e3, this.rows = t3, this.buffers.resize(e3, t3), this._onResize.fire({ cols: e3, rows: t3 });
            }
            reset() {
              this.buffers.reset(), this.isUserScrolling = false;
            }
            scroll(e3, t3 = false) {
              const i3 = this.buffer;
              let s3;
              s3 = this._cachedBlankLine, s3 && s3.length === this.cols && s3.getFg(0) === e3.fg && s3.getBg(0) === e3.bg || (s3 = i3.getBlankLine(e3, t3), this._cachedBlankLine = s3), s3.isWrapped = t3;
              const r2 = i3.ybase + i3.scrollTop, n2 = i3.ybase + i3.scrollBottom;
              if (0 === i3.scrollTop) {
                const e4 = i3.lines.isFull;
                n2 === i3.lines.length - 1 ? e4 ? i3.lines.recycle().copyFrom(s3) : i3.lines.push(s3.clone()) : i3.lines.splice(n2 + 1, 0, s3.clone()), e4 ? this.isUserScrolling && (i3.ydisp = Math.max(i3.ydisp - 1, 0)) : (i3.ybase++, this.isUserScrolling || i3.ydisp++);
              } else {
                const e4 = n2 - r2 + 1;
                i3.lines.shiftElements(r2 + 1, e4 - 1, -1), i3.lines.set(n2, s3.clone());
              }
              this.isUserScrolling || (i3.ydisp = i3.ybase), this._onScroll.fire(i3.ydisp);
            }
            scrollLines(e3, t3, i3) {
              const s3 = this.buffer;
              if (e3 < 0) {
                if (0 === s3.ydisp)
                  return;
                this.isUserScrolling = true;
              } else
                e3 + s3.ydisp >= s3.ybase && (this.isUserScrolling = false);
              const r2 = s3.ydisp;
              s3.ydisp = Math.max(Math.min(s3.ydisp + e3, s3.ybase), 0), r2 !== s3.ydisp && (t3 || this._onScroll.fire(s3.ydisp));
            }
          };
          t2.BufferService = c = s2([r(0, h.IOptionsService)], c);
        }, 7994: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CharsetService = void 0, t2.CharsetService = class {
            constructor() {
              this.glevel = 0, this._charsets = [];
            }
            reset() {
              this.charset = void 0, this._charsets = [], this.glevel = 0;
            }
            setgLevel(e3) {
              this.glevel = e3, this.charset = this._charsets[e3];
            }
            setgCharset(e3, t3) {
              this._charsets[e3] = t3, this.glevel === e3 && (this.charset = t3);
            }
          };
        }, 1753: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreMouseService = void 0;
          const n = i2(2585), o = i2(8460), a = i2(844), h = { NONE: { events: 0, restrict: () => false }, X10: { events: 1, restrict: (e3) => 4 !== e3.button && 1 === e3.action && (e3.ctrl = false, e3.alt = false, e3.shift = false, true) }, VT200: { events: 19, restrict: (e3) => 32 !== e3.action }, DRAG: { events: 23, restrict: (e3) => 32 !== e3.action || 3 !== e3.button }, ANY: { events: 31, restrict: (e3) => true } };
          function c(e3, t3) {
            let i3 = (e3.ctrl ? 16 : 0) | (e3.shift ? 4 : 0) | (e3.alt ? 8 : 0);
            return 4 === e3.button ? (i3 |= 64, i3 |= e3.action) : (i3 |= 3 & e3.button, 4 & e3.button && (i3 |= 64), 8 & e3.button && (i3 |= 128), 32 === e3.action ? i3 |= 32 : 0 !== e3.action || t3 || (i3 |= 3)), i3;
          }
          const l = String.fromCharCode, d = { DEFAULT: (e3) => {
            const t3 = [c(e3, false) + 32, e3.col + 32, e3.row + 32];
            return t3[0] > 255 || t3[1] > 255 || t3[2] > 255 ? "" : `\x1B[M${l(t3[0])}${l(t3[1])}${l(t3[2])}`;
          }, SGR: (e3) => {
            const t3 = 0 === e3.action && 4 !== e3.button ? "m" : "M";
            return `\x1B[<${c(e3, true)};${e3.col};${e3.row}${t3}`;
          }, SGR_PIXELS: (e3) => {
            const t3 = 0 === e3.action && 4 !== e3.button ? "m" : "M";
            return `\x1B[<${c(e3, true)};${e3.x};${e3.y}${t3}`;
          } };
          let _ = t2.CoreMouseService = class extends a.Disposable {
            constructor(e3, t3) {
              super(), this._bufferService = e3, this._coreService = t3, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._lastEvent = null, this._onProtocolChange = this.register(new o.EventEmitter()), this.onProtocolChange = this._onProtocolChange.event;
              for (const e4 of Object.keys(h))
                this.addProtocol(e4, h[e4]);
              for (const e4 of Object.keys(d))
                this.addEncoding(e4, d[e4]);
              this.reset();
            }
            addProtocol(e3, t3) {
              this._protocols[e3] = t3;
            }
            addEncoding(e3, t3) {
              this._encodings[e3] = t3;
            }
            get activeProtocol() {
              return this._activeProtocol;
            }
            get areMouseEventsActive() {
              return 0 !== this._protocols[this._activeProtocol].events;
            }
            set activeProtocol(e3) {
              if (!this._protocols[e3])
                throw new Error(`unknown protocol "${e3}"`);
              this._activeProtocol = e3, this._onProtocolChange.fire(this._protocols[e3].events);
            }
            get activeEncoding() {
              return this._activeEncoding;
            }
            set activeEncoding(e3) {
              if (!this._encodings[e3])
                throw new Error(`unknown encoding "${e3}"`);
              this._activeEncoding = e3;
            }
            reset() {
              this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
            }
            triggerMouseEvent(e3) {
              if (e3.col < 0 || e3.col >= this._bufferService.cols || e3.row < 0 || e3.row >= this._bufferService.rows)
                return false;
              if (4 === e3.button && 32 === e3.action)
                return false;
              if (3 === e3.button && 32 !== e3.action)
                return false;
              if (4 !== e3.button && (2 === e3.action || 3 === e3.action))
                return false;
              if (e3.col++, e3.row++, 32 === e3.action && this._lastEvent && this._equalEvents(this._lastEvent, e3, "SGR_PIXELS" === this._activeEncoding))
                return false;
              if (!this._protocols[this._activeProtocol].restrict(e3))
                return false;
              const t3 = this._encodings[this._activeEncoding](e3);
              return t3 && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t3) : this._coreService.triggerDataEvent(t3, true)), this._lastEvent = e3, true;
            }
            explainEvents(e3) {
              return { down: !!(1 & e3), up: !!(2 & e3), drag: !!(4 & e3), move: !!(8 & e3), wheel: !!(16 & e3) };
            }
            _equalEvents(e3, t3, i3) {
              if (i3) {
                if (e3.x !== t3.x)
                  return false;
                if (e3.y !== t3.y)
                  return false;
              } else {
                if (e3.col !== t3.col)
                  return false;
                if (e3.row !== t3.row)
                  return false;
              }
              return e3.button === t3.button && e3.action === t3.action && e3.ctrl === t3.ctrl && e3.alt === t3.alt && e3.shift === t3.shift;
            }
          };
          t2.CoreMouseService = _ = s2([r(0, n.IBufferService), r(1, n.ICoreService)], _);
        }, 6975: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreService = void 0;
          const n = i2(1439), o = i2(8460), a = i2(844), h = i2(2585), c = Object.freeze({ insertMode: false }), l = Object.freeze({ applicationCursorKeys: false, applicationKeypad: false, bracketedPasteMode: false, origin: false, reverseWraparound: false, sendFocus: false, wraparound: true });
          let d = t2.CoreService = class extends a.Disposable {
            constructor(e3, t3, i3) {
              super(), this._bufferService = e3, this._logService = t3, this._optionsService = i3, this.isCursorInitialized = false, this.isCursorHidden = false, this._onData = this.register(new o.EventEmitter()), this.onData = this._onData.event, this._onUserInput = this.register(new o.EventEmitter()), this.onUserInput = this._onUserInput.event, this._onBinary = this.register(new o.EventEmitter()), this.onBinary = this._onBinary.event, this._onRequestScrollToBottom = this.register(new o.EventEmitter()), this.onRequestScrollToBottom = this._onRequestScrollToBottom.event, this.modes = (0, n.clone)(c), this.decPrivateModes = (0, n.clone)(l);
            }
            reset() {
              this.modes = (0, n.clone)(c), this.decPrivateModes = (0, n.clone)(l);
            }
            triggerDataEvent(e3, t3 = false) {
              if (this._optionsService.rawOptions.disableStdin)
                return;
              const i3 = this._bufferService.buffer;
              t3 && this._optionsService.rawOptions.scrollOnUserInput && i3.ybase !== i3.ydisp && this._onRequestScrollToBottom.fire(), t3 && this._onUserInput.fire(), this._logService.debug(`sending data "${e3}"`, () => e3.split("").map((e4) => e4.charCodeAt(0))), this._onData.fire(e3);
            }
            triggerBinaryEvent(e3) {
              this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${e3}"`, () => e3.split("").map((e4) => e4.charCodeAt(0))), this._onBinary.fire(e3));
            }
          };
          t2.CoreService = d = s2([r(0, h.IBufferService), r(1, h.ILogService), r(2, h.IOptionsService)], d);
        }, 9074: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DecorationService = void 0;
          const s2 = i2(8055), r = i2(8460), n = i2(844), o = i2(6106);
          let a = 0, h = 0;
          class c extends n.Disposable {
            get decorations() {
              return this._decorations.values();
            }
            constructor() {
              super(), this._decorations = new o.SortedList((e3) => e3?.marker.line), this._onDecorationRegistered = this.register(new r.EventEmitter()), this.onDecorationRegistered = this._onDecorationRegistered.event, this._onDecorationRemoved = this.register(new r.EventEmitter()), this.onDecorationRemoved = this._onDecorationRemoved.event, this.register((0, n.toDisposable)(() => this.reset()));
            }
            registerDecoration(e3) {
              if (e3.marker.isDisposed)
                return;
              const t3 = new l(e3);
              if (t3) {
                const e4 = t3.marker.onDispose(() => t3.dispose());
                t3.onDispose(() => {
                  t3 && (this._decorations.delete(t3) && this._onDecorationRemoved.fire(t3), e4.dispose());
                }), this._decorations.insert(t3), this._onDecorationRegistered.fire(t3);
              }
              return t3;
            }
            reset() {
              for (const e3 of this._decorations.values())
                e3.dispose();
              this._decorations.clear();
            }
            *getDecorationsAtCell(e3, t3, i3) {
              let s3 = 0, r2 = 0;
              for (const n2 of this._decorations.getKeyIterator(t3))
                s3 = n2.options.x ?? 0, r2 = s3 + (n2.options.width ?? 1), e3 >= s3 && e3 < r2 && (!i3 || (n2.options.layer ?? "bottom") === i3) && (yield n2);
            }
            forEachDecorationAtCell(e3, t3, i3, s3) {
              this._decorations.forEachByKey(t3, (t4) => {
                a = t4.options.x ?? 0, h = a + (t4.options.width ?? 1), e3 >= a && e3 < h && (!i3 || (t4.options.layer ?? "bottom") === i3) && s3(t4);
              });
            }
          }
          t2.DecorationService = c;
          class l extends n.Disposable {
            get isDisposed() {
              return this._isDisposed;
            }
            get backgroundColorRGB() {
              return null === this._cachedBg && (this.options.backgroundColor ? this._cachedBg = s2.css.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
            }
            get foregroundColorRGB() {
              return null === this._cachedFg && (this.options.foregroundColor ? this._cachedFg = s2.css.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
            }
            constructor(e3) {
              super(), this.options = e3, this.onRenderEmitter = this.register(new r.EventEmitter()), this.onRender = this.onRenderEmitter.event, this._onDispose = this.register(new r.EventEmitter()), this.onDispose = this._onDispose.event, this._cachedBg = null, this._cachedFg = null, this.marker = e3.marker, this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position && (this.options.overviewRulerOptions.position = "full");
            }
            dispose() {
              this._onDispose.fire(), super.dispose();
            }
          }
        }, 4348: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.InstantiationService = t2.ServiceCollection = void 0;
          const s2 = i2(2585), r = i2(8343);
          class n {
            constructor(...e3) {
              this._entries = /* @__PURE__ */ new Map();
              for (const [t3, i3] of e3)
                this.set(t3, i3);
            }
            set(e3, t3) {
              const i3 = this._entries.get(e3);
              return this._entries.set(e3, t3), i3;
            }
            forEach(e3) {
              for (const [t3, i3] of this._entries.entries())
                e3(t3, i3);
            }
            has(e3) {
              return this._entries.has(e3);
            }
            get(e3) {
              return this._entries.get(e3);
            }
          }
          t2.ServiceCollection = n, t2.InstantiationService = class {
            constructor() {
              this._services = new n(), this._services.set(s2.IInstantiationService, this);
            }
            setService(e3, t3) {
              this._services.set(e3, t3);
            }
            getService(e3) {
              return this._services.get(e3);
            }
            createInstance(e3, ...t3) {
              const i3 = (0, r.getServiceDependencies)(e3).sort((e4, t4) => e4.index - t4.index), s3 = [];
              for (const t4 of i3) {
                const i4 = this._services.get(t4.id);
                if (!i4)
                  throw new Error(`[createInstance] ${e3.name} depends on UNKNOWN service ${t4.id}.`);
                s3.push(i4);
              }
              const n2 = i3.length > 0 ? i3[0].index : t3.length;
              if (t3.length !== n2)
                throw new Error(`[createInstance] First service dependency of ${e3.name} at position ${n2 + 1} conflicts with ${t3.length} static arguments`);
              return new e3(...[...t3, ...s3]);
            }
          };
        }, 7866: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a2 = e3.length - 1; a2 >= 0; a2--)
                (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.traceCall = t2.setTraceLogger = t2.LogService = void 0;
          const n = i2(844), o = i2(2585), a = { trace: o.LogLevelEnum.TRACE, debug: o.LogLevelEnum.DEBUG, info: o.LogLevelEnum.INFO, warn: o.LogLevelEnum.WARN, error: o.LogLevelEnum.ERROR, off: o.LogLevelEnum.OFF };
          let h, c = t2.LogService = class extends n.Disposable {
            get logLevel() {
              return this._logLevel;
            }
            constructor(e3) {
              super(), this._optionsService = e3, this._logLevel = o.LogLevelEnum.OFF, this._updateLogLevel(), this.register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel())), h = this;
            }
            _updateLogLevel() {
              this._logLevel = a[this._optionsService.rawOptions.logLevel];
            }
            _evalLazyOptionalParams(e3) {
              for (let t3 = 0; t3 < e3.length; t3++)
                "function" == typeof e3[t3] && (e3[t3] = e3[t3]());
            }
            _log(e3, t3, i3) {
              this._evalLazyOptionalParams(i3), e3.call(console, (this._optionsService.options.logger ? "" : "xterm.js: ") + t3, ...i3);
            }
            trace(e3, ...t3) {
              this._logLevel <= o.LogLevelEnum.TRACE && this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, e3, t3);
            }
            debug(e3, ...t3) {
              this._logLevel <= o.LogLevelEnum.DEBUG && this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, e3, t3);
            }
            info(e3, ...t3) {
              this._logLevel <= o.LogLevelEnum.INFO && this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, e3, t3);
            }
            warn(e3, ...t3) {
              this._logLevel <= o.LogLevelEnum.WARN && this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, e3, t3);
            }
            error(e3, ...t3) {
              this._logLevel <= o.LogLevelEnum.ERROR && this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, e3, t3);
            }
          };
          t2.LogService = c = s2([r(0, o.IOptionsService)], c), t2.setTraceLogger = function(e3) {
            h = e3;
          }, t2.traceCall = function(e3, t3, i3) {
            if ("function" != typeof i3.value)
              throw new Error("not supported");
            const s3 = i3.value;
            i3.value = function(...e4) {
              if (h.logLevel !== o.LogLevelEnum.TRACE)
                return s3.apply(this, e4);
              h.trace(`GlyphRenderer#${s3.name}(${e4.map((e5) => JSON.stringify(e5)).join(", ")})`);
              const t4 = s3.apply(this, e4);
              return h.trace(`GlyphRenderer#${s3.name} return`, t4), t4;
            };
          };
        }, 7302: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.OptionsService = t2.DEFAULT_OPTIONS = void 0;
          const s2 = i2(8460), r = i2(844), n = i2(6114);
          t2.DEFAULT_OPTIONS = { cols: 80, rows: 24, cursorBlink: false, cursorStyle: "block", cursorWidth: 1, cursorInactiveStyle: "outline", customGlyphs: true, drawBoldTextInBrightColors: true, documentOverride: null, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "courier-new, courier, monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", ignoreBracketedPasteMode: false, lineHeight: 1, letterSpacing: 0, linkHandler: null, logLevel: "info", logger: null, scrollback: 1e3, scrollOnUserInput: true, scrollSensitivity: 1, screenReaderMode: false, smoothScrollDuration: 0, macOptionIsMeta: false, macOptionClickForcesSelection: false, minimumContrastRatio: 1, disableStdin: false, allowProposedApi: false, allowTransparency: false, tabStopWidth: 8, theme: {}, rightClickSelectsWord: n.isMac, windowOptions: {}, windowsMode: false, windowsPty: {}, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: true, convertEol: false, termName: "xterm", cancelEvents: false, overviewRulerWidth: 0 };
          const o = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
          class a extends r.Disposable {
            constructor(e3) {
              super(), this._onOptionChange = this.register(new s2.EventEmitter()), this.onOptionChange = this._onOptionChange.event;
              const i3 = { ...t2.DEFAULT_OPTIONS };
              for (const t3 in e3)
                if (t3 in i3)
                  try {
                    const s3 = e3[t3];
                    i3[t3] = this._sanitizeAndValidateOption(t3, s3);
                  } catch (e4) {
                    console.error(e4);
                  }
              this.rawOptions = i3, this.options = { ...i3 }, this._setupOptions();
            }
            onSpecificOptionChange(e3, t3) {
              return this.onOptionChange((i3) => {
                i3 === e3 && t3(this.rawOptions[e3]);
              });
            }
            onMultipleOptionChange(e3, t3) {
              return this.onOptionChange((i3) => {
                -1 !== e3.indexOf(i3) && t3();
              });
            }
            _setupOptions() {
              const e3 = (e4) => {
                if (!(e4 in t2.DEFAULT_OPTIONS))
                  throw new Error(`No option with key "${e4}"`);
                return this.rawOptions[e4];
              }, i3 = (e4, i4) => {
                if (!(e4 in t2.DEFAULT_OPTIONS))
                  throw new Error(`No option with key "${e4}"`);
                i4 = this._sanitizeAndValidateOption(e4, i4), this.rawOptions[e4] !== i4 && (this.rawOptions[e4] = i4, this._onOptionChange.fire(e4));
              };
              for (const t3 in this.rawOptions) {
                const s3 = { get: e3.bind(this, t3), set: i3.bind(this, t3) };
                Object.defineProperty(this.options, t3, s3);
              }
            }
            _sanitizeAndValidateOption(e3, i3) {
              switch (e3) {
                case "cursorStyle":
                  if (i3 || (i3 = t2.DEFAULT_OPTIONS[e3]), !/* @__PURE__ */ function(e4) {
                    return "block" === e4 || "underline" === e4 || "bar" === e4;
                  }(i3))
                    throw new Error(`"${i3}" is not a valid value for ${e3}`);
                  break;
                case "wordSeparator":
                  i3 || (i3 = t2.DEFAULT_OPTIONS[e3]);
                  break;
                case "fontWeight":
                case "fontWeightBold":
                  if ("number" == typeof i3 && 1 <= i3 && i3 <= 1e3)
                    break;
                  i3 = o.includes(i3) ? i3 : t2.DEFAULT_OPTIONS[e3];
                  break;
                case "cursorWidth":
                  i3 = Math.floor(i3);
                case "lineHeight":
                case "tabStopWidth":
                  if (i3 < 1)
                    throw new Error(`${e3} cannot be less than 1, value: ${i3}`);
                  break;
                case "minimumContrastRatio":
                  i3 = Math.max(1, Math.min(21, Math.round(10 * i3) / 10));
                  break;
                case "scrollback":
                  if ((i3 = Math.min(i3, 4294967295)) < 0)
                    throw new Error(`${e3} cannot be less than 0, value: ${i3}`);
                  break;
                case "fastScrollSensitivity":
                case "scrollSensitivity":
                  if (i3 <= 0)
                    throw new Error(`${e3} cannot be less than or equal to 0, value: ${i3}`);
                  break;
                case "rows":
                case "cols":
                  if (!i3 && 0 !== i3)
                    throw new Error(`${e3} must be numeric, value: ${i3}`);
                  break;
                case "windowsPty":
                  i3 = i3 ?? {};
              }
              return i3;
            }
          }
          t2.OptionsService = a;
        }, 2660: function(e2, t2, i2) {
          var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
            var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              o2 = Reflect.decorate(e3, t3, i3, s3);
            else
              for (var a = e3.length - 1; a >= 0; a--)
                (r2 = e3[a]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
            return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
          }, r = this && this.__param || function(e3, t3) {
            return function(i3, s3) {
              t3(i3, s3, e3);
            };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.OscLinkService = void 0;
          const n = i2(2585);
          let o = t2.OscLinkService = class {
            constructor(e3) {
              this._bufferService = e3, this._nextId = 1, this._entriesWithId = /* @__PURE__ */ new Map(), this._dataByLinkId = /* @__PURE__ */ new Map();
            }
            registerLink(e3) {
              const t3 = this._bufferService.buffer;
              if (void 0 === e3.id) {
                const i4 = t3.addMarker(t3.ybase + t3.y), s4 = { data: e3, id: this._nextId++, lines: [i4] };
                return i4.onDispose(() => this._removeMarkerFromLink(s4, i4)), this._dataByLinkId.set(s4.id, s4), s4.id;
              }
              const i3 = e3, s3 = this._getEntryIdKey(i3), r2 = this._entriesWithId.get(s3);
              if (r2)
                return this.addLineToLink(r2.id, t3.ybase + t3.y), r2.id;
              const n2 = t3.addMarker(t3.ybase + t3.y), o2 = { id: this._nextId++, key: this._getEntryIdKey(i3), data: i3, lines: [n2] };
              return n2.onDispose(() => this._removeMarkerFromLink(o2, n2)), this._entriesWithId.set(o2.key, o2), this._dataByLinkId.set(o2.id, o2), o2.id;
            }
            addLineToLink(e3, t3) {
              const i3 = this._dataByLinkId.get(e3);
              if (i3 && i3.lines.every((e4) => e4.line !== t3)) {
                const e4 = this._bufferService.buffer.addMarker(t3);
                i3.lines.push(e4), e4.onDispose(() => this._removeMarkerFromLink(i3, e4));
              }
            }
            getLinkData(e3) {
              return this._dataByLinkId.get(e3)?.data;
            }
            _getEntryIdKey(e3) {
              return `${e3.id};;${e3.uri}`;
            }
            _removeMarkerFromLink(e3, t3) {
              const i3 = e3.lines.indexOf(t3);
              -1 !== i3 && (e3.lines.splice(i3, 1), 0 === e3.lines.length && (void 0 !== e3.data.id && this._entriesWithId.delete(e3.key), this._dataByLinkId.delete(e3.id)));
            }
          };
          t2.OscLinkService = o = s2([r(0, n.IBufferService)], o);
        }, 8343: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createDecorator = t2.getServiceDependencies = t2.serviceRegistry = void 0;
          const i2 = "di$target", s2 = "di$dependencies";
          t2.serviceRegistry = /* @__PURE__ */ new Map(), t2.getServiceDependencies = function(e3) {
            return e3[s2] || [];
          }, t2.createDecorator = function(e3) {
            if (t2.serviceRegistry.has(e3))
              return t2.serviceRegistry.get(e3);
            const r = function(e4, t3, n) {
              if (3 !== arguments.length)
                throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
              !function(e5, t4, r2) {
                t4[i2] === t4 ? t4[s2].push({ id: e5, index: r2 }) : (t4[s2] = [{ id: e5, index: r2 }], t4[i2] = t4);
              }(r, e4, n);
            };
            return r.toString = () => e3, t2.serviceRegistry.set(e3, r), r;
          };
        }, 2585: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.IDecorationService = t2.IUnicodeService = t2.IOscLinkService = t2.IOptionsService = t2.ILogService = t2.LogLevelEnum = t2.IInstantiationService = t2.ICharsetService = t2.ICoreService = t2.ICoreMouseService = t2.IBufferService = void 0;
          const s2 = i2(8343);
          var r;
          t2.IBufferService = (0, s2.createDecorator)("BufferService"), t2.ICoreMouseService = (0, s2.createDecorator)("CoreMouseService"), t2.ICoreService = (0, s2.createDecorator)("CoreService"), t2.ICharsetService = (0, s2.createDecorator)("CharsetService"), t2.IInstantiationService = (0, s2.createDecorator)("InstantiationService"), function(e3) {
            e3[e3.TRACE = 0] = "TRACE", e3[e3.DEBUG = 1] = "DEBUG", e3[e3.INFO = 2] = "INFO", e3[e3.WARN = 3] = "WARN", e3[e3.ERROR = 4] = "ERROR", e3[e3.OFF = 5] = "OFF";
          }(r || (t2.LogLevelEnum = r = {})), t2.ILogService = (0, s2.createDecorator)("LogService"), t2.IOptionsService = (0, s2.createDecorator)("OptionsService"), t2.IOscLinkService = (0, s2.createDecorator)("OscLinkService"), t2.IUnicodeService = (0, s2.createDecorator)("UnicodeService"), t2.IDecorationService = (0, s2.createDecorator)("DecorationService");
        }, 1480: (e2, t2, i2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeService = void 0;
          const s2 = i2(8460), r = i2(225);
          class n {
            static extractShouldJoin(e3) {
              return 0 != (1 & e3);
            }
            static extractWidth(e3) {
              return e3 >> 1 & 3;
            }
            static extractCharKind(e3) {
              return e3 >> 3;
            }
            static createPropertyValue(e3, t3, i3 = false) {
              return (16777215 & e3) << 3 | (3 & t3) << 1 | (i3 ? 1 : 0);
            }
            constructor() {
              this._providers = /* @__PURE__ */ Object.create(null), this._active = "", this._onChange = new s2.EventEmitter(), this.onChange = this._onChange.event;
              const e3 = new r.UnicodeV6();
              this.register(e3), this._active = e3.version, this._activeProvider = e3;
            }
            dispose() {
              this._onChange.dispose();
            }
            get versions() {
              return Object.keys(this._providers);
            }
            get activeVersion() {
              return this._active;
            }
            set activeVersion(e3) {
              if (!this._providers[e3])
                throw new Error(`unknown Unicode version "${e3}"`);
              this._active = e3, this._activeProvider = this._providers[e3], this._onChange.fire(e3);
            }
            register(e3) {
              this._providers[e3.version] = e3;
            }
            wcwidth(e3) {
              return this._activeProvider.wcwidth(e3);
            }
            getStringCellWidth(e3) {
              let t3 = 0, i3 = 0;
              const s3 = e3.length;
              for (let r2 = 0; r2 < s3; ++r2) {
                let o = e3.charCodeAt(r2);
                if (55296 <= o && o <= 56319) {
                  if (++r2 >= s3)
                    return t3 + this.wcwidth(o);
                  const i4 = e3.charCodeAt(r2);
                  56320 <= i4 && i4 <= 57343 ? o = 1024 * (o - 55296) + i4 - 56320 + 65536 : t3 += this.wcwidth(i4);
                }
                const a = this.charProperties(o, i3);
                let h = n.extractWidth(a);
                n.extractShouldJoin(a) && (h -= n.extractWidth(i3)), t3 += h, i3 = a;
              }
              return t3;
            }
            charProperties(e3, t3) {
              return this._activeProvider.charProperties(e3, t3);
            }
          }
          t2.UnicodeService = n;
        } }, t = {};
        function i(s2) {
          var r = t[s2];
          if (void 0 !== r)
            return r.exports;
          var n = t[s2] = { exports: {} };
          return e[s2].call(n.exports, n, n.exports, i), n.exports;
        }
        var s = {};
        return (() => {
          var e2 = s;
          Object.defineProperty(e2, "__esModule", { value: true }), e2.Terminal = void 0;
          const t2 = i(9042), r = i(3236), n = i(844), o = i(5741), a = i(8285), h = i(7975), c = i(7090), l = ["cols", "rows"];
          class d extends n.Disposable {
            constructor(e3) {
              super(), this._core = this.register(new r.Terminal(e3)), this._addonManager = this.register(new o.AddonManager()), this._publicOptions = { ...this._core.options };
              const t3 = (e4) => this._core.options[e4], i2 = (e4, t4) => {
                this._checkReadonlyOptions(e4), this._core.options[e4] = t4;
              };
              for (const e4 in this._core.options) {
                const s2 = { get: t3.bind(this, e4), set: i2.bind(this, e4) };
                Object.defineProperty(this._publicOptions, e4, s2);
              }
            }
            _checkReadonlyOptions(e3) {
              if (l.includes(e3))
                throw new Error(`Option "${e3}" can only be set in the constructor`);
            }
            _checkProposedApi() {
              if (!this._core.optionsService.rawOptions.allowProposedApi)
                throw new Error("You must set the allowProposedApi option to true to use proposed API");
            }
            get onBell() {
              return this._core.onBell;
            }
            get onBinary() {
              return this._core.onBinary;
            }
            get onCursorMove() {
              return this._core.onCursorMove;
            }
            get onData() {
              return this._core.onData;
            }
            get onKey() {
              return this._core.onKey;
            }
            get onLineFeed() {
              return this._core.onLineFeed;
            }
            get onRender() {
              return this._core.onRender;
            }
            get onResize() {
              return this._core.onResize;
            }
            get onScroll() {
              return this._core.onScroll;
            }
            get onSelectionChange() {
              return this._core.onSelectionChange;
            }
            get onTitleChange() {
              return this._core.onTitleChange;
            }
            get onWriteParsed() {
              return this._core.onWriteParsed;
            }
            get element() {
              return this._core.element;
            }
            get parser() {
              return this._parser || (this._parser = new h.ParserApi(this._core)), this._parser;
            }
            get unicode() {
              return this._checkProposedApi(), new c.UnicodeApi(this._core);
            }
            get textarea() {
              return this._core.textarea;
            }
            get rows() {
              return this._core.rows;
            }
            get cols() {
              return this._core.cols;
            }
            get buffer() {
              return this._buffer || (this._buffer = this.register(new a.BufferNamespaceApi(this._core))), this._buffer;
            }
            get markers() {
              return this._checkProposedApi(), this._core.markers;
            }
            get modes() {
              const e3 = this._core.coreService.decPrivateModes;
              let t3 = "none";
              switch (this._core.coreMouseService.activeProtocol) {
                case "X10":
                  t3 = "x10";
                  break;
                case "VT200":
                  t3 = "vt200";
                  break;
                case "DRAG":
                  t3 = "drag";
                  break;
                case "ANY":
                  t3 = "any";
              }
              return { applicationCursorKeysMode: e3.applicationCursorKeys, applicationKeypadMode: e3.applicationKeypad, bracketedPasteMode: e3.bracketedPasteMode, insertMode: this._core.coreService.modes.insertMode, mouseTrackingMode: t3, originMode: e3.origin, reverseWraparoundMode: e3.reverseWraparound, sendFocusMode: e3.sendFocus, wraparoundMode: e3.wraparound };
            }
            get options() {
              return this._publicOptions;
            }
            set options(e3) {
              for (const t3 in e3)
                this._publicOptions[t3] = e3[t3];
            }
            blur() {
              this._core.blur();
            }
            focus() {
              this._core.focus();
            }
            resize(e3, t3) {
              this._verifyIntegers(e3, t3), this._core.resize(e3, t3);
            }
            open(e3) {
              this._core.open(e3);
            }
            attachCustomKeyEventHandler(e3) {
              this._core.attachCustomKeyEventHandler(e3);
            }
            registerLinkProvider(e3) {
              return this._core.registerLinkProvider(e3);
            }
            registerCharacterJoiner(e3) {
              return this._checkProposedApi(), this._core.registerCharacterJoiner(e3);
            }
            deregisterCharacterJoiner(e3) {
              this._checkProposedApi(), this._core.deregisterCharacterJoiner(e3);
            }
            registerMarker(e3 = 0) {
              return this._verifyIntegers(e3), this._core.registerMarker(e3);
            }
            registerDecoration(e3) {
              return this._checkProposedApi(), this._verifyPositiveIntegers(e3.x ?? 0, e3.width ?? 0, e3.height ?? 0), this._core.registerDecoration(e3);
            }
            hasSelection() {
              return this._core.hasSelection();
            }
            select(e3, t3, i2) {
              this._verifyIntegers(e3, t3, i2), this._core.select(e3, t3, i2);
            }
            getSelection() {
              return this._core.getSelection();
            }
            getSelectionPosition() {
              return this._core.getSelectionPosition();
            }
            clearSelection() {
              this._core.clearSelection();
            }
            selectAll() {
              this._core.selectAll();
            }
            selectLines(e3, t3) {
              this._verifyIntegers(e3, t3), this._core.selectLines(e3, t3);
            }
            dispose() {
              super.dispose();
            }
            scrollLines(e3) {
              this._verifyIntegers(e3), this._core.scrollLines(e3);
            }
            scrollPages(e3) {
              this._verifyIntegers(e3), this._core.scrollPages(e3);
            }
            scrollToTop() {
              this._core.scrollToTop();
            }
            scrollToBottom() {
              this._core.scrollToBottom();
            }
            scrollToLine(e3) {
              this._verifyIntegers(e3), this._core.scrollToLine(e3);
            }
            clear() {
              this._core.clear();
            }
            write(e3, t3) {
              this._core.write(e3, t3);
            }
            writeln(e3, t3) {
              this._core.write(e3), this._core.write("\r\n", t3);
            }
            paste(e3) {
              this._core.paste(e3);
            }
            refresh(e3, t3) {
              this._verifyIntegers(e3, t3), this._core.refresh(e3, t3);
            }
            reset() {
              this._core.reset();
            }
            clearTextureAtlas() {
              this._core.clearTextureAtlas();
            }
            loadAddon(e3) {
              this._addonManager.loadAddon(this, e3);
            }
            static get strings() {
              return t2;
            }
            _verifyIntegers(...e3) {
              for (const t3 of e3)
                if (t3 === 1 / 0 || isNaN(t3) || t3 % 1 != 0)
                  throw new Error("This API only accepts integers");
            }
            _verifyPositiveIntegers(...e3) {
              for (const t3 of e3)
                if (t3 && (t3 === 1 / 0 || isNaN(t3) || t3 % 1 != 0 || t3 < 0))
                  throw new Error("This API only accepts positive integers");
            }
          }
          e2.Terminal = d;
        })(), s;
      })());
    }
  });

  // node_modules/xterm-readline/lib/keymap.js
  var require_keymap = __commonJS({
    "node_modules/xterm-readline/lib/keymap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseInput = exports.InputType = void 0;
      var InputType;
      (function(InputType2) {
        InputType2[InputType2["Text"] = 0] = "Text";
        InputType2[InputType2["AltEnter"] = 1] = "AltEnter";
        InputType2[InputType2["ArrowUp"] = 2] = "ArrowUp";
        InputType2[InputType2["ArrowDown"] = 3] = "ArrowDown";
        InputType2[InputType2["ArrowLeft"] = 4] = "ArrowLeft";
        InputType2[InputType2["ArrowRight"] = 5] = "ArrowRight";
        InputType2[InputType2["Delete"] = 6] = "Delete";
        InputType2[InputType2["Backspace"] = 7] = "Backspace";
        InputType2[InputType2["CtrlA"] = 8] = "CtrlA";
        InputType2[InputType2["CtrlC"] = 9] = "CtrlC";
        InputType2[InputType2["CtrlD"] = 10] = "CtrlD";
        InputType2[InputType2["CtrlE"] = 11] = "CtrlE";
        InputType2[InputType2["CtrlK"] = 12] = "CtrlK";
        InputType2[InputType2["CtrlL"] = 13] = "CtrlL";
        InputType2[InputType2["CtrlQ"] = 14] = "CtrlQ";
        InputType2[InputType2["CtrlS"] = 15] = "CtrlS";
        InputType2[InputType2["CtrlU"] = 16] = "CtrlU";
        InputType2[InputType2["End"] = 17] = "End";
        InputType2[InputType2["Enter"] = 18] = "Enter";
        InputType2[InputType2["Home"] = 19] = "Home";
        InputType2[InputType2["ShiftEnter"] = 20] = "ShiftEnter";
        InputType2[InputType2["UnsupportedControlChar"] = 21] = "UnsupportedControlChar";
        InputType2[InputType2["UnsupportedEscape"] = 22] = "UnsupportedEscape";
      })(InputType = exports.InputType || (exports.InputType = {}));
      function parseInput(data) {
        return Array.from(splitInput(data));
      }
      exports.parseInput = parseInput;
      function* splitInput(data) {
        let text = [];
        const it = data[Symbol.iterator]();
        for (let next = it.next(); !next.done; next = it.next()) {
          const c = next.value;
          if (c.length > 1) {
            text.push(c);
            continue;
          }
          const val = c.charCodeAt(0);
          if (text.length > 0 && (val < 32 || val === 127)) {
            yield {
              inputType: InputType.Text,
              data: text
            };
            text = [];
          }
          if (val === 27) {
            const seq2 = it.next();
            if (seq2.done) {
              text.push("\x1B");
              continue;
            }
            let inputType = InputType.UnsupportedEscape;
            if (seq2.value !== "[") {
              switch (seq2.value) {
                case "\r":
                  inputType = InputType.AltEnter;
                  break;
              }
              yield {
                inputType,
                data: ["\x1B", seq2.value]
              };
              continue;
            }
            const seq3 = it.next();
            if (seq3.done) {
              continue;
            }
            if (seq3.value >= "0" && seq3.value <= "9") {
              let digit = seq3.value;
              const nextDigit = it.next();
              if (nextDigit.done) {
                return;
              }
              if (nextDigit.value >= "0" && nextDigit.value <= "9") {
                digit += nextDigit.value;
              } else if (nextDigit.value !== "~") {
                continue;
              }
              switch (digit) {
                case "3":
                  inputType = InputType.Delete;
                  break;
              }
              yield {
                inputType,
                data: ["\x1B", "[", digit, "~"]
              };
              continue;
            }
            switch (seq3.value) {
              case "A":
                inputType = InputType.ArrowUp;
                break;
              case "B":
                inputType = InputType.ArrowDown;
                break;
              case "C":
                inputType = InputType.ArrowRight;
                break;
              case "D":
                inputType = InputType.ArrowLeft;
                break;
              case "F":
                inputType = InputType.End;
                break;
              case "H":
                inputType = InputType.Home;
                break;
              case "\r":
                inputType = InputType.AltEnter;
                break;
            }
            yield {
              inputType,
              data: ["\x1B", "[", seq3.value]
            };
            continue;
          }
          if (val < 32 || val === 127) {
            let inputType = InputType.UnsupportedControlChar;
            switch (val) {
              case 1:
                inputType = InputType.CtrlA;
                break;
              case 3:
                inputType = InputType.CtrlC;
                break;
              case 4:
                inputType = InputType.CtrlD;
                break;
              case 5:
                inputType = InputType.CtrlE;
                break;
              case 11:
                inputType = InputType.CtrlK;
                break;
              case 17:
                inputType = InputType.CtrlQ;
                break;
              case 19:
                inputType = InputType.CtrlS;
                break;
              case 21:
                inputType = InputType.CtrlU;
                break;
              case 13:
                inputType = InputType.Enter;
                break;
              case 127:
                inputType = InputType.Backspace;
                break;
              case 12:
                inputType = InputType.CtrlL;
                break;
            }
            yield {
              inputType,
              data: [c]
            };
            continue;
          }
          text.push(c);
        }
        if (text.length > 0) {
          yield {
            inputType: InputType.Text,
            data: text
          };
        }
      }
    }
  });

  // node_modules/xterm-readline/lib/line.js
  var require_line = __commonJS({
    "node_modules/xterm-readline/lib/line.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LineBuffer = void 0;
      var LineBuffer = class {
        constructor() {
          this.buf = "";
          this.pos = 0;
        }
        buffer() {
          return this.buf;
        }
        pos_buffer() {
          return this.buf.slice(0, this.pos);
        }
        // Return length of buffer in bytes
        length() {
          return this.buf.length;
        }
        // Return length of buffer in characters
        char_length() {
          return [...this.buf].length;
        }
        // Set text and position
        update(text, pos) {
          this.buf = text;
          this.pos = pos;
        }
        insert(text) {
          const shift = text.length;
          const push = this.pos === this.buf.length;
          if (push) {
            this.buf = this.buf + text;
          } else {
            this.buf = this.buf.slice(0, this.pos) + text + this.buf.slice(this.pos);
          }
          this.pos += shift;
          return push;
        }
        moveBack(n) {
          const pos = this.prevPos(n);
          if (pos !== void 0) {
            this.pos = pos;
            return true;
          } else {
            return false;
          }
        }
        moveForward(n) {
          const pos = this.nextPos(n);
          if (pos !== void 0) {
            this.pos = pos;
            return true;
          } else {
            return false;
          }
        }
        moveHome() {
          const start = this.startOfLine();
          if (this.pos > start) {
            this.pos = start;
            return true;
          }
          return false;
        }
        moveEnd() {
          const end = this.endOfLine();
          if (this.pos === end) {
            return false;
          }
          this.pos = end;
          return true;
        }
        startOfLine() {
          const start = this.buf.slice(0, this.pos).lastIndexOf("\n");
          if (start !== -1) {
            return start + 1;
          } else {
            return 0;
          }
        }
        endOfLine() {
          const end = this.buf.slice(this.pos).indexOf("\n");
          if (end !== -1) {
            return this.pos + end;
          } else {
            return this.buf.length;
          }
        }
        moveLineUp(n) {
          const off = this.buf.slice(0, this.pos).lastIndexOf("\n");
          if (off === -1) {
            return false;
          }
          const column = [...this.buf.slice(off + 1, this.pos)].length;
          let destStart = this.buf.slice(0, off).lastIndexOf("\n");
          if (destStart === -1) {
            destStart = 0;
          } else {
            destStart = destStart + 1;
          }
          let destEnd = off;
          for (let i = 1; i < n; i++) {
            if (destStart === 0) {
              break;
            }
            destEnd = destStart - 1;
            destStart = this.buf.slice(0, destEnd).lastIndexOf("\n");
            if (destStart === -1) {
              destStart = 0;
            } else {
              destStart = destStart + 1;
            }
          }
          const slice2 = [...this.buf.slice(destStart, destEnd)].slice(0, column);
          let gIdx = off;
          if (slice2.length > 0) {
            gIdx = slice2.map((c) => c.length).reduce((acc, m) => acc + m, 0);
            gIdx = destStart + gIdx;
          }
          this.pos = gIdx;
          return true;
        }
        moveLineDown(n) {
          const off = this.buf.slice(this.pos).indexOf("\n");
          if (off === -1) {
            return false;
          }
          let lineStart = this.buf.slice(0, this.pos).lastIndexOf("\n");
          if (lineStart === -1) {
            lineStart = 0;
          } else {
            lineStart += 1;
          }
          const column = [...this.buf.slice(lineStart, this.pos)].length;
          let destStart = this.pos + off + 1;
          let destEnd = this.buf.slice(destStart).indexOf("\n");
          if (destEnd === -1) {
            destEnd = this.buf.length;
          } else {
            destEnd = destStart + destEnd;
          }
          for (let i = 1; i < n; i++) {
            if (destEnd === this.buf.length) {
              break;
            }
            destStart = destEnd + 1;
            destEnd = this.buf.slice(destStart).indexOf("\n");
            if (destEnd === -1) {
              destEnd = this.buf.length;
            } else {
              destEnd = destStart + destEnd;
            }
          }
          const slice2 = [...this.buf.slice(destStart, destEnd)];
          if (column < slice2.length) {
            this.pos = slice2.slice(0, column).map((c) => c.length).reduce((acc, m) => acc + m, 0) + destStart;
          } else {
            this.pos = destEnd;
          }
          return true;
        }
        // Set position of cursor
        set_pos(pos) {
          this.pos = pos;
        }
        // Return the position of the character preceding
        // pos
        prevPos(n) {
          if (this.pos === 0) {
            return void 0;
          }
          const buf = this.buf.slice(0, this.pos);
          return this.pos - [...buf].slice(-n).map((c) => c.length).reduce((acc, m) => acc + m, 0);
        }
        // Return the position of the character following the
        // current pos
        nextPos(n) {
          if (this.pos === this.buf.length) {
            return void 0;
          }
          const buf = this.buf.slice(this.pos);
          return this.pos + [...buf].slice(0, n).map((c) => c.length).reduce((acc, m) => acc + m, 0);
        }
        backspace(n) {
          const newPos = this.prevPos(n);
          if (newPos === void 0) {
            return false;
          }
          this.buf = this.buf.slice(0, newPos) + this.buf.slice(this.pos);
          this.pos = newPos;
          return true;
        }
        delete(n) {
          const nextChar = this.nextPos(n);
          if (nextChar !== void 0) {
            this.buf = this.buf.slice(0, this.pos) + this.buf.slice(nextChar);
            return true;
          } else {
            return false;
          }
        }
        deleteEndOfLine() {
          if (this.buf.length == 0 || this.pos == this.buf.length) {
            return false;
          }
          const start = this.pos;
          const end = this.endOfLine();
          if (start == end) {
            this.delete(1);
          } else {
            this.buf = this.buf.slice(0, start) + this.buf.slice(end);
          }
          return true;
        }
      };
      exports.LineBuffer = LineBuffer;
    }
  });

  // node_modules/ansi-regex/index.js
  var require_ansi_regex = __commonJS({
    "node_modules/ansi-regex/index.js"(exports, module) {
      "use strict";
      module.exports = ({ onlyFirst = false } = {}) => {
        const pattern = [
          "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
          "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
        ].join("|");
        return new RegExp(pattern, onlyFirst ? void 0 : "g");
      };
    }
  });

  // node_modules/strip-ansi/index.js
  var require_strip_ansi = __commonJS({
    "node_modules/strip-ansi/index.js"(exports, module) {
      "use strict";
      var ansiRegex = require_ansi_regex();
      module.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
    }
  });

  // node_modules/is-fullwidth-code-point/index.js
  var require_is_fullwidth_code_point = __commonJS({
    "node_modules/is-fullwidth-code-point/index.js"(exports, module) {
      "use strict";
      var isFullwidthCodePoint = (codePoint) => {
        if (Number.isNaN(codePoint)) {
          return false;
        }
        if (codePoint >= 4352 && (codePoint <= 4447 || // Hangul Jamo
        codePoint === 9001 || // LEFT-POINTING ANGLE BRACKET
        codePoint === 9002 || // RIGHT-POINTING ANGLE BRACKET
        // CJK Radicals Supplement .. Enclosed CJK Letters and Months
        11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
        12880 <= codePoint && codePoint <= 19903 || // CJK Unified Ideographs .. Yi Radicals
        19968 <= codePoint && codePoint <= 42182 || // Hangul Jamo Extended-A
        43360 <= codePoint && codePoint <= 43388 || // Hangul Syllables
        44032 <= codePoint && codePoint <= 55203 || // CJK Compatibility Ideographs
        63744 <= codePoint && codePoint <= 64255 || // Vertical Forms
        65040 <= codePoint && codePoint <= 65049 || // CJK Compatibility Forms .. Small Form Variants
        65072 <= codePoint && codePoint <= 65131 || // Halfwidth and Fullwidth Forms
        65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || // Kana Supplement
        110592 <= codePoint && codePoint <= 110593 || // Enclosed Ideographic Supplement
        127488 <= codePoint && codePoint <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
        131072 <= codePoint && codePoint <= 262141)) {
          return true;
        }
        return false;
      };
      module.exports = isFullwidthCodePoint;
      module.exports.default = isFullwidthCodePoint;
    }
  });

  // node_modules/emoji-regex/index.js
  var require_emoji_regex = __commonJS({
    "node_modules/emoji-regex/index.js"(exports, module) {
      "use strict";
      module.exports = function() {
        return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
      };
    }
  });

  // node_modules/string-width/index.js
  var require_string_width = __commonJS({
    "node_modules/string-width/index.js"(exports, module) {
      "use strict";
      var stripAnsi = require_strip_ansi();
      var isFullwidthCodePoint = require_is_fullwidth_code_point();
      var emojiRegex = require_emoji_regex();
      var stringWidth = (string) => {
        if (typeof string !== "string" || string.length === 0) {
          return 0;
        }
        string = stripAnsi(string);
        if (string.length === 0) {
          return 0;
        }
        string = string.replace(emojiRegex(), "  ");
        let width = 0;
        for (let i = 0; i < string.length; i++) {
          const code = string.codePointAt(i);
          if (code <= 31 || code >= 127 && code <= 159) {
            continue;
          }
          if (code >= 768 && code <= 879) {
            continue;
          }
          if (code > 65535) {
            i++;
          }
          width += isFullwidthCodePoint(code) ? 2 : 1;
        }
        return width;
      };
      module.exports = stringWidth;
      module.exports.default = stringWidth;
    }
  });

  // node_modules/xterm-readline/lib/state.js
  var require_state = __commonJS({
    "node_modules/xterm-readline/lib/state.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.State = exports.Layout = exports.Position = void 0;
      var line_1 = require_line();
      var string_width_1 = __importDefault(require_string_width());
      var Position = class {
        constructor(rows, cols) {
          if (rows !== void 0) {
            this.row = rows;
          } else {
            this.row = 0;
          }
          if (cols !== void 0) {
            this.col = cols;
          } else {
            this.col = 0;
          }
        }
      };
      exports.Position = Position;
      var Layout = class {
        constructor(promptSize) {
          this.promptSize = promptSize;
          this.cursor = new Position();
          this.end = new Position();
        }
      };
      exports.Layout = Layout;
      var State = class {
        constructor(prompt, tty, highlighter, history) {
          this.line = new line_1.LineBuffer();
          this.highlighting = false;
          this.prompt = prompt;
          this.tty = tty;
          this.highlighter = highlighter;
          this.history = history;
          this.promptSize = tty.calculatePosition(prompt, new Position());
          this.layout = new Layout(this.promptSize);
        }
        buffer() {
          return this.line.buffer();
        }
        shouldHighlight() {
          const highlighting = this.highlighter.highlightChar(this.line.buf, this.line.pos);
          if (highlighting) {
            this.highlighting = true;
            return true;
          } else if (this.highlighting) {
            this.highlighting = false;
            return true;
          } else {
            return false;
          }
        }
        clearScreen() {
          this.tty.clearScreen();
          this.layout.cursor = new Position();
          this.layout.end = new Position();
          this.refresh();
        }
        editInsert(text) {
          const push = this.line.insert(text);
          const multiline = text.includes("\n");
          if (push && !multiline) {
            const width = (0, string_width_1.default)(text);
            if (width > 0 && this.layout.cursor.col + width < this.tty.col && !this.shouldHighlight()) {
              this.layout.cursor.col += width;
              this.layout.end.col += width;
              this.tty.write(text);
            } else {
              this.refresh();
            }
          } else {
            this.refresh();
          }
        }
        update(text) {
          this.line.update(text, text.length);
          this.refresh();
        }
        editBackspace(n) {
          if (this.line.backspace(n)) {
            this.refresh();
          }
        }
        editDelete(n) {
          if (this.line.delete(n)) {
            this.refresh();
          }
        }
        editDeleteEndOfLine() {
          if (this.line.deleteEndOfLine()) {
            this.refresh();
          }
        }
        refresh() {
          const newLayout = this.tty.computeLayout(this.promptSize, this.line);
          this.tty.refreshLine(this.prompt, this.line, this.layout, newLayout, this.highlighter);
          this.layout = newLayout;
        }
        moveCursorBack(n) {
          if (this.line.moveBack(n)) {
            this.moveCursor();
          }
        }
        moveCursorForward(n) {
          if (this.line.moveForward(n)) {
            this.moveCursor();
          }
        }
        moveCursorUp(n) {
          if (this.line.moveLineUp(n)) {
            this.moveCursor();
          } else {
            this.previousHistory();
          }
        }
        moveCursorDown(n) {
          if (this.line.moveLineDown(n)) {
            this.moveCursor();
          } else {
            this.nextHistory();
          }
        }
        moveCursorHome() {
          if (this.line.moveHome()) {
            this.moveCursor();
          }
        }
        moveCursorEnd() {
          if (this.line.moveEnd()) {
            this.moveCursor();
          }
        }
        moveCursorToEnd() {
          if (this.layout.cursor === this.layout.end) {
            return;
          }
          this.tty.moveCursor(this.layout.cursor, this.layout.end);
          this.layout.cursor = Object.assign({}, this.layout.end);
        }
        previousHistory() {
          if (this.history.cursor === -1 && this.line.length() > 0) {
            return;
          }
          const prev = this.history.prev();
          if (prev !== void 0) {
            this.update(prev);
          }
        }
        nextHistory() {
          if (this.history.cursor === -1) {
            return;
          }
          const next = this.history.next();
          if (next !== void 0) {
            this.update(next);
          } else {
            this.update("");
          }
        }
        moveCursor() {
          const cursor = this.tty.calculatePosition(this.line.pos_buffer(), this.promptSize);
          if (cursor === this.layout.cursor) {
            return;
          }
          if (this.shouldHighlight()) {
            this.refresh();
          } else {
            this.tty.moveCursor(this.layout.cursor, cursor);
            this.layout.promptSize = Object.assign({}, this.promptSize);
            this.layout.cursor = Object.assign({}, cursor);
          }
        }
      };
      exports.State = State;
    }
  });

  // node_modules/xterm-readline/lib/history.js
  var require_history = __commonJS({
    "node_modules/xterm-readline/lib/history.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.History = void 0;
      var History = class {
        constructor(maxEntries) {
          this.entries = [];
          this.cursor = -1;
          this.maxEntries = maxEntries;
        }
        saveToLocalStorage() {
          const localStorage = window === null || window === void 0 ? void 0 : window.localStorage;
          if (localStorage !== void 0) {
            localStorage.setItem("history", JSON.stringify(this.entries));
          }
        }
        restoreFromLocalStorage() {
          const localStorage = window === null || window === void 0 ? void 0 : window.localStorage;
          if (localStorage !== void 0) {
            const historyJson = localStorage.getItem("history");
            if (historyJson === void 0 || historyJson === null) {
              return;
            }
            try {
              const historyEntries = JSON.parse(historyJson);
              if (!Array.isArray(historyEntries) || historyEntries.find((it) => typeof it !== "string") !== void 0) {
                this.entries = [];
                localStorage.setItem("history", "[]");
              } else {
                this.entries = historyEntries;
              }
            } catch (e) {
              this.entries = [];
              localStorage.setItem("history", "[]");
            }
          }
        }
        append(text) {
          this.resetCursor();
          if (!this.entries.includes(text)) {
            this.entries.unshift(text);
          } else {
            this.entries.splice(this.entries.indexOf(text), 1);
            this.entries.unshift(text);
          }
          if (this.entries.length > this.maxEntries) {
            this.entries.pop();
          }
          this.saveToLocalStorage();
        }
        resetCursor() {
          this.cursor = -1;
        }
        next() {
          if (this.cursor === -1) {
            return void 0;
          } else {
            this.cursor -= 1;
          }
          return this.entries[this.cursor];
        }
        prev() {
          if (this.cursor + 1 >= this.entries.length) {
            return void 0;
          } else {
            this.cursor += 1;
          }
          return this.entries[this.cursor];
        }
      };
      exports.History = History;
    }
  });

  // node_modules/xterm-readline/lib/tty.js
  var require_tty = __commonJS({
    "node_modules/xterm-readline/lib/tty.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tty = void 0;
      var string_width_1 = __importDefault(require_string_width());
      var Tty = class {
        constructor(col, row, tabWidth, out) {
          this.tabWidth = tabWidth;
          this.col = col;
          this.row = row;
          this.out = out;
        }
        write(text) {
          return this.out.write(text);
        }
        print(text) {
          return this.out.print(text);
        }
        println(text) {
          return this.out.println(text);
        }
        clearScreen() {
          this.out.write("\x1B[H\x1B[2J");
        }
        // Calculate the number of colums and rows required to print
        // text on a this.cols wide terminal starting at orig
        calculatePosition(text, orig) {
          const pos = Object.assign({}, orig);
          let escSeq = 0;
          [...text].forEach((c) => {
            if (c === "\n") {
              pos.row += 1;
              pos.col = 0;
              return;
            }
            let cw = 0;
            if (c === "	") {
              cw = this.tabWidth - pos.col % this.tabWidth;
            } else {
              let size;
              [size, escSeq] = width(c, escSeq);
              cw = size;
            }
            pos.col += cw;
            if (pos.col > this.col) {
              pos.row += 1;
              pos.col = cw;
            }
          });
          if (pos.col === this.col) {
            pos.col = 0;
            pos.row += 1;
          }
          return pos;
        }
        computeLayout(promptSize, line) {
          const newPromptSize = Object.assign({}, promptSize);
          const pos = line.pos;
          const cursor = this.calculatePosition(line.buf.slice(0, line.pos), promptSize);
          const end = pos === line.buf.length ? Object.assign({}, cursor) : this.calculatePosition(line.buf.slice(pos), cursor);
          const newLayout = {
            promptSize: newPromptSize,
            cursor,
            end
          };
          return newLayout;
        }
        refreshLine(prompt, line, oldLayout, newLayout, highlighter) {
          const cursor = newLayout.cursor;
          const endPos = newLayout.end;
          this.clearOldRows(oldLayout);
          this.write(highlighter.highlightPrompt(prompt));
          this.write(highlighter.highlight(line.buf, line.pos));
          if (endPos.col === 0 && endPos.row > 0 && line.buf[line.buf.length - 1] !== "\n") {
            this.write("\n");
          }
          const newCursorRowMovement = endPos.row - cursor.row;
          if (newCursorRowMovement > 0) {
            this.write(`\x1B[${newCursorRowMovement}A`);
          }
          if (cursor.col > 0) {
            this.write(`\r\x1B[${cursor.col}C`);
          } else {
            this.write("\r");
          }
        }
        clearOldRows(layout) {
          const currentRow = layout.cursor.row;
          const oldRows = layout.end.row;
          const cursorRowMovement = Math.max(oldRows - currentRow, 0);
          if (cursorRowMovement > 0) {
            this.write(`\x1B[${cursorRowMovement}B`);
          }
          for (let i = 0; i < oldRows; i++) {
            this.write("\r\x1B[0K\x1B[A");
          }
          this.write("\r\x1B[0K");
        }
        moveCursor(oldCursor, newCursor) {
          if (newCursor.row > oldCursor.row) {
            const rowShift = newCursor.row - oldCursor.row;
            if (rowShift === 1) {
              this.write("\x1B[B");
            } else {
              this.write(`\x1B[${rowShift}B`);
            }
          } else if (newCursor.row < oldCursor.row) {
            const rowShift = oldCursor.row - newCursor.row;
            if (rowShift === 1) {
              this.write("\x1B[A");
            } else {
              this.write(`\x1B[${rowShift}A`);
            }
          }
          if (newCursor.col > oldCursor.col) {
            const colShift = newCursor.col - oldCursor.col;
            if (colShift === 1) {
              this.write("\x1B[C");
            } else {
              this.write(`\x1B[${colShift}C`);
            }
          } else if (newCursor.col < oldCursor.col) {
            const colShift = oldCursor.col - newCursor.col;
            if (colShift === 1) {
              this.write("\x1B[D");
            } else {
              this.write(`\x1B[${colShift}D`);
            }
          }
          return;
        }
      };
      exports.Tty = Tty;
      function width(text, escSeq) {
        if (escSeq === 1) {
          if (text === "[") {
            return [0, 2];
          } else {
            return [0, 0];
          }
        } else if (escSeq === 2) {
          if (!(text === ";" || text[0] >= "0" && text[0] <= "9")) {
            return [0, 0];
          }
          return [0, escSeq];
        } else if (text === "\x1B") {
          return [0, 1];
        } else if (text === "\n") {
          return [0, escSeq];
        } else {
          return [(0, string_width_1.default)(text), escSeq];
        }
      }
    }
  });

  // node_modules/xterm-readline/lib/highlight.js
  var require_highlight = __commonJS({
    "node_modules/xterm-readline/lib/highlight.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IdentityHighlighter = void 0;
      var IdentityHighlighter = class {
        highlight(line, pos) {
          return line;
        }
        highlightPrompt(prompt) {
          return prompt;
        }
        highlightChar(line, pos) {
          return false;
        }
      };
      exports.IdentityHighlighter = IdentityHighlighter;
    }
  });

  // node_modules/xterm-readline/lib/readline.js
  var require_readline = __commonJS({
    "node_modules/xterm-readline/lib/readline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Readline = void 0;
      var keymap_1 = require_keymap();
      var state_1 = require_state();
      var history_1 = require_history();
      var tty_1 = require_tty();
      var highlight_1 = require_highlight();
      var Readline2 = class {
        constructor() {
          this.highlighter = new highlight_1.IdentityHighlighter();
          this.history = new history_1.History(50);
          this.disposables = [];
          this.watermark = 0;
          this.highWatermark = 1e4;
          this.lowWatermark = 1e3;
          this.highWater = false;
          this.state = new state_1.State(">", this.tty(), this.highlighter, this.history);
          this.checkHandler = () => true;
          this.ctrlCHandler = () => {
            return;
          };
          this.pauseHandler = (resume) => {
            return;
          };
          this.history.restoreFromLocalStorage();
        }
        /**
         * Activate this addon - this function is called by xterm's
         * loadAddon().
         *
         * @param term - The terminal this readline is attached to.
         */
        activate(term) {
          this.term = term;
          this.term.onData(this.readData.bind(this));
          this.term.attachCustomKeyEventHandler(this.handleKeyEvent.bind(this));
        }
        /**
         * Dispose
         *
         */
        dispose() {
          this.disposables.forEach((d) => d.dispose());
        }
        /**
         * Manually append a line to the top of the readline's history.
         *
         * @param text - The text to append to history.
         */
        appendHistory(text) {
          this.history.append(text);
        }
        /**
         * Set the highlighter handler for this readline. This is used to
         * create custom highlighting functionality (e.g. for syntax highlighting
         * or bracket matching).
         *
         * @param highlighter - A handler to handle all highlight callbacks.
         */
        setHighlighter(highlighter) {
          this.highlighter = highlighter;
        }
        /**
         * Set the check callback. This callback is used by readline to determine if input
         * requires additiona lines when the user presses 'enter'.
         *
         * @param fn - A function (string) -> boolean that should return true if the input
         *             is complete, and false if a line (\n) should be added to the input.
         */
        setCheckHandler(fn) {
          this.checkHandler = fn;
        }
        /**
         * Set the ctrl-c handler. This function will be called if ctrl-c is encountered
         * between readline reads. This may be used in circumstances where input from the
         * user may result in a long running task that can be cancelled.
         *
         * @param fn - The ctrl-c handler.
         */
        setCtrlCHandler(fn) {
          this.ctrlCHandler = fn;
        }
        /**
         * Set the callback to be called when the user presses ctrl-s/ctrl-q.
         *
         * @param fn - The pause handler
         */
        setPauseHandler(fn) {
          this.pauseHandler = fn;
        }
        /**
         * writeReady() may be used to implement basic output flow control. This function
         * will return false if the writes to the terminal initiated by Readline have
         * reached a highwater mark.
         *
         * @returns true if this terminal is accepting more input.
         */
        writeReady() {
          return !this.highWater;
        }
        /**
         * Write text to the terminal.
         *
         * @param text - The text to write to the terminal.
         */
        write(text) {
          if (text === "\n") {
            text = "\r\n";
          } else {
            text = text.replace(/^\n/, "\r\n");
            text = text.replace(/([^\r])\n/g, "$1\r\n");
          }
          const outputLength = text.length;
          this.watermark += outputLength;
          if (this.watermark > this.highWatermark) {
            this.highWater = true;
          }
          if (this.term) {
            this.term.write(text, () => {
              this.watermark = Math.max(this.watermark - outputLength, 0);
              if (this.highWater && this.watermark < this.lowWatermark) {
                this.highWater = false;
              }
            });
          }
        }
        /**
         * Write text to the terminal.
         *
         * @param text - The text to write to the terminal
         */
        print(text) {
          return this.write(text);
        }
        /**
         * Write text to the terminal and append with "\r\n".
         *
         * @param text - The text to write to the terminal./
         * @returns
         */
        println(text) {
          return this.write(text + "\r\n");
        }
        /**
         * Obtain an output interface to this terminal.
         *
         * @returns Output
         */
        output() {
          return this;
        }
        /**
         * Obtain a tty interface to this terminal.
         *
         * @returns A tty
         */
        tty() {
          var _a, _b;
          if (((_b = (_a = this.term) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.tabStopWidth) !== void 0) {
            return new tty_1.Tty(this.term.cols, this.term.rows, this.term.options.tabStopWidth, this.output());
          } else {
            return new tty_1.Tty(0, 0, 8, this.output());
          }
        }
        /**
         * Display the given prompt and wait for one line of input from the
         * terminal. The returned promise will be executed when a line has been
         * read from the terminal.
         *
         * @param prompt The prompt to use.
         * @returns A promise to be called when the input has been read.
         */
        read(prompt) {
          return new Promise((resolve, reject2) => {
            if (this.term === void 0) {
              reject2("addon is not active");
              return;
            }
            this.state = new state_1.State(prompt, this.tty(), this.highlighter, this.history);
            this.state.refresh();
            this.activeRead = { prompt, resolve, reject: reject2 };
          });
        }
        handleKeyEvent(event) {
          if (event.key === "Enter" && event.shiftKey) {
            if (event.type === "keydown") {
              this.readKey({
                inputType: keymap_1.InputType.ShiftEnter,
                data: ["\r"]
              });
            }
            return false;
          }
          return true;
        }
        readData(data) {
          const input = (0, keymap_1.parseInput)(data);
          if (input.length > 1 || input[0].inputType === keymap_1.InputType.Text && input[0].data.length > 1) {
            this.readPaste(input);
            return;
          }
          this.readKey(input[0]);
        }
        readPaste(input) {
          const mappedInput = input.map((it) => {
            if (it.inputType === keymap_1.InputType.Enter) {
              return { inputType: keymap_1.InputType.Text, data: ["\n"] };
            }
            return it;
          });
          for (const it of mappedInput) {
            if (it.inputType === keymap_1.InputType.Text) {
              this.state.editInsert(it.data.join(""));
            } else {
              this.readKey(it);
            }
          }
        }
        readKey(input) {
          var _a, _b, _c;
          if (this.activeRead === void 0) {
            switch (input.inputType) {
              case keymap_1.InputType.CtrlC:
                this.ctrlCHandler();
                break;
              case keymap_1.InputType.CtrlL:
                this.write("\x1B[H\x1B[2J");
                break;
            }
            return;
          }
          switch (input.inputType) {
            case keymap_1.InputType.Text:
              this.state.editInsert(input.data.join(""));
              break;
            case keymap_1.InputType.AltEnter:
            case keymap_1.InputType.ShiftEnter:
              this.state.editInsert("\n");
              break;
            case keymap_1.InputType.Enter:
              if (this.checkHandler(this.state.buffer())) {
                this.state.moveCursorToEnd();
                (_a = this.term) === null || _a === void 0 ? void 0 : _a.write("\r\n");
                this.history.append(this.state.buffer());
                (_b = this.activeRead) === null || _b === void 0 ? void 0 : _b.resolve(this.state.buffer());
                this.activeRead = void 0;
              } else {
                this.state.editInsert("\n");
              }
              break;
            case keymap_1.InputType.CtrlC:
              this.state.moveCursorToEnd();
              (_c = this.term) === null || _c === void 0 ? void 0 : _c.write("^C\r\n");
              this.state = new state_1.State(this.activeRead.prompt, this.tty(), this.highlighter, this.history);
              this.state.refresh();
              break;
            case keymap_1.InputType.CtrlS:
              this.pauseHandler(false);
              break;
            case keymap_1.InputType.CtrlU:
              this.state.update("");
              break;
            case keymap_1.InputType.CtrlK:
              this.state.editDeleteEndOfLine();
              break;
            case keymap_1.InputType.CtrlQ:
              this.pauseHandler(true);
              break;
            case keymap_1.InputType.CtrlL:
              this.state.clearScreen();
              break;
            case keymap_1.InputType.Home:
            case keymap_1.InputType.CtrlA:
              this.state.moveCursorHome();
              break;
            case keymap_1.InputType.End:
            case keymap_1.InputType.CtrlE:
              this.state.moveCursorEnd();
              break;
            case keymap_1.InputType.Backspace:
              this.state.editBackspace(1);
              break;
            case keymap_1.InputType.Delete:
            case keymap_1.InputType.CtrlD:
              this.state.editDelete(1);
              break;
            case keymap_1.InputType.ArrowLeft:
              this.state.moveCursorBack(1);
              break;
            case keymap_1.InputType.ArrowRight:
              this.state.moveCursorForward(1);
              break;
            case keymap_1.InputType.ArrowUp:
              this.state.moveCursorUp(1);
              break;
            case keymap_1.InputType.ArrowDown:
              this.state.moveCursorDown(1);
              break;
            case keymap_1.InputType.UnsupportedControlChar:
            case keymap_1.InputType.UnsupportedEscape:
              break;
          }
        }
      };
      exports.Readline = Readline2;
    }
  });

  // node_modules/miniscript-ts/dist/miniscript-ts.mjs
  var __defProp2 = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var TokenType = /* @__PURE__ */ ((TokenType2) => {
    TokenType2[TokenType2["NEWLINE"] = 0] = "NEWLINE";
    TokenType2[TokenType2["SEMICOLON"] = 1] = "SEMICOLON";
    TokenType2[TokenType2["STRING_LITERAL"] = 2] = "STRING_LITERAL";
    TokenType2[TokenType2["INT_LITERAL"] = 3] = "INT_LITERAL";
    TokenType2[TokenType2["FLOAT_LITERAL"] = 4] = "FLOAT_LITERAL";
    TokenType2[TokenType2["IDENTIFIER_TK"] = 5] = "IDENTIFIER_TK";
    TokenType2[TokenType2["OPEN_CURLY"] = 6] = "OPEN_CURLY";
    TokenType2[TokenType2["OPEN_SQUARE"] = 7] = "OPEN_SQUARE";
    TokenType2[TokenType2["OPEN_ROUND"] = 8] = "OPEN_ROUND";
    TokenType2[TokenType2["CLOSE_CURLY"] = 9] = "CLOSE_CURLY";
    TokenType2[TokenType2["CLOSE_SQUARE"] = 10] = "CLOSE_SQUARE";
    TokenType2[TokenType2["CLOSE_ROUND"] = 11] = "CLOSE_ROUND";
    TokenType2[TokenType2["DOT"] = 12] = "DOT";
    TokenType2[TokenType2["COLON"] = 13] = "COLON";
    TokenType2[TokenType2["COMMA"] = 14] = "COMMA";
    TokenType2[TokenType2["ASSIGN"] = 15] = "ASSIGN";
    TokenType2[TokenType2["PLUS_ASSIGN"] = 16] = "PLUS_ASSIGN";
    TokenType2[TokenType2["MINUS_ASSIGN"] = 17] = "MINUS_ASSIGN";
    TokenType2[TokenType2["MULT_ASSIGN"] = 18] = "MULT_ASSIGN";
    TokenType2[TokenType2["DIV_ASSIGN"] = 19] = "DIV_ASSIGN";
    TokenType2[TokenType2["MOD_ASSIGN"] = 20] = "MOD_ASSIGN";
    TokenType2[TokenType2["POW_ASSIGN"] = 21] = "POW_ASSIGN";
    TokenType2[TokenType2["OP_EQUALS"] = 22] = "OP_EQUALS";
    TokenType2[TokenType2["OP_NOT_EQUALS"] = 23] = "OP_NOT_EQUALS";
    TokenType2[TokenType2["OP_OR"] = 24] = "OP_OR";
    TokenType2[TokenType2["OP_AND"] = 25] = "OP_AND";
    TokenType2[TokenType2["OP_LESS"] = 26] = "OP_LESS";
    TokenType2[TokenType2["OP_LESS_EQUALS"] = 27] = "OP_LESS_EQUALS";
    TokenType2[TokenType2["OP_GREATER"] = 28] = "OP_GREATER";
    TokenType2[TokenType2["OP_GREATER_EQUALS"] = 29] = "OP_GREATER_EQUALS";
    TokenType2[TokenType2["OP_PLUS"] = 30] = "OP_PLUS";
    TokenType2[TokenType2["OP_MINUS"] = 31] = "OP_MINUS";
    TokenType2[TokenType2["OP_MOD"] = 32] = "OP_MOD";
    TokenType2[TokenType2["OP_DIV"] = 33] = "OP_DIV";
    TokenType2[TokenType2["OP_MULT"] = 34] = "OP_MULT";
    TokenType2[TokenType2["OP_POW"] = 35] = "OP_POW";
    TokenType2[TokenType2["OP_NOT"] = 36] = "OP_NOT";
    TokenType2[TokenType2["OP_FUNCREF"] = 37] = "OP_FUNCREF";
    TokenType2[TokenType2["OP_ISA"] = 38] = "OP_ISA";
    TokenType2[TokenType2["KW_TRUE"] = 39] = "KW_TRUE";
    TokenType2[TokenType2["KW_FALSE"] = 40] = "KW_FALSE";
    TokenType2[TokenType2["KW_NULL"] = 41] = "KW_NULL";
    TokenType2[TokenType2["KW_SUPER"] = 42] = "KW_SUPER";
    TokenType2[TokenType2["KW_IF"] = 43] = "KW_IF";
    TokenType2[TokenType2["KW_THEN"] = 44] = "KW_THEN";
    TokenType2[TokenType2["KW_ELSE"] = 45] = "KW_ELSE";
    TokenType2[TokenType2["KW_ELSE_IF"] = 46] = "KW_ELSE_IF";
    TokenType2[TokenType2["KW_WHILE"] = 47] = "KW_WHILE";
    TokenType2[TokenType2["KW_FOR"] = 48] = "KW_FOR";
    TokenType2[TokenType2["KW_IN"] = 49] = "KW_IN";
    TokenType2[TokenType2["KW_BREAK"] = 50] = "KW_BREAK";
    TokenType2[TokenType2["KW_CONTINUE"] = 51] = "KW_CONTINUE";
    TokenType2[TokenType2["KW_NEW"] = 52] = "KW_NEW";
    TokenType2[TokenType2["KW_FUNCTION"] = 53] = "KW_FUNCTION";
    TokenType2[TokenType2["KW_RETURN"] = 54] = "KW_RETURN";
    TokenType2[TokenType2["KW_END"] = 55] = "KW_END";
    TokenType2[TokenType2["KW_END_IF"] = 56] = "KW_END_IF";
    TokenType2[TokenType2["KW_END_FOR"] = 57] = "KW_END_FOR";
    TokenType2[TokenType2["KW_END_WHILE"] = 58] = "KW_END_WHILE";
    TokenType2[TokenType2["KW_END_FUNCTION"] = 59] = "KW_END_FUNCTION";
    TokenType2[TokenType2["EOF"] = 60] = "EOF";
    return TokenType2;
  })(TokenType || {});
  function toOfficialImplTokenName(tokenType) {
    switch (tokenType) {
      case 14:
        return "Comma";
      case 8:
        return "LParen";
      case 11:
        return "RParen";
      default:
        TokenType[tokenType];
        return `${TokenType[tokenType]}`;
    }
  }
  function toJsonArray(elements) {
    let result = [];
    for (let e of elements) {
      result.push(e.toJson());
    }
    return result;
  }
  function tokensToJsonArray(tokens) {
    let result = [];
    for (let token of tokens) {
      const tokenType = token.tokenType;
      result.push(TokenType[tokenType].toString());
    }
    return result;
  }
  var ExpressionStatement = class {
    constructor(expression) {
      this.expression = expression;
    }
    location() {
      return this.expression.location();
    }
    description() {
      return "Expression Statement";
    }
    toJson() {
      return {
        "ExpressionStatement": {
          "expression": this.expression.toJson()
        }
      };
    }
  };
  var ConditionedStatements = class {
    constructor(condition, statements) {
      this.condition = condition;
      this.statements = statements;
    }
    location() {
      return this.condition.location();
    }
    toJson() {
      return {
        "ConditionedStatements": {
          "condition": this.condition.toJson(),
          "statements": toJsonArray(this.statements)
        }
      };
    }
  };
  var IfStatement = class {
    constructor(ifBranch, elseIfs, elseBranch) {
      this.ifBranch = ifBranch;
      this.elseIfs = elseIfs;
      this.elseBranch = elseBranch;
    }
    description() {
      return "If Statement";
    }
    toJson() {
      return {
        "IfStatement": {
          "ifBranch": this.ifBranch.toJson(),
          "elseIfs": toJsonArray(this.elseIfs),
          "elseBranch": toJsonArray(this.elseBranch)
        }
      };
    }
  };
  var WhileStatement = class {
    constructor(condition, headerLocation, statements) {
      this.condition = condition;
      this.headerLocation = headerLocation;
      this.statements = statements;
    }
    description() {
      return "While Statement";
    }
    toJson() {
      return {
        "WhileStatement": {
          "condition": this.condition.toJson(),
          "statements": toJsonArray(this.statements)
        }
      };
    }
  };
  var ForStatement = class {
    constructor(loopVar, rangeExpr, headerLocation, statements) {
      this.loopVar = loopVar;
      this.rangeExpr = rangeExpr;
      this.headerLocation = headerLocation;
      this.statements = statements;
    }
    description() {
      return "For Statement";
    }
    toJson() {
      return {
        "ForStatement": {
          "loopVar": this.loopVar.value,
          "rangeExpr": this.rangeExpr.toJson(),
          "statements": toJsonArray(this.statements)
        }
      };
    }
  };
  var AssignmentStatement = class {
    constructor(target, value) {
      this.target = target;
      this.value = value;
    }
    description() {
      return "Assignment";
    }
    location() {
      return this.target.location().upTo(this.value.location());
    }
    toJson() {
      return {
        "AssignmentStatement": {
          "target": this.target.toJson(),
          "value": this.value.toJson()
        }
      };
    }
  };
  var MathAssignmentStatement = class {
    constructor(target, opToken, value) {
      this.target = target;
      this.opToken = opToken;
      this.value = value;
    }
    description() {
      return "Math-Assignment";
    }
    location() {
      return this.target.location().upTo(this.value.location());
    }
    toJson() {
      return {
        "MathAssignmentStatement": {
          "target": this.target.toJson(),
          "op": TokenType[this.opToken],
          "value": this.value.toJson()
        }
      };
    }
  };
  var FunctionCallStatement = class {
    constructor(callTarget, args) {
      this.callTarget = callTarget;
      this.args = args;
    }
    description() {
      return "Function Call Statement";
    }
    location() {
      if (this.args.length > 0) {
        const lastArg = this.args[this.args.length - 1];
        return this.callTarget.location().upTo(lastArg.location());
      } else {
        return this.callTarget.location();
      }
    }
    toJson() {
      return {
        "FunctionCallStatement": {
          "callTarget": this.callTarget.toJson(),
          "args": toJsonArray(this.args)
        }
      };
    }
  };
  var ReturnStatement = class {
    constructor(optValue, fullLocation) {
      this.optValue = optValue;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Return Statement";
    }
    toJson() {
      return {
        "ReturnStatement": {
          "optValue": this.optValue ? this.optValue.toJson() : null
        }
      };
    }
  };
  var BreakStatement = class {
    constructor(fullLocation) {
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Break Statement";
    }
    toJson() {
      return {
        "BreakStatement": null
      };
    }
  };
  var ContinueStatement = class {
    constructor(fullLocation) {
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Continue Statement";
    }
    toJson() {
      return {
        "ContinueStatement": null
      };
    }
  };
  var BinaryExpr = class {
    constructor(left, operator, right) {
      this.left = left;
      this.operator = operator;
      this.right = right;
    }
    location() {
      return this.left.location().upTo(this.right.location());
    }
    description() {
      return "Binary Expression";
    }
    toJson() {
      return {
        "BinaryExpr": {
          "left": this.left.toJson(),
          "operator": TokenType[this.operator.tokenType],
          "right": this.right.toJson()
        }
      };
    }
  };
  var ChainedComparisonExpr = class {
    constructor(operands, operators) {
      this.operands = operands;
      this.operators = operators;
      if (operands.length < 3) {
        throw new Error("Amount of operands must be at least 3");
      }
      if (operands.length - 1 != operators.length) {
        throw new Error("Amount of operands/operators mismatch");
      }
      for (let tk of operators) {
        const ttype = tk.tokenType;
        if (ttype != TokenType.OP_EQUALS && ttype != TokenType.OP_NOT_EQUALS && ttype != TokenType.OP_GREATER && ttype != TokenType.OP_GREATER_EQUALS && ttype != TokenType.OP_LESS && ttype != TokenType.OP_LESS_EQUALS) {
          throw new Error(`Invalid token type: ${TokenType[ttype]}`);
        }
      }
    }
    location() {
      const firstOperand = this.operands[0];
      const lastOperand = this.operands[this.operands.length - 1];
      return firstOperand.location().upTo(lastOperand.location());
    }
    description() {
      return "Binary Expression";
    }
    toJson() {
      return {
        "ChainedComparison": {
          "operands": toJsonArray(this.operands),
          "operators": tokensToJsonArray(this.operators)
        }
      };
    }
  };
  var LogicExpr = class {
    constructor(left, operator, right) {
      this.left = left;
      this.operator = operator;
      this.right = right;
    }
    location() {
      return this.left.location().upTo(this.right.location());
    }
    description() {
      return "Logic Expression";
    }
    toJson() {
      return {
        "LogicExpr": {
          "left": this.left.toJson(),
          "operator": TokenType[this.operator.tokenType],
          "right": this.right.toJson()
        }
      };
    }
  };
  var UnaryExpr = class {
    constructor(operator, expr) {
      this.operator = operator;
      this.expr = expr;
    }
    location() {
      return this.operator.location.upTo(this.expr.location());
    }
    description() {
      return "Unary Expression";
    }
    toJson() {
      return {
        "UnaryExpr": {
          "operator": TokenType[this.operator.tokenType],
          "expr": this.expr.toJson()
        }
      };
    }
  };
  var Literal = class {
    constructor(value, fullLocation) {
      this.value = value;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Literal";
    }
    toJson() {
      return {
        "Literal": {
          "value": this.value
        }
      };
    }
  };
  var GroupingExpr = class {
    constructor(expr, fullLocation) {
      this.expr = expr;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Grouping Expression";
    }
    toJson() {
      return {
        "GroupingExpr": {
          "expr": this.expr.toJson()
        }
      };
    }
  };
  var IdentifierExpr = class {
    constructor(identifier) {
      this.identifier = identifier;
    }
    location() {
      return this.identifier.location;
    }
    description() {
      return "Identifier";
    }
    toJson() {
      return {
        "IdentifierExpr": {
          "identifier": this.identifier.value
        }
      };
    }
  };
  var FunctionCallExpr = class {
    constructor(callTarget, args, fullLocation) {
      this.callTarget = callTarget;
      this.args = args;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Function Call Expression";
    }
    toJson() {
      return {
        "FunctionCallExpr": {
          "callTarget": this.callTarget.toJson(),
          "args": toJsonArray(this.args)
        }
      };
    }
  };
  var ListExpr = class {
    constructor(elements, fullLocation) {
      this.elements = elements;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "List Expression";
    }
    toJson() {
      return {
        "ListExpr": {
          "elements": toJsonArray(this.elements)
        }
      };
    }
  };
  var MapExpr = class {
    constructor(elements, fullLocation) {
      this.elements = elements;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Map Expression";
    }
    toJson() {
      const entries = [];
      for (let [key, value] of this.elements) {
        entries.push({ "key": key, "value": value });
      }
      return {
        "MapExpr": {
          "elements": entries
        }
      };
    }
  };
  var IndexedAccessExpr = class {
    constructor(accessTarget, indexExpr, fullLocation) {
      this.accessTarget = accessTarget;
      this.indexExpr = indexExpr;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Indexed Access";
    }
    toJson() {
      return {
        "IndexedAccessExpr": {
          "accessTarget": this.accessTarget.toJson(),
          "indexExpr": this.indexExpr.toJson()
        }
      };
    }
  };
  var ListSlicingExpr = class {
    constructor(listTarget, start, stop, fullLocation) {
      this.listTarget = listTarget;
      this.start = start;
      this.stop = stop;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "List Slicing";
    }
    toJson() {
      return {
        "ListSlicingExpr": {
          "listTarget": this.listTarget.toJson(),
          "start": this.start ? this.start.toJson() : void 0,
          "stop": this.stop ? this.stop.toJson() : void 0
        }
      };
    }
  };
  var DotAccessExpr = class {
    constructor(accessTarget, property) {
      this.accessTarget = accessTarget;
      this.property = property;
    }
    location() {
      return this.accessTarget.location().upTo(this.property.location);
    }
    description() {
      return "Property Access";
    }
    toJson() {
      return {
        "DotAccessExpr": {
          "accessTarget": this.accessTarget.toJson(),
          "property": this.property.value
        }
      };
    }
  };
  var Argument = class {
    constructor(name, defaultValue, fullLocation) {
      this.name = name;
      this.defaultValue = defaultValue;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    toJson() {
      return {
        "Argument": {
          "name": this.name,
          "defaultValue": this.defaultValue ? this.defaultValue.toJson() : "(undefined)"
        }
      };
    }
  };
  var FunctionBodyExpr = class {
    constructor(args, statements, fullLocation) {
      this.args = args;
      this.statements = statements;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Function Body";
    }
    toJson() {
      return {
        "FunctionBodyExpr": {
          "args": toJsonArray(this.args),
          "statements": toJsonArray(this.statements)
        }
      };
    }
  };
  var FunctionRefExpr = class {
    constructor(refTarget, fullLocation) {
      this.refTarget = refTarget;
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Function Reference";
    }
    toJson() {
      return {
        "FunctionRefExpr": {
          "refTarget": this.refTarget.toJson()
        }
      };
    }
  };
  var SelfExpr = class {
    constructor(fullLocation) {
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Self Expression";
    }
    toJson() {
      return {
        "SelfExpr": {}
      };
    }
  };
  var SuperExpr = class {
    constructor(fullLocation) {
      this.fullLocation = fullLocation;
    }
    location() {
      return this.fullLocation;
    }
    description() {
      return "Super Expression";
    }
    toJson() {
      return {
        "SuperExpr": {}
      };
    }
  };
  var BC = /* @__PURE__ */ ((BC2) => {
    BC2[BC2["PUSH"] = 0] = "PUSH";
    BC2[BC2["EVAL_ID"] = 1] = "EVAL_ID";
    BC2[BC2["INDEXED_ACCESS"] = 2] = "INDEXED_ACCESS";
    BC2[BC2["DOT_ACCESS"] = 3] = "DOT_ACCESS";
    BC2[BC2["SUPER_DOT_ACCESS"] = 4] = "SUPER_DOT_ACCESS";
    BC2[BC2["SLICE_SEQUENCE"] = 5] = "SLICE_SEQUENCE";
    BC2[BC2["ASSIGN_LOCAL"] = 6] = "ASSIGN_LOCAL";
    BC2[BC2["ASSIGN_INDEXED"] = 7] = "ASSIGN_INDEXED";
    BC2[BC2["DOT_ASSIGN"] = 8] = "DOT_ASSIGN";
    BC2[BC2["MATH_ASSIGN_LOCAL"] = 9] = "MATH_ASSIGN_LOCAL";
    BC2[BC2["MATH_ASSIGN_INDEXED"] = 10] = "MATH_ASSIGN_INDEXED";
    BC2[BC2["MATH_DOT_ASSIGN"] = 11] = "MATH_DOT_ASSIGN";
    BC2[BC2["ADD_VALUES"] = 12] = "ADD_VALUES";
    BC2[BC2["SUBTRACT_VALUES"] = 13] = "SUBTRACT_VALUES";
    BC2[BC2["MULTIPLY_VALUES"] = 14] = "MULTIPLY_VALUES";
    BC2[BC2["DIVIDE_VALUES"] = 15] = "DIVIDE_VALUES";
    BC2[BC2["POWER_VALUES"] = 16] = "POWER_VALUES";
    BC2[BC2["MOD_VALUES"] = 17] = "MOD_VALUES";
    BC2[BC2["SUBTR_N"] = 18] = "SUBTR_N";
    BC2[BC2["DIVIDE_N"] = 19] = "DIVIDE_N";
    BC2[BC2["LOGIC_AND_VALUES"] = 20] = "LOGIC_AND_VALUES";
    BC2[BC2["LOGIC_OR_VALUES"] = 21] = "LOGIC_OR_VALUES";
    BC2[BC2["NEGATE_BOOLEAN"] = 22] = "NEGATE_BOOLEAN";
    BC2[BC2["NEGATE_NUMBER"] = 23] = "NEGATE_NUMBER";
    BC2[BC2["COMPARE_EQ"] = 24] = "COMPARE_EQ";
    BC2[BC2["COMPARE_NE"] = 25] = "COMPARE_NE";
    BC2[BC2["COMPARE_GE"] = 26] = "COMPARE_GE";
    BC2[BC2["COMPARE_GT"] = 27] = "COMPARE_GT";
    BC2[BC2["COMPARE_LE"] = 28] = "COMPARE_LE";
    BC2[BC2["COMPARE_LT"] = 29] = "COMPARE_LT";
    BC2[BC2["COMPARE_ISA"] = 30] = "COMPARE_ISA";
    BC2[BC2["BUILD_LIST"] = 31] = "BUILD_LIST";
    BC2[BC2["BUILD_MAP"] = 32] = "BUILD_MAP";
    BC2[BC2["NEW_MAP"] = 33] = "NEW_MAP";
    BC2[BC2["CHAINED_COMPARISON"] = 34] = "CHAINED_COMPARISON";
    BC2[BC2["JUMP"] = 35] = "JUMP";
    BC2[BC2["POP_JUMP_FALSE"] = 36] = "POP_JUMP_FALSE";
    BC2[BC2["JUMP_IF_FALSE"] = 37] = "JUMP_IF_FALSE";
    BC2[BC2["JUMP_IF_TRUE"] = 38] = "JUMP_IF_TRUE";
    BC2[BC2["CALL"] = 39] = "CALL";
    BC2[BC2["PROPERTY_CALL"] = 40] = "PROPERTY_CALL";
    BC2[BC2["SUPER_DOT_CALL"] = 41] = "SUPER_DOT_CALL";
    BC2[BC2["FUNCREF_CALL"] = 42] = "FUNCREF_CALL";
    BC2[BC2["RETURN"] = 43] = "RETURN";
    BC2[BC2["POP"] = 44] = "POP";
    BC2[BC2["PRINT_TOP"] = 45] = "PRINT_TOP";
    BC2[BC2["CREATE_FOR_LOOP"] = 46] = "CREATE_FOR_LOOP";
    BC2[BC2["ITERATE_FOR_LOOP"] = 47] = "ITERATE_FOR_LOOP";
    BC2[BC2["BREAK_FOR_LOOP"] = 48] = "BREAK_FOR_LOOP";
    BC2[BC2["CONTINUE_FOR_LOOP"] = 49] = "CONTINUE_FOR_LOOP";
    return BC2;
  })(BC || {});
  function hasCallPotential(op) {
    return op === 39 || op === 40 || op === 3 || op === 42 || op === 1 || op === 2 || op === 4;
  }
  var FuncDefArg = class {
    constructor(name, defaultValue) {
      __publicField(this, "name");
      __publicField(this, "defaultValue");
      this.name = name;
      this.defaultValue = defaultValue;
    }
  };
  var FuncDef = class {
    // The "default values" array has to have the same length s "arg-names".
    // Pass "undefined" as the value if it has NO default value.
    constructor(args, code) {
      __publicField(this, "arguments");
      __publicField(this, "argNames");
      __publicField(this, "reversedArgNames");
      __publicField(this, "effectiveDefaultValues");
      __publicField(this, "code");
      this.arguments = args;
      this.argNames = args.map((a) => a.name);
      this.reversedArgNames = this.argNames.slice().reverse();
      this.effectiveDefaultValues = args.map((a) => a.defaultValue === void 0 ? null : a.defaultValue);
      this.code = code;
    }
    getLastNEffectiveDefaultValues(amount) {
      return this.effectiveDefaultValues.slice(-amount);
    }
    isNative() {
      return this.code instanceof Function;
    }
    getCode() {
      return this.code;
    }
    getFunction() {
      return this.code;
    }
  };
  var BoundFunction = class {
    constructor(funcDef, context) {
      __publicField(this, "funcDef");
      __publicField(this, "context");
      this.funcDef = funcDef;
      this.context = context;
    }
  };
  var SourceMap = class {
    constructor(srcFile) {
      __publicField(this, "entries");
      this.srcFile = srcFile;
      this.entries = [];
    }
    pushEntry(ipStart, ipEnd, srcLoc, isCall = false) {
      const entry = {
        ipStart,
        ipEnd,
        srcLoc,
        isCall
      };
      this.entries.push(entry);
    }
    pushCall(ipStart, ipEnd, srcLoc) {
      this.pushEntry(ipStart, ipEnd, srcLoc, true);
    }
    findEntry(ip) {
      for (let entry of this.entries) {
        if (ip >= entry.ipStart && ip <= entry.ipEnd) {
          return entry;
        }
      }
      return null;
    }
  };
  var Code = class {
    constructor() {
      __publicField(this, "opCodes");
      __publicField(this, "debugLines");
      __publicField(this, "arg1");
      __publicField(this, "arg2");
      __publicField(this, "srcMap");
      this.opCodes = [];
      this.debugLines = [];
      this.arg1 = [];
      this.arg2 = [];
      this.srcMap = new SourceMap();
    }
    push(opCode, arg1 = void 0, arg2 = void 0) {
      this.opCodes.push(opCode);
      this.arg1.push(arg1);
      this.arg2.push(arg2);
      this.pushDebugLine(opCode, arg1, arg2);
    }
    pushDebugLine(opCode, arg1, arg2) {
      const debugCode = [BC[opCode]];
      if (arg1 !== void 0)
        debugCode.push(arg1);
      if (arg2 !== void 0)
        debugCode.push(arg2);
      this.debugLines.push(debugCode);
    }
  };
  var AddrLabel = class {
    constructor(idx) {
      this.idx = idx;
    }
  };
  var CodeBuilder = class {
    constructor(srcFile) {
      __publicField(this, "prg");
      __publicField(this, "ip");
      __publicField(this, "addresses");
      __publicField(this, "unresolvedIdx", 0);
      __publicField(this, "unresolved");
      __publicField(this, "srcMapIpStart");
      __publicField(this, "srcMap");
      this.srcFile = srcFile;
      this.prg = new Code();
      this.ip = 0;
      this.addresses = /* @__PURE__ */ new Map();
      this.unresolved = [];
      this.srcMapIpStart = -1;
      this.srcMap = new SourceMap(srcFile);
    }
    push(opCode, arg1 = void 0, arg2 = void 0) {
      this.prg.push(opCode, arg1, arg2);
      this.ip++;
    }
    push_unresolved(opCode, arg1 = void 0, arg2 = void 0) {
      if (!(arg1 instanceof AddrLabel) && !(arg2 instanceof AddrLabel)) {
        throw new Error("Expected one of the parameters to be an address label");
      }
      this.prg.push(opCode, arg1, arg2);
      this.unresolved.push(this.ip);
      this.ip++;
    }
    newLabel() {
      const addLabel = new AddrLabel(this.unresolvedIdx);
      this.unresolvedIdx += 1;
      return addLabel;
    }
    startMapEntry() {
      this.srcMapIpStart = this.ip;
    }
    endMapEntry(srcLoc) {
      const ipStart = this.srcMapIpStart;
      const ipEnd = this.ip - 1;
      if (ipStart < 0) {
        throw new Error("No starting map-entry");
      }
      const hasCall = this.containsCall(ipStart, ipEnd);
      if (hasCall) {
        this.srcMap.pushCall(ipStart, ipEnd, srcLoc);
      } else {
        this.srcMap.pushEntry(ipStart, ipEnd, srcLoc);
      }
      this.srcMapIpStart = -1;
    }
    containsCall(ipStart, ipEnd) {
      for (let idx = ipStart; idx <= ipEnd; idx++) {
        const opCode = this.prg.opCodes[idx];
        if (hasCallPotential(opCode)) {
          return true;
        }
      }
      return false;
    }
    define_address(label) {
      this.addresses.set(label, this.ip);
    }
    build() {
      this.resolveAddresses();
      const code = this.prg;
      code.srcMap = this.srcMap;
      return code;
    }
    resolveAddresses() {
      const resolveAddr = (uaddr, argArray) => {
        let label = argArray[uaddr];
        if (label instanceof AddrLabel) {
          let prgAddr = this.addresses.get(label);
          if (prgAddr === void 0) {
            throw new Error(`No address for label ${label} at address ${uaddr}`);
          }
          argArray[uaddr] = prgAddr;
          return 1;
        } else {
          return 0;
        }
      };
      for (let uaddr of this.unresolved) {
        let resolvedCount = 0;
        resolvedCount += resolveAddr(uaddr, this.prg.arg1);
        resolvedCount += resolveAddr(uaddr, this.prg.arg2);
        if (resolvedCount === 0) {
          throw new Error("No addresses resolved for " + uaddr);
        }
      }
    }
  };
  var NotImplemented = class extends Error {
    constructor(message) {
      super(message);
    }
  };
  var CompileTimeError = class extends Error {
    constructor(message) {
      super(message);
    }
  };
  var ExpressionCompilerContext = class _ExpressionCompilerContext {
    constructor(isFuncRef = false, isStatement = false) {
      this.isFuncRef = isFuncRef;
      this.isStatement = isStatement;
    }
    enterFunctionReference() {
      const newContext = new _ExpressionCompilerContext(true, this.isStatement);
      return newContext;
    }
    enterStatement() {
      const newContext = new _ExpressionCompilerContext(this.isFuncRef, true);
      return newContext;
    }
  };
  var ExpressionCompiler = class {
    constructor(builder) {
      this.builder = builder;
    }
    compileExpression(e, context = null) {
      const b = this.builder;
      context = context == null ? new ExpressionCompilerContext() : context;
      if (e instanceof Literal) {
        b.push(BC.PUSH, e.value);
      } else if (e instanceof IdentifierExpr) {
        this.compileIdentifierExpr(e, context);
      } else if (e instanceof SelfExpr) {
        this.compileSelfExpr();
      } else if (e instanceof SuperExpr) {
        this.compileSuperExpr();
      } else if (e instanceof BinaryExpr) {
        this.compileBinaryExpression(e);
      } else if (e instanceof UnaryExpr) {
        this.compileUnaryExpression(e);
      } else if (e instanceof ChainedComparisonExpr) {
        this.compileChainedComparisonExpression(e);
      } else if (e instanceof LogicExpr) {
        this.compileLogicExpression(e);
      } else if (e instanceof GroupingExpr) {
        this.compileExpression(e.expr, context);
      } else if (e instanceof ListExpr) {
        this.compileListExpression(e);
      } else if (e instanceof MapExpr) {
        this.compileMapExpression(e);
      } else if (e instanceof IndexedAccessExpr) {
        this.compileIndexedAccessExpression(e, context);
      } else if (e instanceof DotAccessExpr) {
        this.compileDotAccessExpression(e, context);
      } else if (e instanceof ListSlicingExpr) {
        this.compileListSlicingExpression(e);
      } else if (e instanceof FunctionCallExpr) {
        this.compileFuncCallExpr(e.callTarget, e.args, context);
      } else if (e instanceof FunctionRefExpr) {
        this.compileFuncRefExpression(e, context);
      } else if (e instanceof FunctionBodyExpr) {
        this.compileFunctionBodyExpression(e);
      } else {
        throw new NotImplemented("Expression type not yet supported: " + e.description());
      }
    }
    compileIdentifierExpr(e, context) {
      this.builder.push(BC.EVAL_ID, e.identifier.value, context.isFuncRef);
    }
    compileSelfExpr() {
      this.builder.push(BC.EVAL_ID, "self");
    }
    compileSuperExpr() {
      this.builder.push(BC.EVAL_ID, "super");
    }
    compileFuncCall(callTarget, args) {
      const context = new ExpressionCompilerContext();
      this.compileFuncCallExpr(callTarget, args, context);
    }
    compileFuncCallExpr(callTarget, params, context) {
      const pushParams = () => {
        for (let param of params) {
          this.compileExpression(param);
        }
      };
      const paramCount = params.length;
      if (callTarget instanceof IdentifierExpr) {
        const identifier = callTarget.identifier.value;
        pushParams();
        this.builder.push(BC.CALL, identifier, paramCount);
      } else if (callTarget instanceof DotAccessExpr && callTarget.accessTarget instanceof SuperExpr) {
        const identifier = callTarget.property.value;
        this.builder.push(BC.PUSH, identifier);
        pushParams();
        this.builder.push(BC.SUPER_DOT_CALL, paramCount);
      } else if (callTarget instanceof DotAccessExpr) {
        const identifier = callTarget.property.value;
        this.compileExpression(callTarget.accessTarget);
        this.builder.push(BC.PUSH, identifier);
        pushParams();
        this.builder.push(BC.PROPERTY_CALL, paramCount);
      } else if (callTarget instanceof IndexedAccessExpr && callTarget.accessTarget instanceof SuperExpr) {
        this.compileExpression(callTarget.indexExpr);
        pushParams();
        this.builder.push(BC.SUPER_DOT_CALL, paramCount);
      } else if (callTarget instanceof IndexedAccessExpr) {
        this.compileExpression(callTarget.accessTarget);
        this.compileExpression(callTarget.indexExpr);
        pushParams();
        this.builder.push(BC.PROPERTY_CALL, paramCount);
      } else if (callTarget instanceof FunctionCallExpr) {
        const ctx = context.enterFunctionReference();
        this.compileExpression(callTarget, ctx);
        pushParams();
        this.builder.push(BC.FUNCREF_CALL, paramCount);
      } else {
        throw new CompileTimeError(`Invalid call target: ${callTarget.toJson()}`);
      }
    }
    compileBinaryExpression(e) {
      this.compileExpression(e.left);
      this.compileExpression(e.right);
      switch (e.operator.tokenType) {
        case TokenType.OP_EQUALS: {
          this.builder.push(BC.COMPARE_EQ);
          break;
        }
        case TokenType.OP_NOT_EQUALS: {
          this.builder.push(BC.COMPARE_NE);
          break;
        }
        case TokenType.OP_PLUS: {
          this.builder.push(BC.ADD_VALUES);
          break;
        }
        case TokenType.OP_MINUS: {
          this.builder.push(BC.SUBTRACT_VALUES);
          break;
        }
        case TokenType.OP_MULT: {
          this.builder.push(BC.MULTIPLY_VALUES);
          break;
        }
        case TokenType.OP_DIV: {
          this.builder.push(BC.DIVIDE_VALUES);
          break;
        }
        case TokenType.OP_POW: {
          this.builder.push(BC.POWER_VALUES);
          break;
        }
        case TokenType.OP_MOD: {
          this.builder.push(BC.MOD_VALUES);
          break;
        }
        case TokenType.OP_LESS_EQUALS: {
          this.builder.push(BC.COMPARE_LE);
          break;
        }
        case TokenType.OP_LESS: {
          this.builder.push(BC.COMPARE_LT);
          break;
        }
        case TokenType.OP_GREATER_EQUALS: {
          this.builder.push(BC.COMPARE_GE);
          break;
        }
        case TokenType.OP_GREATER: {
          this.builder.push(BC.COMPARE_GT);
          break;
        }
        case TokenType.OP_ISA: {
          this.builder.push(BC.COMPARE_ISA);
          break;
        }
        default:
          throw new NotImplemented("Operator not implemented: " + TokenType[e.operator.tokenType]);
      }
    }
    compileUnaryExpression(e) {
      this.compileExpression(e.expr);
      switch (e.operator.tokenType) {
        case TokenType.OP_NOT: {
          this.builder.push(BC.NEGATE_BOOLEAN);
          break;
        }
        case TokenType.OP_MINUS: {
          this.builder.push(BC.NEGATE_NUMBER);
          break;
        }
        case TokenType.KW_NEW: {
          this.builder.push(BC.NEW_MAP);
          break;
        }
        default: {
          throw new CompileTimeError("Invalid unary operator. Token type: " + e.operator.tokenType);
        }
      }
    }
    compileChainedComparisonExpression(e) {
      for (let operandExpression of e.operands) {
        this.compileExpression(operandExpression);
      }
      for (let operator of e.operators) {
        switch (operator.tokenType) {
          case TokenType.OP_EQUALS: {
            this.builder.push(BC.PUSH, "==");
            break;
          }
          case TokenType.OP_NOT_EQUALS: {
            this.builder.push(BC.PUSH, "!=");
            break;
          }
          case TokenType.OP_GREATER: {
            this.builder.push(BC.PUSH, ">");
            break;
          }
          case TokenType.OP_GREATER_EQUALS: {
            this.builder.push(BC.PUSH, ">=");
            break;
          }
          case TokenType.OP_LESS: {
            this.builder.push(BC.PUSH, "<");
            break;
          }
          case TokenType.OP_LESS_EQUALS: {
            this.builder.push(BC.PUSH, "<=");
            break;
          }
          default: {
            throw new CompileTimeError("Invalid operator found");
          }
        }
      }
      const pairCount = e.operators.length;
      this.builder.push(BC.CHAINED_COMPARISON, pairCount);
    }
    compileLogicExpression(e) {
      const isAnd = e.operator.tokenType == TokenType.OP_AND;
      const isOr = e.operator.tokenType == TokenType.OP_OR;
      if (!(isAnd || isOr)) {
        throw new CompileTimeError("Invalid logic operator: must be either AND or OR");
      }
      const shortCircuitAddr = this.builder.newLabel();
      this.compileExpression(e.left);
      if (isAnd) {
        this.builder.push_unresolved(BC.JUMP_IF_FALSE, shortCircuitAddr);
      } else {
        this.builder.push_unresolved(BC.JUMP_IF_TRUE, shortCircuitAddr);
      }
      this.compileExpression(e.right);
      if (isAnd) {
        this.builder.push(BC.LOGIC_AND_VALUES);
      } else {
        this.builder.push(BC.LOGIC_OR_VALUES);
      }
      this.builder.define_address(shortCircuitAddr);
    }
    compileListExpression(e) {
      const elementCount = e.elements.length;
      for (let elementExpr of e.elements) {
        this.compileExpression(elementExpr);
      }
      this.builder.push(BC.BUILD_LIST, elementCount);
    }
    compileMapExpression(e) {
      const elementCount = e.elements.size;
      for (let [keyExpr, valueExpr] of e.elements) {
        this.compileExpression(keyExpr);
        this.compileExpression(valueExpr);
      }
      this.builder.push(BC.BUILD_MAP, elementCount);
    }
    compileIndexedAccessExpression(e, context) {
      this.compileExpression(e.accessTarget);
      this.compileExpression(e.indexExpr);
      let isFuncRef;
      if (context.isStatement) {
        isFuncRef = false;
      } else {
        isFuncRef = true;
      }
      this.builder.push(BC.INDEXED_ACCESS, isFuncRef);
    }
    compileDotAccessExpression(e, context) {
      if (e.accessTarget instanceof SuperExpr) {
        this.builder.push(BC.SUPER_DOT_ACCESS, e.property.value, context.isFuncRef);
      } else {
        this.compileExpression(e.accessTarget);
        this.builder.push(BC.DOT_ACCESS, e.property.value, context.isFuncRef);
      }
    }
    compileFuncRefExpression(e, context) {
      const functionReferenceContext = context.enterFunctionReference();
      this.compileExpression(e.refTarget, functionReferenceContext);
    }
    compileListSlicingExpression(e) {
      this.compileExpression(e.listTarget);
      if (e.start) {
        this.compileExpression(e.start);
      } else {
        this.builder.push(BC.PUSH, null);
      }
      if (e.stop) {
        this.compileExpression(e.stop);
      } else {
        this.builder.push(BC.PUSH, null);
      }
      this.builder.push(BC.SLICE_SEQUENCE);
    }
    compileFunctionBodyExpression(e) {
      const args = [];
      for (let arg of e.args) {
        if (arg.defaultValue) {
          args.push(new FuncDefArg(arg.name, arg.defaultValue.value));
        } else {
          args.push(new FuncDefArg(arg.name, void 0));
        }
      }
      const funcCompiler = new Compiler(e.statements);
      const funcCode = funcCompiler.compileFunctionBody();
      let funcDef = new FuncDef(args, funcCode);
      this.builder.push(BC.PUSH, funcDef);
    }
  };
  var CompilerContext = class {
    constructor() {
      __publicField(this, "parent");
      this.parent = void 0;
    }
    insideWhile() {
      if (this.parent) {
        return this.parent.insideWhile();
      } else {
        return false;
      }
    }
    insideForLoop() {
      if (this.parent) {
        return this.parent.insideForLoop();
      } else {
        return false;
      }
    }
    insideFunctionBody() {
      if (this.parent) {
        return this.parent.insideFunctionBody();
      } else {
        return false;
      }
    }
    getForLoopNr() {
      if (this.parent) {
        return this.parent.getForLoopNr();
      } else {
        return 0;
      }
    }
  };
  var WhileContext = class extends CompilerContext {
    constructor(parent, startLabel, endLabel) {
      super();
      __publicField(this, "startLabel");
      __publicField(this, "endLabel");
      this.parent = parent;
      this.startLabel = startLabel;
      this.endLabel = endLabel;
    }
    insideWhile() {
      return true;
    }
  };
  var ForLoopContext$1 = class ForLoopContext extends CompilerContext {
    constructor(parent) {
      super();
      this.parent = parent;
    }
    insideForLoop() {
      return true;
    }
    getForLoopNr() {
      if (this.parent) {
        return 1 + this.parent.getForLoopNr();
      } else {
        throw new Error("Parent not set");
      }
    }
  };
  var FunctionBodyContext = class extends CompilerContext {
    constructor() {
      super();
    }
    insideFunctionBody() {
      return true;
    }
  };
  var StatementCompiler = class {
    constructor(builder, expressionCompiler) {
      this.builder = builder;
      this.expressionCompiler = expressionCompiler;
    }
    compileStatements(statements, context) {
      for (const s of statements) {
        this.compileStatement(s, context);
      }
    }
    compileStatement(s, context) {
      if (s instanceof ExpressionStatement) {
        this.compileExpressionStatement(s);
      } else if (s instanceof AssignmentStatement) {
        this.compileAssignmentStatement(s);
      } else if (s instanceof MathAssignmentStatement) {
        this.compileMathAssignmentStatement(s);
      } else if (s instanceof ReturnStatement) {
        this.compileReturnStatement(s);
      } else if (s instanceof IfStatement) {
        this.compileIfStatement(s, context);
      } else if (s instanceof WhileStatement) {
        this.compileWhileStatement(s, context);
      } else if (s instanceof ForStatement) {
        this.compileForLoopStatement(s, context);
      } else if (s instanceof BreakStatement) {
        this.compileBreakStatement(s, context);
      } else if (s instanceof ContinueStatement) {
        this.compileContinueStatement(s, context);
      } else if (s instanceof FunctionCallStatement) {
        this.compileFunctionCallStatement(s);
      } else {
        throw new Error("Compilation of statement not implemented: " + s.description());
      }
    }
    compileExpression(e) {
      this.expressionCompiler.compileExpression(e);
    }
    compileExpressionStatement(s) {
      let exprCompilerContext = new ExpressionCompilerContext();
      exprCompilerContext = exprCompilerContext.enterStatement();
      this.builder.startMapEntry();
      this.expressionCompiler.compileExpression(s.expression, exprCompilerContext);
      this.builder.endMapEntry(s.location());
      this.builder.push(BC.POP);
    }
    compileAssignmentStatement(s) {
      this.builder.startMapEntry();
      const target = s.target;
      if (target instanceof IdentifierExpr) {
        this.compileExpression(s.value);
        this.builder.push(BC.ASSIGN_LOCAL, target.identifier.value);
      } else if (target instanceof IndexedAccessExpr) {
        this.compileExpression(target.indexExpr);
        this.compileExpression(s.value);
        this.compileExpression(target.accessTarget);
        this.builder.push(BC.ASSIGN_INDEXED);
      } else if (target instanceof DotAccessExpr) {
        this.compileExpression(s.value);
        this.compileExpression(target.accessTarget);
        this.builder.push(BC.DOT_ASSIGN, target.property.value);
      } else {
        throw new Error("Assignment target not yet supported: " + s.target.description());
      }
      this.builder.endMapEntry(s.location());
    }
    compileMathAssignmentStatement(s) {
      this.builder.startMapEntry();
      const target = s.target;
      if (target instanceof IdentifierExpr) {
        this.compileExpression(s.value);
        this.builder.push(BC.MATH_ASSIGN_LOCAL, target.identifier.value, s.opToken);
      } else if (target instanceof IndexedAccessExpr) {
        this.compileExpression(target.accessTarget);
        this.compileExpression(target.indexExpr);
        this.compileExpression(s.value);
        this.builder.push(BC.MATH_ASSIGN_INDEXED, s.opToken);
      } else if (target instanceof DotAccessExpr) {
        this.compileExpression(target.accessTarget);
        this.compileExpression(s.value);
        this.builder.push(BC.MATH_DOT_ASSIGN, target.property.value, s.opToken);
      } else {
        throw new Error("Assignment target not yet supported: " + s.target.description());
      }
      this.builder.endMapEntry(s.location());
    }
    compileReturnStatement(s) {
      this.builder.startMapEntry();
      if (s.optValue) {
        this.compileExpression(s.optValue);
      } else {
        this.builder.push(BC.PUSH, null);
      }
      this.builder.push(BC.RETURN);
      this.builder.endMapEntry(s.location());
    }
    compileIfStatement(s, context) {
      const endIfThenLabel = this.builder.newLabel();
      const endFullIfBlockLabel = this.builder.newLabel();
      this.builder.startMapEntry();
      this.compileExpression(s.ifBranch.condition);
      this.builder.push_unresolved(BC.POP_JUMP_FALSE, endIfThenLabel);
      this.builder.endMapEntry(s.ifBranch.condition.location());
      this.compileStatements(s.ifBranch.statements, context);
      this.builder.push_unresolved(BC.JUMP, endFullIfBlockLabel);
      this.builder.define_address(endIfThenLabel);
      for (let elseIf of s.elseIfs) {
        let elseIfLabel = this.builder.newLabel();
        this.builder.startMapEntry();
        this.compileExpression(elseIf.condition);
        this.builder.push_unresolved(BC.POP_JUMP_FALSE, elseIfLabel);
        this.builder.endMapEntry(elseIf.condition.location());
        this.compileStatements(elseIf.statements, context);
        this.builder.push_unresolved(BC.JUMP, endFullIfBlockLabel);
        this.builder.define_address(elseIfLabel);
      }
      if (s.elseBranch.length > 0) {
        this.compileStatements(s.elseBranch, context);
      }
      this.builder.define_address(endFullIfBlockLabel);
    }
    compileWhileStatement(s, context) {
      const startWhileLabel = this.builder.newLabel();
      const endWhileLabel = this.builder.newLabel();
      this.builder.startMapEntry();
      this.builder.define_address(startWhileLabel);
      this.compileExpression(s.condition);
      this.builder.push_unresolved(BC.POP_JUMP_FALSE, endWhileLabel);
      this.builder.endMapEntry(s.condition.location());
      const whileContext = new WhileContext(context, startWhileLabel, endWhileLabel);
      this.compileStatements(s.statements, whileContext);
      this.builder.push_unresolved(BC.JUMP, startWhileLabel);
      this.builder.define_address(endWhileLabel);
    }
    compileForLoopStatement(s, context) {
      const startForLoopLabel = this.builder.newLabel();
      const endForLoopLabel = this.builder.newLabel();
      const forLoopContext = new ForLoopContext$1(context);
      const forLoopNr = forLoopContext.getForLoopNr();
      this.builder.push(BC.PUSH, s.loopVar.value);
      this.compileExpression(s.rangeExpr);
      this.builder.push_unresolved(BC.PUSH, endForLoopLabel);
      this.builder.push_unresolved(BC.PUSH, startForLoopLabel);
      this.builder.push(BC.CREATE_FOR_LOOP, forLoopNr);
      this.builder.startMapEntry();
      this.builder.define_address(startForLoopLabel);
      this.builder.push(BC.ITERATE_FOR_LOOP, forLoopNr);
      this.builder.endMapEntry(s.headerLocation);
      this.compileStatements(s.statements, forLoopContext);
      this.builder.push_unresolved(BC.JUMP, startForLoopLabel);
      this.builder.define_address(endForLoopLabel);
    }
    compileBreakStatement(s, context) {
      if (context.insideWhile() && context instanceof WhileContext) {
        this.builder.startMapEntry();
        this.builder.push_unresolved(BC.JUMP, context.endLabel);
        this.builder.endMapEntry(s.location());
      } else if (context.insideForLoop() && context instanceof ForLoopContext$1) {
        this.builder.startMapEntry();
        this.builder.push(BC.BREAK_FOR_LOOP, context.getForLoopNr());
        this.builder.endMapEntry(s.location());
      } else {
        throw new Error("break outside while / for loop");
      }
    }
    compileContinueStatement(s, context) {
      if (context.insideWhile() && context instanceof WhileContext) {
        this.builder.startMapEntry();
        this.builder.push_unresolved(BC.JUMP, context.startLabel);
        this.builder.endMapEntry(s.location());
      } else if (context.insideForLoop() && context instanceof ForLoopContext$1) {
        this.builder.startMapEntry();
        this.builder.push(BC.CONTINUE_FOR_LOOP, context.getForLoopNr());
        this.builder.endMapEntry(s.location());
      } else {
        throw new Error("continue outside while / for loop");
      }
    }
    compileFunctionCallStatement(s) {
      this.builder.startMapEntry();
      this.expressionCompiler.compileFuncCall(s.callTarget, s.args);
      this.builder.endMapEntry(s.location());
      this.builder.push(BC.POP);
    }
  };
  var Compiler = class {
    constructor(statements, srcFile) {
      __publicField(this, "builder");
      __publicField(this, "statementCompiler");
      __publicField(this, "expressionCompiler");
      this.statements = statements;
      this.builder = new CodeBuilder(srcFile);
      this.expressionCompiler = new ExpressionCompiler(this.builder);
      this.statementCompiler = new StatementCompiler(this.builder, this.expressionCompiler);
    }
    compile() {
      const context = new CompilerContext();
      this.statementCompiler.compileStatements(this.statements, context);
      const prg = this.builder.build();
      return prg;
    }
    compileModuleInvocation(moduleName) {
      const context = new FunctionBodyContext();
      this.statementCompiler.compileStatements(this.statements, context);
      this.emitLastReturn(true);
      const moduleStatements = this.builder.build();
      const moduleLoaderBuilder = new CodeBuilder(`${moduleName} (loader)`);
      const moduleBodyFn = new FuncDef([], moduleStatements);
      moduleLoaderBuilder.push(BC.PUSH, moduleBodyFn);
      moduleLoaderBuilder.push(BC.FUNCREF_CALL, 0);
      moduleLoaderBuilder.push(BC.ASSIGN_LOCAL, moduleName);
      const runnerCode = moduleLoaderBuilder.build();
      return runnerCode;
    }
    compileFunctionBody() {
      const context = new FunctionBodyContext();
      this.statementCompiler.compileStatements(this.statements, context);
      this.emitLastReturn(false);
      const prg = this.builder.build();
      return prg;
    }
    emitLastReturn(inModuleBody) {
      let emitReturn = true;
      if (this.statements.length > 0) {
        const lastStatement = this.statements[this.statements.length - 1];
        if (lastStatement instanceof ReturnStatement) {
          emitReturn = false;
        }
      }
      if (emitReturn) {
        if (inModuleBody) {
          this.builder.push(BC.EVAL_ID, "locals");
          this.builder.push(BC.RETURN);
        } else {
          this.builder.push(BC.PUSH, void 0);
          this.builder.push(BC.RETURN);
        }
      }
    }
  };
  var Stepper = class {
    constructor(id, d, vm) {
      __publicField(this, "initialCallStackDepth");
      __publicField(this, "initialEntry");
      this.id = id;
      this.d = d;
      this.vm = vm;
      this.initialCallStackDepth = this.vm.savedFrames.count();
      this.initialEntry = this.d.getCurrentSrcMapEntry();
    }
    scheduleNext() {
      setTimeout(() => {
        this.step();
      }, 0);
    }
    resumeFromSuspension() {
      this.scheduleNext();
    }
    finish() {
      this.d.stepUntilSrcMapEntryFound();
      this.d.notifyChanges();
      this.d.removeStepper(this.id);
    }
  };
  var StepOverStepper = class extends Stepper {
    constructor(id, d, vm) {
      super(id, d, vm);
      __publicField(this, "initialCallStackDepth");
      __publicField(this, "initialEntry");
      this.initialCallStackDepth = vm.savedFrames.count();
      this.initialEntry = d.getCurrentSrcMapEntry();
    }
    step() {
      if (this.vm.isSuspended()) {
        return;
      }
      this.vm.runOneCycle();
      const currentCallStackDepth = this.vm.savedFrames.count();
      if (currentCallStackDepth > this.initialCallStackDepth) {
        this.scheduleNext();
        return;
      }
      if (this.vm.isFinished()) {
        this.finish();
        return;
      }
      const currentEntry = this.d.getCurrentSrcMapEntry();
      let sourceLocationChanged = false;
      if (this.initialEntry === null && currentEntry !== null) {
        sourceLocationChanged = true;
      } else if (this.initialEntry !== null && currentEntry === null) {
        this.scheduleNext();
        return;
      } else if (this.initialEntry !== null && currentEntry !== null) {
        const initialLoc = this.initialEntry.srcLoc.start.row;
        const currentLoc = currentEntry.srcLoc.start.row;
        sourceLocationChanged = initialLoc !== currentLoc;
      }
      if (sourceLocationChanged) {
        this.finish();
        return;
      }
      this.scheduleNext();
    }
  };
  var StepIntoStepper = class extends Stepper {
    constructor(id, d, vm) {
      super(id, d, vm);
      __publicField(this, "initialCount");
      this.initialCount = this.vm.savedFrames.count();
    }
    step() {
      if (this.vm.isSuspended()) {
        return;
      }
      const nextOpIsCall = this.vm.couldResultInCall();
      this.vm.runOneCycle();
      const currentCount = this.vm.savedFrames.count();
      if (currentCount > this.initialCount) {
        this.finish();
        return;
      } else if (nextOpIsCall && currentCount == this.initialCount) {
        if (!this.vm.isSuspended()) {
          this.finish();
        }
        return;
      }
      if (this.vm.isFinished()) {
        this.finish();
        return;
      }
      this.scheduleNext();
    }
  };
  var StepOutStepper = class extends Stepper {
    constructor(id, d, vm) {
      super(id, d, vm);
      __publicField(this, "initialCount");
      this.initialCount = this.vm.savedFrames.count();
    }
    step() {
      if (this.vm.isSuspended()) {
        return;
      }
      this.vm.runOneCycle();
      const currentCount = this.vm.savedFrames.count();
      if (currentCount < this.initialCount) {
        this.finish();
        return;
      }
      if (this.vm.isFinished()) {
        this.finish();
        return;
      }
      this.scheduleNext();
    }
  };
  var Debugger = class {
    constructor(vm) {
      __publicField(this, "nextStepperId", 1);
      __publicField(this, "steppers");
      __publicField(this, "onSrcChange", () => {
      });
      __publicField(this, "onFinished", () => {
      });
      this.vm = vm;
      this.vm.setRunAfterSuspended(false);
      this.steppers = /* @__PURE__ */ new Map();
      vm.onResumingExecution = () => {
        const steppers = this.steppers.values();
        for (let s of steppers) {
          s.resumeFromSuspension();
        }
      };
    }
    get compiledCode() {
      return this.vm.code;
    }
    // Move to first instruction
    start() {
      this.notifyChanges();
    }
    stop() {
      this.vm.stopRunning();
    }
    getCurrentSourceLocation() {
      const fileName = this.vm.getCurrentSrcFileName();
      const lineNr = this.vm.getCurrentSrcLineNr();
      return [fileName, lineNr];
    }
    getCurrentSrcMapEntry() {
      return this._srcMap().findEntry(this.vm.ip);
    }
    // True if the current location can be stepped into 
    // (because it contains at least one call)
    canStepIn() {
      const entry = this.getCurrentSrcMapEntry();
      if (entry !== null) {
        return entry.isCall;
      } else {
        return false;
      }
    }
    canStepOut() {
      return this.vm.savedFrames.count() > 0;
    }
    newStepOverStepper() {
      const stepper = new StepOverStepper(this.nextStepperId, this, this.vm);
      this.steppers.set(this.nextStepperId, stepper);
      this.nextStepperId++;
      return stepper;
    }
    newStepIntoStepper() {
      const stepper = new StepIntoStepper(this.nextStepperId, this, this.vm);
      this.steppers.set(this.nextStepperId, stepper);
      this.nextStepperId++;
      return stepper;
    }
    newStepOutStepper() {
      const stepper = new StepOutStepper(this.nextStepperId, this, this.vm);
      this.steppers.set(this.nextStepperId, stepper);
      this.nextStepperId++;
      return stepper;
    }
    removeStepper(id) {
      this.steppers.delete(id);
    }
    stepOver() {
      const stepper = this.newStepOverStepper();
      stepper.scheduleNext();
    }
    stepInto() {
      const stepper = this.newStepIntoStepper();
      stepper.scheduleNext();
    }
    stepOut() {
      const stepper = this.newStepOutStepper();
      stepper.scheduleNext();
    }
    stepUntilSrcMapEntryFound() {
      let currentEntry = this.getCurrentSrcMapEntry();
      while (currentEntry === null && this.vm.isRunning()) {
        this.vm.runOneCycle();
        currentEntry = this.getCurrentSrcMapEntry();
      }
    }
    notifyChanges() {
      this.highlightSource();
      this.notifyFinished();
    }
    highlightSource() {
      const sme = this.getCurrentSrcMapEntry();
      if (sme !== null) {
        this.onSrcChange();
      }
    }
    notifyFinished() {
      if (this.vm.isFinished()) {
        this.onFinished();
      }
    }
    _srcMap() {
      return this.vm.code.srcMap;
    }
    _srcMapEntry() {
      return this._srcMap().findEntry(this.vm.ip);
    }
  };
  var HashMap = class _HashMap {
    constructor() {
      __publicField(this, "_size", 0);
      __publicField(this, "buckets");
      this.buckets = /* @__PURE__ */ new Map();
    }
    size() {
      return this._size;
    }
    set(key, value) {
      if (value === void 0) {
        this.delete(key);
        return;
      }
      const _hashCode = hashCode(key);
      let bucket = this.buckets.get(_hashCode);
      if (!bucket) {
        bucket = new Array();
        this.buckets.set(_hashCode, bucket);
      }
      let entryFound = false;
      for (let i = 0; i < bucket.length; i++) {
        if (equals(bucket[i].key, key)) {
          bucket[i].value = value;
          entryFound = true;
          break;
        }
      }
      if (!entryFound) {
        bucket.push({ key, value });
        this._size += 1;
      }
    }
    get(key) {
      const _hashCode = hashCode(key);
      const bucket = this.buckets.get(_hashCode);
      if (!bucket) {
        return void 0;
      }
      for (let i = 0; i < bucket.length; ++i) {
        if (equals(bucket[i].key, key)) {
          return bucket[i].value;
        }
      }
      return void 0;
    }
    has(key) {
      const _hashCode = hashCode(key);
      const bucket = this.buckets.get(_hashCode);
      if (!bucket) {
        return false;
      }
      for (let i = 0; i < bucket.length; ++i) {
        if (equals(bucket[i].key, key)) {
          return true;
        }
      }
      return false;
    }
    delete(key) {
      const _hashCode = hashCode(key);
      const bucket = this.buckets.get(_hashCode);
      if (!bucket) {
        return;
      }
      let bucketIdx = -1;
      for (let i = 0; i < bucket.length; ++i) {
        if (equals(bucket[i].key, key)) {
          bucketIdx = i;
          break;
        }
      }
      if (bucketIdx >= 0) {
        bucket.splice(bucketIdx, 1);
        this._size -= 1;
      }
      if (bucket.length == 0) {
        this.buckets.delete(_hashCode);
      }
    }
    keys() {
      const keys = new Array();
      for (let bucket of this.buckets.values()) {
        for (let i = 0; i < bucket.length; ++i) {
          keys.push(bucket[i].key);
        }
      }
      return keys;
    }
    values() {
      const values = new Array();
      for (let bucket of this.buckets.values()) {
        for (let i = 0; i < bucket.length; ++i) {
          values.push(bucket[i].value);
        }
      }
      return values;
    }
    // TODO: implement returning an iterator to avoid
    // unnecessary traversing
    entries() {
      const entries = new Array();
      for (let bucket of this.buckets.values()) {
        for (let i = 0; i < bucket.length; ++i) {
          entries.push(bucket[i]);
        }
      }
      return entries;
    }
    toMap(depth = 16) {
      if (depth < 0) {
        return /* @__PURE__ */ new Map();
      }
      const result = /* @__PURE__ */ new Map();
      for (let bucket of this.buckets.values()) {
        for (let i = 0; i < bucket.length; ++i) {
          const entry = bucket[i];
          let key = entry.key;
          let value = entry.value;
          if (key instanceof _HashMap) {
            key = key.toMap(depth - 1);
          }
          if (value instanceof _HashMap) {
            value = value.toMap(depth - 1);
          }
          result.set(key, value);
        }
      }
      return result;
    }
  };
  function newRandomGenerator(seed = void 0) {
    if (seed === void 0) {
      seed = +/* @__PURE__ */ new Date() + Math.random();
    }
    function Mash() {
      let n = 4022871197;
      return function(r) {
        for (let t, s, u = 0, e = 0.02519603282416938; u < r.length; u++) {
          s = r.charCodeAt(u);
          let f = e * (n += s) - (n * e | 0);
          n = 4294967296 * ((t = f * (e * n | 0)) - (t | 0)) + (t | 0);
        }
        return (n | 0) * 23283064365386963e-26;
      };
    }
    return function() {
      let m = Mash();
      let a = m(" ");
      let b = m(" ");
      let c = m(" ");
      let x = 1;
      const seedStr = seed.toString();
      a -= m(seedStr);
      b -= m(seedStr);
      c -= m(seedStr);
      a < 0 && a++;
      b < 0 && b++;
      c < 0 && c++;
      return function() {
        var y = x * 23283064365386963e-26 + a * 2091639;
        a = b, b = c;
        return c = y - (x = y | 0);
      };
    }();
  }
  var Stack = class {
    constructor() {
      __publicField(this, "lastValueUndefined");
      __publicField(this, "elements");
      this.elements = [];
      this.lastValueUndefined = false;
    }
    clear() {
      this.elements = [];
    }
    push(element) {
      if (element === void 0) {
        this.elements.push(null);
        this.lastValueUndefined = true;
      } else {
        this.elements.push(element);
        this.lastValueUndefined = false;
      }
    }
    pop() {
      let result = this.elements.pop();
      if (result === void 0) {
        throw new Error("Stack is empty");
      } else {
        return result;
      }
    }
    // Pop N values. Return them in original order (as they were pushed).
    popN(count) {
      const result = [];
      for (let i = 0; i < count; i++) {
        result.unshift(this.pop());
      }
      return result;
    }
    // Return top-most value without removing it
    peek() {
      if (this.elements.length == 0) {
        throw new Error("Stack is empty");
      } else {
        return this.elements[this.elements.length - 1];
      }
    }
    count() {
      return this.elements.length;
    }
  };
  var Context = class {
    constructor(vm, parent = null) {
      __publicField(this, "locals");
      __publicField(this, "parent");
      __publicField(this, "vm");
      this.locals = new MSMap(vm);
      this.parent = parent;
      this.vm = vm;
    }
    setLocal(identifier, value) {
      if (identifier === "globals") {
        throw new RuntimeError(`Can't assign to globals`);
      } else if (identifier === "locals") {
        throw new RuntimeError(`Can't assign to locals`);
      }
      this.locals.set(identifier, value);
    }
    getOpt(identifier) {
      if (this.locals.has(identifier)) {
        const localValue = this.locals.get(identifier);
        return localValue;
      } else if (identifier === "globals") {
        return this.vm.globalContext.locals;
      } else if (identifier === "locals") {
        return this.locals;
      } else if (identifier === "outer") {
        return this.getOuterLocals();
      } else if (this.parent) {
        return this.parent.getOpt(identifier);
      } else {
        return this.vm.resolveIntrinsic(identifier);
      }
    }
    // Normally the parent context inside a function.
    // At the global scope outer == globals.
    getOuterLocals() {
      let outerContext;
      if (this.parent) {
        outerContext = this.parent;
      } else {
        outerContext = this.vm.globalContext;
      }
      return outerContext.locals;
    }
  };
  var ForLoop = class {
    constructor(mapFactory, startAddr, endAddr, localVarName, values) {
      __publicField(this, "startAddr");
      __publicField(this, "endAddr");
      __publicField(this, "localVarName");
      __publicField(this, "values");
      __publicField(this, "mapObj");
      __publicField(this, "valueIdx");
      __publicField(this, "valueCount");
      this.mapFactory = mapFactory;
      this.startAddr = startAddr;
      this.endAddr = endAddr;
      this.localVarName = localVarName;
      this.valueIdx = 0;
      if (values instanceof Array) {
        this.values = values;
        this.mapObj = null;
      } else if (values instanceof MSMap) {
        this.values = Array.from(values.keys());
        this.mapObj = values;
      } else if (typeof values === "string") {
        this.values = Array.from(values);
        this.mapObj = null;
      } else {
        this.values = [];
        this.mapObj = null;
      }
      this.valueCount = this.values.length;
    }
    isOver() {
      return this.valueIdx >= this.valueCount;
    }
    // Gets current value and increases counter
    iterate() {
      let currentValue;
      if (this.mapObj) {
        const currentKey = this.values[this.valueIdx];
        const currentMapValue = this.mapObj.getOpt(currentKey);
        currentValue = this.mapFactory.newMap();
        currentValue.set("key", currentKey);
        currentValue.set("value", currentMapValue);
      } else {
        currentValue = this.values[this.valueIdx];
      }
      this.valueIdx++;
      return currentValue;
    }
  };
  var ForLoopContext2 = class {
    constructor() {
      __publicField(this, "forLoops");
      this.forLoops = {};
    }
    registerForLoop(forLoopNr, forLoop) {
      this.forLoops[forLoopNr] = forLoop;
    }
    getForLoop(forLoopNr) {
      return this.forLoops[forLoopNr];
    }
    deleteForLoop(forLoopNr) {
      delete this.forLoops[forLoopNr];
    }
  };
  var Frame = class {
    constructor(code, ip, frameContext, forLoopContext) {
      __publicField(this, "ip");
      __publicField(this, "code");
      __publicField(this, "context");
      __publicField(this, "forLoopContext");
      this.code = code;
      this.ip = ip;
      this.context = frameContext;
      this.forLoopContext = forLoopContext;
    }
  };
  var ProcessorState = class {
    constructor(vm) {
      __publicField(this, "ip");
      __publicField(this, "opStack");
      __publicField(this, "code");
      __publicField(this, "forLoopContext");
      __publicField(this, "savedFrames");
      __publicField(this, "cycleCount");
      __publicField(this, "onResumingExecution");
      __publicField(this, "onFinished");
      __publicField(this, "suspended");
      this.code = vm.code;
      this.ip = vm.ip;
      this.suspended = vm.suspended;
      this.forLoopContext = vm.forLoopContext;
      this.savedFrames = vm.savedFrames;
      this.opStack = vm.opStack;
      this.cycleCount = vm.cycleCount;
      this.onResumingExecution = vm.onResumingExecution;
      this.onFinished = vm.onFinished;
    }
    static resetState(vm) {
      vm.ip = 0;
      vm.suspended = false;
      vm.forLoopContext = new ForLoopContext2();
      vm.savedFrames = new Stack();
      vm.opStack = new Stack();
      vm.cycleCount = 0;
      vm.onResumingExecution = () => {
      };
      vm.onFinished = () => {
      };
    }
    restoreState(vm) {
      vm.code = this.code;
      vm.ip = this.ip;
      vm.suspended = this.suspended;
      vm.forLoopContext = this.forLoopContext;
      vm.savedFrames = this.savedFrames;
      vm.opStack = this.opStack;
      vm.cycleCount = this.cycleCount;
      vm.onResumingExecution = this.onResumingExecution;
      vm.onFinished = this.onFinished;
    }
  };
  function parseSignature(functionSignature) {
    let fnName = functionSignature;
    let argNames = [];
    let defaultValues = [];
    if (functionSignature.indexOf("(") > 0) {
      const nameArgsParts = functionSignature.split("(");
      fnName = nameArgsParts[0].trim();
      const argsParts = nameArgsParts[1].slice(0, -1).split(",");
      for (let part of argsParts) {
        const argValueParts = part.split("=");
        const argName = argValueParts[0].trim();
        let defaultValue = void 0;
        if (argValueParts.length > 1) {
          const defaultValueStr = argValueParts[1].trim();
          if (defaultValueStr === "null") {
            defaultValue = null;
          } else if (defaultValueStr.startsWith('"')) {
            defaultValue = defaultValueStr.slice(1, -1);
          } else if (defaultValueStr.includes(".")) {
            defaultValue = parseFloat(defaultValueStr);
          } else {
            defaultValue = parseInt(defaultValueStr);
          }
        }
        argNames.push(argName);
        defaultValues.push(defaultValue);
      }
    }
    return [fnName, argNames, defaultValues];
  }
  var MAX_ISA_RECURSION_DEPTH = 16;
  var _Processor = class _Processor2 {
    constructor(stdoutCallback, stderrCallback) {
      __publicField(this, "ip");
      __publicField(this, "opStack");
      __publicField(this, "code");
      __publicField(this, "context");
      __publicField(this, "forLoopContext");
      __publicField(this, "globalContext");
      __publicField(this, "intrinsicsMap");
      __publicField(this, "listCoreType");
      __publicField(this, "mapCoreType");
      __publicField(this, "stringCoreType");
      __publicField(this, "numberCoreType");
      __publicField(this, "funcRefCoreType");
      __publicField(this, "savedFrames");
      __publicField(this, "cycleCount");
      __publicField(this, "maxCount", 73681);
      __publicField(this, "onResumingExecution");
      __publicField(this, "onFinished");
      __publicField(this, "rndGenerator");
      __publicField(this, "executionStartTime");
      __publicField(this, "suspended", false);
      __publicField(this, "halted", false);
      __publicField(this, "maxCallStackDepth", 2e3);
      __publicField(this, "runAfterSuspended");
      __publicField(this, "lastValue");
      this.stdoutCallback = stdoutCallback;
      this.stderrCallback = stderrCallback;
      this.runAfterSuspended = true;
      this.code = new Code();
      this.ip = 0;
      this.globalContext = new Context(this);
      this.intrinsicsMap = /* @__PURE__ */ new Map();
      this.listCoreType = new MSMap(this);
      this.mapCoreType = new MSMap(this);
      this.stringCoreType = new MSMap(this);
      this.numberCoreType = new MSMap(this);
      this.funcRefCoreType = new MSMap(this);
      this.context = this.globalContext;
      this.forLoopContext = new ForLoopContext2();
      this.savedFrames = new Stack();
      this.opStack = new Stack();
      this.cycleCount = 0;
      this.onResumingExecution = () => {
      };
      this.onFinished = () => {
      };
      this.rndGenerator = newRandomGenerator();
      this.executionStartTime = 0;
      this.lastValue = void 0;
    }
    prepareForRunning(code, context = null, globalContext = null) {
      this.code = code;
      this.ip = 0;
      this.cycleCount = 0;
      if (globalContext !== null) {
        this.globalContext = globalContext;
      }
      if (context === null) {
        this.context = this.globalContext;
      } else {
        this.context = context;
      }
      this.savedFrames = new Stack();
      this.opStack = new Stack();
      this.suspended = false;
      this.halted = false;
      this.lastValue = void 0;
    }
    setRunAfterSuspended(flag) {
      this.runAfterSuspended = flag;
    }
    getLastValue() {
      return this.lastValue;
    }
    run() {
      this.executionStartTime = performance.now();
      this.runUntilDone();
    }
    addIntrinsic(signature, impl) {
      const [fnName, argNames, defaultValues] = parseSignature(signature);
      const intrinsicFn = this.makeIntrinsicFn(impl, argNames, defaultValues);
      this.intrinsicsMap.set(fnName, intrinsicFn);
    }
    addMapIntrinsic(target, signature, impl) {
      const [fnName, argNames, defaultValues] = parseSignature(signature);
      const intrinsicFn = this.makeIntrinsicFn(impl, argNames, defaultValues);
      target.set(fnName, intrinsicFn);
    }
    attachExistingIntrinsic(target, name, boundFunc) {
      target.set(name, boundFunc);
    }
    makeIntrinsicFn(impl, argNames = [], defaultValues = []) {
      const args = [];
      const argCount = impl.length;
      if (argNames.length !== argCount || argNames.length !== defaultValues.length) {
        throw new Error("Length mismatch in argument count! Check function signature.");
      }
      for (let argIdx = 0; argIdx < argCount; argIdx++) {
        const argName = argNames[argIdx];
        const defaultValue = defaultValues[argIdx];
        const arg = new FuncDefArg(argName, defaultValue);
        args.push(arg);
      }
      const funcDef = new FuncDef(args, impl);
      const boundFunc = new BoundFunction(funcDef, this.globalContext);
      return boundFunc;
    }
    newMap() {
      return new MSMap(this);
    }
    initRandomGenerator(seed) {
      this.rndGenerator = newRandomGenerator(seed);
    }
    random() {
      return this.rndGenerator();
    }
    runUntilDone() {
      this.runSomeCycles();
      if (this.isRunning()) {
        setTimeout(() => {
          this.runUntilDone();
        }, 0);
      }
    }
    runSomeCycles() {
      if (this.isRunning()) {
        try {
          this.executeCycles();
        } catch (e) {
          this.reportError(e);
          this.stopRunning();
          return;
        }
      }
      if (this.isFinished()) {
        this.cleanupAfterRunning();
      }
    }
    runOneCycle() {
      this.executeCycles(1);
    }
    reportError(e) {
      if (e instanceof RuntimeError) {
        e.setSourceLocation(this.getCurrentSrcFileName(), this.getCurrentSrcLineNr());
        const fileName = this.getCurrentSrcFileName();
        e.setSourceLocation(fileName, this.getCurrentSrcLineNr());
      }
      if (e["message"]) {
        this.stderrCallback(e.message);
      }
      console.error(e);
    }
    executeCycles(maxCount = null) {
      maxCount = maxCount !== null ? maxCount : this.maxCount;
      this.cycleCount = 0;
      while (this.cycleCount < maxCount) {
        if (this.ip >= this.code.opCodes.length) {
          break;
        }
        switch (this.code.opCodes[this.ip]) {
          case BC.CALL: {
            const funcName = this.code.arg1[this.ip];
            const paramCount = this.code.arg2[this.ip];
            const params = this.opStack.popN(paramCount);
            const optValue = this.context.getOpt(funcName);
            if (optValue === void 0) {
              throw new RuntimeError(`Could not resolve "${funcName}"`);
            }
            const resolvedFunc = optValue;
            this.performCall(resolvedFunc, params);
            break;
          }
          case BC.FUNCREF_CALL: {
            const paramCount = this.code.arg1[this.ip];
            const params = this.opStack.popN(paramCount);
            const maybeFuncRef = this.opStack.pop();
            this.performCall(maybeFuncRef, params);
            break;
          }
          case BC.PROPERTY_CALL: {
            const paramCount = this.code.arg1[this.ip];
            const params = this.opStack.popN(paramCount);
            const methodName = this.opStack.pop();
            const callTarget = this.opStack.pop();
            let srcMap = null;
            let resolvedMethod;
            if (callTarget instanceof MSMap) {
              [resolvedMethod, srcMap] = callTarget.getWithSource(methodName);
            } else {
              const baseTypeMap = this.selectCoreTypeMap(callTarget);
              resolvedMethod = baseTypeMap.get(methodName);
            }
            this.performCall(resolvedMethod, params, callTarget, srcMap);
            break;
          }
          case BC.RETURN: {
            if (this.savedFrames.count() > 0) {
              this.popFrame();
            } else {
              this.opStack.pop();
              this.ip += 1;
            }
            break;
          }
          case BC.ASSIGN_LOCAL: {
            const varName = this.code.arg1[this.ip];
            const valueToAssign = this.opStack.pop();
            this.context.setLocal(varName, valueToAssign);
            this.ip += 1;
            break;
          }
          case BC.ASSIGN_INDEXED: {
            const assignTarget = this.opStack.pop();
            const valueToAssign = this.opStack.pop();
            let index = this.opStack.pop();
            const isString = typeof assignTarget === "string";
            const isList = assignTarget instanceof Array;
            const isMap = assignTarget instanceof MSMap;
            if (isList) {
              const effectiveIndex = computeAccessIndex(assignTarget, index);
              assignTarget[effectiveIndex] = valueToAssign;
            } else if (isMap) {
              assignTarget.set(index, valueToAssign);
            } else if (isString) {
              throw new RuntimeError("Cannot assign to String (immutable)");
            } else {
              throw new RuntimeError("Cannot set to element of this type");
            }
            this.ip += 1;
            break;
          }
          case BC.DOT_ASSIGN: {
            const propertyName = this.code.arg1[this.ip];
            const assignTarget = this.opStack.pop();
            const valueToAssign = this.opStack.pop();
            if (!(assignTarget instanceof MSMap)) {
              throw new RuntimeError(`Assignment target must be a Map`);
            }
            assignTarget.set(propertyName, valueToAssign);
            this.ip += 1;
            break;
          }
          case BC.MATH_ASSIGN_LOCAL: {
            const varName = this.code.arg1[this.ip];
            const opTokenType = this.code.arg2[this.ip];
            const operand = this.opStack.pop();
            const existingValue = this.context.getOpt(varName);
            if (existingValue !== void 0) {
              const finalValue = computeMathAssignValue(this, existingValue, opTokenType, operand);
              this.context.setLocal(varName, finalValue);
            } else {
              throw new RuntimeError(`Undefined Local Identifier: '${varName}' is unknown in this context`);
            }
            this.ip += 1;
            break;
          }
          case BC.MATH_ASSIGN_INDEXED: {
            const opTokenType = this.code.arg1[this.ip];
            const operand = this.opStack.pop();
            let index = this.opStack.pop();
            const assignTarget = this.opStack.pop();
            const isString = typeof assignTarget === "string";
            const isList = assignTarget instanceof Array;
            const isMap = assignTarget instanceof MSMap;
            if (isList) {
              const effectiveIndex = computeAccessIndex(assignTarget, index);
              const currentValue = assignTarget[effectiveIndex];
              const finalValue = computeMathAssignValue(this, currentValue, opTokenType, operand);
              assignTarget[effectiveIndex] = finalValue;
            } else if (isMap) {
              const currentValue = assignTarget.get(index);
              const finalValue = computeMathAssignValue(this, currentValue, opTokenType, operand);
              assignTarget.set(index, finalValue);
            } else if (isString) {
              throw new RuntimeError("Cannot assign to String (immutable)");
            } else {
              throw new RuntimeError("Cannot set to element of this type");
            }
            this.ip += 1;
            break;
          }
          case BC.MATH_DOT_ASSIGN: {
            const propertyName = this.code.arg1[this.ip];
            const opTokenType = this.code.arg2[this.ip];
            const operand = this.opStack.pop();
            const assignTarget = this.opStack.pop();
            if (!(assignTarget instanceof MSMap)) {
              throw new RuntimeError(`Assignment target must be a Map`);
            }
            const currentValue = assignTarget.get(propertyName);
            const finalValue = computeMathAssignValue(this, currentValue, opTokenType, operand);
            assignTarget.set(propertyName, finalValue);
            this.ip += 1;
            break;
          }
          case BC.EVAL_ID: {
            const identifier = this.code.arg1[this.ip];
            const isFuncRef = this.code.arg2[this.ip];
            const optValue = this.context.getOpt(identifier);
            if (optValue !== void 0) {
              this.callOrPushValue(optValue, isFuncRef);
            } else {
              throw new RuntimeError(`Undefined Identifier: '${identifier}' is unknown in this context`);
            }
            break;
          }
          case BC.INDEXED_ACCESS: {
            const isFuncRef = this.code.arg1[this.ip];
            let index = this.opStack.pop();
            const accessTarget = this.opStack.pop();
            const isString = typeof accessTarget === "string";
            const isList = accessTarget instanceof Array;
            const isMap = accessTarget instanceof MSMap;
            let value;
            let srcMap = null;
            if (isList || isString) {
              if (typeof index === "number") {
                const effectiveIndex = computeAccessIndex(accessTarget, index);
                value = accessTarget[effectiveIndex];
              } else if (isList) {
                [value, srcMap] = this.listCoreType.getWithSource(index);
              } else if (isString) {
                [value, srcMap] = this.stringCoreType.getWithSource(index);
              } else {
                throw new Error("Uncovered case");
              }
            } else if (isMap) {
              [value, srcMap] = accessTarget.getWithSource(index);
            } else if (typeof index === "number") {
              throw new RuntimeError(`Null Reference Exception: can't index into null`);
            } else {
              throw new RuntimeError(`Type Error (while attempting to look up ${index})`);
            }
            this.callOrPushValue(value, isFuncRef, accessTarget, srcMap);
            break;
          }
          case BC.DOT_ACCESS: {
            const propertyName = this.code.arg1[this.ip];
            const isFuncRef = this.code.arg2[this.ip];
            const accessTarget = this.opStack.pop();
            let value;
            let srcMap;
            if (accessTarget instanceof MSMap) {
              [value, srcMap] = accessTarget.getWithSource(propertyName);
            } else if (accessTarget === null) {
              throw new RuntimeError(`Type Error (while attempting to look up ${propertyName})`);
            } else {
              srcMap = this.selectCoreTypeMap(accessTarget);
              value = srcMap.get(propertyName);
            }
            this.callOrPushValue(value, isFuncRef, accessTarget, srcMap);
            break;
          }
          case BC.SUPER_DOT_ACCESS: {
            const propertyName = this.code.arg1[this.ip];
            const isFuncRef = this.code.arg2[this.ip];
            const superMap = this.context.getOpt("super");
            const selfMap = this.context.getOpt("self");
            if (superMap === void 0) {
              throw new RuntimeError(`Undefined Identifier: 'super' is unknown in this context`);
            }
            if (selfMap === void 0) {
              throw new RuntimeError(`Undefined Identifier: 'self' is unknown in this context`);
            }
            let value;
            let srcMap = null;
            if (superMap instanceof MSMap) {
              [value, srcMap] = superMap.getWithSource(propertyName);
              if (value === void 0) {
                throw new RuntimeError(`Type Error (while attempting to look up ${propertyName})`);
              }
            } else if (superMap === null) {
              throw new RuntimeError(`Type Error (while attempting to look up ${propertyName})`);
            }
            this.callOrPushValue(value, isFuncRef, selfMap, srcMap);
            break;
          }
          case BC.SUPER_DOT_CALL: {
            const paramCount = this.code.arg1[this.ip];
            const superMap = this.context.getOpt("super");
            const selfMap = this.context.getOpt("self");
            if (superMap === void 0) {
              throw new RuntimeError(`Undefined Identifier: 'super' is unknown in this context`);
            }
            if (selfMap === void 0) {
              throw new RuntimeError(`Undefined Identifier: 'self' is unknown in this context`);
            }
            const params = this.opStack.popN(paramCount);
            const methodName = this.opStack.pop();
            let resolvedMethod;
            let srcMap = null;
            if (superMap instanceof MSMap) {
              [resolvedMethod, srcMap] = superMap.getWithSource(methodName);
              if (resolvedMethod === void 0) {
                throw new RuntimeError(`Type Error (while attempting to look up ${methodName})`);
              }
            } else if (superMap === null) {
              throw new RuntimeError(`Type Error (while attempting to look up ${methodName})`);
            }
            this.performCall(resolvedMethod, params, selfMap, srcMap);
            break;
          }
          case BC.SLICE_SEQUENCE: {
            const endIdx = this.opStack.pop();
            const startIdx = this.opStack.pop();
            const sliceTarget = this.opStack.pop();
            const newCollection = slice(this, sliceTarget, startIdx, endIdx);
            this.opStack.push(newCollection);
            this.ip += 1;
            break;
          }
          case BC.CHAINED_COMPARISON: {
            const pairCount = this.code.arg1[this.ip];
            const operators = this.opStack.popN(pairCount);
            const values = this.opStack.popN(pairCount + 1);
            const result = chainedComparison(values, operators);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.PUSH: {
            const value = this.code.arg1[this.ip];
            if (value instanceof FuncDef) {
              const boundFunction = new BoundFunction(value, this.context);
              this.opStack.push(boundFunction);
            } else {
              this.opStack.push(value);
            }
            this.ip += 1;
            break;
          }
          case BC.BUILD_LIST: {
            const elementCount = this.code.arg1[this.ip];
            const elements = this.opStack.popN(elementCount);
            this.opStack.push(elements);
            this.ip += 1;
            break;
          }
          case BC.BUILD_MAP: {
            const elementCount = this.code.arg1[this.ip];
            const elements = this.opStack.popN(elementCount * 2);
            const newMap = new MSMap(this);
            for (let i = 0; i < elements.length; i += 2) {
              const mapKey = elements[i];
              const mapValue = elements[i + 1];
              newMap.set(mapKey, mapValue);
            }
            this.opStack.push(newMap);
            this.ip += 1;
            break;
          }
          case BC.NEW_MAP: {
            const parentMap = this.opStack.pop();
            if (!(parentMap instanceof MSMap)) {
              throw new RuntimeError(`Operator "new" can only be used with Maps`);
            }
            const newMap = parentMap.newChildMap();
            this.opStack.push(newMap);
            this.ip += 1;
            break;
          }
          case BC.COMPARE_EQ: {
            const valueB = this.opStack.pop();
            const valueA = this.opStack.pop();
            const result = equals(valueA, valueB);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.COMPARE_NE: {
            const valueB = this.opStack.pop();
            const valueA = this.opStack.pop();
            if (!equals(valueA, valueB)) {
              this.opStack.push(1);
            } else {
              this.opStack.push(0);
            }
            this.ip += 1;
            break;
          }
          case BC.COMPARE_ISA: {
            const valueB = this.opStack.pop();
            const valueA = this.opStack.pop();
            const result = isaEquals(this, valueA, valueB);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.COMPARE_GE: {
            const valueB = this.opStack.pop();
            const valueA = this.opStack.pop();
            const result = greaterEquals(valueA, valueB);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.COMPARE_GT: {
            const valueB = this.opStack.pop();
            const valueA = this.opStack.pop();
            const result = greaterThan(valueA, valueB);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.COMPARE_LE: {
            const valueB = this.opStack.pop();
            const valueA = this.opStack.pop();
            const result = lessEquals(valueA, valueB);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.COMPARE_LT: {
            const valueB = this.opStack.pop();
            const valueA = this.opStack.pop();
            const result = lessThan(valueA, valueB);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.POP_JUMP_FALSE: {
            const jumpAddr = this.code.arg1[this.ip];
            let value = this.opStack.pop();
            value = toBooleanNr(value);
            if (value == 0) {
              this.ip = jumpAddr;
            } else {
              this.ip += 1;
            }
            break;
          }
          case BC.JUMP_IF_TRUE: {
            const jumpAddr = this.code.arg1[this.ip];
            let value = this.opStack.peek();
            value = toBooleanNr(value);
            if (value == 1) {
              this.ip = jumpAddr;
            } else {
              this.ip += 1;
            }
            break;
          }
          case BC.JUMP_IF_FALSE: {
            const jumpAddr = this.code.arg1[this.ip];
            let value = this.opStack.peek();
            value = toBooleanNr(value);
            if (value == 0) {
              this.ip = jumpAddr;
            } else {
              this.ip += 1;
            }
            break;
          }
          case BC.ADD_VALUES: {
            const valueInStack_2 = this.opStack.pop();
            const valueInStack_1 = this.opStack.pop();
            const result = add(this, valueInStack_1, valueInStack_2);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.SUBTRACT_VALUES: {
            const valueInStack_2 = this.opStack.pop();
            const valueInStack_1 = this.opStack.pop();
            const result = subtract(valueInStack_1, valueInStack_2);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.MULTIPLY_VALUES: {
            const valueInStack_2 = this.opStack.pop();
            const valueInStack_1 = this.opStack.pop();
            const result = multiply(valueInStack_1, valueInStack_2);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.DIVIDE_VALUES: {
            const valueInStack_2 = this.opStack.pop();
            const valueInStack_1 = this.opStack.pop();
            const result = divide(valueInStack_1, valueInStack_2);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.POWER_VALUES: {
            const valueInStack_2 = this.opStack.pop();
            const valueInStack_1 = this.opStack.pop();
            const result = power(valueInStack_1, valueInStack_2);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.MOD_VALUES: {
            const valueInStack_2 = this.opStack.pop();
            const valueInStack_1 = this.opStack.pop();
            const result = modulus(valueInStack_1, valueInStack_2);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.LOGIC_AND_VALUES: {
            const valueInStack_2 = this.opStack.pop();
            const valueInStack_1 = this.opStack.pop();
            const result = logic_and(valueInStack_1, valueInStack_2);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.LOGIC_OR_VALUES: {
            const valueInStack_2 = this.opStack.pop();
            const valueInStack_1 = this.opStack.pop();
            const result = logic_or(valueInStack_1, valueInStack_2);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.SUBTR_N: {
            const valueToSubtract = this.code.arg1[this.ip];
            const valueInStack = this.opStack.pop();
            const result = subtract(valueInStack, valueToSubtract);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.DIVIDE_N: {
            const dividend = this.code.arg1[this.ip];
            const valueInStack = this.opStack.pop();
            const result = divide(valueInStack, dividend);
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.NEGATE_BOOLEAN: {
            const valueInStack = this.opStack.pop();
            const booleanNr = toBooleanNr(valueInStack);
            const result = booleanNr == 0 ? 1 : 0;
            this.opStack.push(result);
            this.ip += 1;
            break;
          }
          case BC.NEGATE_NUMBER: {
            const valueInStack = this.opStack.pop();
            if (typeof valueInStack !== "number") {
              throw new RuntimeError(`Value must be a number`);
            } else {
              const result = -1 * valueInStack;
              this.opStack.push(result);
              this.ip += 1;
              break;
            }
          }
          case BC.JUMP: {
            this.ip = this.code.arg1[this.ip];
            break;
          }
          case BC.POP: {
            if (this.opStack.lastValueUndefined) {
              this.opStack.pop();
              this.lastValue = void 0;
            } else {
              this.lastValue = this.opStack.pop();
            }
            this.ip += 1;
            break;
          }
          case BC.CREATE_FOR_LOOP: {
            const forLoopNr = this.code.arg1[this.ip];
            const startAddr = this.opStack.pop();
            const endAddr = this.opStack.pop();
            const values = this.opStack.pop();
            const localVarName = this.opStack.pop();
            const forLoop = new ForLoop(this, startAddr, endAddr, localVarName, values);
            this.forLoopContext.registerForLoop(forLoopNr, forLoop);
            this.ip += 1;
            break;
          }
          case BC.ITERATE_FOR_LOOP: {
            const forLoopNr = this.code.arg1[this.ip];
            const forLoop = this.forLoopContext.getForLoop(forLoopNr);
            if (forLoop.isOver()) {
              this.ip = forLoop.endAddr;
              this.forLoopContext.deleteForLoop(forLoopNr);
            } else {
              const value = forLoop.iterate();
              this.context.setLocal(forLoop.localVarName, value);
              this.ip += 1;
            }
            break;
          }
          case BC.BREAK_FOR_LOOP: {
            const forLoopNr = this.code.arg1[this.ip];
            const forLoop = this.forLoopContext.getForLoop(forLoopNr);
            this.forLoopContext.deleteForLoop(forLoopNr);
            this.ip = forLoop.endAddr;
            break;
          }
          case BC.CONTINUE_FOR_LOOP: {
            const forLoopNr = this.code.arg1[this.ip];
            const forLoop = this.forLoopContext.getForLoop(forLoopNr);
            this.ip = forLoop.startAddr;
            break;
          }
          case BC.PRINT_TOP: {
            const value = this.opStack.pop();
            console.log("Value: " + value);
            this.ip += 1;
            break;
          }
          default: {
            console.log("ip:", this.ip);
            console.error("Bytecode not supported: ", this.code.opCodes[this.ip]);
            throw new RuntimeError("Bytecode not supported: " + this.code.opCodes[this.ip]);
          }
        }
        this.cycleCount++;
      }
    }
    // executeCycles
    isRunning() {
      return !this.isFinished() && !this.isSuspended();
    }
    isFinished() {
      return this.ip >= this.code.opCodes.length;
    }
    isSuspended() {
      return this.suspended;
    }
    stopRunning() {
      this.forceFinish();
      this.cleanupAfterRunning();
    }
    forceFinish() {
      this.opStack.clear();
      this.cycleCount = this.maxCount;
      this.ip = this.code.opCodes.length;
      this.halted = true;
    }
    cleanupAfterRunning() {
      if (this.opStack.count() > 0 && !this.halted) {
        console.info("Stack: ", this.opStack);
        throw new RuntimeError("Stack was not empty!");
      }
      this.onFinished();
    }
    runAtCurrentPosition(code) {
      const promise = new Promise((resolve) => {
        const previousState = new ProcessorState(this);
        const currentContext = this.context;
        const currentGlobalContext = this.globalContext;
        ProcessorState.resetState(this);
        this.prepareForRunning(code, currentContext, currentGlobalContext);
        this.onFinished = () => {
          if (!this.halted) {
            previousState.restoreState(this);
          } else {
            this.onFinished = previousState.onFinished;
          }
          resolve();
        };
        this.runUntilDone();
      });
      return promise;
    }
    yieldExecution() {
      this.cycleCount = this.maxCount;
      this.suspended = false;
    }
    suspendExecution() {
      this.cycleCount = this.maxCount;
      this.suspended = true;
    }
    resumeExecution() {
      if (!this.suspended) {
        return;
      }
      this.suspended = false;
      if (this.runAfterSuspended) {
        this.runUntilDone();
      }
      this.onResumingExecution();
    }
    couldResultInCall() {
      const op = this.code.opCodes[this.ip];
      const result = hasCallPotential(op);
      return result;
    }
    pushFrame() {
      const frame = new Frame(this.code, this.ip, this.context, this.forLoopContext);
      this.savedFrames.push(frame);
      if (this.savedFrames.count() > this.maxCallStackDepth) {
        throw new RuntimeError("Call stack too deep");
      }
    }
    popFrame() {
      const frame = this.savedFrames.pop();
      this.ip = frame.ip;
      this.context = frame.context;
      this.forLoopContext = frame.forLoopContext;
      this.code = frame.code;
    }
    getCurrentSrcLineNr() {
      const optSrcMapEntry = this.code.srcMap.findEntry(this.ip);
      if (optSrcMapEntry !== null) {
        return optSrcMapEntry.srcLoc.start.row;
      } else {
        return void 0;
      }
    }
    getCurrentSrcFileName() {
      const srcFile = this.code.srcMap.srcFile;
      return srcFile;
    }
    selectCoreTypeMap(accessTarget) {
      if (accessTarget instanceof Array) {
        return this.listCoreType;
      } else if (typeof accessTarget === "string") {
        return this.stringCoreType;
      } else if (accessTarget instanceof MSMap) {
        return this.mapCoreType;
      } else if (typeof accessTarget === "number") {
        return this.numberCoreType;
      } else {
        throw new RuntimeError(`No core-type map for value ${accessTarget}`);
      }
    }
    resolveIntrinsic(identifier) {
      const optIntrinsicFn = this.intrinsicsMap.get(identifier);
      return optIntrinsicFn;
    }
    callOrPushValue(value, isFuncRef, accessSrc = void 0, srcMap = null) {
      if (value instanceof BoundFunction && !isFuncRef) {
        this.performCall(value, [], accessSrc, srcMap);
      } else {
        this.opStack.push(value);
        this.ip += 1;
      }
    }
    performCall(maybeFunction, paramValues, dotCallTarget = void 0, srcMap = null) {
      const paramCount = paramValues.length;
      if (!(maybeFunction instanceof BoundFunction)) {
        if (paramCount > 0) {
          throw new RuntimeError(`Too Many Arguments`);
        } else {
          throw new RuntimeError(`Attempting to call a non-function`);
        }
      }
      const boundFunc = maybeFunction;
      const funcDef = boundFunc.funcDef;
      let funcArgCount = funcDef.argNames.length;
      let isNativeSelfFunction = funcDef.isNative() && dotCallTarget !== void 0 && funcDef.argNames.length > 0 && funcDef.argNames[0] === "self";
      if (isNativeSelfFunction) {
        funcArgCount -= 1;
      }
      if (paramCount > funcArgCount) {
        throw new RuntimeError(`Too many parameters calling function.`);
      } else if (paramCount < funcArgCount) {
        const missingArgCount = funcArgCount - paramCount;
        const defaultValues = funcDef.getLastNEffectiveDefaultValues(missingArgCount);
        for (let value of defaultValues) {
          paramValues.push(value);
        }
      }
      if (funcDef.isNative()) {
        const func = funcDef.getFunction();
        if (isNativeSelfFunction) {
          paramValues.unshift(dotCallTarget);
        }
        const retVal = func.apply(this, paramValues);
        if (retVal === _Processor2.abortCallValue) {
          return;
        }
        if (retVal instanceof Promise) {
          this.suspendUntilPromiseResolved(retVal);
        } else {
          this.opStack.push(retVal);
          this.ip += 1;
        }
      } else {
        this.ip += 1;
        this.pushFrame();
        this.code = funcDef.getCode();
        this.context = new Context(this, boundFunc.context);
        this.forLoopContext = new ForLoopContext2();
        this.ip = 0;
        let argNames = funcDef.argNames;
        if (dotCallTarget !== void 0) {
          argNames = argNames.filter((n) => n !== "self");
        }
        for (let i = 0; i < argNames.length; i++) {
          const argName = argNames[i];
          const paramValue = paramValues[i];
          this.context.setLocal(argName, paramValue);
        }
        if (dotCallTarget !== void 0) {
          this.context.setLocal("self", dotCallTarget);
          if (srcMap !== null) {
            if (srcMap.hasParent()) {
              const isaMap = srcMap.parentMap();
              this.context.setLocal("super", isaMap);
            }
          }
        }
      }
    }
    suspendUntilPromiseResolved(promise) {
      this.suspendExecution();
      promise.then((retVal) => {
        this.opStack.push(retVal);
        this.ip += 1;
        this.resumeExecution();
      });
    }
  };
  __publicField(_Processor, "abortCallValue", {});
  var Processor = _Processor;
  var MSMap = class _MSMap {
    constructor(vm) {
      __publicField(this, "mapObj");
      __publicField(this, "valueSetOverrides");
      this.vm = vm;
      this.mapObj = new HashMap();
      this.valueSetOverrides = null;
    }
    get(key) {
      const result = this.getOpt(key);
      if (result === void 0) {
        throw new RuntimeError(`Key Not Found: '${key}' not found in map`);
      } else {
        return result;
      }
    }
    getOpt(key, depth = 0) {
      if (depth > MAX_ISA_RECURSION_DEPTH) {
        throw new RuntimeError(`__isa depth exceeded (perhaps a reference loop?)`);
      }
      if (this.mapObj.has(key)) {
        return this.mapObj.get(key);
      } else if (this.hasParent()) {
        return this.parentMap().getOpt(key, depth + 1);
      } else if (this === this.vm.mapCoreType) {
        return void 0;
      } else {
        return this.vm.mapCoreType.getOpt(key, depth + 1);
      }
    }
    getWithSource(key, depth = 0) {
      if (depth > MAX_ISA_RECURSION_DEPTH) {
        throw new RuntimeError(`__isa depth exceeded (perhaps a reference loop?)`);
      }
      if (this.mapObj.has(key)) {
        return [this.mapObj.get(key), this];
      } else if (this.hasParent()) {
        return this.parentMap().getWithSource(key, depth + 1);
      } else if (this === this.vm.mapCoreType) {
        throw new RuntimeError(`Key Not Found: '${key}' not found in map`);
      } else {
        return this.vm.mapCoreType.getWithSource(key, depth + 1);
      }
    }
    size() {
      return this.mapObj.size();
    }
    // Creates a sub-map / instance, having this
    // as its isa-parent.
    newChildMap() {
      const newMap = new _MSMap(this.vm);
      newMap.set("__isa", this);
      return newMap;
    }
    hasParent() {
      return this.mapObj.has("__isa");
    }
    parentMap() {
      const result = this.mapObj.get("__isa");
      if (result instanceof _MSMap) {
        return result;
      } else {
        throw new RuntimeError("No parent map. Always check first with hasParent()");
      }
    }
    // Makes it possible to execute an action before attempting
    // to set a new value and even change the value to be set.
    overrideSettingValue(key, callback) {
      if (this.valueSetOverrides === null) {
        this.valueSetOverrides = /* @__PURE__ */ new Map();
      }
      this.valueSetOverrides.set(key, callback);
    }
    removeSettingValueOverride(key) {
      if (this.valueSetOverrides instanceof Map) {
        this.valueSetOverrides.delete(key);
      }
    }
    set(key, value) {
      if (this.valueSetOverrides !== null) {
        const overrideFunction = this.valueSetOverrides.get(key);
        if (overrideFunction instanceof Function) {
          value = overrideFunction(value);
        }
      }
      this.mapObj.set(key, value);
    }
    has(key) {
      return this.mapObj.has(key);
    }
    delete(key) {
      this.mapObj.delete(key);
    }
    keys() {
      return this.mapObj.keys();
    }
    values() {
      return this.mapObj.values();
    }
    entries() {
      return this.mapObj.entries();
    }
    isaEquals(type) {
      if (type === this.vm.mapCoreType) {
        return 1;
      } else {
        let p = null;
        p = this.getOpt("__isa");
        while (p != null) {
          if (p === type) {
            return 1;
          }
          if (!(p instanceof _MSMap)) {
            return 0;
          } else {
            p = p.getOpt("__isa");
          }
        }
        return 0;
      }
    }
    toJSMap(depth = 16) {
      return this.mapObj.toMap(depth);
    }
  };
  var RuntimeError = class extends Error {
    constructor(baseMsg) {
      super(`Runtime Error: ${baseMsg}`);
      this.baseMsg = baseMsg;
    }
    setSourceLocation(fileName, lineNr) {
      let location;
      if (fileName !== void 0 && lineNr !== void 0) {
        location = ` [${fileName} line ${lineNr}]`;
      } else if (lineNr !== void 0) {
        location = ` [line ${lineNr}]`;
      } else {
        location = "";
      }
      const msg = `Runtime Error: ${this.baseMsg}${location}`;
      this.message = msg;
    }
  };
  function notEquals(a, b) {
    return equals(a, b) == 1 ? 0 : 1;
  }
  function equals(a, b, recursionDepth = 16) {
    if (recursionDepth < 0) {
      return 1;
    }
    if (a instanceof Array && b instanceof Array) {
      if (a.length !== b.length) {
        return 0;
      } else {
        for (let i = 0; i < a.length; i++) {
          if (a[i] === b[i]) {
            continue;
          }
          if (equals(a[i], b[i], recursionDepth - 1) === 0) {
            return 0;
          }
        }
        return 1;
      }
    } else if (a instanceof MSMap && b instanceof MSMap) {
      if (a.size() !== b.size()) {
        return 0;
      } else {
        for (let aKey of a.keys()) {
          if (!b.has(aKey)) {
            return 0;
          }
          const aValue = a.get(aKey);
          const bValue = b.get(aKey);
          if (equals(aValue, bValue, recursionDepth - 1)) {
            continue;
          } else if (equals(aValue, bValue, recursionDepth - 1) !== 1) {
            return 0;
          }
        }
        return 1;
      }
    } else {
      return a === b ? 1 : 0;
    }
  }
  function isaEquals(vm, value, type) {
    if (value === null) {
      return type === null ? 1 : 0;
    } else if (type === null) {
      return 0;
    } else if (typeof value === "number") {
      return type === vm.numberCoreType ? 1 : 0;
    } else if (typeof value === "string") {
      return type === vm.stringCoreType ? 1 : 0;
    } else if (value instanceof Array) {
      return type === vm.listCoreType ? 1 : 0;
    } else if (value instanceof MSMap) {
      return value.isaEquals(type);
    } else if (value instanceof BoundFunction) {
      return type === vm.funcRefCoreType ? 1 : 0;
    } else {
      return 0;
    }
  }
  function greaterEquals(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a >= b ? 1 : 0;
    } else if (typeof a === "string" && typeof b === "string") {
      return a >= b ? 1 : 0;
    } else {
      return null;
    }
  }
  function greaterThan(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a > b ? 1 : 0;
    } else if (typeof a === "string" && typeof b === "string") {
      return a > b ? 1 : 0;
    } else {
      return null;
    }
  }
  function lessEquals(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a <= b ? 1 : 0;
    } else if (typeof a === "string" && typeof b === "string") {
      return a <= b ? 1 : 0;
    } else {
      return null;
    }
  }
  function lessThan(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a < b ? 1 : 0;
    } else if (typeof a === "string" && typeof b === "string") {
      return a < b ? 1 : 0;
    } else {
      return null;
    }
  }
  function chainedComparison(values, operators) {
    const pairCount = operators.length;
    for (let i = 0; i < pairCount; i++) {
      const operator = operators[i];
      const left = values[i];
      const right = values[i + 1];
      let result;
      if (operator === "==") {
        result = equals(left, right);
      } else if (operator === "!=") {
        result = notEquals(left, right);
      } else if (operator === ">") {
        result = greaterThan(left, right);
      } else if (operator === ">=") {
        result = greaterEquals(left, right);
      } else if (operator === "<") {
        result = lessThan(left, right);
      } else if (operator === "<=") {
        result = lessEquals(left, right);
      } else {
        throw new RuntimeError("Invalid operator");
      }
      if (!result) {
        return 0;
      }
    }
    return 1;
  }
  function add(mapFactory, a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else if (typeof a === "string" || typeof b === "string") {
      return toStr(a) + toStr(b);
    } else if (a instanceof Array) {
      if (b instanceof Array) {
        return a.concat(b);
      } else {
        throw new RuntimeError(`Got ${b} instead of another List`);
      }
    } else if (a instanceof MSMap) {
      if (b instanceof MSMap) {
        const combined = mapFactory.newMap();
        for (let e of a.entries()) {
          combined.set(e.key, e.value);
        }
        for (let e of b.entries()) {
          combined.set(e.key, e.value);
        }
        return combined;
      } else {
        throw new RuntimeError(`Got ${toStr(b)} where a Map was required`);
      }
    } else if (a === null) {
      return null;
    } else if (typeof a === "number" && b === null) {
      return a;
    } else {
      console.info("Not supported for values", "a:", a, "b:", b);
      throw new RuntimeError(`Cannot add ${formatValue(a, true)} + ${formatValue(b, true)}`);
    }
  }
  function subtract(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else if (typeof a === "string" && typeof b === "string") {
      const suffixIdx = a.lastIndexOf(b);
      const matchIdx = a.length - b.length;
      if (suffixIdx >= 0 && suffixIdx == matchIdx) {
        return a.substring(0, suffixIdx);
      } else {
        return a;
      }
    } else if (a === null) {
      return null;
    } else if (typeof a === "number" && b === null) {
      return a;
    } else {
      console.info("Not supported for values", "a:", a, "b:", b);
      throw new RuntimeError(`Cannot subtract ${formatValue(a, true)} - ${formatValue(b, true)}`);
    }
  }
  function divide(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a / b;
    } else if (a === null) {
      return null;
    } else if (typeof a === "number" && b === null) {
      return a / 0;
    } else {
      console.info("Not supported for values", "a:", a, "b:", b);
      throw new RuntimeError(`Cannot divide ${formatValue(a, true)} / ${formatValue(b, true)}`);
    }
  }
  function multiply(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    } else if (a instanceof Array || typeof a === "string") {
      if (typeof b === "number") {
        let result = typeof a === "string" ? "" : new Array();
        if (b > 0) {
          const repetitionCount = Math.floor(b);
          for (let i = 0; i < repetitionCount; i++) {
            result = result.concat(a);
          }
          const additionalElementsSliceEnd = Math.floor(b % 1 * a.length);
          const additionalElements = a.slice(0, additionalElementsSliceEnd);
          result = result.concat(additionalElements);
        }
        return result;
      } else {
        throw new RuntimeError(`Number required for replication. Got ${b} instead.`);
      }
    } else if (a === null) {
      return null;
    } else if (typeof a === "number" && b === null) {
      return 0;
    } else {
      console.error("Not supported for values", "a:", a, "b:", b);
      throw new RuntimeError(`Cannot multiply ${formatValue(a, true)} * ${formatValue(b, true)}`);
    }
  }
  function power(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return Math.pow(a, b);
    } else if (a === null) {
      return null;
    } else if (typeof a === "number" && b === null) {
      return 1;
    } else {
      console.info("Not supported for values", "a:", a, "b:", b);
      throw new RuntimeError(`Cannot raise to the power ${formatValue(a, true)} ^ ${formatValue(b, true)}`);
    }
  }
  function modulus(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a % b;
    } else if (a === null) {
      return null;
    } else if (typeof a === "number" && b === null) {
      return a % 0;
    } else {
      console.info("Not supported for values", "a:", a, "b:", b);
      throw new RuntimeError(`Cannot perform modulus ${formatValue(a, true)} % ${formatValue(b, true)}`);
    }
  }
  function logic_and(a, b) {
    a = toBooleanNr(a);
    b = toBooleanNr(b);
    if (typeof a === "number" && typeof b === "number") {
      return absClamp01(a * b);
    } else {
      console.info("Not supported for values", "a:", a, "b:", b);
      throw new RuntimeError(`Cannot perform ${formatValue(a, true)} && ${formatValue(b, true)}`);
    }
  }
  function logic_or(a, b) {
    a = toBooleanNr(a);
    b = toBooleanNr(b);
    if (typeof a === "number" && typeof b === "number") {
      return absClamp01(a + b - a * b);
    } else {
      console.info("Not supported for values", "a:", a, "b:", b);
      throw new RuntimeError(`Cannot perform ${formatValue(a, true)} || ${formatValue(b, true)}`);
    }
  }
  function absClamp01(value) {
    if (value < 0)
      value = -value;
    if (value > 1)
      return 1;
    return value;
  }
  function slice(vm, sliceTarget, startIdx, endIdx) {
    if (!(sliceTarget instanceof Array || typeof sliceTarget === "string")) {
      throw new RuntimeError(`Slice target must be List or String [line ${vm.getCurrentSrcLineNr()}]`);
    }
    if (startIdx !== null) {
      checkInt(startIdx, `Slice-start should be an integer value [line ${vm.getCurrentSrcLineNr()}]`);
      startIdx = computeSliceIndex(sliceTarget, startIdx);
    } else {
      startIdx = 0;
    }
    if (endIdx !== null) {
      checkInt(endIdx, `Slice-end should be an integer value [line ${vm.getCurrentSrcLineNr()}]`);
      endIdx = computeSliceIndex(sliceTarget, endIdx);
    } else {
      endIdx = sliceTarget.length;
    }
    const newCollection = sliceTarget.slice(startIdx, endIdx);
    return newCollection;
  }
  function computeAccessIndex(accessTarget, index) {
    const intIdx = toIntegerValue(index);
    const effectiveIndex = intIdx < 0 ? intIdx + accessTarget.length : intIdx;
    if (effectiveIndex < 0 || effectiveIndex >= accessTarget.length) {
      throw new RuntimeError(`Index Error (list index ${index} out of range)`);
    }
    return effectiveIndex;
  }
  function computeSliceIndex(accessTarget, index) {
    const effectiveIndex = index < 0 ? index + accessTarget.length : index;
    if (effectiveIndex < 0) {
      return 0;
    } else if (effectiveIndex >= accessTarget.length) {
      return accessTarget.length;
    }
    return effectiveIndex;
  }
  function computeMathAssignValue(mapFactory, currentValue, opTokenType, operand) {
    switch (opTokenType) {
      case TokenType.PLUS_ASSIGN:
        return add(mapFactory, currentValue, operand);
      case TokenType.MINUS_ASSIGN:
        return subtract(currentValue, operand);
      case TokenType.DIV_ASSIGN:
        return divide(currentValue, operand);
      case TokenType.MULT_ASSIGN:
        return multiply(currentValue, operand);
      case TokenType.MOD_ASSIGN:
        return modulus(currentValue, operand);
      case TokenType.POW_ASSIGN:
        return power(currentValue, operand);
      default:
        throw new RuntimeError("Invalid token-type: " + TokenType[opTokenType]);
    }
  }
  function toBooleanNr(value) {
    if (value === null) {
      return 0;
    } else if (typeof value == "number") {
      return value;
    } else if (value instanceof Array) {
      return value.length;
    } else if (typeof value === "string") {
      return value.length > 0 ? 1 : 0;
    } else if (value instanceof MSMap) {
      return value.size() > 0 ? 1 : 0;
    } else {
      throw new RuntimeError("Type not supported: " + value);
    }
  }
  function toStr(a) {
    if (typeof a === "number") {
      return "" + a;
    } else if (typeof a === "string") {
      return a;
    } else {
      return formatValue(a);
    }
  }
  function toNumberValue(value) {
    if (typeof value === "number") {
      return value;
    } else {
      return 0;
    }
  }
  function toIntegerValue(value) {
    if (typeof value == "number") {
      return Math.trunc(value);
    } else {
      return 0;
    }
  }
  function round(n, decimalPlaces) {
    if (typeof n === "number" && typeof decimalPlaces === "number") {
      if (decimalPlaces >= 0) {
        const places = Math.pow(10, decimalPlaces);
        return Math.round(n * places) / places;
      } else {
        const pow10Nr = Math.pow(10, -decimalPlaces);
        return Math.round(n / pow10Nr) * pow10Nr;
      }
    } else {
      return void 0;
    }
  }
  function hashCode(value, recursionDepth = 16) {
    if (value === null) {
      return -1;
    } else if (value instanceof Array) {
      return listHashCode(value, recursionDepth - 1);
    } else if (value instanceof MSMap) {
      return mapHashCode(value, recursionDepth - 1);
    } else {
      const valueStr = toStr(value);
      return stringHashCode(valueStr);
    }
  }
  function listHashCode(list, recursionDepth = 16) {
    let result = hashCode(list.length);
    if (recursionDepth < 1) {
      return result;
    }
    for (let i = 0; i < list.length; i++) {
      const value = list[i];
      if (value != null) {
        result ^= hashCode(value, recursionDepth - 1);
      }
    }
    return result;
  }
  function mapHashCode(map, recursionDepth = 16) {
    let result = stringHashCode(toStr(map.size));
    if (recursionDepth < 0) {
      return result;
    }
    for (let { key, value } of map.entries()) {
      result ^= hashCode(key, recursionDepth - 1);
      if (value != null) {
        result ^= hashCode(value, recursionDepth - 1);
      }
    }
    return result;
  }
  function stringHashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  }
  function getRandomInt(vm, max) {
    return Math.floor(vm.random() * max);
  }
  function checkRange(i, min, max, desc = "index") {
    if (i < min || i > max) {
      throw new RuntimeError(`Index Error: ${desc} (${i}) out of range (${min} to ${max})`);
    }
  }
  function checkNumber(arg, errorMsg, vm = null) {
    if (Number.isFinite(arg)) {
      return;
    } else if (vm instanceof Processor) {
      throw new RuntimeError(errorMsg);
    } else {
      throw new RuntimeError(errorMsg);
    }
  }
  function checkInt(arg, errorMsg, vm = null) {
    if (Number.isInteger(arg)) {
      return;
    } else if (vm instanceof Processor) {
      throw new RuntimeError(errorMsg);
    } else {
      throw new RuntimeError(errorMsg);
    }
  }
  function isNullOrEmpty(str) {
    if (str === null) {
      return true;
    } else if (typeof str === "string") {
      return str === "";
    } else {
      throw new RuntimeError("Invalid argument: " + str);
    }
  }
  function formatValue(value, quoteStrings = false, depth = 16) {
    let text = "";
    if (typeof value === "number") {
      text = formatNumber(value);
    } else if (value instanceof Array) {
      if (depth < 0) {
        return "[ a List ]";
      }
      const formattedValues = [];
      for (const e of value) {
        formattedValues.push(formatValue(e, true, depth - 12));
      }
      text = "[" + formattedValues.join(", ") + "]";
    } else if (value instanceof MSMap) {
      if (depth < 0) {
        return "{ a Map }";
      }
      const formattedPairs = [];
      for (let e of value.entries()) {
        const formattedKey = formatValue(e.key, true, depth - 15);
        const formattedValue = formatValue(e.value, true, depth - 14);
        const formattedPair = formattedKey + ": " + formattedValue;
        formattedPairs.push(formattedPair);
      }
      text = "{" + formattedPairs.join(", ") + "}";
    } else if (typeof value === "string" && quoteStrings) {
      text = '"' + value + '"';
    } else if (typeof value === "boolean") {
      return value ? "1" : "0";
    } else if (value instanceof BoundFunction) {
      const formattedArgs = [];
      for (let arg of value.funcDef.arguments) {
        if (arg.defaultValue !== void 0) {
          formattedArgs.push(`${arg.name}=${arg.defaultValue}`);
        } else {
          formattedArgs.push(`${arg.name}`);
        }
      }
      const joinedArgs = formattedArgs.join(", ");
      return `FUNCTION(${joinedArgs})`;
    } else {
      text = "" + value;
    }
    return text;
  }
  function formatNumber(value) {
    const isFloat = !Number.isInteger(value) && Number.isFinite(value);
    let text = "";
    if (isFloat) {
      if (value > 1e10 || value < -1e10 || value < 1e-6 && value > -1e-6) {
        text = value.toExponential(6);
        text = text.replace(/[eE]([-+])(\d)$/, "E$10$2");
      } else {
        text = "" + (round(value, 6) || 0);
      }
    } else {
      text = value.toString();
    }
    return text;
  }
  function addBitOperationIntrinsics(p) {
    p.addIntrinsic(
      "bitAnd(i=0,j=0)",
      function(i, j) {
        i = toIntegerValue(i);
        j = toIntegerValue(j);
        return i & j;
      }
    );
    p.addIntrinsic(
      "bitOr(i=0,j=0)",
      function(i, j) {
        i = toIntegerValue(i);
        j = toIntegerValue(j);
        return i | j;
      }
    );
    p.addIntrinsic(
      "bitXor(i=0,j=0)",
      function(i, j) {
        i = toIntegerValue(i);
        j = toIntegerValue(j);
        return i ^ j;
      }
    );
  }
  function addCharIntrinsics(p) {
    p.addIntrinsic(
      "code(self)",
      function(x) {
        if (x !== null) {
          const s = toStr(x);
          if (x === "") {
            return null;
          }
          const result = s.charCodeAt(0);
          return result;
        } else {
          return 0;
        }
      }
    );
    p.addIntrinsic(
      "char(n)",
      function(x) {
        if (typeof x === "number" && x > 0) {
          const s = String.fromCharCode(x);
          return s;
        }
        return String.fromCharCode(0);
      }
    );
  }
  function addCollectionIntrinsics(p) {
    p.addIntrinsic(
      "range(start,stop,step=null)",
      function(start, stop, step) {
        start = toNumberValue(start);
        stop = toNumberValue(stop);
        const result = [];
        if (start === stop) {
          return [start];
        } else if (start < stop) {
          step = step === null ? 1 : step;
          checkNumber(step, "Argument 'step' should be a number", p);
          if (step <= 0) {
            return new Array();
          }
          for (let i = start; i <= stop; i += step) {
            result.push(i);
          }
        } else {
          step = step === null ? -1 : step;
          checkNumber(step, "Argument 'step' should be a number", p);
          if (step >= 0) {
            return new Array();
          }
          for (let i = start; i >= stop; i += step) {
            result.push(i);
          }
        }
        return result;
      }
    );
    p.addIntrinsic(
      "len(self)",
      function(self) {
        if (self instanceof Array || typeof self === "string") {
          return self.length;
        } else if (self instanceof MSMap) {
          return self.size();
        } else {
          return null;
        }
      }
    );
    p.addIntrinsic(
      "sum(self)",
      function(self) {
        let list;
        if (self instanceof Array) {
          list = self;
        } else if (self instanceof MSMap) {
          list = Array.from(self.values());
        } else {
          return 0;
        }
        let total = 0;
        for (let e of list) {
          total += toNumberValue(e);
        }
        return total;
      }
    );
    p.addIntrinsic(
      "insert(self,index,value)",
      function(self, index, value) {
        if (index === null) {
          throw new RuntimeError("index argument required");
        }
        if (typeof index !== "number") {
          throw new RuntimeError("number required for index argument");
        }
        index = toIntegerValue(index);
        if (index < 0) {
          index += self.length + 1;
        }
        checkRange(index, 0, self.length);
        if (self instanceof Array) {
          self.splice(index, 0, value);
        } else if (typeof self === "string") {
          const valueStr = toStr(value);
          const result = [self.slice(0, index), valueStr, self.slice(index)].join("");
          return result;
        } else {
          throw new RuntimeError("insert called on an invalid type");
        }
      }
    );
    p.addIntrinsic(
      "remove(self,k)",
      function(self, k) {
        if (self instanceof MSMap) {
          if (self.has(k)) {
            self.delete(k);
            return 1;
          } else {
            return 0;
          }
        } else if (self instanceof Array) {
          if (k == null) {
            throw new RuntimeError("argument to 'remove' must not be null");
          }
          let index = toIntegerValue(k);
          if (index < 0) {
            index += self.length;
          }
          checkRange(index, 0, self.length - 1);
          self.splice(index, 1);
          return null;
        } else if (typeof self === "string") {
          if (k == null) {
            throw new RuntimeError("argument to 'remove' must not be null");
          }
          const s = toStr(k);
          const foundPos = s.indexOf(k);
          if (foundPos < 0) {
            return self;
          }
          const result = self.replace(k, "");
          return result;
        }
        throw new RuntimeError("Type Error: 'remove' requires map, list, or string");
      }
    );
    p.addIntrinsic(
      "replace(self,oldVal,newVal,maxCount=null)",
      function(self, oldVal, newVal, maxCountVal) {
        if (self === null) {
          throw new RuntimeError("argument to 'replace' must not be null");
        }
        let maxCount = -1;
        if (maxCountVal !== null) {
          maxCount = toIntegerValue(maxCountVal);
          if (maxCount < 1) {
            return self;
          }
        }
        let count = 0;
        if (self instanceof MSMap) {
          const keysToChange = [];
          for (let key of self.keys()) {
            const value = self.get(key);
            if (equals(value, oldVal)) {
              keysToChange.push(key);
              count += 1;
              if (maxCount > 0 && count === maxCount) {
                break;
              }
            }
          }
          for (let key of keysToChange) {
            self.set(key, newVal);
          }
          return self;
        } else if (self instanceof Array) {
          for (let i = 0; i < self.length; i++) {
            if (equals(self[i], oldVal)) {
              self[i] = newVal;
              count++;
            }
            if (maxCount > 0 && count == maxCount) {
              break;
            }
          }
          return self;
        } else if (typeof self === "string") {
          let str = toStr(self);
          let oldstr = oldVal === null ? "" : toStr(oldVal);
          if (isNullOrEmpty(oldstr)) {
            throw new RuntimeError("replace: oldval argument is empty");
          }
          let newstr = newVal == null ? "" : toStr(newVal);
          let idx = 0;
          while (true) {
            idx = str.indexOf(oldstr, idx);
            if (idx < 0) {
              break;
            }
            str = str.substring(0, idx) + newstr + str.substring(idx + oldstr.length);
            idx += newstr.length;
            count++;
            if (maxCount > 0 && count == maxCount) {
              break;
            }
          }
          return str;
        }
        throw new RuntimeError("Type Error: 'replace' requires map, list, or string");
      }
    );
    p.addIntrinsic(
      "slice(seq,from=0,to=null)",
      function(sequence, fromIdx, toIdx) {
        const newCollection = slice(p, sequence, fromIdx, toIdx);
        return newCollection;
      }
    );
    p.addIntrinsic(
      'split(self,delimiter=" ",maxCount=-1)',
      function(self, delimiter, maxCount) {
        self = toStr(self);
        delimiter = toStr(delimiter);
        maxCount = toIntegerValue(maxCount);
        let result = [];
        let pos = 0;
        while (pos < self.length) {
          let nextPos;
          if (maxCount >= 0 && result.length == maxCount - 1) {
            nextPos = self.length;
          } else if (delimiter.length == 0) {
            nextPos = pos + 1;
          } else {
            nextPos = self.indexOf(delimiter, pos);
          }
          if (nextPos < 0) {
            nextPos = self.length;
          }
          result.push(self.substring(pos, nextPos));
          pos = nextPos + delimiter.length;
          if (pos == self.length && delimiter.length > 0) {
            result.push("");
          }
        }
        return result;
      }
    );
    p.addIntrinsic(
      "indexOf(self,value,after=null)",
      function(self, value, after) {
        if (self instanceof Array || typeof self === "string") {
          let afterIdx = after !== null ? after : -1;
          if (afterIdx < -1) {
            afterIdx += self.length;
          }
          if (afterIdx < -1 || afterIdx >= self.length - 1) {
            return null;
          }
          const idx = self.indexOf(value, afterIdx + 1);
          return idx >= 0 ? idx : null;
        } else if (self instanceof MSMap) {
          let startSearch = after == null ? true : false;
          for (let key of self.keys()) {
            if (startSearch) {
              const mapValue = self.get(key);
              if (mapValue === value) {
                return key;
              }
            } else if (key === after) {
              startSearch = true;
            }
          }
          return null;
        } else {
          return null;
        }
      }
    );
    p.addIntrinsic(
      'join(self,delimiter=" ")',
      function(self, delimiter) {
        const delim = toStr(delimiter);
        if (!(self instanceof Array)) {
          return self;
        } else {
          const list = [];
          for (let value of self) {
            if (value === null) {
              list.push("");
            } else {
              list.push(toStr(value));
            }
          }
          const result = list.join(delim);
          return result;
        }
      }
    );
    p.addIntrinsic(
      "hasIndex(self,index)",
      function(self, index) {
        if (self instanceof MSMap) {
          return self.has(index) ? 1 : 0;
        } else if (self instanceof Array || typeof self === "string") {
          if (typeof index === "number" && self.length > 0) {
            return index >= -self.length && index < self.length ? 1 : 0;
          } else {
            return 0;
          }
        } else {
          return null;
        }
      }
    );
    p.addIntrinsic(
      "pop(self)",
      function(self) {
        if (self instanceof Array) {
          if (self.length < 1) {
            return null;
          }
          const result = self.pop();
          return result;
        } else if (self instanceof MSMap) {
          if (self.size() < 1) {
            return null;
          }
          const firstKey = self.keys()[0];
          self.delete(firstKey);
          return firstKey;
        } else {
          return null;
        }
      }
    );
    p.addIntrinsic(
      "pull(self)",
      function(self) {
        if (self instanceof Array) {
          if (self.length < 1) {
            return null;
          }
          const result = self[0];
          self.splice(0, 1);
          return result;
        } else if (self instanceof MSMap) {
          if (self.size() < 1) {
            return null;
          }
          const firstKey = self.keys()[0];
          self.delete(firstKey);
          return firstKey;
        } else {
          return null;
        }
      }
    );
    p.addIntrinsic(
      "push(self,value)",
      function(self, value) {
        if (self instanceof Array) {
          self.push(value);
          return self;
        } else if (self instanceof MSMap) {
          self.set(value, 1);
          return self;
        } else {
          return null;
        }
      }
    );
    p.addIntrinsic(
      "indexes(self)",
      function(self) {
        if (self instanceof MSMap) {
          const keys = Array.from(self.keys());
          return keys;
        } else if (self instanceof Array || typeof self === "string") {
          const indexes = [];
          for (let i = 0; i < self.length; i++) {
            indexes.push(i);
          }
          return indexes;
        } else {
          return null;
        }
      }
    );
    p.addIntrinsic(
      "values(self)",
      function(self) {
        if (self instanceof MSMap) {
          const values = Array.from(self.values());
          return values;
        } else if (typeof self === "string") {
          const letters = Array.from(self);
          return letters;
        } else {
          return self;
        }
      }
    );
    p.addIntrinsic(
      "sort(self,byKey=null,ascending=1)",
      function(self, byKey, ascending) {
        const compareSameType = (a, b) => {
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
        };
        const compareByValues = (a, b) => {
          if (a === null) {
            if (b === null) {
              return 0;
            } else {
              return 1;
            }
          }
          if (b === null) {
            return -1;
          }
          if (typeof a === "string" || typeof b === "string") {
            const aStr = toStr(a);
            const bStr = toStr(b);
            return compareSameType(aStr, bStr);
          }
          if (typeof a === "number" && typeof b === "number") {
            return compareSameType(a, b);
          }
          return 0;
        };
        const compareByKeys = (a, b) => {
          return compareByValues(a.sortKey, b.sortKey);
        };
        if (!(self instanceof Array)) {
          return self;
        }
        if (self.length < 2) {
          return self;
        }
        if (byKey === null) {
          self.sort(compareByValues);
        } else {
          const intKey = toIntegerValue(byKey);
          const keyedList = [];
          for (let i = 0; i < self.length; i++) {
            const value = self[i];
            let sortKey = null;
            if (value instanceof MSMap) {
              sortKey = value.getOpt(byKey) || null;
            } else if (value instanceof Array) {
              if (intKey > -value.length && intKey < value.length) {
                const normalizedIdx = intKey % value.length;
                sortKey = value[normalizedIdx];
              }
            }
            const keyedValue = {
              sortKey,
              value
            };
            keyedList.push(keyedValue);
          }
          keyedList.sort(compareByKeys);
          self.splice(0, self.length);
          for (let keyedValue of keyedList) {
            self.push(keyedValue.value);
          }
        }
        if (toBooleanNr(ascending) === 0) {
          self.reverse();
        }
        return self;
      }
    );
  }
  function addConversionIntrinsics(p) {
    p.addIntrinsic(
      "str(self)",
      function(value) {
        const result = formatValue(value);
        return result;
      }
    );
    p.addIntrinsic(
      "val(self)",
      function(x) {
        if (typeof x === "number") {
          return x;
        } else if (typeof x === "string") {
          let result = Number(x);
          if (isNaN(result)) {
            return 0;
          } else {
            return result;
          }
        } else {
          return null;
        }
      }
    );
  }
  function addCoreTypesIntrinsics(p) {
    p.addIntrinsic(
      "string",
      function() {
        return p.stringCoreType;
      }
    );
    p.addIntrinsic(
      "list",
      function() {
        return p.listCoreType;
      }
    );
    p.addIntrinsic(
      "map",
      function() {
        return p.mapCoreType;
      }
    );
    p.addIntrinsic(
      "number",
      function() {
        return p.numberCoreType;
      }
    );
    p.addIntrinsic(
      "funcRef",
      function() {
        return p.funcRefCoreType;
      }
    );
  }
  function addIdentityIntrinsics(p) {
    p.addIntrinsic(
      "hash(obj)",
      function(obj) {
        return hashCode(obj);
      }
    );
    p.addIntrinsic(
      "refEquals(a,b",
      function(a, b) {
        let result = false;
        if (a === null) {
          result = b === null;
        } else if (typeof a === "number") {
          result = typeof b === "number" && a === b;
        } else if (typeof a === "string") {
          result = typeof b === "string" && a === b;
        } else if (a instanceof Array) {
          result = b instanceof Array && a === b;
        } else if (a instanceof MSMap) {
          result = b instanceof MSMap && a === b;
        } else if (a instanceof BoundFunction) {
          result = b instanceof BoundFunction && a === b;
        } else {
          result = equals(a, b) === 1;
        }
        return result ? 1 : 0;
      }
    );
  }
  function addMathIntrinsics(p) {
    p.addIntrinsic(
      "abs(x)",
      function(x) {
        if (typeof x === "number") {
          return Math.abs(x);
        } else {
          return 0;
        }
      }
    );
    p.addIntrinsic(
      "floor(n)",
      function(n) {
        if (typeof n === "number") {
          return Math.floor(n);
        } else {
          return 0;
        }
      }
    );
    p.addIntrinsic(
      "ceil(n)",
      function(n) {
        if (typeof n === "number") {
          return Math.ceil(n);
        } else {
          return 0;
        }
      }
    );
    p.addIntrinsic(
      "round(n,decimalPlaces=0)",
      function(n, decimalPlaces) {
        const result = round(n, decimalPlaces);
        if (result !== void 0) {
          return result;
        } else {
          return 0;
        }
      }
    );
    p.addIntrinsic(
      "pi",
      function() {
        return Math.PI;
      }
    );
    p.addIntrinsic(
      "sin(x)",
      function(x) {
        return Math.sin(x);
      }
    );
    p.addIntrinsic(
      "cos(x)",
      function(x) {
        return Math.cos(x);
      }
    );
    p.addIntrinsic(
      "tan(x)",
      function(x) {
        return Math.tan(x);
      }
    );
    p.addIntrinsic(
      "asin(x)",
      function(x) {
        return Math.asin(x);
      }
    );
    p.addIntrinsic(
      "acos(x)",
      function(x) {
        return Math.acos(x);
      }
    );
    p.addIntrinsic(
      "atan(x)",
      function(x) {
        return Math.atan(x);
      }
    );
    p.addIntrinsic(
      "sign(n)",
      function(n) {
        if (typeof n === "number") {
          if (n > 0) {
            return 1;
          } else if (n < 0) {
            return -1;
          }
        }
        return 0;
      }
    );
    p.addIntrinsic(
      "log(x,base=10)",
      function(x, base) {
        if (typeof x === "number" && typeof base === "number") {
          return Math.log(x) / Math.log(base);
        }
        return 0;
      }
    );
    p.addIntrinsic(
      "sqrt(x)",
      function(x) {
        if (typeof x === "number") {
          return Math.sqrt(x);
        }
        return 0;
      }
    );
  }
  function addPrintIntrinsic(p) {
    let stdoutBuffer = [];
    p.addIntrinsic(
      'print(s="",delimiter=null)',
      function(value, delimiter) {
        if (delimiter === null) {
          delimiter = "\n";
        }
        delimiter = toStr(delimiter);
        let text = formatValue(value) + delimiter;
        const delimiterIdxAndLength = (s) => {
          let idx = s.indexOf("\n\r");
          if (idx >= 0) {
            return [idx, 2];
          }
          idx = s.indexOf("\r\n");
          if (idx >= 0) {
            return [idx, 2];
          }
          idx = s.indexOf("\n");
          if (idx >= 0) {
            return [idx, 1];
          }
          idx = s.indexOf("\r");
          return [idx, 1];
        };
        while (text.length > 0) {
          const [nextIdx, delimLen] = delimiterIdxAndLength(text);
          if (nextIdx < 0) {
            stdoutBuffer.push(text);
            return;
          } else {
            const part = text.slice(0, nextIdx);
            const rest = text.slice(nextIdx + delimLen);
            text = rest;
            stdoutBuffer.push(part);
            const joined = stdoutBuffer.join("");
            p.stdoutCallback(joined);
            stdoutBuffer = [];
          }
        }
      }
    );
  }
  function addRandomnessIntrinsics(p) {
    p.addIntrinsic(
      "rnd(seed)",
      function(seed) {
        if (seed !== null) {
          seed = toIntegerValue(seed);
          p.initRandomGenerator(seed);
        }
        return p.random();
      }
    );
    p.addIntrinsic(
      "shuffle(self)",
      function(self) {
        if (self instanceof Array) {
          for (let idx = self.length - 1; idx >= 1; idx--) {
            const rndIdx = getRandomInt(p, idx + 1);
            const tempValue = self[rndIdx];
            self[rndIdx] = self[idx];
            self[idx] = tempValue;
          }
        } else if (self instanceof MSMap) {
          const keys = Array.from(self.keys());
          for (let keyIdx = keys.length - 1; keyIdx >= 1; keyIdx--) {
            const rndIdx = getRandomInt(p, keyIdx + 1);
            const key = keys[keyIdx];
            const rndKey = keys[rndIdx];
            const tempValue = self.get(rndKey);
            self.set(rndKey, self.get(key));
            self.set(key, tempValue);
          }
        }
        return null;
      }
    );
  }
  function addSchedulingIntrinsics(p) {
    p.addIntrinsic(
      "time",
      function() {
        const t0 = p.executionStartTime;
        const t1 = performance.now();
        return (t1 - t0) / 1e3;
      }
    );
    p.addIntrinsic(
      "wait(seconds=1.0)",
      function(seconds) {
        seconds = toNumberValue(seconds);
        const milliseconds = seconds * 1e3;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(null);
          }, milliseconds);
        });
      }
    );
    p.addIntrinsic(
      "yield",
      function() {
        p.yieldExecution();
      }
    );
    p.addIntrinsic(
      "exit",
      function() {
        p.stopRunning();
        return Processor.abortCallValue;
      }
    );
  }
  function addStringIntrinsics(p) {
    p.addIntrinsic(
      "upper(self)",
      function(value) {
        if (typeof value === "string") {
          return value.toUpperCase();
        } else {
          return value;
        }
      }
    );
    p.addIntrinsic(
      "lower(self)",
      function(value) {
        if (typeof value === "string") {
          return value.toLowerCase();
        } else {
          return value;
        }
      }
    );
  }
  function addStandardIntrinsics(p) {
    addPrintIntrinsic(p);
    addCoreTypesIntrinsics(p);
    addMathIntrinsics(p);
    addBitOperationIntrinsics(p);
    addCharIntrinsics(p);
    addCollectionIntrinsics(p);
    addConversionIntrinsics(p);
    addIdentityIntrinsics(p);
    addRandomnessIntrinsics(p);
    addSchedulingIntrinsics(p);
    addStringIntrinsics(p);
    addBaseTypesIntrinsics(p);
  }
  function addBaseTypesIntrinsics(p) {
    const listIntrinsicNames = [
      "len",
      "indexOf",
      "indexes",
      "hasIndex",
      "sum",
      "sort",
      "push",
      "pull",
      "pop",
      "values",
      "insert",
      "remove",
      "replace",
      "join",
      "shuffle"
    ];
    const stringIntrinsicNames = [
      "len",
      "indexOf",
      "indexes",
      "hasIndex",
      "upper",
      "lower",
      "values",
      "insert",
      "remove",
      "replace",
      "split",
      "val",
      "code"
    ];
    const mapIntrinsicNames = [
      "len",
      "indexOf",
      "indexes",
      "hasIndex",
      "sum",
      "push",
      "pull",
      "pop",
      "values",
      "remove",
      "replace",
      "shuffle"
    ];
    const getFn = (name) => {
      const optFn = p.globalContext.getOpt(name);
      if (optFn !== void 0) {
        return optFn;
      } else {
        throw new Error("Intrinsic not found: " + name);
      }
    };
    const importIntrinsics = (targetList, intrinsicNames) => {
      for (let fnName of intrinsicNames) {
        const boundFn = getFn(fnName);
        const argNames = boundFn.funcDef.argNames;
        if (argNames.length < 1 || argNames[0] !== "self") {
          throw new Error(`First parameter of ${fnName} must be 'self'. Found: ${argNames}`);
        }
        p.attachExistingIntrinsic(targetList, fnName, boundFn);
      }
    };
    importIntrinsics(p.listCoreType, listIntrinsicNames);
    importIntrinsics(p.mapCoreType, mapIntrinsicNames);
    importIntrinsics(p.stringCoreType, stringIntrinsicNames);
  }
  var ParserError = class extends Error {
    constructor(message, position) {
      const msg = `Compiler Error: ${message} [line ${position.row}]`;
      super(msg);
      this.position = position;
    }
  };
  var SrcLocation = class _SrcLocation {
    constructor(start, end, source) {
      __publicField(this, "start");
      __publicField(this, "end");
      __publicField(this, "source");
      if (start.idx > end.idx) {
        throw new Error("Start must be less than end");
      }
      this.start = start;
      this.end = end;
      if (source !== void 0) {
        this.source = source;
      } else {
        this.source = "inline";
      }
    }
    static forTokenRange(firstToken, lastToken) {
      const firstLocation = firstToken.location;
      const lastLocation = lastToken.location;
      return firstLocation.upTo(lastLocation);
    }
    upTo(otherLocation) {
      if (otherLocation.start.idx < this.end.idx) {
        throw new Error("The other location must be further ahead than the first one");
      }
      const newStart = this.start;
      const newEnd = otherLocation.end;
      const newLocation = new _SrcLocation(newStart, newEnd, this.source);
      return newLocation;
    }
    toString() {
      return `[(row:${this.start.row},col:${this.start.col}) to (row:${this.end.row},col:${this.end.col})]`;
    }
  };
  var Pos = class _Pos {
    constructor(idx, col, row) {
      __publicField(this, "idx");
      __publicField(this, "col");
      __publicField(this, "row");
      this.idx = idx;
      this.col = col;
      this.row = row;
    }
    copy() {
      return new _Pos(this.idx, this.col, this.row);
    }
    advance() {
      this.idx = this.idx + 1;
      this.col = this.col + 1;
    }
    moveToNewLine() {
      this.idx = this.idx;
      this.col = 1;
      this.row = this.row + 1;
    }
    toString() {
      return `(idx=${this.idx},row=${this.row},col=${this.col})`;
    }
  };
  var SimpleToken = class {
    constructor(tokenType, location, afterSpace) {
      __publicField(this, "tokenType");
      __publicField(this, "location");
      __publicField(this, "afterSpace");
      this.tokenType = tokenType;
      this.location = location;
      this.afterSpace = afterSpace;
    }
    toString() {
      return `SimpleToken(tokenType=${TokenType[this.tokenType]},position=${this.location.toString()},afterSpace=${this.afterSpace})`;
    }
  };
  var LiteralToken = class {
    constructor(tokenType, value, position, afterSpace) {
      __publicField(this, "value");
      __publicField(this, "tokenType");
      __publicField(this, "location");
      __publicField(this, "afterSpace");
      this.tokenType = tokenType;
      this.value = value;
      this.location = position;
      this.afterSpace = afterSpace;
    }
    toString() {
      let strValue;
      if (this.tokenType == TokenType.STRING_LITERAL) {
        strValue = `"${this.value}"`;
      } else {
        strValue = `${this.value}`;
      }
      return `LiteralToken(tokenType=${TokenType[this.tokenType]},value=${strValue},position=${this.location.toString()},afterSpace=${this.afterSpace})`;
    }
  };
  var StringLiteral = class extends LiteralToken {
    constructor(value, location, afterSpace) {
      super(TokenType.STRING_LITERAL, value, location, afterSpace);
    }
  };
  var IntLiteral = class extends LiteralToken {
    constructor(value, location, afterSpace) {
      super(TokenType.INT_LITERAL, value, location, afterSpace);
    }
  };
  var FloatLiteral = class extends LiteralToken {
    constructor(value, location, afterSpace) {
      super(TokenType.FLOAT_LITERAL, value, location, afterSpace);
    }
  };
  var Identifier = class {
    constructor(value, location, afterSpace) {
      __publicField(this, "value");
      __publicField(this, "tokenType");
      __publicField(this, "location");
      __publicField(this, "afterSpace");
      this.tokenType = TokenType.IDENTIFIER_TK;
      this.value = value;
      this.location = location;
      this.afterSpace = afterSpace;
    }
    toString() {
      return `Identifier(value="${this.value}",position=${this.location.toString()},afterSpace=${this.afterSpace})`;
    }
  };
  var EofToken = class {
    constructor(location, afterSpace) {
      __publicField(this, "tokenType");
      __publicField(this, "location");
      __publicField(this, "afterSpace");
      this.tokenType = TokenType.EOF;
      this.location = location;
      this.afterSpace = afterSpace;
    }
    toString() {
      return `EofToken(position=${this.location.toString()},afterSpace=${this.afterSpace})`;
    }
  };
  var NumberLiteral = class {
    constructor(isInt, numberValue) {
      __publicField(this, "isInt");
      __publicField(this, "numberValue");
      this.isInt = isInt;
      this.numberValue = numberValue;
    }
  };
  var Tokenizer = class {
    constructor(input, source = void 0) {
      __publicField(this, "input");
      __publicField(this, "source");
      __publicField(this, "pos");
      __publicField(this, "startPos");
      __publicField(this, "_currentChar", "\0");
      __publicField(this, "_peek2Str", "");
      __publicField(this, "_lastTokenIsSpace", false);
      __publicField(this, "tokens", []);
      __publicField(this, "keywordTable", {
        "if": TokenType.KW_IF,
        "else": TokenType.KW_ELSE,
        "then": TokenType.KW_THEN,
        "while": TokenType.KW_WHILE,
        "for": TokenType.KW_FOR,
        "function": TokenType.KW_FUNCTION,
        "break": TokenType.KW_BREAK,
        "continue": TokenType.KW_CONTINUE,
        "end": TokenType.KW_END,
        "return": TokenType.KW_RETURN,
        "super": TokenType.KW_SUPER,
        "true": TokenType.KW_TRUE,
        "false": TokenType.KW_FALSE,
        "null": TokenType.KW_NULL,
        "in": TokenType.KW_IN,
        "not": TokenType.OP_NOT,
        "or": TokenType.OP_OR,
        "and": TokenType.OP_AND,
        "isa": TokenType.OP_ISA,
        "new": TokenType.KW_NEW
      });
      this.input = input;
      this.pos = new Pos(0, 1, 1);
      this.startPos = this.pos.copy();
      this.source = source;
    }
    tokenize() {
      this.updateCharAndPeek();
      while (this.hasInput()) {
        this.processNextToken();
      }
      this.addEofToken(this.location());
      const tokensCombined = this.combinedTokens(this.tokens);
      return tokensCombined;
    }
    idx() {
      return this.pos.idx;
    }
    saveStartPos() {
      this.startPos = this.pos.copy();
    }
    location() {
      const endPos = this.pos.copy();
      const loc = new SrcLocation(this.startPos, endPos, this.source);
      return loc;
    }
    hasInput() {
      return this.idx() < this.input.length;
    }
    processNextToken() {
      const ch = this.getChar();
      if (this.isSpaceChar(ch)) {
        this.processSpaces();
      } else if (ch == "\n" || ch == "\r") {
        this.processNewline();
      } else if (ch == '"') {
        this.processStringLiteral();
      } else if (this.isNumericChar(ch)) {
        this.processNumberLiteral();
      } else if (ch == ";") {
        this.processCharToken(TokenType.SEMICOLON);
      } else if (ch == ":") {
        this.processCharToken(TokenType.COLON);
      } else if (ch == ".") {
        this.processDot();
      } else if (ch == ",") {
        this.processCharToken(TokenType.COMMA);
      } else if (ch == "(") {
        this.processCharToken(TokenType.OPEN_ROUND);
      } else if (ch == ")") {
        this.processCharToken(TokenType.CLOSE_ROUND);
      } else if (ch == "[") {
        this.processCharToken(TokenType.OPEN_SQUARE);
      } else if (ch == "]") {
        this.processCharToken(TokenType.CLOSE_SQUARE);
      } else if (ch == "{") {
        this.processCharToken(TokenType.OPEN_CURLY);
      } else if (ch == "}") {
        this.processCharToken(TokenType.CLOSE_CURLY);
      } else if (this.peek2Chars() == "//") {
        this.processComment();
      } else if (this.isOperatorChar(ch)) {
        this.processOperator();
      } else if (this.isIdentifierStartChar(ch)) {
        this.processSymbol();
      } else {
        throw new ParserError(`got Unknown(${ch}) where EOL is required`, this.pos);
      }
    }
    getChar() {
      return this._currentChar;
    }
    /**
     * Tries to peek N-amount of characters, cutting before if not possible
     * */
    peek2Chars() {
      return this._peek2Str;
    }
    advance(amount = 1) {
      let i = 0;
      while (i < amount) {
        this.pos.advance();
        i += 1;
      }
      if (this.hasInput()) {
        this.updateCharAndPeek();
      }
    }
    addToken(newToken) {
      this.tokens.push(newToken);
    }
    updateCharAndPeek() {
      this._currentChar = this.input[this.idx()];
      if (this.idx() + 1 < this.input.length) {
        const afterCurrent = this.input[this.idx() + 1];
        this._peek2Str = `${this._currentChar}${afterCurrent}`;
      } else {
        this._peek2Str = `${this._currentChar}`;
      }
    }
    processAfterSpaces() {
      const afterSpaces = this._lastTokenIsSpace;
      this._lastTokenIsSpace = false;
      return afterSpaces;
    }
    isSpaceChar(ch) {
      return ch == " " || ch == "	";
    }
    isIdentifierStartChar(ch) {
      return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch == "_" || // Support unicode
      ch > "\x9F";
    }
    isIdentifierChar(ch) {
      return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch >= "0" && ch <= "9" || ch == "_" || // Support unicode
      ch > "\x9F";
    }
    isOperatorChar(ch) {
      return ch == "=" || ch == "!" || ch == "@" || ch == "^" || ch == "<" || ch == ">" || ch == "/" || ch == "*" || ch == "%" || ch == "+" || ch == "-";
    }
    isNumericChar(ch) {
      return ch >= "0" && ch <= "9";
    }
    processSpaces() {
      const spaces = this.consumeChars(this.isSpaceChar);
      if (spaces.length > 0) {
        this._lastTokenIsSpace = true;
      }
    }
    processNewline() {
      const peek2 = this.peek2Chars();
      const ch = this.getChar();
      if (peek2 == "\n\r" || peek2 == "\r\n") {
        this.advance(2);
      } else if (ch == "\n" || ch == "\r") {
        this.advance();
      } else {
        throw new ParserError("Expected newline character", this.pos);
      }
      this.addSimpleToken(TokenType.NEWLINE);
      this.pos.moveToNewLine();
    }
    processSymbol() {
      this.saveStartPos();
      const symbolValue = this.fetchSymbol();
      if (symbolValue in this.keywordTable) {
        const tokenType = this.keywordTable[symbolValue];
        this.addSimpleToken(tokenType);
      } else {
        this.addIdentifierToken(symbolValue);
      }
    }
    processOperator() {
      this.saveStartPos();
      const peek1 = this.getChar();
      const peek2 = this.peek2Chars();
      let charsToAdvance = 0;
      let tokenTypeToAdd = null;
      switch (peek2) {
        case "==":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.OP_EQUALS;
          break;
        case "!=":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.OP_NOT_EQUALS;
          break;
        case "<=":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.OP_LESS_EQUALS;
          break;
        case ">=":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.OP_GREATER_EQUALS;
          break;
        case "+=":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.PLUS_ASSIGN;
          break;
        case "-=":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.MINUS_ASSIGN;
          break;
        case "*=":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.MULT_ASSIGN;
          break;
        case "/=":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.DIV_ASSIGN;
          break;
        case "%=":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.MOD_ASSIGN;
          break;
        case "^=":
          charsToAdvance = 2;
          tokenTypeToAdd = TokenType.POW_ASSIGN;
          break;
      }
      if (tokenTypeToAdd === null) {
        switch (peek1) {
          case "=":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.ASSIGN;
            break;
          case "<":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.OP_LESS;
            break;
          case ">":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.OP_GREATER;
            break;
          case "+":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.OP_PLUS;
            break;
          case "-":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.OP_MINUS;
            break;
          case "*":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.OP_MULT;
            break;
          case "/":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.OP_DIV;
            break;
          case "%":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.OP_MOD;
            break;
          case "^":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.OP_POW;
            break;
          case "@":
            charsToAdvance = 1;
            tokenTypeToAdd = TokenType.OP_FUNCREF;
            break;
          default:
            throw new ParserError("Unhandled operator: " + peek1, this.startPos);
        }
      }
      if (tokenTypeToAdd != null) {
        this.addSimpleToken(tokenTypeToAdd);
        this.advance(charsToAdvance);
      }
    }
    processStringLiteral() {
      this.saveStartPos();
      const value = this.fetchStringLiteral();
      this.addStringLiteralToken(value, this.location());
    }
    fetchStringLiteral() {
      let chars = "";
      let closed = false;
      this.advance();
      while (this.hasInput() && !closed) {
        const peek2 = this.peek2Chars();
        const ch = this.getChar();
        if (peek2 == '""') {
          chars += '"';
          this.advance(2);
        } else if (ch == '"') {
          closed = true;
          this.advance();
        } else {
          chars += ch;
          this.advance();
        }
      }
      if (!closed) {
        throw new ParserError("Unterminated string literal", this.startPos);
      }
      return chars;
    }
    /**
     * Could be a dot for accessing a property, but could also be part of a float literal.
     *
     * It is part of a float literal if followed by a number
     * */
    processDot() {
      this.saveStartPos();
      const nextChars = this.peek2Chars();
      if (nextChars.length > 1 && this.isNumericChar(nextChars[1])) {
        this.processNumberLiteral();
      } else {
        this.processCharToken(TokenType.DOT);
      }
    }
    /**
     * Consume numeric chars until a dot or a non-numeric char is found.
     * If dot found, consume until non-numeric char is found.
     */
    processNumberLiteral() {
      this.saveStartPos();
      const value = this.fetchNumberLiteral();
      if (value.isInt) {
        this.addIntLiteralToken(value.numberValue, this.location());
      } else {
        this.addFloatLiteralToken(value.numberValue, this.location());
      }
    }
    fetchNumberLiteral() {
      let consumingFloatingPart = false;
      let intDigits = "";
      let floatDigits = "";
      let fetchingChars = true;
      let exponentPart = "";
      while (this.hasInput() && fetchingChars) {
        const ch = this.getChar();
        if (this.isNumericChar(ch)) {
          if (consumingFloatingPart) {
            floatDigits += ch;
            this.advance();
          } else {
            intDigits += ch;
            this.advance();
          }
        } else if (ch == ".") {
          if (consumingFloatingPart) {
            throw new ParserError("Unexpected repeated dot", this.startPos);
          }
          consumingFloatingPart = true;
          this.advance();
        } else if (ch == "e" || ch == "E") {
          exponentPart = this.parseExponentPart();
          fetchingChars = false;
        } else {
          fetchingChars = false;
        }
      }
      let numberValue;
      let isInt;
      if (floatDigits.length > 0) {
        numberValue = parseFloat(`${intDigits}.${floatDigits}${exponentPart}`);
        isInt = false;
      } else {
        numberValue = parseInt(`${intDigits}${exponentPart}`);
        isInt = true;
      }
      return new NumberLiteral(isInt, numberValue);
    }
    parseExponentPart() {
      const eChar = this.getChar();
      this.advance();
      const signChar = this.consumeAny("+", "-");
      if (!signChar) {
        throw new Error("Expected +/- after exponential letter");
      }
      let exponentPart = "";
      while (this.hasInput()) {
        const optDigit = this.consumeAny("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
        if (optDigit !== void 0) {
          exponentPart += optDigit;
        } else {
          break;
        }
      }
      if (exponentPart.length == 0) {
        throw new Error("Expected exponent in exponential notation");
      }
      return `${eChar}${signChar}${exponentPart}`;
    }
    /**
     * Advance until newline found
     */
    processComment() {
      let insideComment = true;
      while (this.hasInput() && insideComment) {
        const ch = this.getChar();
        const peek2 = this.peek2Chars();
        if (peek2 == "\n\r" || peek2 == "\r\n") {
          insideComment = false;
        } else if (ch == "\n" || ch == "\r") {
          insideComment = false;
        } else {
          this.advance();
        }
      }
    }
    consumeAny(...chars) {
      const c = this.getChar();
      for (let i = 0; i < chars.length; i++) {
        if (chars[i] === c) {
          this.advance();
          return c;
        }
      }
      return void 0;
    }
    addSimpleToken(tokenType) {
      const afterSpace = this.processAfterSpaces();
      const newToken = new SimpleToken(
        tokenType,
        this.location(),
        afterSpace
      );
      this.addToken(newToken);
    }
    addIdentifierToken(identifierValue) {
      const afterSpace = this.processAfterSpaces();
      const newToken = new Identifier(
        identifierValue,
        this.location(),
        afterSpace
      );
      this.addToken(newToken);
    }
    addStringLiteralToken(stringValue, tokenLocation) {
      const afterSpace = this.processAfterSpaces();
      const newToken = new StringLiteral(
        stringValue,
        tokenLocation,
        afterSpace
      );
      this.addToken(newToken);
    }
    addIntLiteralToken(intValue, tokenLocation) {
      const afterSpace = this.processAfterSpaces();
      const newToken = new IntLiteral(
        intValue,
        tokenLocation,
        afterSpace
      );
      this.addToken(newToken);
    }
    addFloatLiteralToken(floatValue, tokenLocation) {
      const afterSpace = this.processAfterSpaces();
      const newToken = new FloatLiteral(
        floatValue,
        tokenLocation,
        afterSpace
      );
      this.addToken(newToken);
    }
    addEofToken(tokenLocation) {
      const afterSpace = this.processAfterSpaces();
      const newToken = new EofToken(
        tokenLocation,
        afterSpace
      );
      this.addToken(newToken);
    }
    fetchSymbol() {
      const predicate = (ch) => this.isIdentifierChar(ch);
      const value = this.consumeChars(predicate);
      return value;
    }
    /**
     * Consume chars as long as the predicate is true
     */
    consumeChars(predicate) {
      let chars = "";
      let fetchingChars = true;
      while (this.hasInput() && fetchingChars) {
        const ch = this.getChar();
        if (predicate(ch)) {
          chars += ch;
          this.advance();
        } else {
          fetchingChars = false;
        }
      }
      return chars;
    }
    processCharToken(tokenType) {
      this.saveStartPos();
      this.advance();
      this.addSimpleToken(tokenType);
    }
    combinedTokens(tokens) {
      let combinedTokens = [];
      let idx = 0;
      while (idx < tokens.length) {
        const token = tokens[idx];
        let optNextToken;
        if (idx + 1 < tokens.length) {
          optNextToken = tokens[idx + 1];
        } else {
          optNextToken = null;
        }
        let tokenToAdd = token;
        if (token.tokenType == TokenType.KW_END) {
          let secondTokenFound = false;
          if (optNextToken != null) {
            if (optNextToken.tokenType == TokenType.KW_IF) {
              const newLocation = token.location.upTo(optNextToken.location);
              tokenToAdd = new SimpleToken(TokenType.KW_END_IF, newLocation, token.afterSpace);
              secondTokenFound = true;
            } else if (optNextToken.tokenType == TokenType.KW_WHILE) {
              const newLocation = token.location.upTo(optNextToken.location);
              tokenToAdd = new SimpleToken(TokenType.KW_END_WHILE, newLocation, token.afterSpace);
              secondTokenFound = true;
            } else if (optNextToken.tokenType == TokenType.KW_FOR) {
              const newLocation = token.location.upTo(optNextToken.location);
              tokenToAdd = new SimpleToken(TokenType.KW_END_FOR, newLocation, token.afterSpace);
              secondTokenFound = true;
            } else if (optNextToken.tokenType == TokenType.KW_FUNCTION) {
              const newLocation = token.location.upTo(optNextToken.location);
              tokenToAdd = new SimpleToken(TokenType.KW_END_FUNCTION, newLocation, token.afterSpace);
              secondTokenFound = true;
            }
          }
          if (!secondTokenFound) {
            throw new ParserError("Expected token of type if / for / while / function after 'end", token.location.start);
          }
        } else if (token.tokenType == TokenType.KW_ELSE) {
          if (optNextToken != null && optNextToken instanceof SimpleToken) {
            if (optNextToken.tokenType == TokenType.KW_IF) {
              const newLocation = token.location.upTo(optNextToken.location);
              tokenToAdd = new SimpleToken(TokenType.KW_ELSE_IF, newLocation, token.afterSpace);
            }
          }
        }
        if (tokenToAdd != token) {
          idx += 2;
        } else {
          idx += 1;
        }
        combinedTokens.push(tokenToAdd);
      }
      return combinedTokens;
    }
  };
  var ParsingContext = class _ParsingContext {
    constructor(insideFunction = false, insideLoop = false, insideSingleLineThen = false, parsingStatementExpr = false) {
      this.insideFunction = insideFunction;
      this.insideLoop = insideLoop;
      this.insideSingleLineThen = insideSingleLineThen;
      this.parsingStatementExpr = parsingStatementExpr;
    }
    enterFunction() {
      const copy = this.copy();
      copy.insideFunction = true;
      return copy;
    }
    enterLoop() {
      const copy = this.copy();
      copy.insideLoop = true;
      return copy;
    }
    enterSingleLineThen() {
      const copy = this.copy();
      copy.insideSingleLineThen = true;
      return copy;
    }
    enterParsingStatementExpr() {
      const copy = this.copy();
      copy.parsingStatementExpr = true;
      return copy;
    }
    leaveParsingStatementExpr() {
      const copy = this.copy();
      copy.parsingStatementExpr = false;
      return copy;
    }
    copy() {
      return new _ParsingContext(
        this.insideFunction,
        this.insideLoop,
        this.insideSingleLineThen,
        this.parsingStatementExpr
      );
    }
  };
  var Parser = class {
    constructor(input) {
      __publicField(this, "defaultContext", new ParsingContext());
      __publicField(this, "current", 0);
      __publicField(this, "tokens", []);
      this.input = input;
    }
    parse() {
      this.tokens = this.tokenize(this.input);
      const statements = this.parseUntil([], this.defaultContext);
      return statements;
    }
    tokenize(input) {
      const tokenizer = new Tokenizer(input = input);
      const tokens = tokenizer.tokenize();
      const tokensWithSomeLineBreaksRemoved = this.removeSuperfluousLineBreaks(tokens);
      return tokensWithSomeLineBreaksRemoved;
    }
    /**
     * Some expressions make it possible to insert newlines and have them continue
     * in the next line.
     *
     * For example:
     *
     * [1, 2,
     *  3 ]
     *
     * Or:
     *
     * x ==
     * 3
     *
     * This function eliminates those newline tokens so that parsing
     * can proceed in a normal way, as if they were not there to begin with.
     * */
    //  - comma (in call expr / statement, in map / list)
    //  - open brackets (or all kinds)
    //  - colon (for slicing)
    //  - not
    //  - unary minus
    //  - new
    //  - @ (address of)
    //  - power ^
    //  - isa
    //  - dot (call)
    //  - logic operators
    //  - comparison operator
    //  - binary (algebr.) operators
    removeSuperfluousLineBreaks(tokens) {
      const typesThatAllowLineBreaks = [
        TokenType.COMMA,
        TokenType.OPEN_ROUND,
        TokenType.OPEN_SQUARE,
        TokenType.OPEN_CURLY,
        TokenType.COLON,
        TokenType.OP_NOT,
        TokenType.KW_NEW,
        TokenType.OP_FUNCREF,
        TokenType.OP_POW,
        TokenType.OP_ISA,
        TokenType.DOT,
        TokenType.OP_LESS,
        TokenType.OP_LESS_EQUALS,
        TokenType.OP_GREATER,
        TokenType.OP_GREATER_EQUALS,
        TokenType.OP_EQUALS,
        TokenType.OP_NOT_EQUALS,
        TokenType.OP_PLUS,
        TokenType.OP_MINUS,
        TokenType.OP_MULT,
        TokenType.OP_DIV,
        TokenType.OP_MOD,
        TokenType.OP_AND,
        TokenType.OP_OR,
        TokenType.ASSIGN,
        TokenType.PLUS_ASSIGN,
        TokenType.MINUS_ASSIGN,
        TokenType.MULT_ASSIGN,
        TokenType.DIV_ASSIGN,
        TokenType.MOD_ASSIGN,
        TokenType.POW_ASSIGN
      ];
      let cleanedUpTokens = [];
      let idx = 0;
      while (idx < tokens.length) {
        const token = tokens[idx];
        const tokenType = token.tokenType;
        if (typesThatAllowLineBreaks.includes(tokenType)) {
          cleanedUpTokens.push(token);
          idx += 1;
          let shouldConsume = true;
          while (shouldConsume && idx < tokens.length) {
            const maybeNewLine = tokens[idx];
            if (maybeNewLine.tokenType == TokenType.NEWLINE) {
              idx += 1;
            } else {
              shouldConsume = false;
            }
          }
        } else {
          cleanedUpTokens.push(token);
          idx += 1;
        }
      }
      return cleanedUpTokens;
    }
    parseUntil(stoppingTokenTypes, context) {
      let shouldContinue = true;
      let statements = [];
      while (!this.isAtEnd() && shouldContinue) {
        if (this.tokenMatch(TokenType.NEWLINE) || this.tokenMatch(TokenType.SEMICOLON))
          ;
        else {
          for (let stoppingTokenType of stoppingTokenTypes) {
            if (this.check(stoppingTokenType)) {
              shouldContinue = false;
            }
          }
          if (shouldContinue) {
            const s = this.statement(context);
            statements.push(s);
          }
        }
      }
      return statements;
    }
    statement(context) {
      if (this.tokenMatch(TokenType.KW_IF)) {
        return this.ifStatement(context);
      } else if (this.tokenMatch(TokenType.KW_WHILE)) {
        return this.whileStatement(context);
      } else if (this.tokenMatch(TokenType.KW_FOR)) {
        return this.forStatement(context);
      } else {
        return this.nonBlockStatement(context);
      }
    }
    /**
     * These statements can be appear as part of single-line statements
     * */
    nonBlockStatement(context) {
      if (this.tokenMatch(TokenType.KW_BREAK)) {
        return this.breakStatement(context);
      } else if (this.tokenMatch(TokenType.KW_CONTINUE)) {
        return this.continueStatement(context);
      } else if (this.tokenMatch(TokenType.KW_RETURN)) {
        return this.returnStatement(context);
      } else {
        const assignmentTokenTypes = [
          TokenType.ASSIGN,
          TokenType.PLUS_ASSIGN,
          TokenType.MINUS_ASSIGN,
          TokenType.MULT_ASSIGN,
          TokenType.DIV_ASSIGN,
          TokenType.MOD_ASSIGN,
          TokenType.POW_ASSIGN
        ];
        const optTokenType = this.findTokenWithinStatementBoundary(assignmentTokenTypes);
        if (optTokenType === TokenType.ASSIGN) {
          return this.assignmentStatement(context);
        } else if (optTokenType !== null) {
          return this.mathAssignmentStatement(optTokenType, context);
        } else {
          return this.expressionStatement(context);
        }
      }
    }
    ifStatement(context) {
      const condition = this.expression(context);
      this.consume(TokenType.KW_THEN, "Expected 'then' after condition. Found: " + this.peek());
      if (this.tokenMatch(TokenType.NEWLINE, TokenType.SEMICOLON)) {
        return this.multiLineIf(condition, context);
      } else {
        return this.singleLineIf(condition, context);
      }
    }
    multiLineIf(condition, context) {
      const ifStatements = this.parseUntil([TokenType.KW_ELSE_IF, TokenType.KW_ELSE, TokenType.KW_END_IF], context);
      const ifBranch = new ConditionedStatements(condition, ifStatements);
      let elseIfs = [];
      while (this.tokenMatch(TokenType.KW_ELSE_IF)) {
        let elseIfCondition = this.expression(context);
        this.consume(TokenType.KW_THEN, "Expected 'then' after condition in else-if");
        const elseIfStatements = this.parseUntil([TokenType.KW_ELSE_IF, TokenType.KW_ELSE, TokenType.KW_END_IF], context);
        const elseIf = new ConditionedStatements(elseIfCondition, elseIfStatements);
        elseIfs.push(elseIf);
      }
      let elseBranch;
      if (this.tokenMatch(TokenType.KW_ELSE)) {
        elseBranch = this.parseUntil([TokenType.KW_END_IF], context);
      } else {
        elseBranch = [];
      }
      this.consume(TokenType.KW_END_IF, "Expected 'end if' at the end of if block");
      return new IfStatement(ifBranch, elseIfs, elseBranch);
    }
    singleLineIf(condition, context) {
      const singleLineThenContext = context.enterSingleLineThen();
      const ifStatement = this.nonBlockStatement(singleLineThenContext);
      const ifBranch = new ConditionedStatements(condition, [ifStatement]);
      let elseBranch;
      if (this.tokenMatch(TokenType.KW_ELSE)) {
        const statement = this.nonBlockStatement(context);
        elseBranch = [statement];
      } else {
        elseBranch = [];
      }
      return new IfStatement(ifBranch, [], elseBranch);
    }
    whileStatement(context) {
      const whileToken = this.previous();
      const condition = this.expression(context);
      this.consumeAtLeastOne([TokenType.SEMICOLON, TokenType.NEWLINE], "Expected semicolon or newline after while-condition");
      const loopContext = context.enterLoop();
      const whileStatements = this.parseUntil([TokenType.KW_END_WHILE], loopContext);
      this.consume(TokenType.KW_END_WHILE, "'while' without matching 'end while'");
      const headerLocation = whileToken.location.upTo(condition.location());
      return new WhileStatement(condition, headerLocation, whileStatements);
    }
    forStatement(context) {
      const forToken = this.previous();
      const loopVar = this.consume(TokenType.IDENTIFIER_TK, "Expected identifier as loop variable");
      this.consume(TokenType.KW_IN, "Expected 'in' after loop-variable in for");
      const rangeExpression = this.expression(context);
      this.consumeAtLeastOne([TokenType.SEMICOLON, TokenType.NEWLINE], "Expected semicolon or newline after for-header");
      const loopContext = context.enterLoop();
      const forStatements = this.parseUntil([TokenType.KW_END_FOR], loopContext);
      this.consume(TokenType.KW_END_FOR, "'for' without matching 'end for'");
      const headerLocation = forToken.location.upTo(rangeExpression.location());
      return new ForStatement(loopVar, rangeExpression, headerLocation, forStatements);
    }
    breakStatement(context) {
      if (context.insideLoop) {
        const fullLocation = this.previous().location;
        return new BreakStatement(fullLocation);
      } else {
        throw this.failParsing("Keyword 'break' only allowed in for / while loops");
      }
    }
    continueStatement(context) {
      if (context.insideLoop) {
        const fullLocation = this.previous().location;
        return new ContinueStatement(fullLocation);
      } else {
        throw this.failParsing("Keyword 'continue' only allowed in for / while loops");
      }
    }
    returnStatement(context) {
      const openingToken = this.previous();
      let fullLocation;
      let optReturnValue;
      if (this.isAtEndOfStatement(context)) {
        optReturnValue = void 0;
        fullLocation = openingToken.location;
      } else {
        optReturnValue = this.functionBodyOrExpr(context);
        fullLocation = openingToken.location.upTo(optReturnValue.location());
      }
      return new ReturnStatement(optReturnValue, fullLocation);
    }
    expressionStatement(context) {
      const statementExprContext = context.enterParsingStatementExpr();
      const expr = this.expression(statementExprContext);
      if (!this.isAtEndOfStatement(context)) {
        let args = [];
        do {
          const argumentExp = this.functionBodyOrExpr(context);
          args.push(argumentExp);
        } while (this.tokenMatch(TokenType.COMMA));
        return new FunctionCallStatement(expr, args);
      } else {
        return new ExpressionStatement(expr);
      }
    }
    isAtEndOfStatement(context) {
      const nextTokenType = this.peek().tokenType;
      if (context.insideSingleLineThen) {
        return [TokenType.KW_ELSE, TokenType.SEMICOLON, TokenType.NEWLINE, TokenType.EOF].includes(nextTokenType);
      } else {
        return [TokenType.SEMICOLON, TokenType.NEWLINE, TokenType.EOF].includes(nextTokenType);
      }
    }
    assignmentStatement(context) {
      if (this.check(TokenType.OP_FUNCREF)) {
        this.advance();
      }
      const target = this.call(context);
      this.consume(TokenType.ASSIGN, "Expected '=' in assignment");
      const value = this.functionBodyOrExpr(context);
      if (target instanceof IdentifierExpr || target instanceof DotAccessExpr || target instanceof IndexedAccessExpr) {
        return new AssignmentStatement(target, value);
      } else {
        throw this.failParsing("Invalid assignment target");
      }
    }
    mathAssignmentStatement(tokenType, context) {
      const target = this.call(context);
      const tokenStr = this.mathAssignmentString(tokenType);
      this.consume(tokenType, `Expected '${tokenStr}' in math-assignment`);
      const value = this.functionBodyOrExpr(context);
      if (target instanceof IdentifierExpr || target instanceof DotAccessExpr || target instanceof IndexedAccessExpr) {
        return new MathAssignmentStatement(target, tokenType, value);
      } else {
        throw this.failParsing("Invalid math-assignment target");
      }
    }
    mathAssignmentString(tokenType) {
      switch (tokenType) {
        case TokenType.PLUS_ASSIGN:
          return "+=";
        case TokenType.MINUS_ASSIGN:
          return "+=";
        case TokenType.MULT_ASSIGN:
          return "+=";
        case TokenType.DIV_ASSIGN:
          return "+=";
        case TokenType.MOD_ASSIGN:
          return "+=";
        case TokenType.POW_ASSIGN:
          return "+=";
        default:
          throw this.failParsing("Unexpected math-assignment token type: " + TokenType[tokenType]);
      }
    }
    expression(context) {
      return this.logicOr(context);
    }
    logicOr(context) {
      let expr = this.logicAnd(context);
      while (this.tokenMatch(TokenType.OP_OR)) {
        const operator = this.previous();
        const right = this.logicAnd(context);
        expr = new LogicExpr(expr, operator, right);
      }
      return expr;
    }
    logicAnd(context) {
      let expr = this.unaryNot(context);
      while (this.tokenMatch(TokenType.OP_AND)) {
        const operator = this.previous();
        const right = this.unaryNot(context);
        expr = new LogicExpr(expr, operator, right);
      }
      return expr;
    }
    unaryNot(context) {
      if (this.tokenMatch(TokenType.OP_NOT)) {
        const operator = this.previous();
        const right = this.isaComparison(context);
        return new UnaryExpr(operator, right);
      } else {
        return this.isaComparison(context);
      }
    }
    isaComparison(context) {
      let expr = this.chainedComparison(context);
      while (this.tokenMatch(TokenType.OP_ISA)) {
        const operator = this.previous();
        const right = this.term(context);
        expr = new BinaryExpr(expr, operator, right);
      }
      return expr;
    }
    chainedComparison(context) {
      const expr = this.term(context);
      const operands = [expr];
      const operators = [];
      while (this.tokenMatch(
        TokenType.OP_NOT_EQUALS,
        TokenType.OP_EQUALS,
        TokenType.OP_GREATER,
        TokenType.OP_GREATER_EQUALS,
        TokenType.OP_LESS,
        TokenType.OP_LESS_EQUALS
      )) {
        const operator = this.previous();
        const right = this.term(context);
        operators.push(operator);
        operands.push(right);
      }
      if (operators.length == 0) {
        return expr;
      } else if (operators.length == 1) {
        return new BinaryExpr(operands[0], operators[0], operands[1]);
      } else {
        return new ChainedComparisonExpr(operands, operators);
      }
    }
    term(context) {
      let expr = this.factor(context);
      if (!this.isFollowedByUnaryMinus(context)) {
        while (this.tokenMatch(TokenType.OP_MINUS, TokenType.OP_PLUS)) {
          const operator = this.previous();
          const right = this.factor(context);
          expr = new BinaryExpr(expr, operator, right);
        }
      }
      return expr;
    }
    /**
     * Checks if the expression is followed by an unary-minus
     *
     * If at the beginning of statement and expr is a property access or identifier
     * AND next token is OP_MINUS w/afterSpace AND whatever comes after OP_MINUS is not afterSpace,
     * then bypass this: don't try to match term
     */
    isFollowedByUnaryMinus(context) {
      let followedByMinus = this.peek().tokenType == TokenType.OP_MINUS;
      if (context.parsingStatementExpr && followedByMinus) {
        const hasSpaceBeforeMinus = this.peek().afterSpace;
        const peekOne = this.peekAmount(1);
        const hasSpaceAfterMinus = peekOne != null && peekOne.afterSpace;
        return hasSpaceBeforeMinus && !hasSpaceAfterMinus;
      } else {
        return false;
      }
    }
    factor(context) {
      let expr = this.power(context);
      while (this.tokenMatch(TokenType.OP_DIV, TokenType.OP_MULT, TokenType.OP_MOD)) {
        const operator = this.previous();
        const right = this.power(context);
        expr = new BinaryExpr(expr, operator, right);
      }
      return expr;
    }
    power(context) {
      let expr = this.unary(context);
      while (this.tokenMatch(TokenType.OP_POW)) {
        const operator = this.previous();
        const right = this.unary(context);
        expr = new BinaryExpr(expr, operator, right);
      }
      return expr;
    }
    unary(context) {
      if (this.tokenMatch(TokenType.OP_MINUS, TokenType.KW_NEW)) {
        const operator = this.previous();
        const right = this.call(context);
        if (right instanceof Literal && typeof right.value == "number" && operator.tokenType == TokenType.OP_MINUS) {
          const fullLocation = operator.location.upTo(right.location());
          return new Literal(-right.value, fullLocation);
        } else {
          return new UnaryExpr(operator, right);
        }
      } else if (this.tokenMatch(TokenType.OP_FUNCREF)) {
        return this.functionReference(context);
      } else {
        return this.call(context);
      }
    }
    functionReference(context) {
      const openingToken = this.previous();
      const refTarget = this.call(context);
      if (refTarget instanceof IdentifierExpr || refTarget instanceof DotAccessExpr || refTarget instanceof IndexedAccessExpr) {
        const fullLocation = openingToken.location.upTo(refTarget.location());
        return new FunctionRefExpr(refTarget, fullLocation);
      } else {
        throw new ParserError("Invalid reference target for '@'", refTarget.location().start);
      }
    }
    call(context) {
      let expr = this.primary(context);
      let continueParsing = true;
      while (continueParsing) {
        if (context.parsingStatementExpr && this.matchesNonAfterSpaces(TokenType.OPEN_ROUND)) {
          const nonStatementExprContext = context.leaveParsingStatementExpr();
          expr = this.finishCall(expr, nonStatementExprContext);
        } else if (!context.parsingStatementExpr && this.tokenMatch(TokenType.OPEN_ROUND)) {
          expr = this.finishCall(expr, context);
        } else if (this.matchesNonAfterSpaces(TokenType.OPEN_SQUARE)) {
          expr = this.indexedAccessOrSlicing(expr, context);
        } else if (this.matchesNonAfterSpaces(TokenType.DOT)) {
          const propertyName = this.consume(
            TokenType.IDENTIFIER_TK,
            "Expected property name after '.'"
          );
          expr = new DotAccessExpr(expr, propertyName);
          if (this.peek().afterSpace) {
            continueParsing = false;
          }
        } else {
          continueParsing = false;
        }
      }
      return expr;
    }
    finishCall(callTarget, context) {
      let args = [];
      if (!this.check(TokenType.CLOSE_ROUND)) {
        do {
          const argumentExpression = this.functionBodyOrExpr(context);
          args.push(argumentExpression);
        } while (this.tokenMatch(TokenType.COMMA));
      }
      this.consume(TokenType.CLOSE_ROUND, "Expected closing ')' after function arguments");
      const closingToken = this.previous();
      const fullLocation = callTarget.location().upTo(closingToken.location);
      return new FunctionCallExpr(callTarget, args, fullLocation);
    }
    functionBodyOrExpr(context) {
      if (this.tokenMatch(TokenType.KW_FUNCTION)) {
        return this.functionBody(context);
      } else {
        return this.expression(context);
      }
    }
    indexedAccessOrSlicing(targetObj, context) {
      const openingToken = this.previous();
      let slicing = false;
      let startExpr = void 0;
      let stopExpr = void 0;
      let indexExpr = void 0;
      if (this.tokenMatch(TokenType.COLON)) {
        slicing = true;
        if (!this.check(TokenType.CLOSE_SQUARE)) {
          stopExpr = this.expression(context);
        }
      } else {
        const expr = this.expression(context);
        if (this.tokenMatch(TokenType.COLON)) {
          slicing = true;
          startExpr = expr;
          if (!this.check(TokenType.CLOSE_SQUARE)) {
            stopExpr = this.expression(context);
          }
        } else {
          indexExpr = expr;
        }
      }
      this.consume(TokenType.CLOSE_SQUARE, "Expected closing ']' for indexed access. Found: " + this.peek().tokenType);
      const closingToken = this.previous();
      const fullRange = SrcLocation.forTokenRange(openingToken, closingToken);
      if (slicing) {
        return new ListSlicingExpr(targetObj, startExpr, stopExpr, fullRange);
      } else {
        return new IndexedAccessExpr(targetObj, indexExpr, fullRange);
      }
    }
    primary(context) {
      if (this.tokenMatch(TokenType.KW_FALSE)) {
        return new Literal(0, this.previous().location);
      } else if (this.tokenMatch(TokenType.KW_TRUE)) {
        return new Literal(1, this.previous().location);
      } else if (this.tokenMatch(TokenType.KW_NULL)) {
        return new Literal(null, this.previous().location);
      } else if (this.tokenMatch(TokenType.KW_SUPER)) {
        return this.superExpr(context);
      } else if (this.tokenMatch(TokenType.INT_LITERAL, TokenType.FLOAT_LITERAL, TokenType.STRING_LITERAL)) {
        const token = this.previous();
        return new Literal(token.value, token.location);
      } else if (this.check(TokenType.IDENTIFIER_TK)) {
        return this.identifier();
      } else if (this.tokenMatch(TokenType.OPEN_ROUND)) {
        return this.groupingExpr(context);
      } else if (this.tokenMatch(TokenType.OPEN_SQUARE)) {
        return this.listLiteral(context);
      } else if (this.tokenMatch(TokenType.OPEN_CURLY)) {
        return this.mapLiteral(context);
      } else {
        throw this.failForMissingExpression();
      }
    }
    failForMissingExpression() {
      const found = this.peek().tokenType;
      let msg = "";
      if (found === TokenType.KW_END_IF) {
        msg = "'end if' without matching 'if'";
      } else if (found === TokenType.KW_END_FOR) {
        msg = "'end for' without matching 'for'";
      } else if (found === TokenType.KW_END_WHILE) {
        msg = "'end while' without matching 'while'";
      } else if (found === TokenType.KW_END_FUNCTION) {
        msg = "'end function' without matching 'function'";
      } else if (found === TokenType.KW_FUNCTION) {
        msg = "unexpected keyword 'function' at start of line";
      } else {
        msg = "Expected expression. Found: " + TokenType[found];
      }
      return this.failParsing(msg);
    }
    groupingExpr(context) {
      const openingToken = this.previous();
      const expr = this.expression(context);
      this.consume(TokenType.CLOSE_ROUND);
      const closingToken = this.previous();
      const fullLocation = SrcLocation.forTokenRange(openingToken, closingToken);
      return new GroupingExpr(expr, fullLocation);
    }
    identifier() {
      const token = this.consume(TokenType.IDENTIFIER_TK, "Identifier expected");
      return new IdentifierExpr(token);
    }
    superExpr(context) {
      if (context.insideFunction) {
        const token = this.previous();
        return new SuperExpr(token.location);
      } else {
        throw this.failParsing("Keyword 'super' only allowed inside a function");
      }
    }
    listLiteral(context) {
      const openingToken = this.previous();
      let elements = [];
      if (!this.check(TokenType.CLOSE_SQUARE)) {
        let continueParsing = true;
        do {
          if (this.previous().tokenType == TokenType.COMMA && this.check(TokenType.CLOSE_SQUARE)) {
            continueParsing = false;
          } else {
            const argumentExpression = this.expression(context);
            elements.push(argumentExpression);
          }
        } while (this.tokenMatch(TokenType.COMMA) && continueParsing);
      }
      this.consume(TokenType.CLOSE_SQUARE, "Expected closing ']' in list literal");
      const closingToken = this.previous();
      const fullLocation = SrcLocation.forTokenRange(openingToken, closingToken);
      return new ListExpr(elements, fullLocation);
    }
    mapLiteral(context) {
      const openingToken = this.previous();
      let elements = /* @__PURE__ */ new Map();
      if (!this.check(TokenType.CLOSE_CURLY)) {
        let continueParsing = true;
        do {
          if (this.previous().tokenType == TokenType.COMMA && this.check(TokenType.CLOSE_CURLY)) {
            continueParsing = false;
          } else {
            const key = this.expression(context);
            this.consume(TokenType.COLON, "Expected ':' after key. Found: " + this.peek().tokenType);
            const value = this.expression(context);
            elements.set(key, value);
          }
        } while (this.tokenMatch(TokenType.COMMA) && continueParsing);
      }
      this.consume(TokenType.CLOSE_CURLY, "Expected closing '}' in map literal");
      const closingToken = this.previous();
      const fullLocation = SrcLocation.forTokenRange(openingToken, closingToken);
      return new MapExpr(elements, fullLocation);
    }
    functionBody(context) {
      const openingToken = this.previous();
      const functionContext = context.enterFunction();
      let args = [];
      if (this.tokenMatch(TokenType.OPEN_ROUND)) {
        do {
          if (this.check(TokenType.IDENTIFIER_TK)) {
            const identifierExpr = this.identifier();
            const name = identifierExpr.identifier.value;
            let fullLocation2;
            let defaultValue;
            if (this.tokenMatch(TokenType.ASSIGN)) {
              const defaultValueExpr = this.unary(context);
              defaultValue = this.ensureLiteral(defaultValueExpr);
              fullLocation2 = identifierExpr.location().upTo(defaultValue.location());
            } else {
              defaultValue = void 0;
              fullLocation2 = identifierExpr.location();
            }
            const argument = new Argument(name, defaultValue, fullLocation2);
            args.push(argument);
          }
        } while (this.tokenMatch(TokenType.COMMA));
        this.consume(TokenType.CLOSE_ROUND, "Expected closing ')' after argument list");
      }
      const bodyStatements = this.parseUntil([TokenType.KW_END_FUNCTION], functionContext);
      this.consume(TokenType.KW_END_FUNCTION, "Expected 'end function' at the end of function-body");
      const closingToken = this.previous();
      const fullLocation = SrcLocation.forTokenRange(openingToken, closingToken);
      return new FunctionBodyExpr(args, bodyStatements, fullLocation);
    }
    ensureLiteral(expr) {
      if (expr instanceof Literal) {
        return expr;
      } else {
        throw this.failParsing("Default value should be literal");
      }
    }
    consume(tokenType, message = null) {
      if (this.check(tokenType)) {
        return this.advance();
      } else if (message != null) {
        throw this.failParsing(message);
      } else {
        const tokenFound = this.peek();
        const msg = `got ${toOfficialImplTokenName(tokenFound.tokenType)} where ${toOfficialImplTokenName(tokenType)} is required`;
        throw this.failParsing(msg);
      }
    }
    /**
     * Tries to consume as many of the token-types as possible, at least one
     * */
    consumeAtLeastOne(tokenTypes, message) {
      let shouldConsume = true;
      let tokensConsumed = 0;
      while (!this.isAtEnd() && shouldConsume) {
        let matchFound = false;
        for (let tokenType of tokenTypes) {
          if (this.check(tokenType)) {
            matchFound = true;
            tokensConsumed += 1;
            this.advance();
          }
        }
        if (!matchFound) {
          shouldConsume = false;
        }
      }
      if (tokensConsumed == 0) {
        const pos = this.peek().location.start;
        throw new ParserError(message, pos);
      }
    }
    failParsing(message) {
      let pos = this.peek().location.start;
      if (this.peek().tokenType === TokenType.EOF && pos.col !== 0) {
        pos = pos.copy();
        pos.moveToNewLine();
      }
      return new ParserError(message, pos);
    }
    tokenMatch(...types) {
      for (let tokenType of types) {
        if (this.check(tokenType)) {
          this.advance();
          return true;
        }
      }
      return false;
    }
    matchesNonAfterSpaces(tokenType) {
      const token = this.peek();
      if (token.tokenType == tokenType && !token.afterSpace) {
        this.advance();
        return true;
      } else {
        return false;
      }
    }
    /**
     * Checks tokens until the next newline / semicolon / EOF.
     * That is: within a statement boundary
     *
     * Useful for "guessing" statements
     * */
    findTokenWithinStatementBoundary(tokenTypes) {
      let idx = this.current;
      while (true) {
        const token = this.tokens[idx];
        if ([TokenType.EOF, TokenType.SEMICOLON, TokenType.NEWLINE].includes(token.tokenType)) {
          return null;
        } else if (tokenTypes.includes(token.tokenType)) {
          return token.tokenType;
        }
        idx += 1;
      }
    }
    check(tokenType) {
      if (this.current > this.tokens.length) {
        return false;
      } else {
        return this.peek().tokenType == tokenType;
      }
    }
    advance() {
      if (!this.isAtEnd()) {
        this.current += 1;
      }
      return this.previous();
    }
    isAtEnd() {
      return this.peek().tokenType == TokenType.EOF;
    }
    peek() {
      return this.tokens[this.current];
    }
    peekAmount(amount) {
      const idx = this.current + amount;
      if (idx < this.tokens.length) {
        return this.tokens[idx];
      } else {
        return null;
      }
    }
    previous() {
      return this.tokens[this.current - 1];
    }
  };
  var Runtime = class {
    constructor(vm) {
      this.vm = vm;
    }
    newMap() {
      return new MSMap(this.vm);
    }
    get globals() {
      return this.vm.globalContext;
    }
    addIntrinsic(signature, impl) {
      this.vm.addIntrinsic(signature, impl);
    }
    addMapIntrinsic(target, signature, impl) {
      this.vm.addMapIntrinsic(target, signature, impl);
    }
  };
  var CooperativeRunner = class {
    constructor(vm, code) {
      this.vm = vm;
      this.code = code;
      this.vm.prepareForRunning(code);
      this.vm.setRunAfterSuspended(false);
    }
    runSomeCycles() {
      if (!this.isFinished()) {
        this.vm.runSomeCycles();
      }
    }
    stop() {
      this.vm.stopRunning();
    }
    getCurrentSourceLocation() {
      const fileName = this.vm.getCurrentSrcFileName();
      const lineNr = this.vm.getCurrentSrcLineNr();
      return [fileName, lineNr];
    }
    isFinished() {
      const result = this.vm.isFinished();
      return result;
    }
    get compiledCode() {
      return this.code;
    }
    getLastValue() {
      return this.vm.lastValue;
    }
  };
  var StdRunner = class {
    constructor(vm, code) {
      this.vm = vm;
      this.code = code;
      this.vm.prepareForRunning(code);
    }
    async runUntilDone() {
      const vm = this.vm;
      return new Promise((resolve) => {
        vm.onFinished = () => {
          resolve(true);
        };
        vm.run();
      });
    }
    stop() {
      this.vm.stopRunning();
    }
    getCurrentSourceLocation() {
      const fileName = this.vm.getCurrentSrcFileName();
      const lineNr = this.vm.getCurrentSrcLineNr();
      return [fileName, lineNr];
    }
    isFinished() {
      const result = this.vm.isFinished();
      return result;
    }
    get compiledCode() {
      return this.code;
    }
  };
  var Interpreter = class {
    constructor(stdoutCallback = null, stderrCallback = null) {
      __publicField(this, "stderrCallback");
      __publicField(this, "vm");
      __publicField(this, "_runtime");
      if (!stdoutCallback) {
        stdoutCallback = (line) => {
          console.log(line);
        };
      }
      if (!stderrCallback) {
        stderrCallback = stdoutCallback;
      }
      this.stderrCallback = stderrCallback;
      this.vm = new Processor(stdoutCallback, stderrCallback);
      this._runtime = new Runtime(this.vm);
      addStandardIntrinsics(this.vm);
    }
    async runSrcCode(srcCode, srcName) {
      const code = this.compileSrcCode(srcCode, srcName);
      if (code) {
        const runner = new StdRunner(this.vm, code);
        const result = await runner.runUntilDone();
        return result;
      } else {
        return false;
      }
    }
    getStandardRunner(srcCode, srcName) {
      const code = this.compileSrcCode(srcCode, srcName);
      if (code) {
        const runner = new StdRunner(this.vm, code);
        return runner;
      } else {
        return null;
      }
    }
    getCooperativeRunner(srcCode, srcName) {
      const code = this.compileSrcCode(srcCode, srcName);
      if (code) {
        const runner = new CooperativeRunner(this.vm, code);
        return runner;
      } else {
        return null;
      }
    }
    get runtime() {
      return this._runtime;
    }
    debugSrcCode(srcCode, callbacks, srcName) {
      const code = this.compileSrcCode(srcCode, srcName);
      if (code) {
        const d = this.debugCompiledCode(code, callbacks);
        return d;
      } else {
        return null;
      }
    }
    // Return a promise that is resolved only when the module code
    // is done running.
    runSrcAsModule(moduleName, srcCode) {
      const invocationCode = this.compileModuleInvocation(moduleName, srcCode);
      const vm = this.vm;
      const promise = vm.runAtCurrentPosition(invocationCode);
      return promise;
    }
    stopExecution() {
      this.vm.stopRunning();
    }
    compileSrcCode(srcCode, srcName) {
      let parsedStatements = [];
      try {
        const p = new Parser(srcCode);
        parsedStatements = p.parse();
      } catch (e) {
        if (e["message"]) {
          console.error(e);
          this.stderrCallback(e.message);
        }
      }
      if (parsedStatements.length > 0) {
        const compiler = new Compiler(parsedStatements, srcName);
        const code = compiler.compile();
        return code;
      } else {
        return null;
      }
    }
    debugCompiledCode(prgCode, callbacks) {
      const vm = this.vm;
      const dbg = new Debugger(vm);
      dbg.onSrcChange = () => {
        callbacks.onSrcChange(dbg);
      };
      dbg.onFinished = () => {
        callbacks.onFinished(dbg);
      };
      vm.prepareForRunning(prgCode);
      dbg.start();
      return dbg;
    }
    compileModuleInvocation(moduleName, srcCode) {
      const p = new Parser(srcCode);
      const parsedStatements = p.parse();
      const compiler = new Compiler(parsedStatements, `${moduleName}.ms`);
      const code = compiler.compileModuleInvocation(moduleName);
      return code;
    }
  };

  // src/msTerminal.ts
  var import_xterm2 = __toESM(require_xterm());
  var import_xterm_readline = __toESM(require_readline());

  // src/version-config.ts
  var versionConfig = {
    miniscript: "1.6.2",
    buildDate: "2024-06-24",
    hostName: "miniscript-tryit",
    hostInfo: "https://github.com/JoeStrout/miniscript-tryit"
  };

  // src/basicIO.ts
  var BasicIO = class {
    constructor(xterm, readline) {
      this.xterm = xterm;
      this.readline = readline;
    }
    addIntrinsics(runtime) {
      const outerThis = this;
      runtime.addIntrinsic(
        "input(prompt=null)",
        function(prompt) {
          return outerThis.input(prompt);
        }
      );
      runtime.addIntrinsic(
        "version",
        function() {
          var result = runtime.newMap();
          result.set("miniscript", versionConfig.miniscript);
          result.set("buildDate", versionConfig.buildDate);
          result.set("hostName", versionConfig.hostName);
          result.set("hostInfo", versionConfig.hostInfo);
          return result;
        }
      );
    }
    async input(prompt) {
      if (prompt === null) {
        prompt = "";
      }
      return this.readline.read(prompt).then((txt) => {
        return txt;
      });
    }
  };

  // src/moduleLoader.ts
  var ModuleLoader = class {
    constructor(interp, fileSystem) {
      this.interp = interp;
      this.fileSystem = fileSystem;
      this.runtime = interp.runtime;
    }
    runtime;
    addIntrinsics() {
      const outerThis = this;
      const runtime = this.runtime;
      runtime.addIntrinsic(
        "import(moduleName)",
        function(moduleName) {
          return outerThis.import(moduleName);
        }
      );
    }
    import(moduleName) {
      const fetchPromise = this.fetchCode(moduleName);
      const runPromise = fetchPromise.then((srcCode) => {
        return this.runSrcAsModule(moduleName, srcCode);
      });
      return runPromise;
    }
    async fetchCode(moduleName) {
      const moduleFileName = `${moduleName}.ms`;
      const fileSystem = this.fileSystem;
      return fileSystem.getSource(moduleFileName).then((srcCode) => {
        return srcCode;
      }).catch(() => {
        console.info("The above HTTP failed request is normal. Trying to fetch system lib ...");
        return fileSystem.getSource("/lib/" + moduleFileName);
      }).catch(() => {
        throw new Error(`Failed to load module ${moduleName}`);
      });
    }
    runSrcAsModule(moduleName, srcCode) {
      const runPromise = this.interp.runSrcAsModule(moduleName, srcCode);
      return runPromise;
    }
  };

  // src/msTerminal.ts
  var MSTerminal = class {
    constructor(fileSystem, terminalOptions) {
      this.fileSystem = fileSystem;
      const outCallback = (txt) => {
        this.terminal.writeln(txt);
      };
      this.interp = new Interpreter(outCallback, outCallback);
      const [terminal, readine] = this.setupTerminal(terminalOptions);
      this.addIntrinsics(terminal, readine);
      this.terminal = terminal;
    }
    interp;
    terminal;
    abort = false;
    addIntrinsics(terminal, readline) {
      const runtime = this.interp.runtime;
      const moduleLoader = new ModuleLoader(this.interp, this.fileSystem);
      const basicIO = new BasicIO(terminal, readline);
      moduleLoader.addIntrinsics();
      basicIO.addIntrinsics(runtime);
    }
    setupTerminal(options) {
      const rl = new import_xterm_readline.Readline();
      const term = new import_xterm2.Terminal(options);
      const container = document.getElementById("terminal");
      term.loadAddon(rl);
      term.open(container);
      term.focus();
      return [term, rl];
    }
    async runCodeFromPath(mainFile) {
      return new Promise(async (resolve) => {
        const srcCode = await this.fileSystem.getSource(mainFile);
        const coopRunner = this.interp.getCooperativeRunner(srcCode, mainFile);
        if (coopRunner) {
          this.abort = false;
          this.runCycles(coopRunner, (err) => {
            if (err)
              reject(err);
            else
              resolve();
          });
        }
      });
    }
    async runCodeFromString(srcCode) {
      return new Promise(async (resolve) => {
        const coopRunner = this.interp.getCooperativeRunner(srcCode, null);
        if (coopRunner) {
          this.abort = false;
          this.runCycles(coopRunner, (err) => {
            if (err)
              reject(err);
            else
              resolve();
          });
        } else {
          reject(new Error("Unable to get coopRunner"));
        }
      });
    }
    runCycles(coopRunner, onFinished) {
      if (!coopRunner.isFinished() && !this.abort) {
        try {
          coopRunner.runSomeCycles();
          setTimeout(() => {
            this.runCycles(coopRunner, onFinished);
          }, 0);
        } catch (err) {
          console.log("caught error in runCycles");
          onFinished(err);
        }
      } else {
        onFinished();
      }
    }
  };

  // src/fileSystems/fileSystem.ts
  var MSFileSystem = class {
  };

  // src/fileSystems/httpFileSystem.ts
  var HttpFileSystem = class extends MSFileSystem {
    constructor(indexBasePath, scriptBasePath) {
      super();
      this.indexBasePath = indexBasePath;
      this.scriptBasePath = scriptBasePath;
    }
    static splitPathAndFileName(filePath) {
      const parts = filePath.split("/").filter((s) => s);
      const path = parts.slice(0, parts.length - 1).join("/");
      const fileName = parts[parts.length - 1];
      return [path, fileName];
    }
    async getSource(filePath) {
      const absolutePath = this.getAbsolutePath(filePath);
      return fetch(absolutePath).then((response) => {
        if (response.status == 200) {
          return response.text();
        } else {
          throw new Error("File not found: " + filePath);
        }
      }).then((text) => text);
    }
    getAbsolutePath(filePath) {
      let absolutePath;
      if (filePath.startsWith("/")) {
        absolutePath = this.indexBasePath + filePath;
      } else {
        absolutePath = this.scriptBasePath + "/" + filePath;
      }
      return absolutePath;
    }
  };

  // src/index.ts
  var msTerm = null;
  async function runCodeFromPath(fileSystem, scriptFile) {
    if (!msTerm)
      msTerm = new MSTerminal(fileSystem, window.terminalOptions);
    window.xterm = msTerm.terminal;
    await msTerm.runCodeFromPath(scriptFile);
  }
  async function runCodeFromString(sourceCode, fileSystem) {
    if (!fileSystem) {
      fileSystem = new HttpFileSystem("", "");
    }
    if (!msTerm)
      msTerm = new MSTerminal(fileSystem, window.terminalOptions);
    window.xterm = msTerm.terminal;
    try {
      await msTerm.runCodeFromString(sourceCode);
    } catch (err) {
      console.log("error caught");
      msTerm.terminal.writeln("Error found");
    }
  }
  function abortCodeRun() {
    if (msTerm)
      msTerm.abort = true;
  }
  window.runCodeFromPath = runCodeFromPath;
  window.runCodeFromString = runCodeFromString;
  window.abortCodeRun = abortCodeRun;
  addEventListener("DOMContentLoaded", async (_) => {
    const body = document.querySelector("body");
    const fileName = body.getAttribute("data-src-file");
    if (typeof fileName !== "string") {
      console.log("No source file specified on body tag");
      return;
    }
    const terminalOptions = window.terminalOptions;
    const [scriptBasePath, srcFile] = HttpFileSystem.splitPathAndFileName(fileName);
    const indexBasePath = new URL(document.baseURI).pathname.split("/").slice(0, -1).join("/");
    const fileSystem = new HttpFileSystem(indexBasePath, scriptBasePath);
    runCodeFromPath(fileSystem, srcFile);
  });
})();
//# sourceMappingURL=miniscript-web-term.js.map
