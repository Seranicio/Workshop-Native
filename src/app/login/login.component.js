"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var imagepicker = require("nativescript-imagepicker");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this._user = "";
        this._pass = "";
        this.srcImg = "";
    }
    // What you want to run before the component renders.
    LoginComponent.prototype.ngOnInit = function () {
        this._user = "workshop@gmail.com";
    };
    LoginComponent.prototype.ulogin = function () {
        if (this._user == "workshop@gmail.com" && this._pass == "123") {
            this.router.navigate(['/afterlogin']);
        }
        else {
            alert("Lol. You even dont know your credentials!");
        }
    };
    LoginComponent.prototype.imagepicker = function () {
        var _that = this;
        var context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
                _that.srcImg = selected['_android'];
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3QztBQUN4QyxzREFBd0Q7QUFReEQ7SUFNRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBRTBCLENBQUM7SUFFdkMscURBQXFEO0lBQ3JELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFBO0lBQ25DLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0UsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLG9CQUFvQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFDO1lBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUNHO1lBQ0YsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRU0sb0NBQVcsR0FBbEI7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLEVBQUUsUUFBUSxDQUFDLHdDQUF3QztTQUN4RCxDQUFDLENBQUM7UUFDSCxPQUFPO2FBQ04sU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDO1lBQ0YsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVMsU0FBUztZQUNwQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsUUFBUTtnQkFDakMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBeENVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBTzRCLGVBQU07T0FOdkIsY0FBYyxDQXlDMUI7SUFBRCxxQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLCAvL2h0bWwgZmlsZSBmb3IgZnJvbnRlbmQgb2YgdGhlIGNvbXBvbmVudFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBfdXNlciA9IFwiXCI7XG4gIF9wYXNzID0gXCJcIjtcbiAgc3JjSW1nID0gXCJcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICAvLyBXaGF0IHlvdSB3YW50IHRvIHJ1biBiZWZvcmUgdGhlIGNvbXBvbmVudCByZW5kZXJzLlxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91c2VyID0gXCJ3b3Jrc2hvcEBnbWFpbC5jb21cIlxuICB9XG4gIFxuICBwdWJsaWMgdWxvZ2luKCkge1xuICAgIGlmKHRoaXMuX3VzZXIgPT0gXCJ3b3Jrc2hvcEBnbWFpbC5jb21cIiAmJiB0aGlzLl9wYXNzID09IFwiMTIzXCIpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWZ0ZXJsb2dpbiddKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGFsZXJ0KFwiTG9sLiBZb3UgZXZlbiBkb250IGtub3cgeW91ciBjcmVkZW50aWFscyFcIik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGltYWdlcGlja2VyKCkge1xuICAgIGxldCBfdGhhdCA9IHRoaXM7XG5cbiAgICBsZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICBtb2RlOiBcInNpbmdsZVwiIC8vIHVzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxuICAgIH0pO1xuICAgIGNvbnRleHRcbiAgICAuYXV0aG9yaXplKClcbiAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdGVkKSB7XG4gICAgICAgICAgX3RoYXQuc3JjSW1nID0gc2VsZWN0ZWRbJ19hbmRyb2lkJ107XG4gICAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=