"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-autoplay";
exports.ids = ["vendor-chunks/embla-carousel-autoplay"];
exports.modules = {

/***/ "(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Autoplay)\n/* harmony export */ });\nconst defaultOptions = {\n    active: true,\n    breakpoints: {},\n    delay: 4000,\n    jump: false,\n    playOnInit: true,\n    stopOnFocusIn: true,\n    stopOnInteraction: true,\n    stopOnMouseEnter: false,\n    stopOnLastSnap: false,\n    rootNode: null\n};\nfunction Autoplay(userOptions = {}) {\n    let options;\n    let emblaApi;\n    let destroyed;\n    let playing = false;\n    let resume = true;\n    let jump = false;\n    let animationFrame = 0;\n    let timer = 0;\n    function init(emblaApiInstance, optionsHandler) {\n        emblaApi = emblaApiInstance;\n        const { mergeOptions, optionsAtMedia } = optionsHandler;\n        const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);\n        const allOptions = mergeOptions(optionsBase, userOptions);\n        options = optionsAtMedia(allOptions);\n        if (emblaApi.scrollSnapList().length <= 1) return;\n        jump = options.jump;\n        destroyed = false;\n        const { eventStore, ownerDocument } = emblaApi.internalEngine();\n        const emblaRoot = emblaApi.rootNode();\n        const root = options.rootNode && options.rootNode(emblaRoot) || emblaRoot;\n        emblaApi.on(\"pointerDown\", clearTimer);\n        if (!options.stopOnInteraction) {\n            emblaApi.on(\"pointerUp\", startTimer);\n        }\n        if (options.stopOnMouseEnter) {\n            eventStore.add(root, \"mouseenter\", ()=>{\n                resume = false;\n                clearTimer();\n            });\n            if (!options.stopOnInteraction) {\n                eventStore.add(root, \"mouseleave\", ()=>{\n                    resume = true;\n                    startTimer();\n                });\n            }\n        }\n        if (options.stopOnFocusIn) {\n            eventStore.add(root, \"focusin\", clearTimer);\n            if (!options.stopOnInteraction) {\n                eventStore.add(root, \"focusout\", startTimer);\n            }\n        }\n        eventStore.add(ownerDocument, \"visibilitychange\", ()=>{\n            if (ownerDocument.visibilityState === \"hidden\") {\n                resume = playing;\n                return clearTimer();\n            }\n            if (resume) startTimer();\n        });\n        if (options.playOnInit) {\n            emblaApi.on(\"init\", startTimer).on(\"reInit\", startTimer);\n        }\n    }\n    function destroy() {\n        destroyed = true;\n        playing = false;\n        emblaApi.off(\"init\", startTimer).off(\"reInit\", startTimer);\n        emblaApi.off(\"pointerDown\", clearTimer);\n        if (!options.stopOnInteraction) emblaApi.off(\"pointerUp\", startTimer);\n        clearTimer();\n        cancelAnimationFrame(animationFrame);\n        animationFrame = 0;\n    }\n    function startTimer() {\n        if (destroyed) return;\n        if (!resume) return;\n        if (!playing) emblaApi.emit(\"autoplay:play\");\n        const { ownerWindow } = emblaApi.internalEngine();\n        ownerWindow.clearInterval(timer);\n        timer = ownerWindow.setInterval(next, options.delay);\n        playing = true;\n    }\n    function clearTimer() {\n        if (destroyed) return;\n        if (playing) emblaApi.emit(\"autoplay:stop\");\n        const { ownerWindow } = emblaApi.internalEngine();\n        ownerWindow.clearInterval(timer);\n        timer = 0;\n        playing = false;\n    }\n    function play(jumpOverride) {\n        if (typeof jumpOverride !== \"undefined\") jump = jumpOverride;\n        resume = true;\n        startTimer();\n    }\n    function stop() {\n        if (playing) clearTimer();\n    }\n    function reset() {\n        if (playing) play();\n    }\n    function isPlaying() {\n        return playing;\n    }\n    function next() {\n        animationFrame = requestAnimationFrame(()=>{\n            const { index } = emblaApi.internalEngine();\n            const nextIndex = index.clone().add(1).get();\n            const lastIndex = emblaApi.scrollSnapList().length - 1;\n            const kill = options.stopOnLastSnap && nextIndex === lastIndex;\n            if (kill) clearTimer();\n            if (emblaApi.canScrollNext()) {\n                emblaApi.scrollNext(jump);\n            } else {\n                emblaApi.scrollTo(0, jump);\n            }\n        });\n    }\n    const self = {\n        name: \"autoplay\",\n        options: userOptions,\n        init,\n        destroy,\n        play,\n        stop,\n        reset,\n        isPlaying\n    };\n    return self;\n}\nAutoplay.globalOptions = undefined;\n //# sourceMappingURL=embla-carousel-autoplay.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkvZXNtL2VtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLGFBQWEsQ0FBQztJQUNkQyxPQUFPO0lBQ1BDLE1BQU07SUFDTkMsWUFBWTtJQUNaQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsa0JBQWtCO0lBQ2xCQyxnQkFBZ0I7SUFDaEJDLFVBQVU7QUFDWjtBQUVBLFNBQVNDLFNBQVNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLElBQUlDO0lBQ0osSUFBSUM7SUFDSixJQUFJQztJQUNKLElBQUlDLFVBQVU7SUFDZCxJQUFJQyxTQUFTO0lBQ2IsSUFBSWIsT0FBTztJQUNYLElBQUljLGlCQUFpQjtJQUNyQixJQUFJQyxRQUFRO0lBQ1osU0FBU0MsS0FBS0MsZ0JBQWdCLEVBQUVDLGNBQWM7UUFDNUNSLFdBQVdPO1FBQ1gsTUFBTSxFQUNKRSxZQUFZLEVBQ1pDLGNBQWMsRUFDZixHQUFHRjtRQUNKLE1BQU1HLGNBQWNGLGFBQWF2QixnQkFBZ0JXLFNBQVNlLGFBQWE7UUFDdkUsTUFBTUMsYUFBYUosYUFBYUUsYUFBYWI7UUFDN0NDLFVBQVVXLGVBQWVHO1FBQ3pCLElBQUliLFNBQVNjLGNBQWMsR0FBR0MsTUFBTSxJQUFJLEdBQUc7UUFDM0N6QixPQUFPUyxRQUFRVCxJQUFJO1FBQ25CVyxZQUFZO1FBQ1osTUFBTSxFQUNKZSxVQUFVLEVBQ1ZDLGFBQWEsRUFDZCxHQUFHakIsU0FBU2tCLGNBQWM7UUFDM0IsTUFBTUMsWUFBWW5CLFNBQVNKLFFBQVE7UUFDbkMsTUFBTXdCLE9BQU9yQixRQUFRSCxRQUFRLElBQUlHLFFBQVFILFFBQVEsQ0FBQ3VCLGNBQWNBO1FBQ2hFbkIsU0FBU3FCLEVBQUUsQ0FBQyxlQUFlQztRQUMzQixJQUFJLENBQUN2QixRQUFRTixpQkFBaUIsRUFBRTtZQUM5Qk8s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QjtRQUNBUTtRQUNBRTtRQUNBQztRQUNBQztJQUNGO0lBQ0EsT0FBT1c7QUFDVDtBQUNBcEQsU0FBU2UsYUFBYSxHQUFHdUM7QUFFTSxDQUMvQix1REFBdUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvcy1yZWFjdC8uL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbC1hdXRvcGxheS9lc20vZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkuZXNtLmpzP2FhOTMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGFjdGl2ZTogdHJ1ZSxcbiAgYnJlYWtwb2ludHM6IHt9LFxuICBkZWxheTogNDAwMCxcbiAganVtcDogZmFsc2UsXG4gIHBsYXlPbkluaXQ6IHRydWUsXG4gIHN0b3BPbkZvY3VzSW46IHRydWUsXG4gIHN0b3BPbkludGVyYWN0aW9uOiB0cnVlLFxuICBzdG9wT25Nb3VzZUVudGVyOiBmYWxzZSxcbiAgc3RvcE9uTGFzdFNuYXA6IGZhbHNlLFxuICByb290Tm9kZTogbnVsbFxufTtcblxuZnVuY3Rpb24gQXV0b3BsYXkodXNlck9wdGlvbnMgPSB7fSkge1xuICBsZXQgb3B0aW9ucztcbiAgbGV0IGVtYmxhQXBpO1xuICBsZXQgZGVzdHJveWVkO1xuICBsZXQgcGxheWluZyA9IGZhbHNlO1xuICBsZXQgcmVzdW1lID0gdHJ1ZTtcbiAgbGV0IGp1bXAgPSBmYWxzZTtcbiAgbGV0IGFuaW1hdGlvbkZyYW1lID0gMDtcbiAgbGV0IHRpbWVyID0gMDtcbiAgZnVuY3Rpb24gaW5pdChlbWJsYUFwaUluc3RhbmNlLCBvcHRpb25zSGFuZGxlcikge1xuICAgIGVtYmxhQXBpID0gZW1ibGFBcGlJbnN0YW5jZTtcbiAgICBjb25zdCB7XG4gICAgICBtZXJnZU9wdGlvbnMsXG4gICAgICBvcHRpb25zQXRNZWRpYVxuICAgIH0gPSBvcHRpb25zSGFuZGxlcjtcbiAgICBjb25zdCBvcHRpb25zQmFzZSA9IG1lcmdlT3B0aW9ucyhkZWZhdWx0T3B0aW9ucywgQXV0b3BsYXkuZ2xvYmFsT3B0aW9ucyk7XG4gICAgY29uc3QgYWxsT3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhvcHRpb25zQmFzZSwgdXNlck9wdGlvbnMpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zQXRNZWRpYShhbGxPcHRpb25zKTtcbiAgICBpZiAoZW1ibGFBcGkuc2Nyb2xsU25hcExpc3QoKS5sZW5ndGggPD0gMSkgcmV0dXJuO1xuICAgIGp1bXAgPSBvcHRpb25zLmp1bXA7XG4gICAgZGVzdHJveWVkID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgZXZlbnRTdG9yZSxcbiAgICAgIG93bmVyRG9jdW1lbnRcbiAgICB9ID0gZW1ibGFBcGkuaW50ZXJuYWxFbmdpbmUoKTtcbiAgICBjb25zdCBlbWJsYVJvb3QgPSBlbWJsYUFwaS5yb290Tm9kZSgpO1xuICAgIGNvbnN0IHJvb3QgPSBvcHRpb25zLnJvb3ROb2RlICYmIG9wdGlvbnMucm9vdE5vZGUoZW1ibGFSb290KSB8fCBlbWJsYVJvb3Q7XG4gICAgZW1ibGFBcGkub24oJ3BvaW50ZXJEb3duJywgY2xlYXJUaW1lcik7XG4gICAgaWYgKCFvcHRpb25zLnN0b3BPbkludGVyYWN0aW9uKSB7XG4gICAgICBlbWJsYUFwaS5vbigncG9pbnRlclVwJywgc3RhcnRUaW1lcik7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0b3BPbk1vdXNlRW50ZXIpIHtcbiAgICAgIGV2ZW50U3RvcmUuYWRkKHJvb3QsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICByZXN1bWUgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lcigpO1xuICAgICAgfSk7XG4gICAgICBpZiAoIW9wdGlvbnMuc3RvcE9uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgZXZlbnRTdG9yZS5hZGQocm9vdCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgcmVzdW1lID0gdHJ1ZTtcbiAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zdG9wT25Gb2N1c0luKSB7XG4gICAgICBldmVudFN0b3JlLmFkZChyb290LCAnZm9jdXNpbicsIGNsZWFyVGltZXIpO1xuICAgICAgaWYgKCFvcHRpb25zLnN0b3BPbkludGVyYWN0aW9uKSB7XG4gICAgICAgIGV2ZW50U3RvcmUuYWRkKHJvb3QsICdmb2N1c291dCcsIHN0YXJ0VGltZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBldmVudFN0b3JlLmFkZChvd25lckRvY3VtZW50LCAndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcbiAgICAgIGlmIChvd25lckRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgcmVzdW1lID0gcGxheWluZztcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bWUpIHN0YXJ0VGltZXIoKTtcbiAgICB9KTtcbiAgICBpZiAob3B0aW9ucy5wbGF5T25Jbml0KSB7XG4gICAgICBlbWJsYUFwaS5vbignaW5pdCcsIHN0YXJ0VGltZXIpLm9uKCdyZUluaXQnLCBzdGFydFRpbWVyKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBkZXN0cm95ZWQgPSB0cnVlO1xuICAgIHBsYXlpbmcgPSBmYWxzZTtcbiAgICBlbWJsYUFwaS5vZmYoJ2luaXQnLCBzdGFydFRpbWVyKS5vZmYoJ3JlSW5pdCcsIHN0YXJ0VGltZXIpO1xuICAgIGVtYmxhQXBpLm9mZigncG9pbnRlckRvd24nLCBjbGVhclRpbWVyKTtcbiAgICBpZiAoIW9wdGlvbnMuc3RvcE9uSW50ZXJhY3Rpb24pIGVtYmxhQXBpLm9mZigncG9pbnRlclVwJywgc3RhcnRUaW1lcik7XG4gICAgY2xlYXJUaW1lcigpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICBhbmltYXRpb25GcmFtZSA9IDA7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcbiAgICBpZiAoZGVzdHJveWVkKSByZXR1cm47XG4gICAgaWYgKCFyZXN1bWUpIHJldHVybjtcbiAgICBpZiAoIXBsYXlpbmcpIGVtYmxhQXBpLmVtaXQoJ2F1dG9wbGF5OnBsYXknKTtcbiAgICBjb25zdCB7XG4gICAgICBvd25lcldpbmRvd1xuICAgIH0gPSBlbWJsYUFwaS5pbnRlcm5hbEVuZ2luZSgpO1xuICAgIG93bmVyV2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIHRpbWVyID0gb3duZXJXaW5kb3cuc2V0SW50ZXJ2YWwobmV4dCwgb3B0aW9ucy5kZWxheSk7XG4gICAgcGxheWluZyA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJUaW1lcigpIHtcbiAgICBpZiAoZGVzdHJveWVkKSByZXR1cm47XG4gICAgaWYgKHBsYXlpbmcpIGVtYmxhQXBpLmVtaXQoJ2F1dG9wbGF5OnN0b3AnKTtcbiAgICBjb25zdCB7XG4gICAgICBvd25lcldpbmRvd1xuICAgIH0gPSBlbWJsYUFwaS5pbnRlcm5hbEVuZ2luZSgpO1xuICAgIG93bmVyV2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIHRpbWVyID0gMDtcbiAgICBwbGF5aW5nID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gcGxheShqdW1wT3ZlcnJpZGUpIHtcbiAgICBpZiAodHlwZW9mIGp1bXBPdmVycmlkZSAhPT0gJ3VuZGVmaW5lZCcpIGp1bXAgPSBqdW1wT3ZlcnJpZGU7XG4gICAgcmVzdW1lID0gdHJ1ZTtcbiAgICBzdGFydFRpbWVyKCk7XG4gIH1cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpZiAocGxheWluZykgY2xlYXJUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGlmIChwbGF5aW5nKSBwbGF5KCk7XG4gIH1cbiAgZnVuY3Rpb24gaXNQbGF5aW5nKCkge1xuICAgIHJldHVybiBwbGF5aW5nO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpbmRleFxuICAgICAgfSA9IGVtYmxhQXBpLmludGVybmFsRW5naW5lKCk7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBpbmRleC5jbG9uZSgpLmFkZCgxKS5nZXQoKTtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGVtYmxhQXBpLnNjcm9sbFNuYXBMaXN0KCkubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGtpbGwgPSBvcHRpb25zLnN0b3BPbkxhc3RTbmFwICYmIG5leHRJbmRleCA9PT0gbGFzdEluZGV4O1xuICAgICAgaWYgKGtpbGwpIGNsZWFyVGltZXIoKTtcbiAgICAgIGlmIChlbWJsYUFwaS5jYW5TY3JvbGxOZXh0KCkpIHtcbiAgICAgICAgZW1ibGFBcGkuc2Nyb2xsTmV4dChqdW1wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVtYmxhQXBpLnNjcm9sbFRvKDAsIGp1bXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHNlbGYgPSB7XG4gICAgbmFtZTogJ2F1dG9wbGF5JyxcbiAgICBvcHRpb25zOiB1c2VyT3B0aW9ucyxcbiAgICBpbml0LFxuICAgIGRlc3Ryb3ksXG4gICAgcGxheSxcbiAgICBzdG9wLFxuICAgIHJlc2V0LFxuICAgIGlzUGxheWluZ1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cbkF1dG9wbGF5Lmdsb2JhbE9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCB7IEF1dG9wbGF5IGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJkZWZhdWx0T3B0aW9ucyIsImFjdGl2ZSIsImJyZWFrcG9pbnRzIiwiZGVsYXkiLCJqdW1wIiwicGxheU9uSW5pdCIsInN0b3BPbkZvY3VzSW4iLCJzdG9wT25JbnRlcmFjdGlvbiIsInN0b3BPbk1vdXNlRW50ZXIiLCJzdG9wT25MYXN0U25hcCIsInJvb3ROb2RlIiwiQXV0b3BsYXkiLCJ1c2VyT3B0aW9ucyIsIm9wdGlvbnMiLCJlbWJsYUFwaSIsImRlc3Ryb3llZCIsInBsYXlpbmciLCJyZXN1bWUiLCJhbmltYXRpb25GcmFtZSIsInRpbWVyIiwiaW5pdCIsImVtYmxhQXBpSW5zdGFuY2UiLCJvcHRpb25zSGFuZGxlciIsIm1lcmdlT3B0aW9ucyIsIm9wdGlvbnNBdE1lZGlhIiwib3B0aW9uc0Jhc2UiLCJnbG9iYWxPcHRpb25zIiwiYWxsT3B0aW9ucyIsInNjcm9sbFNuYXBMaXN0IiwibGVuZ3RoIiwiZXZlbnRTdG9yZSIsIm93bmVyRG9jdW1lbnQiLCJpbnRlcm5hbEVuZ2luZSIsImVtYmxhUm9vdCIsInJvb3QiLCJvbiIsImNsZWFyVGltZXIiLCJzdGFydFRpbWVyIiwiYWRkIiwidmlzaWJpbGl0eVN0YXRlIiwiZGVzdHJveSIsIm9mZiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZW1pdCIsIm93bmVyV2luZG93IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwibmV4dCIsInBsYXkiLCJqdW1wT3ZlcnJpZGUiLCJzdG9wIiwicmVzZXQiLCJpc1BsYXlpbmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbmRleCIsIm5leHRJbmRleCIsImNsb25lIiwiZ2V0IiwibGFzdEluZGV4Iiwia2lsbCIsImNhblNjcm9sbE5leHQiLCJzY3JvbGxOZXh0Iiwic2Nyb2xsVG8iLCJzZWxmIiwibmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js\n");

/***/ })

};
;