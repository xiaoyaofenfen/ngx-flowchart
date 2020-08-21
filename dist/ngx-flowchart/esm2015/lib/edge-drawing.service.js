import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { FlowchartConstants } from './ngx-flowchart.models';
let FcEdgeDrawingService = class FcEdgeDrawingService {
    constructor() {
    }
    getEdgeDAttribute(pt1, pt2, style) {
        let dAddribute = `M ${pt1.x}, ${pt1.y} `;
        if (style === FlowchartConstants.curvedStyle) {
            const sourceTangent = this.computeEdgeSourceTangent(pt1, pt2);
            const destinationTangent = this.computeEdgeDestinationTangent(pt1, pt2);
            dAddribute += `C ${sourceTangent.x}, ${sourceTangent.y} ${(destinationTangent.x - 50)}, ${destinationTangent.y} ${pt2.x}, ${pt2.y}`;
        }
        else {
            dAddribute += `L ${pt2.x}, ${pt2.y}`;
        }
        return dAddribute;
    }
    getEdgeCenter(pt1, pt2) {
        return {
            x: (pt1.x + pt2.x) / 2,
            y: (pt1.y + pt2.y) / 2
        };
    }
    computeEdgeTangentOffset(pt1, pt2) {
        return (pt2.y - pt1.y) / 2;
    }
    computeEdgeSourceTangent(pt1, pt2) {
        return {
            x: pt1.x,
            y: pt1.y + this.computeEdgeTangentOffset(pt1, pt2)
        };
    }
    computeEdgeDestinationTangent(pt1, pt2) {
        return {
            x: pt2.x,
            y: pt2.y - this.computeEdgeTangentOffset(pt1, pt2)
        };
    }
};
FcEdgeDrawingService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], FcEdgeDrawingService);
export { FcEdgeDrawingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRnZS1kcmF3aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmxvd2NoYXJ0LyIsInNvdXJjZXMiOlsibGliL2VkZ2UtZHJhd2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBWSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3RFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBRS9CO0lBQ0EsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEdBQWEsRUFBRSxHQUFhLEVBQUUsS0FBYTtRQUNsRSxJQUFJLFVBQVUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3pDLElBQUksS0FBSyxLQUFLLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtZQUM1QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN4RSxVQUFVLElBQUksS0FBSyxhQUFhLENBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQ3JJO2FBQU07WUFDTCxVQUFVLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxhQUFhLENBQUMsR0FBYSxFQUFFLEdBQWE7UUFDL0MsT0FBTztZQUNMLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVPLHdCQUF3QixDQUFDLEdBQWEsRUFBRSxHQUFhO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLHdCQUF3QixDQUFDLEdBQWEsRUFBRSxHQUFhO1FBQzNELE9BQU87WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVPLDZCQUE2QixDQUFDLEdBQWEsRUFBRSxHQUFhO1FBQ2hFLE9BQU87WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNuRCxDQUFDO0lBQ0osQ0FBQztDQUVGLENBQUE7QUExQ1ksb0JBQW9CO0lBRGhDLFVBQVUsRUFBRTs7R0FDQSxvQkFBb0IsQ0EwQ2hDO1NBMUNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZjQ29vcmRzLCBGbG93Y2hhcnRDb25zdGFudHMgfSBmcm9tICcuL25neC1mbG93Y2hhcnQubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZjRWRnZURyYXdpbmdTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFZGdlREF0dHJpYnV0ZShwdDE6IEZjQ29vcmRzLCBwdDI6IEZjQ29vcmRzLCBzdHlsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgZEFkZHJpYnV0ZSA9IGBNICR7cHQxLnh9LCAke3B0MS55fSBgO1xuICAgIGlmIChzdHlsZSA9PT0gRmxvd2NoYXJ0Q29uc3RhbnRzLmN1cnZlZFN0eWxlKSB7XG4gICAgICBjb25zdCBzb3VyY2VUYW5nZW50ID0gdGhpcy5jb21wdXRlRWRnZVNvdXJjZVRhbmdlbnQocHQxLCBwdDIpO1xuICAgICAgY29uc3QgZGVzdGluYXRpb25UYW5nZW50ID0gdGhpcy5jb21wdXRlRWRnZURlc3RpbmF0aW9uVGFuZ2VudChwdDEsIHB0Mik7XG4gICAgICBkQWRkcmlidXRlICs9IGBDICR7c291cmNlVGFuZ2VudC54fSwgJHtzb3VyY2VUYW5nZW50Lnl9ICR7KGRlc3RpbmF0aW9uVGFuZ2VudC54IC0gNTApfSwgJHtkZXN0aW5hdGlvblRhbmdlbnQueX0gJHtwdDIueH0sICR7cHQyLnl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZEFkZHJpYnV0ZSArPSBgTCAke3B0Mi54fSwgJHtwdDIueX1gO1xuICAgIH1cbiAgICByZXR1cm4gZEFkZHJpYnV0ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFZGdlQ2VudGVyKHB0MTogRmNDb29yZHMsIHB0MjogRmNDb29yZHMpOiBGY0Nvb3JkcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IChwdDEueCArIHB0Mi54KSAvIDIsXG4gICAgICB5OiAocHQxLnkgKyBwdDIueSkgLyAyXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZUVkZ2VUYW5nZW50T2Zmc2V0KHB0MTogRmNDb29yZHMsIHB0MjogRmNDb29yZHMpOiBudW1iZXIge1xuICAgIHJldHVybiAocHQyLnkgLSBwdDEueSkgLyAyO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlRWRnZVNvdXJjZVRhbmdlbnQocHQxOiBGY0Nvb3JkcywgcHQyOiBGY0Nvb3Jkcyk6IEZjQ29vcmRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcHQxLngsXG4gICAgICB5OiBwdDEueSArIHRoaXMuY29tcHV0ZUVkZ2VUYW5nZW50T2Zmc2V0KHB0MSwgcHQyKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVFZGdlRGVzdGluYXRpb25UYW5nZW50KHB0MTogRmNDb29yZHMsIHB0MjogRmNDb29yZHMpOiBGY0Nvb3JkcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHB0Mi54LFxuICAgICAgeTogcHQyLnkgLSB0aGlzLmNvbXB1dGVFZGdlVGFuZ2VudE9mZnNldChwdDEsIHB0MilcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==