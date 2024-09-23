import {
  Accordion,
  AccordionTab,
  ActivatedRoute,
  AppSharedModule,
  AutoFocus,
  BehaviorSubject,
  BrowserUtility,
  ButtonDirective,
  Card,
  ChangeDetectorRef,
  Checkbox,
  ContentService,
  DOCUMENT,
  DefaultValueAccessor,
  Dialog,
  DialogComponent,
  Dropdown,
  DropdownTranslateDirective,
  EnergyType,
  EventEmitter,
  ExportService,
  FilterService,
  FormsModule,
  FuelType,
  Game,
  IconClassPipe,
  IconSmClassPipe,
  InputNumber,
  InputNumberComponent,
  InputText,
  InputTextarea,
  InserterData,
  ItemId,
  KeyValuePipe,
  MaximizeType,
  Menu,
  Messages,
  MultiSelect,
  NgControlStatus,
  NgModel,
  NgTemplateOutlet,
  ObjectiveType,
  ObjectiveUnit,
  OrderList,
  OverlayComponent,
  OverlayPanel,
  PickerComponent,
  PowerUnit,
  PrimeTemplate,
  RateUtility,
  RecipeUtility,
  RequiredValidator,
  Ripple,
  Router,
  RouterLink,
  RouterService,
  RowToggler,
  ScrollPanel,
  SimplexResultType,
  SortIcon,
  SortableColumn,
  StepDetailTab,
  Store,
  TabMenu,
  Table,
  ToggleButton,
  Tooltip,
  TooltipComponent,
  TrackService,
  TranslatePipe,
  TranslateService,
  __spreadValues,
  app_actions_exports,
  coalesce,
  combineLatest,
  computed,
  datasets_exports,
  displayRateOptions,
  effect,
  filter,
  first,
  gameInfo,
  gameOptions,
  inject,
  input,
  inserterCapacityOptions,
  inserterTargetOptions,
  items_exports,
  languageOptions,
  machines_exports,
  maximizeTypeOptions,
  notNullish,
  objectiveTypeOptions,
  objectives_exports,
  output,
  pairwise,
  powerUnitOptions,
  preferences_exports,
  rational,
  recipes_exports,
  researchBonusOptions,
  settings_exports,
  signal,
  spread,
  stepDetailIcon,
  takeUntilDestroyed,
  themeOptions,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunctionV,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-6WS2MDUW.js";

// src/app/routes/main/pipes/as-step.pipe.ts
var _AsStepPipe = class _AsStepPipe {
  transform(value) {
    return value;
  }
};
_AsStepPipe.\u0275fac = function AsStepPipe_Factory(t) {
  return new (t || _AsStepPipe)();
};
_AsStepPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "asStep", type: _AsStepPipe, pure: true });
var AsStepPipe = _AsStepPipe;

// src/app/routes/main/pipes/filter-options.pipe.ts
var _FilterOptionsPipe = class _FilterOptionsPipe {
  transform(value, exclude, self) {
    if (value == null)
      return [];
    if (!exclude?.length)
      return value;
    const excludeSet = new Set(exclude);
    return value.filter((o) => !excludeSet.has(o.value) || o.value === self);
  }
};
_FilterOptionsPipe.\u0275fac = function FilterOptionsPipe_Factory(t) {
  return new (t || _FilterOptionsPipe)();
};
_FilterOptionsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filterOptions", type: _FilterOptionsPipe, pure: true });
var FilterOptionsPipe = _FilterOptionsPipe;

// src/app/routes/main/pipes/inserter-speed.pipe.ts
var _InserterSpeedPipe = class _InserterSpeedPipe {
  transform(value, settings) {
    if (value != null) {
      const inserter = InserterData[settings.inserterTarget][settings.inserterCapacity]?.find((d) => d.value.gt(value) || d.id === ItemId.StackInserter);
      if (inserter == null) {
        return null;
      }
      return {
        id: inserter.id,
        value: value.div(inserter.value)
      };
    }
    return null;
  }
};
_InserterSpeedPipe.\u0275fac = function InserterSpeedPipe_Factory(t) {
  return new (t || _InserterSpeedPipe)();
};
_InserterSpeedPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "inserterSpeed", type: _InserterSpeedPipe, pure: true });
var InserterSpeedPipe = _InserterSpeedPipe;

// src/app/routes/main/pipes/left-pad.pipe.ts
var _LeftPadPipe = class _LeftPadPipe {
  transform(value) {
    if (value == null)
      return "";
    return " ".repeat(4 - value.length) + value;
  }
};
_LeftPadPipe.\u0275fac = function LeftPadPipe_Factory(t) {
  return new (t || _LeftPadPipe)();
};
_LeftPadPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "leftPad", type: _LeftPadPipe, pure: true });
var LeftPadPipe = _LeftPadPipe;

// src/app/routes/main/pipes/rate.pipe.ts
var _RatePipe = class _RatePipe {
  static transform(value, precision) {
    if (precision == null)
      return value.toFraction();
    if (precision === -2) {
      const num2 = Math.round(value.mul(rational(100n)).toNumber());
      return num2.toString();
    }
    const num = value.toPrecision(precision);
    let result = num.toString();
    if (precision > 0) {
      const compare = rational(1, Math.pow(10, precision));
      if (value.gt(rational(0n)) && value.lt(compare))
        result = `<${result}`;
      const split = result.split(".");
      if (split.length > 1) {
        if (split[1].length < precision) {
          const spaces = precision - split[1].length;
          return result + "0".repeat(spaces);
        }
      } else if (value.isInteger()) {
        return result + " ".repeat(precision + 1);
      } else {
        return result + "." + "0".repeat(precision);
      }
    }
    return result;
  }
  transform(value, precision) {
    return _RatePipe.transform(value, precision);
  }
};
_RatePipe.\u0275fac = function RatePipe_Factory(t) {
  return new (t || _RatePipe)();
};
_RatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "rate", type: _RatePipe, pure: true });
var RatePipe = _RatePipe;

// src/app/routes/main/pipes/machine-rate.pipe.ts
var _MachineRatePipe = class _MachineRatePipe {
  transform(value, precision, machineId) {
    if (machineId === ItemId.Pumpjack) {
      return `${RatePipe.transform(value.mul(rational(100n)), precision != null ? Math.max(precision - 2, 0) : precision)}%`;
    } else {
      return RatePipe.transform(value, precision);
    }
  }
};
_MachineRatePipe.\u0275fac = function MachineRatePipe_Factory(t) {
  return new (t || _MachineRatePipe)();
};
_MachineRatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "machineRate", type: _MachineRatePipe, pure: true });
var MachineRatePipe = _MachineRatePipe;

// src/app/routes/main/pipes/machine-show-rate.pipe.ts
var _MachineShowRatePipe = class _MachineShowRatePipe {
  transform(machineId, game) {
    return game !== Game.CaptainOfIndustry || machineId !== ItemId.MineControlTower;
  }
};
_MachineShowRatePipe.\u0275fac = function MachineShowRatePipe_Factory(t) {
  return new (t || _MachineShowRatePipe)();
};
_MachineShowRatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "machineShowRate", type: _MachineShowRatePipe, pure: true });
var MachineShowRatePipe = _MachineShowRatePipe;

// src/app/routes/main/pipes/machine-show.pipe.ts
var _MachineShowPipe = class _MachineShowPipe {
  transform(machineId, game) {
    if (machineId == null)
      return false;
    return game !== Game.DysonSphereProgram || machineId !== ItemId.MiningMachine;
  }
};
_MachineShowPipe.\u0275fac = function MachineShowPipe_Factory(t) {
  return new (t || _MachineShowPipe)();
};
_MachineShowPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "machineShow", type: _MachineShowPipe, pure: true });
var MachineShowPipe = _MachineShowPipe;

// src/app/routes/main/pipes/options.pipe.ts
var _OptionsPipe = class _OptionsPipe {
  transform(value, entities, includeEmptyModule = false) {
    if (value == null) {
      return [];
    }
    const list = value.map((i) => ({ label: entities[i].name, value: i }));
    if (includeEmptyModule) {
      list.unshift({ label: "None", value: ItemId.Module });
    }
    return list;
  }
};
_OptionsPipe.\u0275fac = function OptionsPipe_Factory(t) {
  return new (t || _OptionsPipe)();
};
_OptionsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "options", type: _OptionsPipe, pure: true });
var OptionsPipe = _OptionsPipe;

// src/app/routes/main/pipes/power.pipe.ts
var _PowerPipe = class _PowerPipe {
  transform(value, precision, unit) {
    switch (unit) {
      case PowerUnit.GW:
        return `${RatePipe.transform(value.div(rational(1000000n)), precision)} GW`;
      case PowerUnit.MW:
        return `${RatePipe.transform(value.div(rational(1000n)), precision)} MW`;
      default:
        return `${RatePipe.transform(value, precision)} kW`;
    }
  }
};
_PowerPipe.\u0275fac = function PowerPipe_Factory(t) {
  return new (t || _PowerPipe)();
};
_PowerPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "power", type: _PowerPipe, pure: true });
var PowerPipe = _PowerPipe;

// src/app/routes/main/pipes/step-href.pipe.ts
var _StepHrefPipe = class _StepHrefPipe {
  constructor() {
    this.routerSvc = inject(RouterService);
  }
  transform(value, zipPartial, data) {
    let step = value;
    if (step.recipeId) {
      const recipe = data.adjustedRecipe[step.recipeId];
      if (recipe.isTechnology && recipe.productivity && value.items) {
        step = __spreadValues(__spreadValues({}, value), { items: value.items.div(recipe.productivity) });
      }
    }
    return this.routerSvc.stepHref(step, zipPartial, data.hash);
  }
};
_StepHrefPipe.\u0275fac = function StepHrefPipe_Factory(t) {
  return new (t || _StepHrefPipe)();
};
_StepHrefPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "stepHref", type: _StepHrefPipe, pure: true });
var StepHrefPipe = _StepHrefPipe;

// src/app/routes/main/pipes/step-id.pipe.ts
var _StepIdPipe = class _StepIdPipe {
  static transform(value) {
    return value.itemId ?? value.recipeObjectiveId ?? value.recipeId ?? value.id;
  }
  transform(value) {
    return _StepIdPipe.transform(value);
  }
};
_StepIdPipe.\u0275fac = function StepIdPipe_Factory(t) {
  return new (t || _StepIdPipe)();
};
_StepIdPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "stepId", type: _StepIdPipe, pure: true });
var StepIdPipe = _StepIdPipe;

// src/app/routes/main/directives/dropdown-base.directive.ts
var _DropdownBaseDirective = class _DropdownBaseDirective {
  constructor() {
    this.contentSvc = inject(ContentService);
    this.pDropdown = inject(Dropdown, { self: true });
    this.labDropdownBase = input();
    this.setAutoFocusFilter = effect(() => {
      const isMobile = this.contentSvc.isMobile();
      this.pDropdown.autofocusFilter = !isMobile;
    });
    this.setStyleClass = effect(() => {
      this.pDropdown.styleClass = this.labDropdownBase();
    });
  }
  ngOnInit() {
    this.pDropdown.appendTo = "body";
    this.pDropdown.filter = true;
    this.pDropdown.scrollHeight = "40vh";
    this.pDropdown.panelStyleClass = "tooltip";
  }
};
_DropdownBaseDirective.\u0275fac = function DropdownBaseDirective_Factory(t) {
  return new (t || _DropdownBaseDirective)();
};
_DropdownBaseDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DropdownBaseDirective, selectors: [["", "labDropdownBase", ""]], inputs: { labDropdownBase: [1, "labDropdownBase"] } });
var DropdownBaseDirective = _DropdownBaseDirective;

// src/app/routes/main/components/modules/modules.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ModulesComponent_For_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r4.value));
  }
}
function ModulesComponent_For_2_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 11);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r5.value);
  }
}
function ModulesComponent_For_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ModulesComponent_For_2_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const tooltip_r6 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r5.value !== "module" ? tooltip_r6 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r5.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r5.label, " ");
  }
}
function ModulesComponent_For_2_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 11);
  }
  if (rf & 2) {
    const entry_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", entry_r7.id);
  }
}
function ModulesComponent_For_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ModulesComponent_For_2_ng_template_6_Conditional_0_Template, 1, 1, "lab-tooltip", 11);
  }
  if (rf & 2) {
    const entry_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(entry_r7.id ? 0 : -1);
  }
}
function ModulesComponent_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ModulesComponent_For_2_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const \u0275$index_3_r2 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeEntry(\u0275$index_3_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", entry_r7.id === ctx_r2.ItemId.Module);
  }
}
function ModulesComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "lab-input-number", 3);
    \u0275\u0275listener("setValue", function ModulesComponent_For_2_Template_lab_input_number_setValue_1_listener($event) {
      const \u0275$index_3_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCount(\u0275$index_3_r2, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-dropdown", 4);
    \u0275\u0275pipe(3, "filterOptions");
    \u0275\u0275listener("onChange", function ModulesComponent_For_2_Template_p_dropdown_onChange_2_listener($event) {
      const \u0275$index_3_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setId(\u0275$index_3_r2, $event));
    });
    \u0275\u0275template(4, ModulesComponent_For_2_ng_template_4_Template, 3, 4, "ng-template", 5)(5, ModulesComponent_For_2_ng_template_5_Template, 7, 6, "ng-template", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ModulesComponent_For_2_ng_template_6_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, ModulesComponent_For_2_Conditional_8_Template, 1, 1, "button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const entry_r7 = ctx.$implicit;
    const \u0275$index_3_r2 = ctx.$index;
    const tooltip_r9 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_12_0 = entry_r7.count) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : ctx_r2.zero)("maximum", ctx_r2.maximum()[\u0275$index_3_r2])("disabled", entry_r7.id === ctx_r2.ItemId.Module);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", entry_r7.id)("pTooltip", tooltip_r9)("options", \u0275\u0275pipeBind3(3, 7, ctx_r2.options(), ctx_r2.exclude(), entry_r7.id));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.entity().modules !== true ? 8 : -1);
  }
}
var _ModulesComponent = class _ModulesComponent {
  constructor() {
    this.store = inject(Store);
    this.entity = input.required();
    this.modules = input.required();
    this.recipeId = input();
    this.setValue = output();
    this.data = this.store.selectSignal(settings_exports.getDataset);
    this.exclude = computed(() => this.modules().map((m) => m.id).filter(notNullish));
    this.sum = computed(() => this.modules().map((m) => m.count).filter(notNullish).reduce((s, c) => s.add(c), rational(0n)));
    this.options = computed(() => {
      return RecipeUtility.moduleOptions(this.entity(), this.data(), this.recipeId());
    });
    this.maximum = computed(() => {
      const values = this.modules();
      const slots = coalesce(this.entity().modules, rational(0n));
      if (slots === true)
        return values.map(() => null);
      let sum = this.sum();
      const empty = values.find((e) => e.id === ItemId.Module);
      if (empty)
        sum = sum.sub(coalesce(empty.count, rational(0n)));
      const remain = slots.sub(sum);
      return values.map((e) => coalesce(e.count, rational(0n)).add(remain));
    });
    this.zero = rational(0n);
    this.ItemId = ItemId;
  }
  setCount(i, count) {
    const modules = this.modules().map((m, j) => i === j ? __spreadValues(__spreadValues({}, m), { count }) : m);
    this.updateEmpty(modules);
    this.setValue.emit(modules);
  }
  setId(i, event) {
    event.originalEvent.stopPropagation();
    const id = event.value;
    const modules = this.modules().map((m, j) => i === j ? __spreadValues(__spreadValues({}, m), { id }) : m);
    this.setValue.emit(modules);
  }
  removeEntry(i) {
    const modules = this.modules().filter((_, j) => i !== j);
    this.updateEmpty(modules);
    this.setValue.emit(modules);
  }
  updateEmpty(modules) {
    const slots = this.entity().modules;
    if (slots === true || slots == null)
      return;
    const sum = modules.map((m) => m.count).filter(notNullish).reduce((s, c) => s.add(c), rational(0n));
    if (sum.lt(slots)) {
      const toAdd = slots.sub(sum);
      const empty = modules.find((e) => e.id === ItemId.Module);
      if (empty) {
        empty.count = coalesce(empty.count, rational(0n)).add(toAdd);
      } else {
        modules.push({ id: ItemId.Module, count: toAdd });
      }
    } else if (sum.gt(slots)) {
      const toSubtract = sum.sub(slots);
      const empty = modules.find((e) => e.id === ItemId.Module);
      if (empty) {
        empty.count = coalesce(empty.count, rational(0n)).sub(toSubtract);
        if (empty.count.isZero())
          modules.splice(modules.indexOf(empty), 1);
      }
    }
  }
};
_ModulesComponent.\u0275fac = function ModulesComponent_Factory(t) {
  return new (t || _ModulesComponent)();
};
_ModulesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModulesComponent, selectors: [["lab-modules"]], inputs: { entity: [1, "entity"], modules: [1, "modules"], recipeId: [1, "recipeId"] }, outputs: { setValue: "setValue" }, decls: 3, vars: 0, consts: [["tooltip", ""], [1, "d-flex", "flex-column"], [1, "p-inputgroup"], ["width", "3rem", 3, "setValue", "value", "maximum", "disabled"], ["labDropdownBase", "icon", 3, "onChange", "ngModel", "pTooltip", "options"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-times", 1, "p-button-outlined", 3, "disabled"], [1, "d-flex"], [1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip"], [1, "ms-3", "text-truncate"], ["type", "module", 3, "id"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-times", 1, "p-button-outlined", 3, "click", "disabled"]], template: function ModulesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, ModulesComponent_For_2_Template, 9, 11, "div", 2, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.modules());
  }
}, dependencies: [NgControlStatus, NgModel, PrimeTemplate, Tooltip, ButtonDirective, Dropdown, Ripple, InputNumberComponent, TooltipComponent, DropdownBaseDirective, IconSmClassPipe, FilterOptionsPipe], changeDetection: 0 });
var ModulesComponent = _ModulesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModulesComponent, { className: "ModulesComponent", filePath: "src/app/routes/main/components/modules/modules.component.ts", lineNumber: 30 });
})();

// src/app/routes/main/components/beacons-overlay/beacons-overlay.component.ts
function BeaconsOverlayComponent_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "lab-input-number", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("setValue", function BeaconsOverlayComponent_For_3_Conditional_4_Template_lab_input_number_setValue_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const \u0275$index_5_r2 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTotal(\u0275$index_5_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 2, "beaconsOverlay.totalTooltip"))("value", entry_r5.total);
  }
}
function BeaconsOverlayComponent_For_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r6.value));
  }
}
function BeaconsOverlayComponent_For_3_ng_template_7_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 19);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r7.value);
  }
}
function BeaconsOverlayComponent_For_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BeaconsOverlayComponent_For_3_ng_template_7_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const tooltip_r8 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r8);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r7.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r7.label, " ");
  }
}
function BeaconsOverlayComponent_For_3_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 19);
  }
  if (rf & 2) {
    const entry_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", entry_r5.id);
  }
}
function BeaconsOverlayComponent_For_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BeaconsOverlayComponent_For_3_ng_template_8_Conditional_0_Template, 1, 1, "lab-tooltip", 19);
  }
  if (rf & 2) {
    const entry_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(entry_r5.id ? 0 : -1);
  }
}
function BeaconsOverlayComponent_For_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "lab-modules", 20);
    \u0275\u0275listener("setValue", function BeaconsOverlayComponent_For_3_Conditional_11_Template_lab_modules_setValue_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const \u0275$index_5_r2 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setModules(\u0275$index_5_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("entity", ctx_r2.data().beaconEntities[entry_r5.id])("modules", entry_r5.modules)("recipeId", ctx_r2.recipeId());
  }
}
function BeaconsOverlayComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 9)(2, "lab-input-number", 10);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("setValue", function BeaconsOverlayComponent_For_3_Template_lab_input_number_setValue_2_listener($event) {
      const \u0275$index_5_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCount(\u0275$index_5_r2, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BeaconsOverlayComponent_For_3_Conditional_4_Template, 2, 4, "lab-input-number", 11);
    \u0275\u0275elementStart(5, "p-dropdown", 12);
    \u0275\u0275listener("onChange", function BeaconsOverlayComponent_For_3_Template_p_dropdown_onChange_5_listener($event) {
      const \u0275$index_5_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setId(\u0275$index_5_r2, $event));
    });
    \u0275\u0275template(6, BeaconsOverlayComponent_For_3_ng_template_6_Template, 3, 4, "ng-template", 13)(7, BeaconsOverlayComponent_For_3_ng_template_7_Template, 7, 6, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, BeaconsOverlayComponent_For_3_ng_template_8_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275listener("click", function BeaconsOverlayComponent_For_3_Template_button_click_10_listener() {
      const \u0275$index_5_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeEntry(\u0275$index_5_r2));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, BeaconsOverlayComponent_For_3_Conditional_11_Template, 1, 3, "lab-modules", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const entry_r5 = ctx.$implicit;
    const tooltip_r10 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(3, 8, "beaconsOverlay.eachTooltip"))("value", (tmp_13_0 = entry_r5.count) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ctx_r2.zero);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(entry_r5.total ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", entry_r5.id)("pTooltip", tooltip_r10)("options", ctx_r2.options().beacons);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.beacons().length === 1);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r5.id && entry_r5.modules ? 11 : -1);
  }
}
var _BeaconsOverlayComponent = class _BeaconsOverlayComponent extends OverlayComponent {
  constructor() {
    super(...arguments);
    this.store = inject(Store);
    this.setValue = new EventEmitter();
    this.data = this.store.selectSignal(settings_exports.getDataset);
    this.options = this.store.selectSignal(settings_exports.getOptions);
    this.beacons = signal([]);
    this.recipeId = signal(void 0);
    this.zero = rational(0n);
  }
  show(event, values, recipeId) {
    this.beacons.set(values.map((v) => __spreadValues(__spreadValues({}, v), { modules: v.modules?.map((m) => __spreadValues({}, m)) })));
    this.recipeId.set(recipeId);
    this._show(event);
  }
  setCount(i, count) {
    this.beacons.update((values) => {
      values[i].count = count;
      return values;
    });
  }
  setId(i, event) {
    event.originalEvent.stopPropagation();
    this.beacons.update((values) => {
      values[i].id = event.value;
      return values;
    });
  }
  setModules(i, modules) {
    this.beacons.update((values) => {
      values[i].modules = modules;
      return values;
    });
  }
  setTotal(i, total) {
    this.beacons.update((values) => {
      values[i].total = total;
      return values;
    });
  }
  removeEntry(i) {
    this.beacons.update((values) => values.filter((_, vi) => vi !== i));
  }
  addEntry() {
    this.beacons.update((values) => {
      const id = this.options().beacons[0].value;
      const count = this.data().beaconEntities[id].modules;
      const modules = [
        {
          id: ItemId.Module,
          count
        }
      ];
      values.push({ id, count: rational(0n), modules });
      return values;
    });
  }
  save() {
    const value = this.beacons().map((b) => spread(b, { modules: b.modules?.filter((m) => m.count?.nonzero()) }));
    this.setValue.emit(value);
  }
};
_BeaconsOverlayComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BeaconsOverlayComponent_BaseFactory;
  return function BeaconsOverlayComponent_Factory(t) {
    return (\u0275BeaconsOverlayComponent_BaseFactory || (\u0275BeaconsOverlayComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BeaconsOverlayComponent)))(t || _BeaconsOverlayComponent);
  };
})();
_BeaconsOverlayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BeaconsOverlayComponent, selectors: [["lab-beacons-overlay"]], outputs: { setValue: "setValue" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 9, consts: [["tooltip", ""], ["appendTo", "body", 3, "onHide"], [1, "d-flex", "flex-column", "gap-2"], [1, "d-flex", "flex-column"], [1, "d-flex"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-outlined", "p-button-sm", "flex-grow-1", 3, "click", "label"], [1, "d-flex", "gap-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-check", 1, "p-button-outlined", "p-button-sm", "flex-grow-1", 3, "click", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-outlined", "p-button-sm", "p-button-secondary", "flex-grow-1", 3, "click", "label"], [1, "p-inputgroup"], ["width", "3rem", "tooltipPosition", "top", 3, "setValue", "pTooltip", "value"], ["width", "3rem", "tooltipPosition", "top", 3, "pTooltip", "value"], ["labDropdownBase", "icon", 3, "onChange", "ngModel", "pTooltip", "options"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-times", 1, "p-button-outlined", 3, "click", "disabled"], [3, "entity", "modules", "recipeId"], [1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip"], [1, "ms-3", "text-truncate"], ["type", "beacon", 3, "id"], [3, "setValue", "entity", "modules", "recipeId"]], template: function BeaconsOverlayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-overlayPanel", 1);
    \u0275\u0275listener("onHide", function BeaconsOverlayComponent_Template_p_overlayPanel_onHide_0_listener() {
      return ctx.onHide();
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275repeaterCreate(2, BeaconsOverlayComponent_For_3_Template, 12, 10, "div", 3, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(4, "div", 4)(5, "button", 5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function BeaconsOverlayComponent_Template_button_click_5_listener() {
      return ctx.addEntry();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function BeaconsOverlayComponent_Template_button_click_8_listener() {
      return ctx.hide();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function BeaconsOverlayComponent_Template_button_click_10_listener() {
      return ctx.hide(true);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.beacons());
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 3, "beaconsOverlay.addBeacons"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 5, "ok"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(11, 7, "cancel"));
  }
}, dependencies: [NgControlStatus, NgModel, PrimeTemplate, Tooltip, ButtonDirective, Dropdown, OverlayPanel, Ripple, InputNumberComponent, TooltipComponent, ModulesComponent, DropdownBaseDirective, TranslatePipe, IconSmClassPipe], changeDetection: 0 });
var BeaconsOverlayComponent = _BeaconsOverlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BeaconsOverlayComponent, { className: "BeaconsOverlayComponent", filePath: "src/app/routes/main/components/beacons-overlay/beacons-overlay.component.ts", lineNumber: 29 });
})();

// src/app/routes/main/components/modules-overlay/modules-overlay.component.ts
function ModulesOverlayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "lab-modules", 6);
    \u0275\u0275listener("setValue", function ModulesOverlayComponent_Conditional_2_Template_lab_modules_setValue_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modules.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("entity", ctx)("modules", ctx_r1.modules())("recipeId", ctx_r1.recipeId());
  }
}
var _ModulesOverlayComponent = class _ModulesOverlayComponent extends OverlayComponent {
  constructor() {
    super(...arguments);
    this.store = inject(Store);
    this.setValue = new EventEmitter();
    this.machine = signal(void 0);
    this.modules = signal([]);
    this.recipeId = signal(void 0);
  }
  show(event, modules, machine, recipeId) {
    this.machine.set(machine);
    this.modules.set(modules.map((m) => __spreadValues({}, m)));
    this.recipeId.set(recipeId);
    this._show(event);
  }
  save() {
    let values = this.modules();
    if (this.machine()?.modules !== true)
      values = values.filter((e) => e.count?.nonzero());
    this.setValue.emit(values);
  }
};
_ModulesOverlayComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ModulesOverlayComponent_BaseFactory;
  return function ModulesOverlayComponent_Factory(t) {
    return (\u0275ModulesOverlayComponent_BaseFactory || (\u0275ModulesOverlayComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ModulesOverlayComponent)))(t || _ModulesOverlayComponent);
  };
})();
_ModulesOverlayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModulesOverlayComponent, selectors: [["lab-modules-overlay"]], outputs: { setValue: "setValue" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 7, consts: [["appendTo", "body", 3, "onHide"], [1, "d-flex", "flex-column", "gap-2"], [3, "entity", "modules", "recipeId"], [1, "d-flex", "gap-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-check", 1, "p-button-outlined", "p-button-sm", "flex-grow-1", 3, "click", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-outlined", "p-button-sm", "p-button-secondary", "flex-grow-1", 3, "click", "label"], [3, "setValue", "entity", "modules", "recipeId"]], template: function ModulesOverlayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-overlayPanel", 0);
    \u0275\u0275listener("onHide", function ModulesOverlayComponent_Template_p_overlayPanel_onHide_0_listener() {
      return ctx.onHide();
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, ModulesOverlayComponent_Conditional_2_Template, 1, 3, "lab-modules", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ModulesOverlayComponent_Template_button_click_4_listener() {
      return ctx.hide();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ModulesOverlayComponent_Template_button_click_6_listener() {
      return ctx.hide(true);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_0_0 = ctx.machine()) ? 2 : -1, tmp_0_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 3, "ok"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 5, "cancel"));
  }
}, dependencies: [ButtonDirective, OverlayPanel, Ripple, ModulesComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
var ModulesOverlayComponent = _ModulesOverlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModulesOverlayComponent, { className: "ModulesOverlayComponent", filePath: "src/app/routes/main/components/modules-overlay/modules-overlay.component.ts", lineNumber: 20 });
})();

// src/app/routes/main/directives/no-drag.directive.ts
var _NoDragDirective = class _NoDragDirective {
  onMousedown(event) {
    event.stopPropagation();
  }
  onTouchStart(event) {
    event.stopPropagation();
  }
};
_NoDragDirective.\u0275fac = function NoDragDirective_Factory(t) {
  return new (t || _NoDragDirective)();
};
_NoDragDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NoDragDirective, selectors: [["", "labNoDrag", ""]], hostBindings: function NoDragDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousedown", function NoDragDirective_mousedown_HostBindingHandler($event) {
      return ctx.onMousedown($event);
    })("touchstart", function NoDragDirective_touchstart_HostBindingHandler($event) {
      return ctx.onTouchStart($event);
    });
  }
} });
var NoDragDirective = _NoDragDirective;

// src/app/routes/main/components/steps/steps.component.ts
var _c0 = ["stepsTable"];
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
var _c1 = () => [25, 50, 100, 1e3];
var _c2 = () => [];
var _c3 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, machines: a6, machineId: a7, recipeId: a8, recipeObjectiveId: a9, percent: a10, percentOnDest: true, destId: a11, inputs: a12 });
var _c4 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, machines: a6, machineId: a7, recipeId: a8, recipeObjectiveId: a9, percent: a10, destId: a11, destRecipeObjectiveId: a12, destIsRecipe: true, outputs: a13 });
var _c5 = (a0, a1) => ({ step: a0, percent: a1 });
var _c6 = (a0, a1) => ({ items: a0, itemId: a1 });
var _c7 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, machines: a6, machineId: a7, recipeId: a8, recipeObjectiveId: a9, percent: a10, destId: a11, destRecipeObjectiveId: a12, destIsRecipe: true });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, percent: a6, destId: a7, destRecipeObjectiveId: a8, destIsRecipe: true });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, machines: a6, machineId: a7, recipeId: a8, recipeObjectiveId: a9, percent: a10, percentOnDest: true, destId: a11, destRecipeObjectiveId: a12 });
var _c10 = (a0, a1) => ({ value: a0, itemId: a1 });
var _c11 = (a0, a1) => ({ columnSettings: a0, totals: a1, type: "belt" });
var _c12 = (a0, a1) => ({ columnSettings: a0, totals: a1 });
var _c13 = (a0, a1, a2) => ({ columnSettings: a0, totals: a1, modulesTotals: a2, type: "machine" });
var _c14 = (a0, a1, a2) => ({ columnSettings: a0, totals: a1, modulesTotals: a2, type: "beacon" });
function StepsComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.exportSvc.stepsToCsv(ctx_r2.steps()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "steps.downloadAsCsv"));
  }
}
function StepsComponent_ng_template_2_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_8_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resetChecked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.checkedUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th")(1, "div", 34);
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275template(3, StepsComponent_ng_template_2_Conditional_8_Conditional_3_Template, 2, 3, "button", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.itemsModified().checked || ctx_r2.recipesModified().checked ? 3 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "options.column.tree"));
  }
}
function StepsComponent_ng_template_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 24);
  }
}
function StepsComponent_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_16_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.resetExcluded();
      return \u0275\u0275resetView($event.stopImmediatePropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.itemsUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 37);
  }
}
function StepsComponent_ng_template_2_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_17_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.resetBelts();
      return \u0275\u0275resetView($event.stopImmediatePropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.beltsUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26)(1, "div", 23)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_17_Conditional_5_Template, 1, 0, "p-sortIcon", 37)(6, StepsComponent_ng_template_2_Conditional_17_Conditional_6_Template, 2, 3, "button", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "options.column.belts"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsModified().belts ? 6 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 38);
  }
}
function StepsComponent_ng_template_2_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_18_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.resetWagons();
      return \u0275\u0275resetView($event.stopImmediatePropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.wagonsUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27)(1, "div", 23)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_18_Conditional_5_Template, 1, 0, "p-sortIcon", 38)(6, StepsComponent_ng_template_2_Conditional_18_Conditional_6_Template, 2, 3, "button", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, ctx_r2.dispRateInfo().wagonsLabel));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsModified().wagons ? 6 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 29);
  }
}
function StepsComponent_ng_template_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_25_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.resetMachines();
      return \u0275\u0275resetView($event.stopImmediatePropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.machinesUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_26_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resetBeacons());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.beaconsUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "div", 23)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_26_Conditional_5_Template, 2, 3, "button", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "options.column.beacons"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.recipesModified().beacons ? 5 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_27_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 40);
  }
}
function StepsComponent_ng_template_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31)(1, "div", 39)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_27_Conditional_5_Template, 1, 0, "p-sortIcon", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "options.column.power"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 5 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_28_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 41);
  }
}
function StepsComponent_ng_template_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32)(1, "div", 39)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_28_Conditional_5_Template, 1, 0, "p-sortIcon", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r2.dispRateInfo().pollutionLabel));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 5 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function StepsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 17)(2, "div", 18)(3, "button", 19);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.contentSvc.showColumns$.next());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_5_Template, 2, 3, "button", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "tr", 21);
    \u0275\u0275element(7, "th");
    \u0275\u0275template(8, StepsComponent_ng_template_2_Conditional_8_Template, 4, 1, "th")(9, StepsComponent_ng_template_2_Conditional_9_Template, 3, 3, "th");
    \u0275\u0275elementStart(10, "th", 22)(11, "div", 23)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, StepsComponent_ng_template_2_Conditional_15_Template, 1, 0, "p-sortIcon", 24)(16, StepsComponent_ng_template_2_Conditional_16_Template, 2, 3, "button", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, StepsComponent_ng_template_2_Conditional_17_Template, 7, 5, "th", 26)(18, StepsComponent_ng_template_2_Conditional_18_Template, 7, 5, "th", 27);
    \u0275\u0275elementStart(19, "th", 28)(20, "div", 23)(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, StepsComponent_ng_template_2_Conditional_24_Template, 1, 0, "p-sortIcon", 29)(25, StepsComponent_ng_template_2_Conditional_25_Template, 2, 3, "button", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, StepsComponent_ng_template_2_Conditional_26_Template, 6, 4, "th", 30)(27, StepsComponent_ng_template_2_Conditional_27_Template, 6, 4, "th", 31)(28, StepsComponent_ng_template_2_Conditional_28_Template, 6, 4, "th", 32)(29, StepsComponent_ng_template_2_Conditional_29_Template, 1, 0, "th");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(4, 16, "steps.columnSettings"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.steps().length ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.focus() && ctx_r2.columnsState().checkbox.show ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.focus() && ctx_r2.columnsState().tree.show ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, ctx_r2.dispRateInfo().itemsLabel));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsModified().excluded ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().wagons.show ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "options.column.machines"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.recipesModified().machines ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().beacons.show ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().power.show ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().pollution.show ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().link.show ? 29 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 43);
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const step_r13 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "step_" + step_r13.id + "_" + item_r12.label);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 46)(1, "div", 51)(2, "p-checkbox", 52);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_8_Template_p_checkbox_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r15);
      const step_r13 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeStepChecked(step_r13, $event.checked));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("ngModel", step_r13.checked);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 59);
  }
  if (rf & 2) {
    const trail_r16 = ctx.$implicit;
    const \u0275$index_171_r17 = ctx.$index;
    const \u0275$count_171_r18 = ctx.$count;
    \u0275\u0275classProp("trail", trail_r16)("last", \u0275$index_171_r17 === \u0275$count_171_r18 - 1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_2_For_1_Template, 1, 4, "div", 58, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275element(2, "div", 54);
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.stepTree()[step_r13.id]);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 62);
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", step_r13.itemId);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const step_r13 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setItemExcluded(step_r13.itemId, !ctx_r2.itemsState()[step_r13.itemId].excluded));
    });
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r20 = \u0275\u0275reference(4);
    const step_r13 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hover-active", ctx_r2.itemsState()[step_r13.itemId].excluded);
    \u0275\u0275property("icon", \u0275\u0275pipeBind1(1, 4, step_r13.itemId))("pTooltip", tooltip_r20);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", step_r13.recipeObjectiveId, "");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 64);
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", step_r13.recipeId);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_ng_template_3_Conditional_0_Template, 1, 1, "lab-tooltip", 64);
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(step_r13.recipeId ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 63);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275template(2, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_Conditional_2_Template, 2, 1, "span")(3, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r21 = \u0275\u0275reference(4);
    const step_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 4, step_r13.recipeId, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r21);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r13.recipeObjectiveId != null ? 2 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "div", 53);
    \u0275\u0275template(2, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_2_Template, 3, 0, "div", 54);
    \u0275\u0275elementStart(3, "div", 55);
    \u0275\u0275template(4, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_Template, 5, 6, "button", 56)(5, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_Template, 5, 7, "i", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const step_r13 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    const stepsTable_r22 = \u0275\u0275reference(1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!stepsTable_r22.sortField && ((tmp_10_0 = ctx_r2.stepTree()[step_r13.id]) == null ? null : tmp_10_0.length) ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r13.itemId && step_r13.recipeObjectiveId == null ? 4 : 5);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "rate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(+", \u0275\u0275pipeBind2(2, 1, step_r13.surplus, ctx_r2.columnsState().items.precision), ") ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 62);
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", step_r13.itemId);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const step_r13 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setItemExcluded(step_r13.itemId, !ctx_r2.itemsState()[step_r13.itemId].excluded));
    });
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r24 = \u0275\u0275reference(4);
    const step_r13 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hover-active", ctx_r2.itemsState()[step_r13.itemId].excluded);
    \u0275\u0275property("icon", \u0275\u0275pipeBind1(1, 4, step_r13.itemId))("pTooltip", tooltip_r24);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 65);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_1_Template, 3, 4, "span", 66);
    \u0275\u0275elementStart(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 67)(6, "div", 23)(7, "span", 68);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_Template, 5, 6, "button", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const step_r13 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r13.surplus && step_r13.surplus.nonzero() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 4, step_r13.items.sub((tmp_11_0 = step_r13.surplus) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : ctx_r2.rational(0)), ctx_r2.columnsState().items.precision));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.data().itemEntities[step_r13.itemId].name);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.preferences().hideDuplicateIcons || !ctx_r2.columnsState().tree.show ? 9 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 30);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r27.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Conditional_0_Template, 3, 4, "div", 44);
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    \u0275\u0275conditional(item_r27 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 75);
  }
  if (rf & 2) {
    const item_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r28.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const tooltip_r29 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r29);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r28.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r28.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 75);
  }
  if (rf & 2) {
    const beltId_r30 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", beltId_r30);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 70);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_Template_p_dropdown_onChange_0_listener($event) {
      const defaultBeltId_r26 = \u0275\u0275restoreView(_r25);
      const step_r13 = \u0275\u0275nextContext(4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setBelt(step_r13.itemId, $event.value, defaultBeltId_r26));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Template, 1, 1, "ng-template", 71)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_2_Template, 7, 6, "ng-template", 72)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r31 = \u0275\u0275reference(4);
    const beltId_r30 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pTooltip", tooltip_r31)("ngModel", beltId_r30)("options", ctx_r2.options().belts);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r34.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 76);
  }
  if (rf & 2) {
    const item_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r35.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const tooltip_r36 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r36);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r35.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r35.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 76);
  }
  if (rf & 2) {
    const beltId_r30 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", beltId_r30);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 70);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template_p_dropdown_onChange_0_listener($event) {
      const defaultPipeId_r33 = \u0275\u0275restoreView(_r32);
      const step_r13 = \u0275\u0275nextContext(5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setBelt(step_r13.itemId, $event.value, defaultPipeId_r33));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Template, 3, 4, "ng-template", 71)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_Template, 7, 6, "ng-template", 72)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r37 = \u0275\u0275reference(4);
    const beltId_r30 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pTooltip", tooltip_r37)("ngModel", beltId_r30)("options", ctx_r2.options().pipes);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 76);
  }
  if (rf & 2) {
    const beltId_r30 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", beltId_r30);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 63);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r38 = \u0275\u0275reference(3);
    const beltId_r30 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, beltId_r30));
    \u0275\u0275property("pTooltip", tooltip_r38);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template, 5, 3, "p-dropdown", 69)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_1_Template, 4, 5, "i", 57);
  }
  if (rf & 2) {
    let tmp_14_0;
    const beltId_r30 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.data().pipeIds.indexOf(beltId_r30) !== -1 && ctx_r2.settings().pipeId) ? 0 : 1, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 65)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 67)(5, "div", 23);
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_Template, 5, 3, "p-dropdown", 69)(7, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const step_r13 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, step_r13.belts, ctx_r2.columnsState().belts.precision));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.data().beltIds.indexOf(ctx) !== -1 && ctx_r2.settings().beltId) ? 6 : 7, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Template, 8, 5);
  }
  if (rf & 2) {
    let tmp_11_0;
    const step_r13 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_11_0 = ctx_r2.itemsState()[step_r13.itemId].beltId) ? 0 : -1, tmp_11_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 30);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Template, 1, 1)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_1_Template, 1, 0, "td", 30);
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext();
    \u0275\u0275conditional(step_r13.itemId && step_r13.belts ? 0 : 1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r41 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r41.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Conditional_0_Template, 3, 4, "div", 44);
  }
  if (rf & 2) {
    const item_r41 = ctx.$implicit;
    \u0275\u0275conditional(item_r41 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 77);
  }
  if (rf & 2) {
    const item_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r42.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r42 = ctx.$implicit;
    const tooltip_r43 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r43);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r42.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r42.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 77);
  }
  if (rf & 2) {
    const wagonId_r44 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", wagonId_r44);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 70);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_Template_p_dropdown_onChange_0_listener($event) {
      const defaultCargoWagonId_r40 = \u0275\u0275restoreView(_r39);
      const step_r13 = \u0275\u0275nextContext(4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setWagon(step_r13.itemId, $event.value, defaultCargoWagonId_r40));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Template, 1, 1, "ng-template", 71)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_2_Template, 7, 6, "ng-template", 72)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r45 = \u0275\u0275reference(4);
    const wagonId_r44 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pTooltip", tooltip_r45)("ngModel", wagonId_r44)("options", ctx_r2.options().cargoWagons);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r48 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r48.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Conditional_0_Template, 3, 4, "div", 44);
  }
  if (rf & 2) {
    const item_r48 = ctx.$implicit;
    \u0275\u0275conditional(item_r48 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 78);
  }
  if (rf & 2) {
    const item_r49 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r49.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const tooltip_r50 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r50);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r49.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r49.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 78);
  }
  if (rf & 2) {
    const wagonId_r44 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", wagonId_r44);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 70);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template_p_dropdown_onChange_0_listener($event) {
      const defaultFluidWagonId_r47 = \u0275\u0275restoreView(_r46);
      const step_r13 = \u0275\u0275nextContext(5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setWagon(step_r13.itemId, $event.value, defaultFluidWagonId_r47));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Template, 1, 1, "ng-template", 71)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_Template, 7, 6, "ng-template", 72)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r51 = \u0275\u0275reference(4);
    const wagonId_r44 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pTooltip", tooltip_r51)("ngModel", wagonId_r44)("options", ctx_r2.options().fluidWagons);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template, 5, 3, "p-dropdown", 69);
  }
  if (rf & 2) {
    let tmp_14_0;
    const wagonId_r44 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.data().fluidWagonIds.indexOf(wagonId_r44) !== -1 && ctx_r2.settings().fluidWagonId) ? 0 : -1, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 65)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 67)(5, "div", 23);
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_Template, 5, 3, "p-dropdown", 69)(7, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const step_r13 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, step_r13.wagons, ctx_r2.columnsState().wagons.precision));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.data().cargoWagonIds.indexOf(ctx) !== -1 && ctx_r2.settings().cargoWagonId) ? 6 : 7, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Template, 8, 5);
  }
  if (rf & 2) {
    let tmp_11_0;
    const step_r13 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_11_0 = ctx_r2.itemsState()[step_r13.itemId].wagonId) ? 0 : -1, tmp_11_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 30);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Template, 1, 1)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_1_Template, 1, 0, "td", 30);
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext();
    \u0275\u0275conditional(step_r13.itemId && step_r13.wagons ? 0 : 1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "machineRate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machineId_r52 = \u0275\u0275nextContext();
    const step_r13 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, step_r13.machines, ctx_r2.columnsState().machines.precision, machineId_r52));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", step_r13.recipeObjectiveId, "");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 64);
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", step_r13.recipeId);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r53);
      const step_r13 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addObjective({ targetId: step_r13.recipeId, unit: ctx_r2.ObjectiveUnit.Machines }));
    });
    \u0275\u0275elementStart(1, "span", 83);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 84);
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r54 = \u0275\u0275reference(6);
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", tooltip_r54);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind2(2, 4, step_r13.recipeId, "recipe"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r13.recipeObjectiveId ? 3 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r56 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r56.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_2_Conditional_0_Template, 3, 4, "div", 44);
  }
  if (rf & 2) {
    const item_r56 = ctx.$implicit;
    \u0275\u0275conditional(item_r56 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 86);
  }
  if (rf & 2) {
    const item_r57 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r57.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r57 = ctx.$implicit;
    const tooltip_r58 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r58);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r57.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r57.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 86);
  }
  if (rf & 2) {
    const machineId_r52 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", machineId_r52);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 85);
    \u0275\u0275pipe(1, "options");
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r55);
      const step_r13 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r13, $event.value, "machine"));
    });
    \u0275\u0275template(2, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_2_Template, 1, 1, "ng-template", 71)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_3_Template, 7, 6, "ng-template", 72)(4, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_4_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r59 = \u0275\u0275reference(5);
    const machineId_r52 = \u0275\u0275nextContext(2);
    const step_r13 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pTooltip", tooltip_r59)("options", \u0275\u0275pipeBind2(1, 3, step_r13.recipe.producers, ctx_r2.data().itemEntities))("ngModel", machineId_r52);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputNumber", 87, 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onBlur", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_6_Template_p_inputNumber_onBlur_0_listener() {
      let tmp_15_0;
      \u0275\u0275restoreView(_r60);
      const overclockInput_r61 = \u0275\u0275reference(1);
      const step_r13 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r13, (tmp_15_0 = overclockInput_r61.value) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 100, "overclock"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275property("min", 1)("max", 250)("step", 10)("maxFractionDigits", 2)("size", 3)("pTooltip", \u0275\u0275pipeBind1(2, 7, "steps.overclockTooltip"))("ngModel", step_r13.recipeSettings.overclock);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 89);
  }
  if (rf & 2) {
    const fuelId_r62 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", fuelId_r62);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "i", 88);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_0_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tooltip_r63 = \u0275\u0275reference(4);
    const fuelId_r62 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, fuelId_r62));
    \u0275\u0275property("pTooltip", tooltip_r63);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r65 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r65.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 89);
  }
  if (rf & 2) {
    const item_r66 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r66.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r66 = ctx.$implicit;
    const tooltip_r67 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r67);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r66.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r66.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 89);
  }
  if (rf & 2) {
    const fuelId_r62 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", fuelId_r62);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 70);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r64);
      const step_r13 = \u0275\u0275nextContext(4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r13, $event.value, "fuel"));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_ng_template_1_Template, 3, 4, "ng-template", 71)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_ng_template_2_Template, 7, 6, "ng-template", 72)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const tooltip_r68 = \u0275\u0275reference(4);
    const fuelId_r62 = \u0275\u0275nextContext();
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", tooltip_r68)("ngModel", fuelId_r62)("options", (tmp_18_0 = step_r13.recipeSettings.fuelOptions) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : \u0275\u0275pureFunction0(3, _c2));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_0_Template, 5, 5, "div", 23)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Conditional_1_Template, 5, 4, "p-dropdown", 69);
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(step_r13.recipe.isBurn ? 0 : step_r13.recipeSettings.machineId ? 1 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r70 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r70.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_0_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 92);
  }
  if (rf & 2) {
    const item_r71 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r71.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_0_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r71 = ctx.$implicit;
    const tooltip_r72 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r71.value !== "module" ? tooltip_r72 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r71.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r71.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 91);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_0_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r69);
      const step_r13 = \u0275\u0275nextContext(5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r13, [{ id: $event.value, count: ctx_r2.rational(1) }], "modules"));
    });
    \u0275\u0275template(2, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_0_ng_template_2_Template, 3, 4, "ng-template", 71)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_0_ng_template_3_Template, 7, 6, "ng-template", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    const modules_r73 = \u0275\u0275nextContext(2);
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 3, "settings.modifierTooltip"))("ngModel", modules_r73[0].id)("options", (tmp_19_0 = step_r13.recipeSettings.moduleOptions) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : \u0275\u0275pureFunction0(5, _c2));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 83);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r77 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, module_r77.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r77.count);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_ng_template_6_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 92);
  }
  if (rf & 2) {
    const module_r78 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", module_r78.id);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_ng_template_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_ng_template_6_For_1_Conditional_0_Template, 1, 1, "lab-tooltip", 92);
  }
  if (rf & 2) {
    const module_r78 = ctx.$implicit;
    \u0275\u0275conditional(module_r78.id ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_ng_template_6_For_1_Template, 1, 1, null, null, _forTrack02);
  }
  if (rf & 2) {
    const modules_r73 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(modules_r73);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r74);
      const modulePicker_r75 = \u0275\u0275reference(5);
      const machine_r76 = \u0275\u0275nextContext();
      const modules_r73 = \u0275\u0275nextContext();
      const step_r13 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(modulePicker_r75.show($event, modules_r73, machine_r76, step_r13.recipeId));
    });
    \u0275\u0275repeaterCreate(1, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_For_2_Template, 4, 5, "i", 94, _forTrack02);
    \u0275\u0275element(3, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "lab-modules-overlay", 96, 6);
    \u0275\u0275listener("setValue", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_Template_lab_modules_overlay_setValue_4_listener($event) {
      \u0275\u0275restoreView(_r74);
      const step_r13 = \u0275\u0275nextContext(5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r13, $event, "modules"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_ng_template_6_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const tooltip_r79 = \u0275\u0275reference(7);
    const modules_r73 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pTooltip", tooltip_r79);
    \u0275\u0275advance();
    \u0275\u0275repeater(modules_r73);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_0_Template, 4, 6, "p-dropdown", 90)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Conditional_1_Template, 8, 1);
  }
  if (rf & 2) {
    const machine_r76 = ctx;
    \u0275\u0275conditional(machine_r76.modules !== true && (machine_r76.modules == null ? null : machine_r76.modules.isOne()) ? 0 : machine_r76.modules != null ? 1 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    let tmp_14_0;
    const machineId_r52 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.data().machineEntities[machineId_r52]) ? 0 : -1, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Template, 7, 7, "button", 79)(4, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_Template, 6, 6, "p-dropdown", 80);
    \u0275\u0275pipe(5, "machineShow");
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_6_Template, 3, 9, "p-inputNumber", 81)(7, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Template, 2, 1)(8, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_17_0;
    const machineId_r52 = \u0275\u0275nextContext();
    const step_r13 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r13.recipe.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.preferences().hideDuplicateIcons || step_r13.itemId != null && step_r13.itemId !== step_r13.recipeId ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind2(5, 6, machineId_r52, ctx_r2.data().game) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Satisfactory ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = step_r13.recipeSettings == null ? null : step_r13.recipeSettings.fuelId) ? 7 : -1, tmp_16_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = step_r13.recipeSettings == null ? null : step_r13.recipeSettings.modules) ? 8 : -1, tmp_17_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 65);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_1_Template, 3, 5, "span", 66);
    \u0275\u0275pipe(2, "machineShowRate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 67);
    \u0275\u0275template(4, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Template, 9, 9, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r13.machines && step_r13.machines.nonzero() && \u0275\u0275pipeBind2(2, 2, ctx, ctx_r2.data().game) ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(step_r13.recipeId && step_r13.recipe && step_r13.recipeSettings ? 4 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 30);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 99);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const beacon_r82 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, beacon_r82.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beacon_r82.total);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_For_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 83);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r83 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, module_r83.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r83.count);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "i", 83);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_For_2_Conditional_5_Template, 4, 5, "i", 98);
    \u0275\u0275repeaterCreate(6, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_For_2_For_7_Template, 4, 5, "i", 94, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beacon_r82 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, beacon_r82.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beacon_r82.count);
    \u0275\u0275advance();
    \u0275\u0275conditional(beacon_r82.total ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(beacon_r82.modules);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 100);
  }
  if (rf & 2) {
    \u0275\u0275property("id", ctx);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_ng_template_6_Conditional_0_Template, 1, 1, "lab-tooltip", 100);
  }
  if (rf & 2) {
    let tmp_14_0;
    const step_r13 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_14_0 = step_r13.recipeSettings.beacons == null ? null : step_r13.recipeSettings.beacons[0] == null ? null : step_r13.recipeSettings.beacons[0].id) ? 0 : -1, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r80);
      const beaconsOverlay_r81 = \u0275\u0275reference(5);
      const step_r13 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(beaconsOverlay_r81.show($event, step_r13.recipeSettings.beacons));
    });
    \u0275\u0275repeaterCreate(1, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_For_2_Template, 8, 6, "div", 44, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275element(3, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "lab-beacons-overlay", 96, 7);
    \u0275\u0275listener("setValue", function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_Template_lab_beacons_overlay_setValue_4_listener($event) {
      \u0275\u0275restoreView(_r80);
      const step_r13 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r13, $event, "beacons"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_ng_template_6_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const tooltip_r84 = \u0275\u0275reference(7);
    const step_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pTooltip", tooltip_r84);
    \u0275\u0275advance();
    \u0275\u0275repeater(step_r13.recipeSettings.beacons);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_Template, 8, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r13.recipeId && step_r13.recipeSettings && step_r13.recipeSettings.beacons ? 1 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "power");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, step_r13.power, ctx_r2.columnsState().power.precision, ctx_r2.effectivePowerUnit()));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_17_Conditional_1_Template, 3, 5, "span", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r13.power && step_r13.power.nonzero() ? 1 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "rate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, step_r13.pollution, ctx_r2.columnsState().pollution.precision));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_18_Conditional_1_Template, 3, 4, "span", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r13.pollution && step_r13.pollution.nonzero() ? 1 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_19_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r85);
      const step_r13 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetStep(step_r13));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.stepUndoTooltip"));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50)(1, "div", 44)(2, "a", 101);
    \u0275\u0275pipe(3, "stepHref");
    \u0275\u0275element(4, "button", 102);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_19_Conditional_6_Template, 2, 3, "button", 103);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r13 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind3(3, 3, step_r13, ctx_r2.routerSvc.zipConfig(), ctx_r2.data()), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(5, 7, "steps.openNewTabTooltip"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r13.recipeId && ctx_r2.stepsModified().recipes[step_r13.recipeId] || step_r13.itemId && ctx_r2.stepsModified().items[step_r13.itemId] || step_r13.recipeObjectiveId && ctx_r2.stepsModified().objectives[step_r13.recipeObjectiveId] ? 6 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275element(2, "div", 43);
    \u0275\u0275repeaterCreate(3, StepsComponent_ng_template_3_Conditional_0_For_4_Template, 1, 1, "div", 43, _forTrack02);
    \u0275\u0275elementStart(5, "div", 44)(6, "button", 45);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Template_button_click_6_listener() {
      const step_r13 = \u0275\u0275restoreView(_r11);
      const expanded_r14 = \u0275\u0275nextContext().expanded;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandRow(step_r13, expanded_r14));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, StepsComponent_ng_template_3_Conditional_0_Conditional_8_Template, 3, 2, "td", 46)(9, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Template, 6, 2, "td", 47)(10, StepsComponent_ng_template_3_Conditional_0_Conditional_10_Template, 10, 7)(11, StepsComponent_ng_template_3_Conditional_0_Conditional_11_Template, 1, 0, "td", 30)(12, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Template, 2, 1)(13, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Template, 2, 1)(14, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Template, 5, 5)(15, StepsComponent_ng_template_3_Conditional_0_Conditional_15_Template, 1, 0, "td", 30)(16, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Template, 2, 1, "td", 48)(17, StepsComponent_ng_template_3_Conditional_0_Conditional_17_Template, 2, 1, "td", 49)(18, StepsComponent_ng_template_3_Conditional_0_Conditional_18_Template, 2, 1, "td", 49)(19, StepsComponent_ng_template_3_Conditional_0_Conditional_19_Template, 7, 9, "td", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    const step_r13 = ctx;
    const expanded_r14 = \u0275\u0275nextContext().expanded;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "step_" + step_r13.id);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.stepDetails()[step_r13.id].tabs);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("fa-rotate-90", expanded_r14);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(7, 15, expanded_r14 ? "steps.hideDetails" : "steps.showDetails"))("pRowToggler", step_r13);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() && ctx_r2.columnsState().checkbox.show ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.focus() && ctx_r2.columnsState().tree.show ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r13.itemId && step_r13.items ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().wagons.show ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = step_r13.recipeSettings == null ? null : step_r13.recipeSettings.machineId) ? 14 : 15, tmp_19_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.columnsState().beacons.show ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().power.show ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().pollution.show ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().link.show ? 19 : -1);
  }
}
function StepsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Template, 20, 17, "tr");
    \u0275\u0275pipe(1, "asStep");
  }
  if (rf & 2) {
    let tmp_7_0;
    const _step_r86 = ctx.$implicit;
    \u0275\u0275conditional((tmp_7_0 = \u0275\u0275pipeBind1(1, 1, _step_r86)) ? 0 : -1, tmp_7_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 110);
    \u0275\u0275element(1, "span", 111);
    \u0275\u0275elementStart(2, "span", 112);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r89 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", item_r89.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.stepDetailIcon[item_r89.label]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "options.stepDetailTab." + item_r89.label));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(2, "td", 114);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const leftPad_r90 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", leftPad_r90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "steps.sources"), " ");
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const output_r91 = \u0275\u0275nextContext().$implicit;
    const step_r88 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r92 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r92)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c3, [step_r88.items == null ? null : step_r88.items.mul(output_r91.value), step_r88.itemId, step_r88.belts == null ? null : step_r88.belts.mul(output_r91.value), ctx_r2.itemsState()[step_r88.itemId].beltId, step_r88.wagons == null ? null : step_r88.wagons.mul(output_r91.value), ctx_r2.itemsState()[step_r88.itemId].wagonId, output_r91.step == null ? null : output_r91.step.machines, output_r91.step == null ? null : output_r91.step.recipeSettings == null ? null : output_r91.step.recipeSettings.machineId, output_r91.step == null ? null : output_r91.step.recipeId, output_r91.step == null ? null : output_r91.step.recipeObjectiveId, output_r91.value, step_r88.itemId, output_r91.inputs]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Conditional_0_Template, 1, 16, "ng-container");
  }
  if (rf & 2) {
    const step_r88 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(step_r88.itemId ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(2, "td", 114);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const leftPad_r90 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", leftPad_r90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "steps.destinations"), " ");
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    let tmp_22_0;
    const parent_r93 = \u0275\u0275nextContext().$implicit;
    const step_r88 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r92 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r92)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c4, [step_r88.items == null ? null : step_r88.items.mul(parent_r93.value), step_r88.itemId, step_r88.belts == null ? null : step_r88.belts.mul(parent_r93.value), ctx_r2.itemsState()[step_r88.itemId].beltId, step_r88.wagons == null ? null : step_r88.wagons.mul(parent_r93.value), ctx_r2.itemsState()[step_r88.itemId].wagonId, ctx_r2.stepDetails()[step_r88.id].outputs.length === 1 ? step_r88.machines == null ? null : step_r88.machines.mul(parent_r93.value) : null, ctx_r2.stepDetails()[step_r88.id].outputs.length === 1 ? step_r88.recipeSettings == null ? null : step_r88.recipeSettings.machineId : null, step_r88.recipeId, step_r88.recipeObjectiveId, parent_r93.value, (tmp_22_0 = ctx_r2.stepById()[parent_r93.key]) == null ? null : tmp_22_0.recipeId, (tmp_22_0 = ctx_r2.stepById()[parent_r93.key]) == null ? null : tmp_22_0.recipeObjectiveId, parent_r93.key === ""]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Conditional_0_Template, 1, 17, "ng-container");
  }
  if (rf & 2) {
    const step_r88 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(step_r88.itemId ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_0_Template, 5, 4, "tr", 105);
    \u0275\u0275repeaterCreate(1, StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_3_Template, 5, 4, "tr", 105);
    \u0275\u0275repeaterCreate(4, StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275pipe(6, "keyvalue");
  }
  if (rf & 2) {
    const step_r88 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.stepDetails()[step_r88.id].outputs.length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.stepDetails()[step_r88.id].outputs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r88.parents ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind2(6, 2, step_r88.parents, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const row_r94 = \u0275\u0275nextContext();
    const output_r95 = \u0275\u0275nextContext().$implicit;
    const step_r88 = \u0275\u0275nextContext(4);
    \u0275\u0275nextContext(2);
    const detailRow_r92 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r92)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c6, row_r94.step.items.mul(row_r94.percent).div(step_r88.recipe.productivity), output_r95.key));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Conditional_0_Template, 1, 5, "ng-container");
  }
  if (rf & 2) {
    const row_r94 = ctx;
    \u0275\u0275conditional(row_r94.step && row_r94.percent && row_r94.step.items ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_22_0;
    const output_r95 = ctx.$implicit;
    const step_r88 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_22_0 = \u0275\u0275pureFunction2(1, _c5, ctx_r2.stepByItemEntities()[output_r95.key], step_r88.outputs == null ? null : step_r88.outputs[output_r95.key])) ? 0 : -1, tmp_22_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(2, "td", 114);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Template, 1, 4, null, null, _forTrack1);
    \u0275\u0275pipe(7, "keyvalue");
  }
  if (rf & 2) {
    const step_r88 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const leftPad_r90 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", leftPad_r90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "steps.depletion"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(7, 4, step_r88.outputs, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const output_r96 = ctx;
    const row_r97 = \u0275\u0275nextContext(2);
    const input_r98 = \u0275\u0275nextContext().$implicit;
    const step_r88 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r92 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r92)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c7, [row_r97.step.items == null ? null : row_r97.step.items.mul(row_r97.percent), input_r98.key, row_r97.step.belts == null ? null : row_r97.step.belts.mul(row_r97.percent), ctx_r2.itemsState()[row_r97.step.itemId].beltId, row_r97.step.wagons == null ? null : row_r97.step.wagons.mul(row_r97.percent), ctx_r2.itemsState()[row_r97.step.itemId].wagonId, output_r96.step == null ? null : output_r96.step.machines, output_r96.step == null ? null : output_r96.step.recipeSettings == null ? null : output_r96.step.recipeSettings.machineId, output_r96.step == null ? null : output_r96.step.recipeId, output_r96.step == null ? null : output_r96.step.recipeObjectiveId, row_r97.percent, step_r88.recipeId, step_r88.recipeObjectiveId]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const row_r97 = \u0275\u0275nextContext(2);
    const input_r98 = \u0275\u0275nextContext().$implicit;
    const step_r88 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r92 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r92)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c8, [row_r97.step.items == null ? null : row_r97.step.items.mul(row_r97.percent), input_r98.key, row_r97.step.belts == null ? null : row_r97.step.belts.mul(row_r97.percent), ctx_r2.itemsState()[row_r97.step.itemId].beltId, row_r97.step.wagons == null ? null : row_r97.step.wagons.mul(row_r97.percent), ctx_r2.itemsState()[row_r97.step.itemId].wagonId, row_r97.percent, step_r88.recipeId, step_r88.recipeObjectiveId]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_0_Template, 1, 16, "ng-container")(1, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_1_Template, 1, 12, "ng-container");
  }
  if (rf & 2) {
    let tmp_25_0;
    const row_r97 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275conditional((tmp_25_0 = ctx_r2.stepDetails()[row_r97.step.id].outputs.length === 1 && ctx_r2.stepDetails()[row_r97.step.id].outputs[0]) ? 0 : 1, tmp_25_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const row_r97 = ctx;
    \u0275\u0275conditional(row_r97.step.itemId && row_r97.percent ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_22_0;
    const input_r98 = ctx.$implicit;
    const step_r88 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_22_0 = \u0275\u0275pureFunction2(1, _c5, ctx_r2.stepByItemEntities()[input_r98.key], (tmp_22_0 = ctx_r2.stepByItemEntities()[input_r98.key].parents) == null ? null : tmp_22_0[step_r88.id])) ? 0 : -1, tmp_22_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(2, "td", 114);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Template, 1, 4, null, null, _forTrack1);
    \u0275\u0275pipe(7, "keyvalue");
  }
  if (rf & 2) {
    const step_r88 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const leftPad_r90 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", leftPad_r90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "steps.inputs"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(7, 4, step_r88.recipe.in, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const row_r99 = \u0275\u0275nextContext();
    const output_r100 = \u0275\u0275nextContext().$implicit;
    const step_r88 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r92 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r92)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c9, [row_r99.step.items == null ? null : row_r99.step.items.mul(row_r99.percent), output_r100.key, row_r99.step.belts == null ? null : row_r99.step.belts.mul(row_r99.percent), ctx_r2.itemsState()[row_r99.step.itemId].beltId, row_r99.step.wagons == null ? null : row_r99.step.wagons.mul(row_r99.percent), ctx_r2.itemsState()[row_r99.step.itemId].wagonId, step_r88.machines, step_r88.recipeSettings == null ? null : step_r88.recipeSettings.machineId, step_r88.recipeId, step_r88.recipeObjectiveId, row_r99.percent, output_r100.key, step_r88.recipeObjectiveId]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Conditional_0_Template, 1, 16, "ng-container");
  }
  if (rf & 2) {
    const row_r99 = ctx;
    \u0275\u0275conditional(row_r99.step.itemId && row_r99.percent ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_21_0;
    const output_r100 = ctx.$implicit;
    const step_r88 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_21_0 = \u0275\u0275pureFunction2(1, _c5, ctx_r2.stepByItemEntities()[output_r100.key], step_r88.outputs == null ? null : step_r88.outputs[output_r100.key])) ? 0 : -1, tmp_21_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_Template, 8, 7)(1, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_Template, 8, 7);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementStart(3, "tr", 105);
    \u0275\u0275template(4, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_4_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(5, "td", 114);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tr", 105);
    \u0275\u0275template(9, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_9_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(10, "td", 116)(11, "span", 66);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 117)(15, "div", 44);
    \u0275\u0275element(16, "i", 118);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "td", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tr", 105);
    \u0275\u0275template(19, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_19_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(20, "td", 114);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(23, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Template, 1, 4, null, null, _forTrack1);
    \u0275\u0275pipe(25, "keyvalue");
  }
  if (rf & 2) {
    const step_r88 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const leftPad_r90 = \u0275\u0275reference(9);
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Factorio && step_r88.recipe.isMining ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 8, step_r88.recipe.in).length ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", leftPad_r90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "steps.time"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", leftPad_r90);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, step_r88.recipe.time, ctx_r2.columnsState().items.precision));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngTemplateOutlet", leftPad_r90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 15, "steps.outputs"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(25, 17, step_r88.recipe.out, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Template, 26, 20);
  }
  if (rf & 2) {
    const step_r88 = \u0275\u0275nextContext();
    \u0275\u0275conditional(step_r88.recipe ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const row_r101 = \u0275\u0275nextContext(2);
    const input_r102 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const machineValueCell_r103 = \u0275\u0275reference(27);
    const step_r88 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r103)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, row_r101.step.items.mul(row_r101.percent).div(step_r88.machines), ctx_r2.columnsState().items.precision), input_r102.key));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const row_r101 = \u0275\u0275nextContext(4);
    \u0275\u0275nextContext(2);
    const machineValueCell_r103 = \u0275\u0275reference(27);
    const step_r88 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r103)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, row_r101.step.belts.mul(row_r101.percent).div(step_r88.machines), ctx_r2.columnsState().belts.precision), ctx));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Conditional_0_Template, 2, 8, "ng-container");
  }
  if (rf & 2) {
    let tmp_27_0;
    const input_r102 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional((tmp_27_0 = ctx_r2.itemsState()[input_r102.key].beltId) ? 0 : -1, tmp_27_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r101 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r101.step.belts ? 1 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const ins_r104 = ctx;
    \u0275\u0275nextContext(6);
    const machineValueCell_r103 = \u0275\u0275reference(27);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r103)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, ins_r104.value, 1), ins_r104.id));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Conditional_0_Template, 2, 8, "ng-container");
    \u0275\u0275pipe(1, "inserterSpeed");
  }
  if (rf & 2) {
    let tmp_27_0;
    const row_r101 = \u0275\u0275nextContext(3);
    const step_r88 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_27_0 = \u0275\u0275pipeBind2(1, 1, row_r101.step.items.mul(row_r101.percent).div(step_r88.machines).div(ctx_r2.dispRateInfo().value), ctx_r2.settings())) ? 0 : -1, tmp_27_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Template, 2, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r101 = \u0275\u0275nextContext(2);
    const input_r102 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsState()[input_r102.key].beltId !== ctx_r2.ItemId.Pipe && row_r101.step.items ? 1 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_2_Template, 2, 8, "ng-container");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Template, 2, 1, "td")(4, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Template, 2, 1, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r101 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r101.step.items ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Factorio ? 4 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Template, 5, 3, "tr");
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.percent ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_22_0;
    const input_r102 = ctx.$implicit;
    const step_r88 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_22_0 = \u0275\u0275pureFunction2(1, _c5, ctx_r2.stepByItemEntities()[input_r102.key], (tmp_22_0 = ctx_r2.stepByItemEntities()[input_r102.key].parents) == null ? null : tmp_22_0[step_r88.id])) ? 0 : -1, tmp_22_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 64);
  }
  if (rf & 2) {
    const step_r88 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", step_r88.recipeId);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 86);
  }
  if (rf & 2) {
    const machineId_r105 = \u0275\u0275nextContext();
    \u0275\u0275property("id", machineId_r105);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "i", 63);
    \u0275\u0275pipe(2, "iconClass");
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "i", 63);
    \u0275\u0275pipe(6, "iconClass");
    \u0275\u0275template(7, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_ng_template_7_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tooltip_r106 = \u0275\u0275reference(4);
    const step_r88 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind2(2, 6, step_r88.recipeId, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r106);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(6, 9, ctx));
    \u0275\u0275property("pTooltip", tooltip_r106);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const ins_r107 = ctx;
    \u0275\u0275nextContext(5);
    const machineValueCell_r103 = \u0275\u0275reference(27);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r103)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, ins_r107.value, 1), ins_r107.id));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Conditional_0_Template, 2, 8, "ng-container");
    \u0275\u0275pipe(1, "inserterSpeed");
  }
  if (rf & 2) {
    let tmp_26_0;
    const items_r108 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275conditional((tmp_26_0 = \u0275\u0275pipeBind2(1, 1, items_r108, ctx_r2.settings())) ? 0 : -1, tmp_26_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Template, 2, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const output_r109 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsState()[output_r109.key].beltId !== ctx_r2.ItemId.Pipe ? 1 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const beltId_r110 = ctx;
    const items_r108 = \u0275\u0275nextContext(2);
    \u0275\u0275nextContext(2);
    const machineValueCell_r103 = \u0275\u0275reference(27);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r103)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, items_r108.div(ctx_r2.beltSpeed()[beltId_r110]), ctx_r2.columnsState().belts.precision), beltId_r110));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Conditional_1_Template, 2, 8, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_25_0;
    const output_r109 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_25_0 = ctx_r2.itemsState()[output_r109.key].beltId) ? 1 : -1, tmp_25_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Template, 2, 1, "td")(2, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Template, 2, 1, "td");
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_ng_container_4_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(5, "rate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const output_r109 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const machineValueCell_r103 = \u0275\u0275reference(27);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Factorio ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r103)("ngTemplateOutletContext", \u0275\u0275pureFunction2(7, _c10, \u0275\u0275pipeBind2(5, 4, ctx.mul(ctx_r2.dispRateInfo().value), ctx_r2.columnsState().items.precision), output_r109.key));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Template, 6, 10, "tr");
  }
  if (rf & 2) {
    let tmp_22_0;
    const output_r109 = ctx.$implicit;
    const step_r88 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_22_0 = output_r109.value.div(step_r88.recipe.time)) ? 0 : -1, tmp_22_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_ng_template_26_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 62);
  }
  if (rf & 2) {
    const itemId_r111 = \u0275\u0275nextContext().itemId;
    \u0275\u0275property("id", itemId_r111);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "i", 63);
    \u0275\u0275pipe(4, "iconClass");
    \u0275\u0275template(5, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_ng_template_26_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r112 = ctx.value;
    const itemId_r111 = ctx.itemId;
    const tooltip_r113 = \u0275\u0275reference(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r112);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(4, 4, itemId_r111));
    \u0275\u0275property("pTooltip", tooltip_r113);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "table", 120);
    \u0275\u0275repeaterCreate(2, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Template, 1, 4, null, null, _forTrack1);
    \u0275\u0275pipe(4, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 121);
    \u0275\u0275elementStart(6, "table", 120)(7, "tr")(8, "td", 116)(9, "span", 66);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_Template, 9, 11, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tr")(15, "td", 116)(16, "span", 66);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "i", 118);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(21, "i", 121);
    \u0275\u0275elementStart(22, "table", 120);
    \u0275\u0275repeaterCreate(23, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275pipe(25, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_ng_template_26_Template, 7, 6, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const step_r88 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(4, 3, step_r88.recipe.in, ctx_r2.trackSvc.sortByValue));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 6, ctx_r2.rational(1), ctx_r2.columnsState().machines.precision));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_14_0 = step_r88.recipeSettings == null ? null : step_r88.recipeSettings.machineId) ? 13 : -1, tmp_14_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 9, ctx_r2.dispRateInfo().value, ctx_r2.columnsState().machines.precision));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(25, 12, step_r88.recipe.out, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "small", 119);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, "steps.inserterCountInfo"), \u0275\u0275sanitizeHtml);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275element(1, "td");
    \u0275\u0275elementStart(2, "td", 17);
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Template, 28, 15, "div", 23)(4, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_4_Template, 2, 3, "small", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r88 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(step_r88.recipeId && step_r88.recipe && step_r88.machines ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Factorio ? 4 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 64);
  }
  if (rf & 2) {
    const recipeId_r117 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", recipeId_r117);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275listener("click", function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_Template_button_click_0_listener() {
      const recipeId_r117 = \u0275\u0275restoreView(_r116).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.toggleRecipe(recipeId_r117, ctx_r2.recipesState(), ctx_r2.data()));
    });
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipeId_r117 = ctx.$implicit;
    const tooltip_r118 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("hover-active", ctx_r2.recipesState()[recipeId_r117].excluded);
    \u0275\u0275property("icon", \u0275\u0275pipeBind2(1, 4, recipeId_r117, "recipe"))("pTooltip", tooltip_r118);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275element(1, "td");
    \u0275\u0275elementStart(2, "td", 17)(3, "div")(4, "div", 122);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 123)(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-checkbox", 124);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_Template_p_checkbox_onChange_11_listener() {
      const stepDetails_r115 = \u0275\u0275restoreView(_r114);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleRecipes(stepDetails_r115.recipeIds, stepDetails_r115.allRecipesIncluded, ctx_r2.data()));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "tr", 105);
    \u0275\u0275element(14, "td");
    \u0275\u0275elementStart(15, "td", 17)(16, "div", 125);
    \u0275\u0275repeaterCreate(17, StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_Template, 5, 7, "button", 126, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stepDetails_r115 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "steps.includedRecipes"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "steps.includedRecipesInfo"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", stepDetails_r115.allRecipesIncluded)("binary", true)("label", \u0275\u0275pipeBind1(12, 9, "picker.includeAll"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(stepDetails_r115.recipeIds);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_Template, 19, 11);
  }
  if (rf & 2) {
    let tmp_10_0;
    const step_r88 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_10_0 = step_r88.itemId && ctx_r2.stepDetails()[step_r88.id]) ? 0 : -1, tmp_10_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 105)(1, "td", 106)(2, "a", 107);
    \u0275\u0275element(3, "button", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 17)(5, "p-tabMenu", 109, 8);
    \u0275\u0275pipe(7, "stepId");
    \u0275\u0275listener("activeItemChange", function StepsComponent_ng_template_4_Conditional_0_Template_p_tabMenu_activeItemChange_5_listener($event) {
      const step_r88 = \u0275\u0275restoreView(_r87);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveItem(step_r88, $event));
    });
    \u0275\u0275template(8, StepsComponent_ng_template_4_Conditional_0_ng_template_8_Template, 5, 6, "ng-template", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, StepsComponent_ng_template_4_Conditional_0_Case_9_Template, 7, 5)(10, StepsComponent_ng_template_4_Conditional_0_Case_10_Template, 1, 1)(11, StepsComponent_ng_template_4_Conditional_0_Case_11_Template, 5, 2, "tr", 105)(12, StepsComponent_ng_template_4_Conditional_0_Case_12_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_13_0;
    const step_r88 = ctx;
    const expandTabMenu_r119 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("relativeTo", ctx_r2.route)("fragment", step_r88.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("model", ctx_r2.stepDetails()[step_r88.id].tabs)("activeItem", ctx_r2.activeItem[\u0275\u0275pipeBind1(7, 5, step_r88)]);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_13_0 = expandTabMenu_r119.activeItem == null ? null : expandTabMenu_r119.activeItem.label) === ctx_r2.StepDetailTab.Item ? 9 : tmp_13_0 === ctx_r2.StepDetailTab.Recipe ? 10 : tmp_13_0 === ctx_r2.StepDetailTab.Machine ? 11 : tmp_13_0 === ctx_r2.StepDetailTab.Recipes ? 12 : -1);
  }
}
function StepsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Template, 13, 7);
    \u0275\u0275pipe(1, "asStep");
  }
  if (rf & 2) {
    let tmp_6_0;
    const _step_r120 = ctx.$implicit;
    \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(1, 1, _step_r120)) ? 0 : -1, tmp_6_0);
  }
}
function StepsComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17)(2, "div", 51)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "steps.emptyMessage"));
  }
}
function StepsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_5_Conditional_0_Template, 6, 3, "tr");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.focus() ? 0 : -1);
  }
}
function StepsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 30);
  }
}
function StepsComponent_ng_template_8_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_8_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_8_Conditional_1_Conditional_0_Template, 1, 0, "td")(1, StepsComponent_ng_template_8_Conditional_1_Conditional_1_Template, 1, 0, "td");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.columnsState().checkbox.show ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().tree.show ? 1 : -1);
  }
}
function StepsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_8_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.focus() ? 1 : -1);
  }
}
function StepsComponent_ng_template_10_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_10_Conditional_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 62);
  }
  if (rf & 2) {
    const itemId_r121 = \u0275\u0275nextContext(2).itemId;
    \u0275\u0275property("id", itemId_r121);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_11_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 75);
  }
  if (rf & 2) {
    const beltId_r122 = \u0275\u0275nextContext(3).beltId;
    \u0275\u0275property("id", beltId_r122);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 116)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 117)(5, "div", 44)(6, "i", 63);
    \u0275\u0275pipe(7, "iconClass");
    \u0275\u0275template(8, StepsComponent_ng_template_10_Conditional_1_Conditional_11_ng_template_8_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tooltip_r123 = \u0275\u0275reference(9);
    const ctx_r123 = \u0275\u0275nextContext(2);
    const belts_r125 = ctx_r123.belts;
    const beltId_r122 = ctx_r123.beltId;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, belts_r125, ctx_r2.columnsState().belts.precision));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(7, 7, beltId_r122));
    \u0275\u0275property("pTooltip", tooltip_r123);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 77);
  }
  if (rf & 2) {
    const wagonId_r126 = \u0275\u0275nextContext(4).wagonId;
    \u0275\u0275property("id", wagonId_r126);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 63);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_6_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r127 = \u0275\u0275reference(3);
    const wagonId_r126 = \u0275\u0275nextContext(3).wagonId;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, wagonId_r126));
    \u0275\u0275property("pTooltip", tooltip_r127);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 78);
  }
  if (rf & 2) {
    const wagonId_r126 = \u0275\u0275nextContext(4).wagonId;
    \u0275\u0275property("id", wagonId_r126);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 63);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_7_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r128 = \u0275\u0275reference(3);
    const wagonId_r126 = \u0275\u0275nextContext(3).wagonId;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, wagonId_r126));
    \u0275\u0275property("pTooltip", tooltip_r128);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 116)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 117)(5, "div", 44);
    \u0275\u0275template(6, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_6_Template, 4, 5, "i", 57)(7, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_7_Template, 4, 5, "i", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r123 = \u0275\u0275nextContext(2);
    const wagons_r129 = ctx_r123.wagons;
    const wagonId_r126 = ctx_r123.wagonId;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, wagons_r129, ctx_r2.columnsState().wagons.precision));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.data().cargoWagonIds.indexOf(wagonId_r126) !== -1 ? 6 : 7);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "machineRate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r123 = \u0275\u0275nextContext(2);
    const machines_r130 = ctx_r123.machines;
    const machineId_r131 = ctx_r123.machineId;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, machines_r130, ctx_r2.columnsState().machines.precision, machineId_r131));
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "steps.inputs"), " ");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipeObjectiveId_r132 = \u0275\u0275nextContext(3).recipeObjectiveId;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", recipeObjectiveId_r132, "");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_19_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 64);
  }
  if (rf & 2) {
    const recipeId_r133 = \u0275\u0275nextContext(3).recipeId;
    \u0275\u0275property("id", recipeId_r133);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_19_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 86);
  }
  if (rf & 2) {
    const machineId_r131 = \u0275\u0275nextContext(3).machineId;
    \u0275\u0275property("id", machineId_r131);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 63);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_10_Conditional_1_Conditional_19_Conditional_2_Template, 2, 1, "span")(3, StepsComponent_ng_template_10_Conditional_1_Conditional_19_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "i", 63);
    \u0275\u0275pipe(6, "iconClass");
    \u0275\u0275template(7, StepsComponent_ng_template_10_Conditional_1_Conditional_19_ng_template_7_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r134 = \u0275\u0275reference(4);
    const ctx_r123 = \u0275\u0275nextContext(2);
    const machineId_r131 = ctx_r123.machineId;
    const recipeId_r133 = ctx_r123.recipeId;
    const recipeObjectiveId_r132 = ctx_r123.recipeObjectiveId;
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 7, recipeId_r133, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r134);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(recipeObjectiveId_r132 ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(6, 10, machineId_r131));
    \u0275\u0275property("pTooltip", tooltip_r134);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 130);
    \u0275\u0275element(3, "i", 131);
    \u0275\u0275elementEnd();
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 132);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 132);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const destRecipeObjectiveId_r135 = \u0275\u0275nextContext(4).destRecipeObjectiveId;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", destRecipeObjectiveId_r135, "");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 133);
  }
  if (rf & 2) {
    const ctx_r123 = \u0275\u0275nextContext(4);
    const destId_r136 = ctx_r123.destId;
    const destIsRecipe_r137 = ctx_r123.destIsRecipe;
    \u0275\u0275property("id", destId_r136)("type", destIsRecipe_r137 ? "recipe" : "item");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 63);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_Conditional_2_Template, 2, 1, "span")(3, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_ng_template_3_Template, 1, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r138 = \u0275\u0275reference(4);
    const ctx_r123 = \u0275\u0275nextContext(3);
    const destId_r136 = ctx_r123.destId;
    const destRecipeObjectiveId_r135 = ctx_r123.destRecipeObjectiveId;
    const destIsRecipe_r137 = ctx_r123.destIsRecipe;
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 4, destId_r136, destIsRecipe_r137 ? "recipe" : "item"));
    \u0275\u0275property("pTooltip", tooltip_r138);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(destRecipeObjectiveId_r135 ? 2 : -1);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "steps.outputs"), " ");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_0_Template, 1, 0, "i", 132);
    \u0275\u0275elementStart(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275pipe(4, "leftPad");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_5_Template, 1, 0, "i", 132)(6, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_Template, 5, 7, "i", 57)(7, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_7_Template, 3, 3, "span");
  }
  if (rf & 2) {
    const ctx_r123 = \u0275\u0275nextContext(2);
    const percent_r139 = ctx_r123.percent;
    const percentOnDest_r140 = ctx_r123.percentOnDest;
    const destId_r136 = ctx_r123.destId;
    const outputs_r141 = ctx_r123.outputs;
    \u0275\u0275conditional(percentOnDest_r140 ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 8, \u0275\u0275pipeBind2(3, 5, percent_r139, -2)), "%");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!percentOnDest_r140 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(destId_r136 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(outputs_r141 ? 7 : -1);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_10_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(1, "td", 116)(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 117)(6, "div", 44)(7, "i", 63);
    \u0275\u0275pipe(8, "iconClass");
    \u0275\u0275template(9, StepsComponent_ng_template_10_Conditional_1_ng_template_9_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, StepsComponent_ng_template_10_Conditional_1_Conditional_11_Template, 10, 9)(12, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Template, 8, 5);
    \u0275\u0275elementStart(13, "td", 116);
    \u0275\u0275template(14, StepsComponent_ng_template_10_Conditional_1_Conditional_14_Template, 3, 5, "span", 66);
    \u0275\u0275pipe(15, "machineShowRate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 128)(17, "div", 23);
    \u0275\u0275template(18, StepsComponent_ng_template_10_Conditional_1_Conditional_18_Template, 3, 3, "div", 129)(19, StepsComponent_ng_template_10_Conditional_1_Conditional_19_Template, 9, 12);
    \u0275\u0275pipe(20, "machineShow");
    \u0275\u0275template(21, StepsComponent_ng_template_10_Conditional_1_Conditional_21_Template, 4, 0)(22, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Template, 8, 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tooltip_r142 = \u0275\u0275reference(10);
    const ctx_r123 = \u0275\u0275nextContext();
    const items_r143 = ctx_r123.items;
    const itemId_r121 = ctx_r123.itemId;
    const belts_r125 = ctx_r123.belts;
    const beltId_r122 = ctx_r123.beltId;
    const wagons_r129 = ctx_r123.wagons;
    const wagonId_r126 = ctx_r123.wagonId;
    const machines_r130 = ctx_r123.machines;
    const machineId_r131 = ctx_r123.machineId;
    const percent_r139 = ctx_r123.percent;
    const inputs_r144 = ctx_r123.inputs;
    const ctx_r2 = \u0275\u0275nextContext();
    const leftPad_r90 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", leftPad_r90);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 11, items_r143, ctx_r2.columnsState().items.precision));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(8, 14, itemId_r121));
    \u0275\u0275property("pTooltip", tooltip_r142);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show && belts_r125 && beltId_r122 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().wagons.show && wagons_r129 && wagonId_r126 ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(machines_r130 && machines_r130.nonzero() && \u0275\u0275pipeBind2(15, 16, machineId_r131, ctx_r2.data().game) ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(inputs_r144 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind2(20, 19, machineId_r131, ctx_r2.data().game) ? 19 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(percent_r139 ? 22 : -1);
  }
}
function StepsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_10_Conditional_1_Template, 23, 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itemId_r121 = ctx.itemId;
    \u0275\u0275advance();
    \u0275\u0275conditional(itemId_r121 ? 1 : -1);
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_12_Conditional_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_12_Conditional_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_12_Conditional_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_12_Conditional_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 134)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "power");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 1, ctx_r2.totals().power, ctx_r2.columnsState().power.precision, ctx_r2.effectivePowerUnit()));
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 134)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, ctx_r2.totals().pollution, ctx_r2.columnsState().pollution.precision));
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "td");
    \u0275\u0275template(2, StepsComponent_ng_template_12_Conditional_0_Conditional_2_Template, 1, 0, "td")(3, StepsComponent_ng_template_12_Conditional_0_Conditional_3_Template, 1, 0, "td");
    \u0275\u0275elementStart(4, "td", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StepsComponent_ng_template_12_Conditional_0_ng_container_7_Template, 1, 0, "ng-container", 115)(8, StepsComponent_ng_template_12_Conditional_0_ng_container_8_Template, 1, 0, "ng-container", 115)(9, StepsComponent_ng_template_12_Conditional_0_ng_container_9_Template, 1, 0, "ng-container", 115)(10, StepsComponent_ng_template_12_Conditional_0_ng_container_10_Template, 1, 0, "ng-container", 115)(11, StepsComponent_ng_template_12_Conditional_0_Conditional_11_Template, 4, 5, "td", 134)(12, StepsComponent_ng_template_12_Conditional_0_Conditional_12_Template, 4, 4, "td", 134)(13, StepsComponent_ng_template_12_Conditional_0_Conditional_13_Template, 1, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const totalCell_r145 = \u0275\u0275reference(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.columnsState().checkbox.show ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().tree.show ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 14, "steps.total"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", totalCell_r145)("ngTemplateOutletContext", \u0275\u0275pureFunction2(16, _c11, ctx_r2.columnsState().belts, ctx_r2.totals().belts));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", totalCell_r145)("ngTemplateOutletContext", \u0275\u0275pureFunction2(19, _c12, ctx_r2.columnsState().wagons, ctx_r2.totals().wagons));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", totalCell_r145)("ngTemplateOutletContext", \u0275\u0275pureFunction3(22, _c13, ctx_r2.columnsState().machines, ctx_r2.totals().machines, ctx_r2.totals().modules));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", totalCell_r145)("ngTemplateOutletContext", \u0275\u0275pureFunction3(26, _c14, ctx_r2.columnsState().beacons, ctx_r2.totals().beacons, ctx_r2.totals().beaconModules));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().power.show ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().pollution.show ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().link.show ? 13 : -1);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tot_r146 = ctx.$implicit;
    const columnSettings_r147 = \u0275\u0275nextContext(2).columnSettings;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, tot_r146.value, columnSettings_r147.precision));
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 133);
  }
  if (rf & 2) {
    const tot_r148 = \u0275\u0275nextContext(2).$implicit;
    const type_r149 = \u0275\u0275nextContext(2).type;
    \u0275\u0275property("id", tot_r148.key)("type", type_r149);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 141);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_0_ng_template_2_Template, 1, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r150 = \u0275\u0275reference(3);
    const tot_r148 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, tot_r148.key));
    \u0275\u0275property("pTooltip", tooltip_r150);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 64);
  }
  if (rf & 2) {
    const tot_r148 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", tot_r148.key);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 141);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r151 = \u0275\u0275reference(3);
    const tot_r148 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 3, tot_r148.key, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r151);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_0_Template, 4, 5, "i", 140)(1, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_1_Template, 4, 6, "i", 140);
  }
  if (rf & 2) {
    const tot_r148 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.data().itemEntities[tot_r148.key] ? 0 : 1);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_12_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 92);
  }
  if (rf & 2) {
    const tot_r152 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", tot_r152.key);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "i", 141);
    \u0275\u0275pipe(4, "iconClass");
    \u0275\u0275template(5, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_12_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tot_r152 = ctx.$implicit;
    const tooltip_r153 = \u0275\u0275reference(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tot_r152.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind2(4, 4, tot_r152.key, "item"));
    \u0275\u0275property("pTooltip", tot_r152.key !== "module" ? tooltip_r153 : void 0);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 135);
    \u0275\u0275repeaterCreate(1, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_2_Template, 4, 4, "div", 136, _forTrack1);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 137)(5, "div", 44)(6, "div", 138);
    \u0275\u0275repeaterCreate(7, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Template, 2, 1, null, null, _forTrack1);
    \u0275\u0275pipe(9, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 139);
    \u0275\u0275repeaterCreate(11, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_12_Template, 7, 7, null, null, _forTrack1);
    \u0275\u0275pipe(13, "keyvalue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r153 = \u0275\u0275nextContext();
    const totals_r155 = ctx_r153.totals;
    const modulesTotals_r156 = ctx_r153.modulesTotals;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind2(3, 0, totals_r155, ctx_r2.trackSvc.sortByValue));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(9, 3, totals_r155, ctx_r2.trackSvc.sortByValue));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(13, 6, modulesTotals_r156, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_12_ng_template_1_Conditional_0_Template, 14, 9);
  }
  if (rf & 2) {
    const columnSettings_r147 = ctx.columnSettings;
    \u0275\u0275conditional(columnSettings_r147.show ? 0 : -1);
  }
}
function StepsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_12_Conditional_0_Template, 14, 30, "tr")(1, StepsComponent_ng_template_12_ng_template_1_Template, 1, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.focus() ? 0 : -1);
  }
}
var _StepsComponent = class _StepsComponent {
  constructor() {
    this.document = inject(DOCUMENT);
    this.route = inject(ActivatedRoute);
    this.ref = inject(ChangeDetectorRef);
    this.contentSvc = inject(ContentService);
    this.trackSvc = inject(TrackService);
    this.store = inject(Store);
    this.exportSvc = inject(ExportService);
    this.routerSvc = inject(RouterService);
    this.focus = input(false);
    this.selectedId = input();
    this.steps = computed(() => {
      const steps = [...this.store.selectSignal(objectives_exports.getSteps)()];
      const focus = this.focus();
      if (!focus)
        return steps;
      const selectedId = this.selectedId();
      return steps.filter((s) => s.id === selectedId);
    });
    this.activeItemsEffect = effect(() => {
      const steps = this.steps();
      const stepDetails = this.store.selectSignal(objectives_exports.getStepDetails)();
      this.setActiveItems(steps, stepDetails);
    });
    this.toggleEffect = effect(() => {
      const focus = this.focus();
      const step = this.steps()[0];
      if (focus && step) {
        this.stepsTable().toggleRow(step);
        this.expandRow(step, false);
      }
    });
    this.machinesState = this.store.selectSignal(machines_exports.getMachinesState);
    this.itemsState = this.store.selectSignal(items_exports.getItemsState);
    this.itemsModified = this.store.selectSignal(items_exports.getItemsModified);
    this.stepsModified = this.store.selectSignal(objectives_exports.getStepsModified);
    this.totals = this.store.selectSignal(objectives_exports.getTotals);
    this.stepDetails = this.store.selectSignal(objectives_exports.getStepDetails);
    this.stepById = this.store.selectSignal(objectives_exports.getStepById);
    this.stepByItemEntities = this.store.selectSignal(objectives_exports.getStepByItemEntities);
    this.stepTree = this.store.selectSignal(objectives_exports.getStepTree);
    this.effectivePowerUnit = this.store.selectSignal(objectives_exports.getEffectivePowerUnit);
    this.recipesState = this.store.selectSignal(recipes_exports.getRecipesState);
    this.recipesModified = this.store.selectSignal(objectives_exports.getRecipesModified);
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.columnsState = this.store.selectSignal(settings_exports.getColumnsState);
    this.settings = this.store.selectSignal(settings_exports.getSettings);
    this.dispRateInfo = this.store.selectSignal(settings_exports.getDisplayRateInfo);
    this.options = this.store.selectSignal(settings_exports.getOptions);
    this.beltSpeed = this.store.selectSignal(settings_exports.getBeltSpeed);
    this.preferences = this.store.selectSignal(preferences_exports.preferencesState);
    this.sortSteps$ = new BehaviorSubject(null);
    this.stepsTable = viewChild.required("stepsTable");
    this.activeItem = {};
    this.stepDetailIcon = stepDetailIcon;
    this.ItemId = ItemId;
    this.StepDetailTab = StepDetailTab;
    this.Game = Game;
    this.EnergyType = EnergyType;
    this.ObjectiveUnit = ObjectiveUnit;
    this.rational = rational;
    combineLatest([
      this.sortSteps$.pipe(pairwise()),
      this.store.select(objectives_exports.getSteps)
    ]).pipe(takeUntilDestroyed()).subscribe(([[prev, curr], steps]) => {
      this.sortSteps(prev, curr, steps);
    });
  }
  ngOnInit() {
    this.route.fragment.pipe(first(), filter((f) => f != null)).subscribe((id) => {
      this.fragmentId = id;
    });
  }
  ngAfterViewInit() {
    try {
      if (this.fragmentId) {
        const [_, stepId, tabId] = this.fragmentId.split("_");
        combineLatest([
          this.store.select(objectives_exports.getSteps),
          this.store.select(objectives_exports.getStepDetails)
        ]).pipe(first()).subscribe(([steps, stepDetails]) => {
          const step = steps.find((s) => s.id === stepId);
          if (step) {
            const tabs = stepDetails[step.id].tabs;
            if (tabs.length) {
              if (this.stepsTable) {
                this.stepsTable().toggleRow(step);
                setTimeout(() => {
                  if (tabId) {
                    const tab = this.document.querySelector("#" + this.fragmentId);
                    if (tab)
                      tab.click();
                  } else {
                    this.document.querySelector("#" + this.fragmentId)?.scrollIntoView();
                  }
                }, 10);
              }
            }
          }
        });
      }
    } catch {
    }
  }
  sortSteps(prev, curr, steps) {
    if (curr == null || curr.order == null || curr.field == null)
      return;
    const order = curr.order;
    const field = curr.field;
    if (prev != null && prev.field === field && prev.order !== order && order === -1 && this.stepsTable != null) {
      curr.data?.sort((a, b) => {
        const diff = steps.indexOf(a) - steps.indexOf(b);
        return diff;
      });
      this.stepsTable().sortOrder = 0;
      this.stepsTable().sortField = "";
      this.stepsTable().reset();
      return this.sortSteps$.next(null);
    }
    curr.data?.sort((a, b) => {
      const diff = (a[field] ?? rational(0n)).sub(b[field] ?? rational(0n));
      return diff.toNumber() * order;
    });
  }
  setActiveItems(steps, stepDetails) {
    steps.forEach((step) => this._updateActiveItem(step, stepDetails, false));
  }
  expandRow(step, expanded) {
    if (expanded)
      return;
    this._updateActiveItem(step, this.stepDetails(), true);
  }
  _updateActiveItem(step, stepDetails, force) {
    const id = StepIdPipe.transform(step);
    const item = this._getActiveItem(step, id, stepDetails, force);
    if (item) {
      const id2 = StepIdPipe.transform(step);
      this.activeItem[id2] = item;
    }
  }
  _getActiveItem(step, id, stepDetails, force) {
    const old = this.activeItem[id];
    const detail = stepDetails[step.id];
    if (detail == null)
      return null;
    if (old != null) {
      const match = detail.tabs.find((t) => t.label === old.label);
      if (match != null)
        return match;
    }
    if (old == null && !force)
      return null;
    const userTab = BrowserUtility.stepDetailTab;
    if (userTab) {
      const match = detail.tabs.find((t) => t.label === userTab);
      if (match != null)
        return match;
    }
    return detail.tabs[0];
  }
  setActiveItem(step, item) {
    if (item == null)
      return;
    const id = StepIdPipe.transform(step);
    this.activeItem[id] = item;
    BrowserUtility.stepDetailTab = item.label;
  }
  resetStep(step) {
    if (step.itemId) {
      this.resetItem(step.itemId);
    }
    if (step.recipeObjectiveId) {
      this.resetRecipeObjective(step.recipeObjectiveId);
    } else if (step.recipeId) {
      this.resetRecipe(step.recipeId);
    }
  }
  toggleRecipes(ids, value, data) {
    const payload = ids.map((id) => ({
      id,
      value,
      def: coalesce(data.defaults?.excludedRecipeIds, []).includes(id)
    }));
    this.setRecipeExcludedBatch(payload);
  }
  toggleRecipe(id, recipesState, data) {
    const value = !recipesState[id].excluded;
    const def = coalesce(data.defaults?.excludedRecipeIds, []).some((i) => i === id);
    this.setRecipeExcluded(id, value, def);
  }
  changeRecipeField(step, event, field) {
    if (step.recipeId == null)
      return;
    const settings = step.recipeSettings;
    if (settings?.machineId == null)
      return;
    const id = step.recipeObjectiveId ?? step.recipeId;
    const isObjective = step.recipeObjectiveId != null;
    const machinesState = this.machinesState();
    const machineSettings = machinesState.entities[settings.machineId];
    switch (field) {
      case "machine": {
        if (typeof event !== "string")
          return;
        const data = this.data();
        this.setMachine(id, event, RecipeUtility.bestMatch(data.recipeEntities[step.recipeId].producers, machinesState.ids), isObjective);
        break;
      }
      case "fuel": {
        if (typeof event !== "string")
          return;
        this.setFuel(id, event, machineSettings.fuelId, isObjective);
        break;
      }
      case "modules": {
        if (!Array.isArray(event))
          return;
        event = event;
        const machine = this.data().machineEntities[settings.machineId];
        this.setModules(id, RecipeUtility.dehydrateModules(event, coalesce(settings.moduleOptions, []), machinesState.moduleRankIds, machine.modules, machineSettings.modules), isObjective);
        break;
      }
      case "beacons": {
        if (!Array.isArray(event))
          return;
        event = event;
        const def = machineSettings.beacons;
        this.setBeacons(id, RecipeUtility.dehydrateBeacons(event, def), isObjective);
        break;
      }
      case "overclock": {
        if (typeof event !== "number")
          return;
        const def = machineSettings.overclock;
        this.setOverclock(id, rational(event), def, isObjective);
        break;
      }
    }
  }
  changeStepChecked(step, checked) {
    if (step.itemId != null) {
      this.setItemChecked(step.itemId, checked);
    } else if (step.recipeObjectiveId != null) {
      this.setRecipeChecked(step.recipeObjectiveId, checked, true);
    } else if (step.recipeId != null) {
      this.setRecipeChecked(step.recipeId, checked);
    }
  }
  /** Action Dispatch Methods */
  setRows(value) {
    this.store.dispatch(new preferences_exports.SetRowsAction(value));
  }
  setItemExcluded(id, value) {
    this.store.dispatch(new items_exports.SetExcludedAction({ id, value }));
  }
  setItemChecked(id, value) {
    this.store.dispatch(new items_exports.SetCheckedAction({ id, value }));
  }
  setBelt(id, value, def) {
    this.store.dispatch(new items_exports.SetBeltAction({ id, value, def }));
  }
  setWagon(id, value, def) {
    this.store.dispatch(new items_exports.SetWagonAction({ id, value, def }));
  }
  setRecipeExcluded(id, value, def) {
    this.store.dispatch(new recipes_exports.SetExcludedAction({ id, value, def }));
  }
  setRecipeExcludedBatch(payload) {
    this.store.dispatch(new recipes_exports.SetExcludedBatchAction(payload));
  }
  addObjective(value) {
    this.store.dispatch(new objectives_exports.AddAction(value));
  }
  setMachine(id, value, def, objective = false) {
    const action = objective ? objectives_exports.SetMachineAction : recipes_exports.SetMachineAction;
    this.store.dispatch(new action({ id, value, def }));
  }
  setFuel(id, value, def, objective = false) {
    const action = objective ? objectives_exports.SetFuelAction : recipes_exports.SetFuelAction;
    this.store.dispatch(new action({ id, value, def }));
  }
  setModules(id, value, objective = false) {
    const action = objective ? objectives_exports.SetModulesAction : recipes_exports.SetModulesAction;
    this.store.dispatch(new action({ id, value }));
  }
  setBeacons(id, value, objective = false) {
    const action = objective ? objectives_exports.SetBeaconsAction : recipes_exports.SetBeaconsAction;
    this.store.dispatch(new action({ id, value }));
  }
  setOverclock(id, value, def, objective = false) {
    const action = objective ? objectives_exports.SetOverclockAction : recipes_exports.SetOverclockAction;
    this.store.dispatch(new action({ id, value, def }));
  }
  setRecipeChecked(id, value, objective = false) {
    const action = objective ? objectives_exports.SetCheckedAction : recipes_exports.SetCheckedAction;
    this.store.dispatch(new action({ id, value }));
  }
  resetItem(value) {
    this.store.dispatch(new items_exports.ResetItemAction(value));
  }
  resetRecipe(value) {
    this.store.dispatch(new recipes_exports.ResetRecipeAction(value));
  }
  resetRecipeObjective(value) {
    this.store.dispatch(new objectives_exports.ResetObjectiveAction(value));
  }
  resetChecked() {
    this.store.dispatch(new items_exports.ResetCheckedAction());
  }
  resetExcluded() {
    this.store.dispatch(new items_exports.ResetExcludedAction());
  }
  resetBelts() {
    this.store.dispatch(new items_exports.ResetBeltsAction());
  }
  resetWagons() {
    this.store.dispatch(new items_exports.ResetWagonsAction());
  }
  resetMachines() {
    this.store.dispatch(new recipes_exports.ResetMachinesAction());
  }
  resetBeacons() {
    this.store.dispatch(new recipes_exports.ResetBeaconsAction());
  }
};
_StepsComponent.\u0275fac = function StepsComponent_Factory(t) {
  return new (t || _StepsComponent)();
};
_StepsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepsComponent, selectors: [["lab-steps"]], viewQuery: function StepsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.stepsTable, _c0, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { focus: [1, "focus"], selectedId: [1, "selectedId"] }, decls: 13, vars: 10, consts: [["stepsTable", ""], ["emptyCol2", ""], ["leftPad", ""], ["detailRow", ""], ["tooltip", ""], ["overclockInput", ""], ["modulePicker", ""], ["beaconsOverlay", ""], ["expandTabMenu", ""], ["machineValueCell", ""], ["totalCell", ""], ["dataKey", "id", "styleClass", "p-datatable-sm", 3, "rowsChange", "sortFunction", "rowTrackBy", "value", "customSort", "rowExpandMode", "defaultSortOrder", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], ["pTemplate", "footer"], ["colspan", "100"], [1, "d-flex", "gap-2", "py-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-table-columns", 1, "p-button-outlined", 3, "click", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-file-arrow-down", 1, "p-button-outlined", 3, "label"], [1, "column-header-row"], ["colspan", "2", "pSortableColumn", "items"], [1, "d-flex", "align-items-center"], ["field", "items"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", 1, "ms-2", "p-button-text", "p-button-rounded", 3, "pTooltip"], ["colspan", "2", "pSortableColumn", "belts"], ["colspan", "2", "pSortableColumn", "wagons"], ["colspan", "2", "pSortableColumn", "machines"], ["field", "machines"], ["colspan", "2"], ["pSortableColumn", "power"], ["pSortableColumn", "pollution"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-file-arrow-down", 1, "p-button-outlined", 3, "click", "label"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "fa-solid", "fa-square-check"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", 1, "ms-2", "p-button-text", "p-button-rounded", 3, "click", "pTooltip"], ["field", "belts"], ["field", "wagons"], [1, "d-flex", "align-items-center", "justify-content-end"], ["field", "power"], ["field", "pollution"], [1, "w-0", "px-0", "px-sm-1", "position-relative"], [1, "fragment", 3, "id"], [1, "d-flex"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-angle-right", 1, "p-button-text", "p-button-rounded", "transition-ease", 3, "click", "pTooltip", "pRowToggler"], [1, "px-0", "px-sm-2"], [1, "overflow-hidden", "px-0", "px-sm-1", "py-0"], ["colspan", "2", 1, "px-0", "px-sm-2"], [1, "px-0", "px-sm-2", "text-end"], [1, "w-0", "px-0", "ps-sm-1"], [1, "d-flex", "justify-content-center"], [3, "onChange", "binary", "ngModel"], [1, "d-flex", "align-items-center", "links"], [1, "indent"], [1, "icon"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-text", 3, "hover-active", "icon", "pTooltip"], [3, "class", "pTooltip"], [1, "connect", 3, "trail", "last"], [1, "connect"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-text", 3, "click", "icon", "pTooltip"], [1, "hover-icon", "fa-solid", "fa-eye-slash"], [3, "id"], [3, "pTooltip"], ["type", "recipe", 3, "id"], [1, "w-0", "px-0", "px-sm-2", "text-end"], [1, "monospace"], [1, "px-0", "pe-sm-2"], [1, "find-text"], ["labDropdownBase", "icon", 3, "pTooltip", "ngModel", "options"], ["labDropdownBase", "icon", 3, "onChange", "pTooltip", "ngModel", "options"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip"], [1, "ms-3", "text-truncate"], ["type", "belt", 3, "id"], ["type", "pipe", 3, "id"], ["type", "cargo-wagon", 3, "id"], ["type", "fluid-wagon", 3, "id"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-text", 3, "pTooltip"], ["labDropdownBase", "icon", 3, "pTooltip", "options", "ngModel"], ["suffix", "%", "inputStyleClass", "text-end", 3, "min", "max", "step", "maxFractionDigits", "size", "pTooltip", "ngModel"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-text", 3, "click", "pTooltip"], [1, "p-button-icon"], [1, "hover-icon", "fa-solid", "fa-circle-plus"], ["labDropdownBase", "icon", 3, "onChange", "pTooltip", "options", "ngModel"], ["type", "machine", 3, "id"], ["suffix", "%", "inputStyleClass", "text-end", 3, "onBlur", "min", "max", "step", "maxFractionDigits", "size", "pTooltip", "ngModel"], [1, "padded", 3, "pTooltip"], ["type", "fuel", 3, "id"], ["labDropdownBase", "icon", "labNoDrag", "", 3, "pTooltip", "ngModel", "options"], ["labDropdownBase", "icon", "labNoDrag", "", 3, "onChange", "pTooltip", "ngModel", "options"], ["type", "module", 3, "id"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "modules", "p-button-text", 3, "click", "pTooltip"], [1, "p-button-icon", 3, "class"], [1, "hover-icon", "fa-solid", "fa-gear"], [3, "setValue"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "icons", "p-button-text", "flex-column", 3, "click", "pTooltip"], [1, "p-button-icon", "sum", 3, "class"], [1, "p-button-icon", "sum"], ["type", "beacon", 3, "id"], ["target", "_blank", 1, "text-decoration-none", 3, "href"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-arrow-up-right-from-square", "tooltipPosition", "left", 1, "p-button-text", "p-button-rounded", 3, "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", "tooltipPosition", "left", 1, "p-button-text", "p-button-rounded", 3, "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", "tooltipPosition", "left", 1, "p-button-text", "p-button-rounded", 3, "click", "pTooltip"], [1, "detail"], [1, "px-1"], ["routerLink", ".", "queryParamsHandling", "preserve", 1, "text-decoration-none", 3, "relativeTo", "fragment"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-link", 1, "p-button-text", "p-button-rounded"], [3, "activeItemChange", "model", "activeItem"], [1, "p-menuitem-link", 3, "id"], [1, "p-menuitem-icon"], [1, "p-menuitem-text"], [4, "ngTemplateOutlet"], ["colspan", "100", 1, "fw-bold"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "w-0", "text-end"], [1, "ps-0"], [1, "lab-icon", "time"], [3, "innerHTML"], [1, "mw-0"], [1, "fa-solid", "fa-arrow-right", "mx-3"], [1, "fw-bold"], [1, "mb-2"], [3, "onChange", "ngModel", "binary", "label"], [1, "d-flex", "flex-wrap"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-text", "hover-action", "me-2", 3, "hover-active", "icon", "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-text", "hover-action", "me-2", 3, "click", "icon", "pTooltip"], ["colspan", "100", 1, "p-0"], [1, "position-absolute"], [1, "d-flex", "invisible"], [1, "lab-icon"], [1, "m-1", "p-2", "fa-solid", "fa-arrow-right"], [3, "id", "type"], [1, "text-end", "inherit"], [1, "w-0", "text-end", "inherit"], [1, "py-2", "icon-height"], [1, "ps-0", "inherit"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "modules-column"], [1, "d-block", 3, "class", "pTooltip"], [1, "d-block", 3, "pTooltip"], [1, "p-2", "icon-height", "text-end"]], template: function StepsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-table", 11, 0);
    \u0275\u0275listener("rowsChange", function StepsComponent_Template_p_table_rowsChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setRows($event));
    })("sortFunction", function StepsComponent_Template_p_table_sortFunction_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sortSteps$.next($event));
    });
    \u0275\u0275template(2, StepsComponent_ng_template_2_Template, 30, 22, "ng-template", 12)(3, StepsComponent_ng_template_3_Template, 2, 3, "ng-template", 13)(4, StepsComponent_ng_template_4_Template, 2, 3, "ng-template", 14)(5, StepsComponent_ng_template_5_Template, 1, 1, "ng-template", 15)(6, StepsComponent_ng_template_6_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, StepsComponent_ng_template_8_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(10, StepsComponent_ng_template_10_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(12, StepsComponent_ng_template_12_Template, 3, 1, "ng-template", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rowTrackBy", ctx.trackSvc.trackStep)("value", ctx.steps())("customSort", true)("rowExpandMode", ctx.focus() ? "single" : "multiple")("defaultSortOrder", -1)("paginator", !ctx.focus() && !ctx.preferences().disablePaginator)("rows", ctx.preferences().rows)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c1))("showCurrentPageReport", true);
  }
}, dependencies: [NgControlStatus, NgModel, NgTemplateOutlet, PrimeTemplate, RouterLink, Tooltip, ButtonDirective, Checkbox, Dropdown, InputNumber, Ripple, Table, SortableColumn, RowToggler, SortIcon, TabMenu, TooltipComponent, BeaconsOverlayComponent, ModulesOverlayComponent, DropdownBaseDirective, NoDragDirective, KeyValuePipe, TranslatePipe, IconClassPipe, IconSmClassPipe, AsStepPipe, InserterSpeedPipe, LeftPadPipe, MachineRatePipe, MachineShowRatePipe, MachineShowPipe, OptionsPipe, PowerPipe, RatePipe, StepHrefPipe, StepIdPipe], styles: ["\n\n.links[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  margin-left: 16px;\n}\n.links[_ngcontent-%COMP%]   .connect.last[_ngcontent-%COMP%], \n.links[_ngcontent-%COMP%]   .connect.trail[_ngcontent-%COMP%] {\n  border-left: 2px dotted var(--text-color-secondary);\n}\n.links[_ngcontent-%COMP%]   .connect.last[_ngcontent-%COMP%]:not(.trail) {\n  margin-bottom: 50vh;\n  height: 50vh;\n}\n.links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]    + .connect[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n@media (max-width: 1199.98px) {\n  .links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%] {\n    margin-left: 8px;\n  }\n  .links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]    + .connect[_ngcontent-%COMP%] {\n    margin-left: 16px;\n  }\n}\n.links[_ngcontent-%COMP%]   .indent[_ngcontent-%COMP%] {\n  margin-left: 0;\n  border-top: 2px dotted var(--text-color-secondary);\n  width: 8px;\n}\n.links[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n}\n[_nghost-%COMP%]     .p-dropdown:not(:hover):not(:focus):not(.ng-invalid), \n[_nghost-%COMP%]     .p-inputtext:not(:hover):not(:focus):not(.ng-invalid) {\n  border-color: transparent;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .module-dropdown:not(.last) {\n  margin-right: -0.5rem;\n}\n[_nghost-%COMP%]     .module-dropdown:not(.last) .p-dropdown {\n  border-right-color: transparent;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[_nghost-%COMP%]     .module-dropdown:hover ~ .module-dropdown .lab-icon.sm {\n  opacity: 0.3;\n}\n[_nghost-%COMP%]     .module-dropdown:hover ~ .module-dropdown:not(.last) .p-dropdown {\n  border-top-color: var(--primary-color);\n  border-bottom-color: var(--primary-color);\n}\n[_nghost-%COMP%]     .module-dropdown:hover ~ .module-dropdown.last .p-dropdown {\n  border-color: var(--primary-color);\n  border-left-color: transparent;\n}\ntr.detail[_ngcontent-%COMP%] {\n  background-color: var(--surface-ground);\n}\n[_nghost-%COMP%]     tr.detail .p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight) .p-menuitem-link {\n  background-color: transparent;\n}\n.icon-height[_ngcontent-%COMP%] {\n  min-height: 32px;\n}\n.modules-column[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin: auto;\n}\n.fragment[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10rem;\n  visibility: hidden;\n}\n.column-header-row[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  height: 48px;\n}\n/*# sourceMappingURL=steps.component.css.map */"], changeDetection: 0 });
var StepsComponent = _StepsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepsComponent, { className: "StepsComponent", filePath: "src/app/routes/main/components/steps/steps.component.ts", lineNumber: 66 });
})();

// src/app/routes/main/components/objectives/objectives.component.ts
function ObjectivesComponent_ng_template_4_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objective_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.data().recipeEntities[objective_r5.targetId].name);
  }
}
function ObjectivesComponent_ng_template_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_ng_template_4_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const editRecipePicker_r4 = \u0275\u0275reference(8);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(editRecipePicker_r4.clickOpen("recipe", ctx_r5.recipeIds(), objective_r5.targetId));
    });
    \u0275\u0275elementStart(2, "i", 26);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ObjectivesComponent_ng_template_4_Conditional_2_Conditional_6_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "lab-picker", 18, 4);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("selectId", function ObjectivesComponent_ng_template_4_Conditional_2_Template_lab_picker_selectId_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setTarget(objective_r5.id, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objective_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 6, "objectives.selectARecipe"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind2(3, 8, objective_r5.targetId, "recipe"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", objective_r5.id, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r5.contentSvc.isMobile() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("header", \u0275\u0275pipeBind1(9, 11, "objectives.selectARecipe"));
  }
}
function ObjectivesComponent_ng_template_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_ng_template_4_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const editItemPicker_r8 = \u0275\u0275reference(4);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(editItemPicker_r8.clickOpen("item", ctx_r5.itemIds(), objective_r5.targetId));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "lab-picker", 18, 5);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("selectId", function ObjectivesComponent_ng_template_4_Conditional_3_Template_lab_picker_selectId_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setTarget(objective_r5.id, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objective_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", \u0275\u0275pipeBind1(1, 4, objective_r5.targetId))("label", ctx_r5.contentSvc.isMobile() ? "" : ctx_r5.data().itemEntities[objective_r5.targetId].name)("pTooltip", \u0275\u0275pipeBind1(2, 6, "objectives.selectAnItem"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(5, 8, "objectives.selectAnItem"));
  }
}
function ObjectivesComponent_ng_template_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onChange", function ObjectivesComponent_ng_template_4_Conditional_8_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      const chooseItemPicker_r10 = \u0275\u0275reference(23);
      const chooseRecipePicker_r11 = \u0275\u0275reference(26);
      return \u0275\u0275resetView(ctx_r5.changeUnit(objective_r5, $event.value, chooseItemPicker_r10, chooseRecipePicker_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objective_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 3, "objectives.unitTooltip"))("options", ctx_r5.rateUnitOptions())("ngModel", objective_r5.unit);
  }
}
function ObjectivesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "button", 20);
    \u0275\u0275template(2, ObjectivesComponent_ng_template_4_Conditional_2_Template, 10, 13)(3, ObjectivesComponent_ng_template_4_Conditional_3_Template, 6, 10);
    \u0275\u0275elementStart(4, "lab-input-number", 21);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("setValue", function ObjectivesComponent_ng_template_4_Template_lab_input_number_setValue_4_listener($event) {
      const objective_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setValue(objective_r5.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ObjectivesComponent_ng_template_4_Conditional_8_Template, 2, 5, "p-dropdown", 22);
    \u0275\u0275elementStart(9, "p-dropdown", 23);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onChange", function ObjectivesComponent_ng_template_4_Template_p_dropdown_onChange_9_listener($event) {
      const objective_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setType(objective_r5.id, $event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 24);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_ng_template_4_Template_button_click_11_listener() {
      const objective_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeObjective(objective_r5.id));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const objective_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(objective_r5.unit === ctx_r5.ObjectiveUnit.Machines ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", objective_r5.type === ctx_r5.ObjectiveType.Maximize ? ctx_r5.maximizeType() === ctx_r5.MaximizeType.Weight ? \u0275\u0275pipeBind1(5, 9, "objectives.valueWeightTooltip") : \u0275\u0275pipeBind1(6, 11, "objectives.valueRatioTooltip") : \u0275\u0275pipeBind1(7, 13, "objectives.valueTooltip"))("hideButtons", ctx_r5.contentSvc.isMobile())("value", objective_r5.value);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(objective_r5.type !== ctx_r5.ObjectiveType.Maximize ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(10, 15, "objectives.typeTooltip"))("options", ctx_r5.objectiveTypeOptions)("ngModel", objective_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(12, 17, "objectives.removeTooltip"));
  }
}
function ObjectivesComponent_Conditional_14_ng_template_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 35);
  }
  if (rf & 2) {
    const recipeId_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", recipeId_r15);
  }
}
function ObjectivesComponent_Conditional_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 30)(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 32);
    \u0275\u0275pipe(6, "iconSmClass");
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ObjectivesComponent_Conditional_14_ng_template_1_ng_template_9_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 34);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_Conditional_14_ng_template_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r14);
      const recipeId_r15 = \u0275\u0275nextContext();
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.addRecipeLimit(recipeId_r15));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tooltip_r16 = \u0275\u0275reference(10);
    const recipeId_r15 = \u0275\u0275nextContext();
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "objectives.errorSimplexUnboundedRecipe"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind2(6, 8, recipeId_r15, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.data().recipeEntities[recipeId_r15].name);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(12, 11, "objectives.errorSimplexUnboundedAddRecipeLimit"));
  }
}
function ObjectivesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-messages", 16);
    \u0275\u0275template(1, ObjectivesComponent_Conditional_14_ng_template_1_Template, 13, 13, "ng-template", 29);
    \u0275\u0275elementEnd();
  }
}
function ObjectivesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-messages", 17);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r5.messages())("closable", false)("escape", false);
  }
}
var _ObjectivesComponent = class _ObjectivesComponent {
  constructor() {
    this.store = inject(Store);
    this.translateSvc = inject(TranslateService);
    this.contentSvc = inject(ContentService);
    this.trackSvc = inject(TrackService);
    this._objectives = this.store.selectSignal(objectives_exports.getObjectives);
    this.result = this.store.selectSignal(objectives_exports.getMatrixResult);
    this.itemsState = this.store.selectSignal(items_exports.getItemsState);
    this.recipesState = this.store.selectSignal(recipes_exports.getRecipesState);
    this.itemIds = this.store.selectSignal(recipes_exports.getAvailableItems);
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.maximizeType = this.store.selectSignal(settings_exports.getMaximizeType);
    this.beltSpeed = this.store.selectSignal(settings_exports.getBeltSpeed);
    this.dispRateInfo = this.store.selectSignal(settings_exports.getDisplayRateInfo);
    this.rateUnitOptions = this.store.selectSignal(settings_exports.getObjectiveUnitOptions);
    this.recipeIds = this.store.selectSignal(settings_exports.getAvailableRecipes);
    this.paused = this.store.selectSignal(preferences_exports.getPaused);
    this.convertObjectiveValues = this.store.selectSignal(preferences_exports.getConvertObjectiveValues);
    this.objectives = computed(() => [...this._objectives()]);
    this.messages = computed(() => this.getMessages(this._objectives(), this.result(), this.itemsState(), this.recipesState()));
    this.objectiveTypeOptions = objectiveTypeOptions;
    this.displayRateOptions = displayRateOptions;
    this.MaximizeType = MaximizeType;
    this.ObjectiveUnit = ObjectiveUnit;
    this.ObjectiveType = ObjectiveType;
  }
  getMessages(objectives, matrixResult, itemsState, recipesState) {
    if (matrixResult.resultType === SimplexResultType.Paused)
      return [
        {
          severity: "info",
          detail: this.translateSvc.instant("objectives.pausedMessage")
        }
      ];
    if (matrixResult.resultType !== SimplexResultType.Failed)
      return [];
    if (matrixResult.simplexStatus === "unbounded") {
      const maxObjectives = objectives.filter((o) => o.type === ObjectiveType.Maximize);
      if (maxObjectives.length && objectives.every((o) => o.type !== ObjectiveType.Limit)) {
        return this.buildErrorMessages("objectives.errorUnbounded", "objectives.errorNoLimits", matrixResult);
      }
      if (maxObjectives.some((o) => o.unit === ObjectiveUnit.Machines ? recipesState[o.targetId].excluded : itemsState[o.targetId].excluded)) {
        return this.buildErrorMessages("objectives.errorUnbounded", "objectives.errorMaximizeExcluded", matrixResult);
      }
      return this.buildErrorMessages("objectives.errorUnbounded", "objectives.errorUnboundedDetail", matrixResult);
    } else if (matrixResult.simplexStatus === "no_feasible") {
      return this.buildErrorMessages("objectives.errorInfeasible", "objectives.errorInfeasibleDetail", matrixResult);
    } else {
      return this.buildErrorMessages("objectives.error", "objectives.errorDetail", matrixResult);
    }
  }
  buildErrorMessages(summary, detail, matrixResult) {
    return [
      {
        severity: "error",
        summary: this.translateSvc.instant(summary),
        detail: `${this.translateSvc.instant(detail)} ${this.translateSvc.instant("objectives.errorSimplexInfo", {
          returnCode: matrixResult.returnCode ?? "unknown",
          simplexStatus: matrixResult.simplexStatus ?? "unknown"
        })}`
      }
    ];
  }
  setObjectiveOrder(objectives) {
    this.setOrder(objectives.map((o) => o.id));
  }
  changeUnit(objective, unit, chooseItemPicker, chooseRecipePicker) {
    const data = this.data();
    if (unit === ObjectiveUnit.Machines) {
      if (objective.unit !== ObjectiveUnit.Machines) {
        const recipeIds = data.itemRecipeIds[objective.targetId];
        const updateFn = (recipeId) => this.convertItemsToMachines(objective, recipeId, data);
        if (recipeIds.length === 1) {
          updateFn(recipeIds[0]);
        } else {
          chooseRecipePicker.selectId.pipe(first()).subscribe((targetId) => updateFn(targetId));
          chooseRecipePicker.clickOpen("recipe", recipeIds);
        }
      }
    } else {
      if (objective.unit === ObjectiveUnit.Machines) {
        const itemIds = Array.from(data.adjustedRecipe[objective.targetId].produces);
        const updateFn = (itemId) => this.convertMachinesToItems(objective, itemId, unit, data);
        if (itemIds.length === 1) {
          updateFn(itemIds[0]);
        } else {
          chooseItemPicker.selectId.pipe(first()).subscribe((itemId) => updateFn(itemId));
          chooseItemPicker.clickOpen("item", itemIds);
        }
      } else {
        this.convertItemsToItems(objective, objective.targetId, unit, data);
      }
    }
  }
  /**
   * Update unit field (non-machines -> machines), then convert and update
   * objective value so that number of items remains constant
   */
  convertItemsToMachines(objective, recipeId, data) {
    this.setUnit(objective.id, {
      targetId: recipeId,
      unit: ObjectiveUnit.Machines
    });
    if (!this.convertObjectiveValues() || objective.type === ObjectiveType.Maximize)
      return;
    const itemsState = this.itemsState();
    const beltSpeed = this.beltSpeed();
    const dispRateInfo = this.dispRateInfo();
    const oldValue = RateUtility.objectiveNormalizedRate(objective, itemsState, beltSpeed, dispRateInfo, data);
    const recipe = data.adjustedRecipe[recipeId];
    const newValue = oldValue.div(recipe.output[objective.targetId]);
    this.setValue(objective.id, newValue);
  }
  /**
   * Update unit field (machines -> non-machines), then convert and update
   * objective value so that number of items remains constant
   */
  convertMachinesToItems(objective, itemId, unit, data) {
    this.setUnit(objective.id, {
      targetId: itemId,
      unit
    });
    if (!this.convertObjectiveValues() || objective.type === ObjectiveType.Maximize || objective.recipe == null)
      return;
    const itemsState = this.itemsState();
    const beltSpeed = this.beltSpeed();
    const dispRateInfo = this.dispRateInfo();
    const factor = RateUtility.objectiveNormalizedRate({
      id: "",
      targetId: itemId,
      value: rational(1n),
      unit,
      type: ObjectiveType.Output
    }, itemsState, beltSpeed, dispRateInfo, data);
    const oldValue = objective.value.mul(objective.recipe.output[itemId]);
    const newValue = oldValue.div(factor);
    this.setValue(objective.id, newValue);
  }
  /**
   * Update unit field (non-machines -> non-machines), then convert and update
   * objective value so that number of items remains constant
   */
  convertItemsToItems(objective, itemId, unit, data) {
    this.setUnit(objective.id, {
      targetId: itemId,
      unit
    });
    if (!this.convertObjectiveValues() || objective.type === ObjectiveType.Maximize)
      return;
    const itemsState = this.itemsState();
    const beltSpeed = this.beltSpeed();
    const dispRateInfo = this.dispRateInfo();
    const oldValue = RateUtility.objectiveNormalizedRate(objective, itemsState, beltSpeed, dispRateInfo, data);
    const factor = RateUtility.objectiveNormalizedRate({
      id: "",
      targetId: itemId,
      value: rational(1n),
      unit,
      type: ObjectiveType.Output
    }, itemsState, beltSpeed, dispRateInfo, data);
    const newValue = oldValue.div(factor);
    this.setValue(objective.id, newValue);
  }
  addItemObjective(targetId) {
    this.addObjective({ targetId, unit: ObjectiveUnit.Items });
  }
  addRecipeObjective(targetId) {
    this.addObjective({ targetId, unit: ObjectiveUnit.Machines });
  }
  addRecipeLimit(targetId) {
    this.addObjective({
      targetId,
      unit: ObjectiveUnit.Machines,
      type: ObjectiveType.Limit
    });
  }
  /** Action Dispatch Methods */
  removeObjective(id) {
    this.store.dispatch(new objectives_exports.RemoveAction(id));
  }
  setOrder(ids) {
    this.store.dispatch(new objectives_exports.SetOrderAction(ids));
  }
  setTarget(id, value) {
    this.store.dispatch(new objectives_exports.SetTargetAction({ id, value }));
  }
  setValue(id, value) {
    this.store.dispatch(new objectives_exports.SetValueAction({ id, value }));
  }
  setUnit(id, value) {
    this.store.dispatch(new objectives_exports.SetUnitAction({ id, value }));
  }
  setType(id, value) {
    this.store.dispatch(new objectives_exports.SetTypeAction({ id, value }));
  }
  addObjective(value) {
    this.store.dispatch(new objectives_exports.AddAction(value));
  }
  setDisplayRate(value, prev) {
    this.store.dispatch(new settings_exports.SetDisplayRateAction({ value, prev }));
  }
  setPaused(value) {
    this.store.dispatch(new preferences_exports.SetPausedAction(value));
  }
};
_ObjectivesComponent.\u0275fac = function ObjectivesComponent_Factory(t) {
  return new (t || _ObjectivesComponent)();
};
_ObjectivesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectivesComponent, selectors: [["lab-objectives"]], decls: 28, vars: 35, consts: [["addItemPicker", ""], ["addRecipePicker", ""], ["chooseItemPicker", ""], ["chooseRecipePicker", ""], ["editRecipePicker", ""], ["editItemPicker", ""], ["tooltip", ""], [3, "header"], [1, "objectives-content"], [3, "onReorder", "value", "dragdrop", "trackBy"], ["pTemplate", "item"], [1, "objectives-buttons", "d-flex", "flex-wrap", "mt-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-box", "tooltipPosition", "top", 1, "flex-grow-1", "p-button-outlined", 3, "click", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-industry", "tooltipPosition", "top", 1, "flex-grow-1", "p-button-outlined", 3, "click", "label"], ["labDropdownTranslate", "", "styleClass", "h-100", 3, "onChange", "pTooltip", "ngModel", "options"], ["offIcon", "fa-solid fa-pause", 3, "onChange", "ngModel", "onIcon", "pTooltip"], ["severity", "warn", "styleClass", "mt-2"], ["styleClass", "mt-2", 3, "value", "closable", "escape"], [3, "selectId", "header"], [1, "p-inputgroup"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-grip-lines", 1, "p-button-outlined", "border-end-0", "cursor-grab"], ["labNoDrag", "", "tooltipPosition", "top", 3, "setValue", "pTooltip", "hideButtons", "value"], ["labDropdownTranslate", "", "labNoDrag", "", "tooltipPosition", "top", 3, "pTooltip", "options", "ngModel"], ["labDropdownTranslate", "", "labNoDrag", "", "tooltipPosition", "top", 3, "onChange", "pTooltip", "options", "ngModel"], ["pButton", "", "pRipple", "", "labNoDrag", "", "type", "button", "icon", "fa-solid fa-xmark", "tooltipPosition", "left", 1, "p-button-outlined", 3, "click", "pTooltip"], ["pButton", "", "pRipple", "", "labNoDrag", "", "type", "button", "tooltipPosition", "top", 1, "p-button-outlined", "lab-button-icon-only", "text-truncate", 3, "click", "pTooltip"], [1, "p-button-icon"], [1, "p-button-label"], ["labNoDrag", "", "pButton", "", "pRipple", "", "type", "button", "tooltipPosition", "top", 1, "p-button-outlined", "text-truncate", 3, "click", "icon", "label", "pTooltip"], ["pTemplate", ""], [1, "d-flex", "align-items-center"], [1, "me-3"], [3, "pTooltip"], [1, "ms-3"], ["type", "button", "pButton", "", "pRipple", "", "icon", "fa-solid fa-plus", 1, "mt-2", "p-button-rounded", 3, "click", "label"], ["type", "recipe", 3, "id"]], template: function ObjectivesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-card", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 8)(3, "p-orderList", 9);
    \u0275\u0275listener("onReorder", function ObjectivesComponent_Template_p_orderList_onReorder_3_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setObjectiveOrder(ctx.objectives()));
    });
    \u0275\u0275template(4, ObjectivesComponent_ng_template_4_Template, 13, 19, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "button", 12);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const addItemPicker_r12 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(addItemPicker_r12.clickOpen("item", ctx.itemIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const addRecipePicker_r13 = \u0275\u0275reference(20);
      return \u0275\u0275resetView(addRecipePicker_r13.clickOpen("recipe", ctx.recipeIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-dropdown", 14);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("onChange", function ObjectivesComponent_Template_p_dropdown_onChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setDisplayRate($event.value, ctx.dispRateInfo().option));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-toggleButton", 15);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("onChange", function ObjectivesComponent_Template_p_toggleButton_onChange_12_listener($event) {
      let tmp_5_0;
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setPaused((tmp_5_0 = $event.checked) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ObjectivesComponent_Conditional_14_Template, 2, 0, "p-messages", 16)(15, ObjectivesComponent_Conditional_15_Template, 1, 3, "p-messages", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "lab-picker", 18, 0);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("selectId", function ObjectivesComponent_Template_lab_picker_selectId_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addItemObjective($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "lab-picker", 18, 1);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("selectId", function ObjectivesComponent_Template_lab_picker_selectId_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addRecipeObjective($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "lab-picker", 7, 2);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275element(25, "lab-picker", 7, 3);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    \u0275\u0275property("header", \u0275\u0275pipeBind1(1, 17, "objectives.title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx.objectives())("dragdrop", true)("trackBy", ctx.trackSvc.trackById);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 19, "objectives.addItems"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 21, "objectives.addMachines"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(11, 23, "objectives.selectDisplayRate"))("ngModel", ctx.dispRateInfo().option)("options", ctx.displayRateOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.paused())("onIcon", "fa-solid fa-play")("pTooltip", \u0275\u0275pipeBind1(13, 25, "objectives.pauseTooltip"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_16_0 = ctx.result().unboundedRecipeId) ? 14 : ctx.messages().length ? 15 : -1, tmp_16_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(18, 27, "objectives.selectAnItem"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(21, 29, "objectives.selectARecipe"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(24, 31, "objectives.selectAnItem"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(27, 33, "objectives.selectARecipe"));
  }
}, dependencies: [NgControlStatus, NgModel, PrimeTemplate, Tooltip, ButtonDirective, Card, Dropdown, Messages, OrderList, Ripple, ToggleButton, InputNumberComponent, PickerComponent, TooltipComponent, DropdownTranslateDirective, NoDragDirective, TranslatePipe, IconSmClassPipe], styles: ["\n\n.objectives-content[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.objectives-buttons[_ngcontent-%COMP%] {\n  gap: 0.25rem;\n}\n.p-inputgroup[_ngcontent-%COMP%]   p-dropdown.icon[_ngcontent-%COMP%] {\n  flex: 0 0 36px;\n}\n@media (min-width: 576px) {\n  button.text-truncate[_ngcontent-%COMP%], \n   .p-inputgroup[_ngcontent-%COMP%]   lab-input-number.p-inputwrapper[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n  }\n}\n@media (max-width: 575.98px) {\n  .p-inputgroup[_ngcontent-%COMP%]   lab-input-number.p-inputwrapper[_ngcontent-%COMP%] {\n    flex: 0 0 15%;\n  }\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]     button.lab-button-icon-only {\n    justify-content: center;\n    width: 2.571rem;\n    padding: 0.5rem 0;\n  }\n  [_nghost-%COMP%]     button.lab-button-icon-only .p-button-icon {\n    margin: 0;\n  }\n  [_nghost-%COMP%]     button.lab-button-icon-only .p-button-label {\n    flex: 0 0 auto;\n    visibility: hidden;\n    width: 0;\n  }\n}\n/*# sourceMappingURL=objectives.component.css.map */"], changeDetection: 0 });
var ObjectivesComponent = _ObjectivesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectivesComponent, { className: "ObjectivesComponent", filePath: "src/app/routes/main/components/objectives/objectives.component.ts", lineNumber: 45 });
})();

// src/app/routes/main/components/tech-picker/tech-picker.component.ts
var _c02 = ["filterInput"];
var _c15 = () => ({ minHeight: "528px", height: "80vh", width: "50vw" });
var _c22 = () => ({ "768px": "80vw", "576px": "100vw" });
var _c32 = () => ({ width: "30vw" });
var _c42 = () => ({ "768px": "50vw", "576px": "90vw" });
var _c52 = () => ({ height: "calc(80vh - 165px)", minHeight: "363px" });
var _c62 = (a0) => ({ title: "techPicker.available", ids: a0, class: "p-button-text" });
var _c72 = (a0) => ({ title: "techPicker.locked", ids: a0, class: "p-button-danger" });
var _c82 = (a0) => ({ title: "techPicker.researched", ids: a0, class: "p-button-success" });
var _c92 = (a0, a1) => ({ id: a0, class: a1 });
function TechPickerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function TechPickerComponent_Conditional_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyScriptToClipboard());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "a", 20);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "techPicker.exportFromFactorio"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 5, "techPicker.exportCopyScript"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 7, "techPicker.exportUseMod"));
  }
}
function TechPickerComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TechPickerComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.importTechs());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function TechPickerComponent_ng_template_25_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.importVisible = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "ok"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 4, "cancel"));
  }
}
function TechPickerComponent_Conditional_26_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TechPickerComponent_Conditional_26_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TechPickerComponent_Conditional_26_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TechPickerComponent_Conditional_26_ng_template_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "none"));
  }
}
function TechPickerComponent_Conditional_26_ng_template_4_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TechPickerComponent_Conditional_26_ng_template_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TechPickerComponent_Conditional_26_ng_template_4_For_6_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const id_r7 = ctx.$implicit;
    const class_r8 = \u0275\u0275nextContext().class;
    \u0275\u0275nextContext();
    const techButton_r9 = \u0275\u0275reference(7);
    \u0275\u0275property("ngTemplateOutlet", techButton_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c92, id_r7, class_r8));
  }
}
function TechPickerComponent_Conditional_26_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275template(4, TechPickerComponent_Conditional_26_ng_template_4_Conditional_4_Template, 3, 3, "i");
    \u0275\u0275repeaterCreate(5, TechPickerComponent_Conditional_26_ng_template_4_For_6_Template, 1, 5, "ng-container", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const title_r10 = ctx.title;
    const ids_r11 = ctx.ids;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, title_r10));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ids_r11.length === 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ids_r11);
  }
}
function TechPickerComponent_Conditional_26_ng_template_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 26);
  }
  if (rf & 2) {
    const id_r13 = \u0275\u0275nextContext().id;
    \u0275\u0275property("id", id_r13);
  }
}
function TechPickerComponent_Conditional_26_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275listener("click", function TechPickerComponent_Conditional_26_ng_template_6_Template_button_click_0_listener() {
      const id_r13 = \u0275\u0275restoreView(_r12).id;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.clickId(id_r13));
    });
    \u0275\u0275template(2, TechPickerComponent_Conditional_26_ng_template_6_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const id_r13 = ctx.id;
    const class_r14 = ctx.class;
    const tooltip_r15 = \u0275\u0275reference(3);
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(class_r14);
    \u0275\u0275classProp("hover-active", ctx_r4.selection().indexOf(id_r13) === -1);
    \u0275\u0275property("label", ctx_r4.showTechLabels() && ((tmp_11_0 = ctx_r4.data().itemEntities[id_r13]) == null ? null : tmp_11_0.name) || "")("icon", \u0275\u0275pipeBind1(1, 7, id_r13))("pTooltip", tooltip_r15);
  }
}
function TechPickerComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-scrollPanel");
    \u0275\u0275template(1, TechPickerComponent_Conditional_26_ng_container_1_Template, 1, 0, "ng-container", 23)(2, TechPickerComponent_Conditional_26_ng_container_2_Template, 1, 0, "ng-container", 23)(3, TechPickerComponent_Conditional_26_ng_container_3_Template, 1, 0, "ng-container", 23)(4, TechPickerComponent_Conditional_26_ng_template_4_Template, 7, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, TechPickerComponent_Conditional_26_ng_template_6_Template, 4, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const techSet_r16 = \u0275\u0275reference(5);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(8, _c52));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", techSet_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c62, ctx_r4.status().available));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", techSet_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c72, ctx_r4.status().locked));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", techSet_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c82, ctx_r4.status().researched));
  }
}
function TechPickerComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TechPickerComponent_ng_template_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.hide());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function TechPickerComponent_ng_template_27_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.hide(true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "ok"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 4, "cancel"));
  }
}
var _TechPickerComponent = class _TechPickerComponent extends DialogComponent {
  constructor() {
    super(...arguments);
    this.filterSvc = inject(FilterService);
    this.translateSvc = inject(TranslateService);
    this.store = inject(Store);
    this.contentSvc = inject(ContentService);
    this.filterInput = viewChild.required("filterInput");
    this.selectIds = new EventEmitter();
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.showTechLabels = this.store.selectSignal(preferences_exports.getShowTechLabels);
    this.filter = signal("");
    this.selection = signal([]);
    this.allSelected = computed(() => this.selection().length === this.data().technologyIds.length);
    this.status = computed(() => {
      const data = this.data();
      const filter2 = this.filter();
      let selection = this.selection();
      const set = new Set(selection);
      const available = [];
      const locked = [];
      let technologyIds = data.technologyIds;
      if (filter2) {
        const technologies = technologyIds.map((i) => data.itemEntities[i]);
        technologyIds = this.filterSvc.filter(technologies, ["name"], filter2, "contains").map((t) => t.id);
        selection = selection.filter((i) => technologyIds.includes(i));
      }
      const researched = selection;
      for (const id of technologyIds) {
        if (!set.has(id)) {
          const tech = data.technologyEntities[id];
          if (tech.prerequisites == null || tech.prerequisites.every((p) => set.has(p))) {
            available.push(id);
          } else {
            locked.push(id);
          }
        }
      }
      return { available, locked, researched };
    });
    this.importVisible = false;
    this.importValue = "";
    this.Game = Game;
  }
  clickOpen(selection) {
    selection = [...selection ?? this.data().technologyIds];
    this.selection.set(selection);
    this.show();
    if (!this.contentSvc.isMobile()) {
      setTimeout(() => {
        this.filterInput().nativeElement.focus();
      });
    }
  }
  selectAll(value) {
    this.selection.set(value ? [...this.data().technologyIds] : []);
  }
  openImport(input2) {
    this.importVisible = true;
    this.importValue = "";
    setTimeout(() => input2.focus());
  }
  copyScriptToClipboard() {
    const script = `/c local list = {}
for _, tech in pairs(game.player.force.technologies) do
    if tech.researched then
        list[#list + 1] = tech.name
    end
end
game.write_file("techs.txt", table.concat(list, ","))
`;
    window.navigator.clipboard.writeText(script);
    this.contentSvc.showToast$.next({
      severity: "success",
      detail: this.translateSvc.instant("techPicker.exportScriptCopied"),
      contentStyleClass: "detail-only"
    });
  }
  importTechs() {
    const selection = this.importValue.split(",").map((v) => v.trim()).map((id) => {
      if (!id)
        return "";
      const alt = `${id}-technology`;
      if (this.data().technologyIds.includes(alt)) {
        return alt;
      } else if (this.data().technologyIds.includes(id)) {
        return id;
      }
      return "";
    }).filter((v) => !!v);
    const set = new Set(selection);
    this.addPrerequisites(set);
    this.selection.set(Array.from(set));
    this.importValue = "";
    this.importVisible = false;
  }
  clickId(id) {
    const set = new Set(this.selection());
    if (set.has(id)) {
      set.delete(id);
      let removeIds;
      do {
        removeIds = /* @__PURE__ */ new Set();
        for (const id2 of set) {
          const tech = this.data().technologyEntities[id2];
          if (tech.prerequisites?.some((p) => !set.has(p)))
            removeIds.add(id2);
        }
        removeIds.forEach((i) => set.delete(i));
      } while (removeIds.size);
    } else {
      set.add(id);
      this.addPrerequisites(set);
    }
    this.selection.set(Array.from(set));
  }
  // Add any technologies whose prerequisites were not previously met
  addPrerequisites(set) {
    let addIds;
    do {
      addIds = /* @__PURE__ */ new Set();
      for (const id of set) {
        const tech = this.data().technologyEntities[id];
        tech.prerequisites?.filter((p) => !set.has(p)).forEach((p) => addIds.add(p));
      }
      addIds.forEach((i) => set.add(i));
    } while (addIds.size);
  }
  save() {
    const selection = this.selection();
    const data = this.data();
    if (selection.length === data.technologyIds.length)
      this.selectIds.emit(null);
    const filteredSelection = selection.filter((a) => !selection.some((b) => {
      const techB = data.technologyEntities[b];
      return techB.prerequisites && techB.prerequisites.indexOf(a) !== -1;
    }));
    this.selectIds.emit(filteredSelection);
  }
  /** Action Dispatch Methods */
  setShowTechLabels(value) {
    this.store.dispatch(new preferences_exports.SetShowTechLabelsAction(value));
  }
};
_TechPickerComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TechPickerComponent_BaseFactory;
  return function TechPickerComponent_Factory(t) {
    return (\u0275TechPickerComponent_BaseFactory || (\u0275TechPickerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TechPickerComponent)))(t || _TechPickerComponent);
  };
})();
_TechPickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TechPickerComponent, selectors: [["lab-tech-picker"]], viewQuery: function TechPickerComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.filterInput, _c02, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, outputs: { selectIds: "selectIds" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 50, consts: [["filterInput", ""], ["importInput", ""], ["techSet", ""], ["techButton", ""], ["tooltip", ""], ["styleClass", "picker-dialog", "appendTo", "body", 3, "visibleChange", "onHide", "visible", "modal", "dismissableMask", "draggable", "resizable", "focusOnShow", "header", "breakpoints"], [1, "d-flex", "w-100", "my-1", "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "fa-solid", "fa-magnifying-glass"], ["pInputText", "", "type", "text", 1, "w-100", 3, "input", "ngModel"], [1, "p-inputgroup-addon", "flex-shrink-0"], ["labelStyleClass", "text-nowrap", 3, "onChange", "binary", "label", "ngModel"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-file-import", 1, "flex-shrink-0", 3, "click", "label", "pTooltip"], ["appendTo", "body", 3, "visibleChange", "visible", "modal", "dismissableMask", "draggable", "resizable", "breakpoints", "header"], [1, "d-flex", "flex-column"], [1, "p-inputgroup", "mb-3"], ["rows", "10", "pInputTextarea", "", 1, "mt-2", "w-100", 3, "ngModelChange", "keydown.enter", "ngModel"], ["pTemplate", "footer"], [3, "style"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-copy", 1, "p-button-outlined", 3, "click", "label"], ["href", "https://mods.factorio.com/mod/export-researched-technologies", "target", "_blank", "pButton", "", "pRipple", "", "icon", "fa-solid fa-link", 1, "text-decoration-none", "p-inputgroup-addon", "p-button-outlined", 3, "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-check", 1, "p-button-outlined", 3, "click", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-outlined", "p-button-secondary", 3, "click", "label"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "flex-wrap", "invert"], ["pButton", "", "pRipple", "", "type", "button", "tooltipPosition", "bottom", 1, "me-1", "mb-1", 3, "click", "label", "icon", "pTooltip"], ["type", "technology", 3, "id"]], template: function TechPickerComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("visibleChange", function TechPickerComponent_Template_p_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onHide", function TechPickerComponent_Template_p_dialog_onHide_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onHide());
    });
    \u0275\u0275elementStart(2, "div", 6)(3, "span", 7);
    \u0275\u0275element(4, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 9, 0);
    \u0275\u0275listener("input", function TechPickerComponent_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r1);
      const filterInput_r2 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(ctx.filter.set(filterInput_r2.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10)(8, "p-checkbox", 11);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("onChange", function TechPickerComponent_Template_p_checkbox_onChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectAll($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 10)(11, "p-checkbox", 11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("onChange", function TechPickerComponent_Template_p_checkbox_onChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setShowTechLabels($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("click", function TechPickerComponent_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const importInput_r3 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(ctx.openImport(importInput_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p-dialog", 13);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275twoWayListener("visibleChange", function TechPickerComponent_Template_p_dialog_visibleChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.importVisible, $event) || (ctx.importVisible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275template(19, TechPickerComponent_Conditional_19_Template, 8, 9, "div", 15);
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "textarea", 16, 1);
    \u0275\u0275twoWayListener("ngModelChange", function TechPickerComponent_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.importValue, $event) || (ctx.importValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function TechPickerComponent_Template_textarea_keydown_enter_23_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.importTechs());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, TechPickerComponent_ng_template_25_Template, 4, 6, "ng-template", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, TechPickerComponent_Conditional_26_Template, 8, 15, "p-scrollPanel", 18)(27, TechPickerComponent_ng_template_27_Template, 4, 6, "ng-template", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c15));
    \u0275\u0275twoWayProperty("visible", ctx.visible);
    \u0275\u0275property("modal", true)("dismissableMask", true)("draggable", false)("resizable", false)("focusOnShow", false)("header", \u0275\u0275pipeBind1(1, 32, "techPicker.header"))("breakpoints", \u0275\u0275pureFunction0(47, _c22));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx.filter());
    \u0275\u0275advance(3);
    \u0275\u0275property("binary", true)("label", \u0275\u0275pipeBind1(9, 34, "techPicker.unlockAll"))("ngModel", ctx.allSelected());
    \u0275\u0275advance(3);
    \u0275\u0275property("binary", true)("label", \u0275\u0275pipeBind1(12, 36, "techPicker.showLabels"))("ngModel", ctx.showTechLabels());
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 38, "techPicker.import"))("pTooltip", \u0275\u0275pipeBind1(15, 40, "techPicker.importTooltip"));
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(48, _c32));
    \u0275\u0275twoWayProperty("visible", ctx.importVisible);
    \u0275\u0275property("modal", true)("dismissableMask", true)("draggable", true)("resizable", false)("breakpoints", \u0275\u0275pureFunction0(49, _c42))("header", \u0275\u0275pipeBind1(17, 42, "techPicker.importHeader"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 44, "techPicker.importInstructions"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.importValue);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.visible ? 26 : -1);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, NgTemplateOutlet, PrimeTemplate, Tooltip, ButtonDirective, Checkbox, Dialog, InputTextarea, InputText, Ripple, ScrollPanel, TooltipComponent, TranslatePipe, IconSmClassPipe], changeDetection: 0 });
var TechPickerComponent = _TechPickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TechPickerComponent, { className: "TechPickerComponent", filePath: "src/app/routes/main/components/tech-picker/tech-picker.component.ts", lineNumber: 29 });
})();

// src/app/routes/main/components/settings/settings.component.ts
var _forTrack03 = ($index, $item) => $item.key;
var _forTrack12 = ($index, $item) => $item.id;
var _c03 = () => ({ height: "100%" });
var _c16 = (a0) => ({ count: a0 });
var _c23 = () => ({ width: "400px", maxHeight: "500px" });
var _c33 = () => ({ "400px": "100vw" });
var _c43 = () => [];
function SettingsComponent_ng_template_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.state);
  }
}
function SettingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SettingsComponent_ng_template_14_Conditional_4_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "settings.savedStates"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.state ? 4 : -1);
  }
}
function SettingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 63);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const search_r4 = \u0275\u0275reference(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSearch(search_r4.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "input", 64, 4);
    \u0275\u0275elementStart(4, "button", 65);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const search_r4 = \u0275\u0275reference(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copySearchToClipboard(search_r4.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.BrowserUtility.search);
  }
}
function SettingsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "input", 66, 5);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_16_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editValue, $event) || (ctx_r1.editValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsComponent_Conditional_16_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSaveState(ctx_r1.data().game));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 67);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSaveState(ctx_r1.data().game));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 68);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editState = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const nameCtrl_r6 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("autofocus", true)("placeholder", \u0275\u0275pipeBind1(3, 7, "settings.nameSavedState"))("pTooltip", \u0275\u0275pipeBind1(4, 9, "settings.nameSavedState"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editValue);
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(6, 11, "settings.saveState"))("disabled", nameCtrl_r6.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(8, 13, "cancel"));
  }
}
function SettingsComponent_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_17_Conditional_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const stateMenu_r9 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(stateMenu_r9.toggle($event));
    });
    \u0275\u0275element(1, "p-menu", 73, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("popup", true)("model", ctx_r1.editStateMenu);
  }
}
function SettingsComponent_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_17_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateState());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "settings.createSavedState"));
  }
}
function SettingsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "p-dropdown", 69);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_17_Template_p_dropdown_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setState($event.value, ctx_r1.gameStates()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SettingsComponent_Conditional_17_Conditional_4_Template, 3, 2, "button", 70)(5, SettingsComponent_Conditional_17_Conditional_5_Template, 2, 3, "button", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "settings.selectSavedState"))("pTooltip", \u0275\u0275pipeBind1(3, 7, "settings.selectSavedState"))("ngModel", ctx_r1.state)("options", ctx_r1.savedStates());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.state ? 4 : 5);
  }
}
function SettingsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateState());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "settings.createSavedState"));
  }
}
function SettingsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "settings.game"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.modRecord()[ctx_r1.settings().modId]) == null ? null : tmp_6_0.id);
  }
}
function SettingsComponent_Conditional_29_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mod_r12.value, " ");
  }
}
function SettingsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SettingsComponent_Conditional_29_For_1_Template, 2, 1, "small", 52, _forTrack03);
    \u0275\u0275pipe(2, "keyvalue");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r1.data().version));
  }
}
function SettingsComponent_Conditional_30_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "settings.mod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "settings.version"));
  }
}
function SettingsComponent_Conditional_30_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mod_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r14.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r14.value);
  }
}
function SettingsComponent_Conditional_30_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_30_ng_template_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.versionsVisible = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "ok"));
  }
}
function SettingsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "label", 76);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 77)(5, "a", 78);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 24)(9, "p-dropdown", 79);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_30_Template_p_dropdown_onChange_9_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMod($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 80);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_30_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.versionsVisible = true);
    });
    \u0275\u0275elementStart(13, "p-dialog", 81);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275twoWayListener("visibleChange", function SettingsComponent_Conditional_30_Template_p_dialog_visibleChange_13_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.versionsVisible, $event) || (ctx_r1.versionsVisible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "p-table", 82);
    \u0275\u0275pipe(16, "keyvalue");
    \u0275\u0275template(17, SettingsComponent_Conditional_30_ng_template_17_Template, 7, 6, "ng-template", 22)(18, SettingsComponent_Conditional_30_ng_template_18_Template, 5, 2, "ng-template", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SettingsComponent_Conditional_30_ng_template_19_Template, 2, 3, "ng-template", 84);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 18, "settings.modSet"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 20, "settings.requestMod"));
    \u0275\u0275advance(3);
    \u0275\u0275property("filter", true)("autofocusFilter", !ctx_r1.contentSvc.isMobile())("pTooltip", \u0275\u0275pipeBind1(10, 22, "settings.modSetTooltip"))("ngModel", ctx_r1.settings().modId)("options", ctx_r1.modOptions());
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(12, 24, "settings.modVersions"));
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c23));
    \u0275\u0275twoWayProperty("visible", ctx_r1.versionsVisible);
    \u0275\u0275property("modal", true)("dismissableMask", true)("draggable", false)("resizable", false)("breakpoints", \u0275\u0275pureFunction0(31, _c33))("header", \u0275\u0275pipeBind1(14, 26, "settings.modVersions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(16, 28, ctx_r1.data().version));
  }
}
function SettingsComponent_ng_template_53_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx));
  }
}
function SettingsComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SettingsComponent_ng_template_53_Conditional_4_Template, 3, 3, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    \u0275\u0275nextContext();
    const presetDropdown_r19 = \u0275\u0275reference(58);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "settings.factory"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = presetDropdown_r19.label()) ? 4 : -1, tmp_6_0);
  }
}
function SettingsComponent_Conditional_63_ng_template_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 91);
    \u0275\u0275pipe(1, "iconSmClass");
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, item_r21));
  }
}
function SettingsComponent_Conditional_63_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275repeaterCreate(1, SettingsComponent_Conditional_63_ng_template_4_For_2_Template, 2, 4, "i", 90, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(items_r22);
  }
}
function SettingsComponent_Conditional_63_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 94);
  }
  if (rf & 2) {
    const item_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r23.value);
  }
}
function SettingsComponent_Conditional_63_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_63_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const tooltip_r24 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r24);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r23.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r23.label, " ");
  }
}
function SettingsComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 28)(2, "p-multiSelect", 86);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_63_Template_p_multiSelect_onChange_2_listener($event) {
      let tmp_6_0;
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setModuleRank($event.value, (tmp_6_0 = ctx_r1.data().defaults) == null ? null : tmp_6_0.moduleRankIds));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_63_ng_template_4_Template, 3, 0, "ng-template", 87)(5, SettingsComponent_Conditional_63_ng_template_5_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 88);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(3, 4, "settings.modifierRankTooltip"))("ngModel", ctx_r1.machinesState().moduleRankIds)("options", ctx_r1.options().modules);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "settings.modifierRank"));
  }
}
function SettingsComponent_Conditional_64_ng_template_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 91);
    \u0275\u0275pipe(1, "iconSmClass");
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, item_r26));
  }
}
function SettingsComponent_Conditional_64_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275repeaterCreate(1, SettingsComponent_Conditional_64_ng_template_4_For_2_Template, 2, 4, "i", 90, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r27 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(items_r27);
  }
}
function SettingsComponent_Conditional_64_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 94);
  }
  if (rf & 2) {
    const item_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r28.value);
  }
}
function SettingsComponent_Conditional_64_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_64_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const tooltip_r29 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r29);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r28.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r28.label, " ");
  }
}
function SettingsComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 28)(2, "p-multiSelect", 95);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_64_Template_p_multiSelect_onChange_2_listener($event) {
      let tmp_6_0;
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFuelRank($event.value, (tmp_6_0 = ctx_r1.data().defaults) == null ? null : tmp_6_0.fuelRankIds));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_64_ng_template_4_Template, 3, 0, "ng-template", 87)(5, SettingsComponent_Conditional_64_ng_template_5_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 96);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(3, 4, "settings.fuelRankTooltip"))("ngModel", ctx_r1.machinesState().fuelRankIds)("options", ctx_r1.options().fuels);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "settings.fuelRank"));
  }
}
function SettingsComponent_Conditional_65_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_65_ng_template_8_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 107);
  }
  if (rf & 2) {
    const item_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r31.value);
  }
}
function SettingsComponent_Conditional_65_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_65_ng_template_8_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const tooltip_r32 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r32);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r31.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r31.label, " ");
  }
}
function SettingsComponent_Conditional_65_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputNumber", 108, 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_65_Conditional_9_Template_p_inputNumber_onBlur_0_listener() {
      let tmp_8_0;
      \u0275\u0275restoreView(_r33);
      const overclockInput_r34 = \u0275\u0275reference(1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDefaultOverclock(ctx_r1.rational((tmp_8_0 = overclockInput_r34.value) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 100)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("min", 1)("max", 250)("step", 10)("maxFractionDigits", 2)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(2, 7, "settings.overclockTooltip"))("ngModel", (tmp_13_0 = ctx_r1.machinesState().overclock) == null ? null : tmp_13_0.toNumber());
  }
}
function SettingsComponent_Conditional_65_Conditional_10_For_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 112);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r38 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, module_r38.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r38.count);
  }
}
function SettingsComponent_Conditional_65_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "i", 112);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, SettingsComponent_Conditional_65_Conditional_10_For_2_For_6_Template, 4, 5, "i", 113, _forTrack12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beacon_r39 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, beacon_r39.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beacon_r39.count);
    \u0275\u0275advance();
    \u0275\u0275repeater(beacon_r39.modules);
  }
}
function SettingsComponent_Conditional_65_Conditional_10_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 114);
  }
  if (rf & 2) {
    \u0275\u0275property("id", ctx);
  }
}
function SettingsComponent_Conditional_65_Conditional_10_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_65_Conditional_10_ng_template_6_Conditional_0_Template, 1, 1, "lab-tooltip", 114);
  }
  if (rf & 2) {
    let tmp_10_0;
    const beacons_r36 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_10_0 = beacons_r36 == null ? null : beacons_r36[0] == null ? null : beacons_r36[0].id) ? 0 : -1, tmp_10_0);
  }
}
function SettingsComponent_Conditional_65_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_65_Conditional_10_Template_button_click_0_listener($event) {
      const beacons_r36 = \u0275\u0275restoreView(_r35);
      const beaconsOverlay_r37 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(beaconsOverlay_r37.show($event, beacons_r36));
    });
    \u0275\u0275repeaterCreate(1, SettingsComponent_Conditional_65_Conditional_10_For_2_Template, 7, 5, "div", 89, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275element(3, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "lab-beacons-overlay", 111, 9);
    \u0275\u0275listener("setValue", function SettingsComponent_Conditional_65_Conditional_10_Template_lab_beacons_overlay_setValue_4_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeDefaultBeacons($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SettingsComponent_Conditional_65_Conditional_10_ng_template_6_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const tooltip_r40 = \u0275\u0275reference(7);
    \u0275\u0275property("pTooltip", tooltip_r40);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r43 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r43.value));
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machineId_r42 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(machineId_r42);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_5_Conditional_0_Template, 3, 4, "div", 89)(1, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_5_Conditional_1_Template, 2, 1, "div");
  }
  if (rf & 2) {
    const item_r43 = ctx.$implicit;
    \u0275\u0275conditional(item_r43 ? 0 : 1);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_6_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 107);
  }
  if (rf & 2) {
    const item_r44 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r44.value);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_6_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const tooltip_r45 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r45);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r44.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r44.label, " ");
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r48 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r48.value));
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_7_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 94);
  }
  if (rf & 2) {
    const item_r49 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r49.value);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_7_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const tooltip_r50 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r50);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r49.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r49.label, " ");
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 117);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_7_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r46);
      const settings_r47 = \u0275\u0275nextContext(2);
      const machineId_r42 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeFuel(machineId_r42, $event.value, settings_r47, ctx_r1.machinesState().fuelRankIds));
    });
    \u0275\u0275template(2, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_7_ng_template_2_Template, 3, 4, "ng-template", 43)(3, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_7_ng_template_3_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const settings_r47 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 3, "settings.fuelTooltip"))("ngModel", settings_r47.fuelId)("options", settings_r47.fuelOptions);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r52 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r52.value));
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_0_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 120);
  }
  if (rf & 2) {
    const item_r53 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r53.value);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_0_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r53 = ctx.$implicit;
    const tooltip_r54 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r53.value !== "module" ? tooltip_r54 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r53.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r53.label, " ");
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 117);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_0_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r51);
      const machineId_r42 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeModules(machineId_r42, [{ id: $event.value, count: ctx_r1.rational(1) }]));
    });
    \u0275\u0275template(2, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_0_ng_template_2_Template, 3, 4, "ng-template", 43)(3, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_0_ng_template_3_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const settings_r47 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 3, "settings.modifierTooltip"))("ngModel", settings_r47.modules[0].id)("options", (tmp_15_0 = settings_r47.moduleOptions) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : \u0275\u0275pureFunction0(5, _c43));
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 112);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r58 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, module_r58.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r58.count);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_ng_template_6_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 120);
  }
  if (rf & 2) {
    const module_r59 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", module_r59.id);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_ng_template_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_ng_template_6_For_1_Conditional_0_Template, 1, 1, "lab-tooltip", 120);
  }
  if (rf & 2) {
    const module_r59 = ctx.$implicit;
    \u0275\u0275conditional(module_r59.id ? 0 : -1);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_ng_template_6_For_1_Template, 1, 1, null, null, _forTrack12);
  }
  if (rf & 2) {
    const settings_r47 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(settings_r47.modules);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 121);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r55);
      const modulesOverlay_r56 = \u0275\u0275reference(5);
      const machine_r57 = \u0275\u0275nextContext(2);
      const settings_r47 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(modulesOverlay_r56.show($event, settings_r47.modules, machine_r57));
    });
    \u0275\u0275repeaterCreate(1, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_For_2_Template, 4, 5, "i", 113, _forTrack12);
    \u0275\u0275element(3, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "lab-modules-overlay", 111, 10);
    \u0275\u0275listener("setValue", function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_Template_lab_modules_overlay_setValue_4_listener($event) {
      \u0275\u0275restoreView(_r55);
      const machineId_r42 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeModules(machineId_r42, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_ng_template_6_Template, 2, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const tooltip_r60 = \u0275\u0275reference(7);
    const settings_r47 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", tooltip_r60);
    \u0275\u0275advance();
    \u0275\u0275repeater(settings_r47.modules);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_0_Template, 4, 6, "p-dropdown", 118)(1, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Conditional_1_Template, 8, 1);
  }
  if (rf & 2) {
    const machine_r57 = \u0275\u0275nextContext();
    \u0275\u0275conditional(machine_r57.modules !== true && (machine_r57.modules == null ? null : machine_r57.modules.isOne()) ? 0 : 1);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputNumber", 108, 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_9_Template_p_inputNumber_onBlur_0_listener() {
      let tmp_14_0;
      \u0275\u0275restoreView(_r61);
      const overclockInput_r62 = \u0275\u0275reference(1);
      const machineId_r42 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOverclock(machineId_r42, ctx_r1.rational((tmp_14_0 = overclockInput_r62.value) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : 100), machineId_r42 ? (tmp_14_0 = ctx_r1.machinesState().entities[""]) == null ? null : tmp_14_0.overclock : ctx_r1.rational(100)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const settings_r47 = \u0275\u0275nextContext(2);
    \u0275\u0275property("min", 1)("max", 250)("step", 10)("maxFractionDigits", 2)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(2, 7, "settings.overclockTooltip"))("ngModel", settings_r47.overclock == null ? null : settings_r47.overclock.toNumber());
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_For_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 112);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r65 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, module_r65.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r65.count);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "i", 112);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_For_2_For_6_Template, 4, 5, "i", 113, _forTrack12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beacon_r66 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, beacon_r66.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beacon_r66.count);
    \u0275\u0275advance();
    \u0275\u0275repeater(beacon_r66.modules);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 114);
  }
  if (rf & 2) {
    \u0275\u0275property("id", ctx);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_ng_template_6_Conditional_0_Template, 1, 1, "lab-tooltip", 114);
  }
  if (rf & 2) {
    let tmp_15_0;
    const settings_r47 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_15_0 = settings_r47.beacons == null ? null : settings_r47.beacons[0] == null ? null : settings_r47.beacons[0].id) ? 0 : -1, tmp_15_0);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r63);
      const beaconsOverlay_r64 = \u0275\u0275reference(5);
      const settings_r47 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(beaconsOverlay_r64.show($event, settings_r47.beacons));
    });
    \u0275\u0275repeaterCreate(1, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_For_2_Template, 7, 5, "div", 89, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275element(3, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "lab-beacons-overlay", 111, 9);
    \u0275\u0275listener("setValue", function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_Template_lab_beacons_overlay_setValue_4_listener($event) {
      \u0275\u0275restoreView(_r63);
      const machineId_r42 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeBeacons(machineId_r42, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_ng_template_6_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const tooltip_r67 = \u0275\u0275reference(7);
    const settings_r47 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pTooltip", tooltip_r67);
    \u0275\u0275advance();
    \u0275\u0275repeater(settings_r47.beacons);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275element(1, "button", 116);
    \u0275\u0275elementStart(2, "p-dropdown", 117);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "filterOptions");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Template_p_dropdown_onChange_2_listener($event) {
      let tmp_12_0;
      \u0275\u0275restoreView(_r41);
      const machineId_r42 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setMachine(machineId_r42, $event.value, (tmp_12_0 = ctx_r1.data().defaults) == null ? null : tmp_12_0.machineRankIds));
    });
    \u0275\u0275template(5, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_5_Template, 2, 1, "ng-template", 43)(6, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_ng_template_6_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_7_Template, 4, 5, "p-dropdown", 118)(8, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_8_Template, 2, 1)(9, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_9_Template, 3, 9, "p-inputNumber", 101)(10, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Conditional_10_Template, 8, 1);
    \u0275\u0275elementStart(11, "button", 119);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Template_button_click_11_listener() {
      let tmp_12_0;
      \u0275\u0275restoreView(_r41);
      const machineId_r42 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeMachine(machineId_r42, (tmp_12_0 = ctx_r1.data().defaults) == null ? null : tmp_12_0.machineRankIds));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const settings_r47 = \u0275\u0275nextContext();
    const machineId_r42 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(3, 10, "settings.machineTooltip"))("ngModel", machineId_r42)("options", \u0275\u0275pipeBind3(4, 12, ctx_r1.options().machines, ctx_r1.machineIds(), machineId_r42));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(settings_r47.fuelId ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(settings_r47.modules && ctx.modules ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data().game === ctx_r1.Game.Satisfactory ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(settings_r47.beacons && settings_r47.beacons.length ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("invisible", machineId_r42 === "");
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(12, 16, "settings.removeMachinePreference"));
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Conditional_0_Template, 13, 18, "div", 115);
  }
  if (rf & 2) {
    let tmp_9_0;
    const machineId_r42 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.data().machineEntities[machineId_r42]) ? 0 : -1, tmp_9_0);
  }
}
function SettingsComponent_Conditional_65_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_65_ng_template_12_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_7_0;
    const machineId_r42 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.machinesState().entities[machineId_r42]) ? 0 : -1, tmp_7_0);
  }
}
function SettingsComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-dropdown", 100);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "filterOptions");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_65_Template_p_dropdown_onChange_4_listener($event) {
      let tmp_6_0;
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addMachine($event.value, (tmp_6_0 = ctx_r1.data().defaults) == null ? null : tmp_6_0.machineRankIds));
    });
    \u0275\u0275template(7, SettingsComponent_Conditional_65_ng_template_7_Template, 2, 0, "ng-template", 43)(8, SettingsComponent_Conditional_65_ng_template_8_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SettingsComponent_Conditional_65_Conditional_9_Template, 3, 9, "p-inputNumber", 101)(10, SettingsComponent_Conditional_65_Conditional_10_Template, 8, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-orderList", 102);
    \u0275\u0275listener("onReorder", function SettingsComponent_Conditional_65_Template_p_orderList_onReorder_11_listener() {
      let tmp_6_0;
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMachineRank(ctx_r1.machineIds(), (tmp_6_0 = ctx_r1.data().defaults) == null ? null : tmp_6_0.machineRankIds));
    });
    \u0275\u0275template(12, SettingsComponent_Conditional_65_ng_template_12_Template, 1, 1, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "div", 103);
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(2, 10, "settings.machineDefaults"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("invisible", !ctx_r1.options().machines.length);
    \u0275\u0275property("ngModel", (tmp_7_0 = ctx_r1.options().machines[0]) == null ? null : tmp_7_0.value)("pTooltip", \u0275\u0275pipeBind1(5, 12, "settings.addMachineTooltip"))("options", \u0275\u0275pipeBind2(6, 14, ctx_r1.options().machines, ctx_r1.machineIds()));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.data().game === ctx_r1.Game.Satisfactory ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.data().game === ctx_r1.Game.Factorio && ctx_r1.machinesState().beacons) ? 10 : -1, tmp_11_0);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.machineIds())("dragdrop", true);
  }
}
function SettingsComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "p-checkbox", 122);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_66_Template_p_checkbox_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r68);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleBeaconReceivers($event.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.settings().beaconReceivers != null)("binary", true)("label", \u0275\u0275pipeBind1(2, 4, "settings.estimateBeaconPowerUsage"))("pTooltip", \u0275\u0275pipeBind1(3, 6, "settings.estimateBeaconPowerUsageTooltip"));
  }
}
function SettingsComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 123);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "lab-input-number", 124);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("setValue", function SettingsComponent_Conditional_67_Template_lab_input_number_setValue_4_listener($event) {
      \u0275\u0275restoreView(_r69);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBeaconReceivers($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "settings.averageBeaconReceivers"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(5, 5, "settings.averageBeaconReceiversTooltip"))("value", ctx);
  }
}
function SettingsComponent_Conditional_68_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r71 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r71.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r71.label, " ");
  }
}
function SettingsComponent_Conditional_68_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 120);
  }
  if (rf & 2) {
    const item_r72 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r72.value);
  }
}
function SettingsComponent_Conditional_68_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_68_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r72 = ctx.$implicit;
    const tooltip_r73 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r72.value !== "module" ? tooltip_r73 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r72.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r72.label, " ");
  }
}
function SettingsComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 28)(2, "p-dropdown", 125);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_68_Template_p_dropdown_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r70);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProliferatorSpray($event.value));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_68_ng_template_4_Template, 5, 5, "ng-template", 43)(5, SettingsComponent_Conditional_68_ng_template_5_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 126);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("autoDisplayFirst", false)("pTooltip", \u0275\u0275pipeBind1(3, 5, "settings.proliferatorSelfSprayTooltip"))("ngModel", ctx_r1.settings().proliferatorSprayId)("options", ctx_r1.options().proliferatorModules);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "settings.proliferatorSelfSpray"));
  }
}
function SettingsComponent_ng_template_73_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r74 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r74.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r74.label, " ");
  }
}
function SettingsComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_ng_template_73_Conditional_0_Template, 5, 5, "div", 127);
  }
  if (rf & 2) {
    const item_r74 = ctx.$implicit;
    \u0275\u0275conditional(item_r74 ? 0 : -1);
  }
}
function SettingsComponent_ng_template_74_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 128);
  }
  if (rf & 2) {
    const item_r75 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r75.value);
  }
}
function SettingsComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_ng_template_74_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r75 = ctx.$implicit;
    const tooltip_r76 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r76);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r75.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r75.label, " ");
  }
}
function SettingsComponent_Conditional_78_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r78 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r78.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r78.label, " ");
  }
}
function SettingsComponent_Conditional_78_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 131);
  }
  if (rf & 2) {
    const item_r79 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r79.value);
  }
}
function SettingsComponent_Conditional_78_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_78_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r79 = ctx.$implicit;
    const tooltip_r80 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r80);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r79.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r79.label, " ");
  }
}
function SettingsComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 28)(2, "p-dropdown", 129);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_78_Template_p_dropdown_onChange_2_listener($event) {
      let tmp_6_0;
      \u0275\u0275restoreView(_r77);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPipe($event.value, (tmp_6_0 = ctx_r1.data().defaults) == null ? null : tmp_6_0.pipeId));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_78_ng_template_4_Template, 5, 5, "ng-template", 43)(5, SettingsComponent_Conditional_78_ng_template_5_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 130);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(3, 4, "settings.defaultPipeTooltip"))("ngModel", ctx_r1.settings().pipeId)("options", ctx_r1.options().pipes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "settings.defaultPipe"));
  }
}
function SettingsComponent_Conditional_79_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r82 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r82.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r82.label, " ");
  }
}
function SettingsComponent_Conditional_79_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 134);
  }
  if (rf & 2) {
    const item_r83 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r83.value);
  }
}
function SettingsComponent_Conditional_79_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_79_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r83 = ctx.$implicit;
    const tooltip_r84 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r84);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r83.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r83.label, " ");
  }
}
function SettingsComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 28)(2, "p-dropdown", 132);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_79_Template_p_dropdown_onChange_2_listener($event) {
      let tmp_6_0;
      \u0275\u0275restoreView(_r81);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCargoWagon($event.value, (tmp_6_0 = ctx_r1.data().defaults) == null ? null : tmp_6_0.cargoWagonId));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_79_ng_template_4_Template, 5, 5, "ng-template", 43)(5, SettingsComponent_Conditional_79_ng_template_5_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 133);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(3, 4, "settings.defaultCargoWagonTooltip"))("ngModel", ctx_r1.settings().cargoWagonId)("options", ctx_r1.options().cargoWagons);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "settings.defaultCargoWagon"));
  }
}
function SettingsComponent_Conditional_80_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r86 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r86.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r86.label, " ");
  }
}
function SettingsComponent_Conditional_80_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 137);
  }
  if (rf & 2) {
    const item_r87 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r87.value);
  }
}
function SettingsComponent_Conditional_80_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_80_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r87 = ctx.$implicit;
    const tooltip_r88 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r88);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r87.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r87.label, " ");
  }
}
function SettingsComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 28)(2, "p-dropdown", 135);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_80_Template_p_dropdown_onChange_2_listener($event) {
      let tmp_6_0;
      \u0275\u0275restoreView(_r85);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFluidWagon($event.value, (tmp_6_0 = ctx_r1.data().defaults) == null ? null : tmp_6_0.fluidWagonId));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_80_ng_template_4_Template, 5, 5, "ng-template", 43)(5, SettingsComponent_Conditional_80_ng_template_5_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 136);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(3, 4, "settings.defaultFluidWagonTooltip"))("ngModel", ctx_r1.settings().fluidWagonId)("options", ctx_r1.options().fluidWagons);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "settings.defaultFluidWagon"));
  }
}
function SettingsComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 28)(2, "p-inputNumber", 138, 11);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_81_Template_p_inputNumber_onBlur_2_listener() {
      let tmp_7_0;
      \u0275\u0275restoreView(_r89);
      const flowRateInput_r90 = \u0275\u0275reference(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFlowRate(ctx_r1.rational((tmp_7_0 = flowRateInput_r90.value) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 1500)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 139);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 52)(10, "a", 140);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 27)(14, "div", 28)(15, "p-dropdown", 141);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_81_Template_p_dropdown_onChange_15_listener($event) {
      \u0275\u0275restoreView(_r89);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setInserterTarget($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 142);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("suffix", " " + \u0275\u0275pipeBind1(4, 12, "settings.flowRateUnit"))("min", 1)("step", 100)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(5, 14, "settings.pipeFlowRateTooltip"))("ngModel", ctx_r1.settings().flowRate.toNumber());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, "settings.pipeFlowRate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 18, "settings.wiki"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(16, 20, "settings.inserterTargetTooltip"))("ngModel", ctx_r1.settings().inserterTarget)("options", ctx_r1.inserterTargetOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 22, "settings.inserterTarget"));
  }
}
function SettingsComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "p-inputNumber", 143, 12);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_82_Template_p_inputNumber_onBlur_2_listener() {
      let tmp_7_0;
      \u0275\u0275restoreView(_r91);
      const miningBonusInput_r92 = \u0275\u0275reference(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMiningBonus(ctx_r1.rational(((tmp_7_0 = miningBonusInput_r92.value) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 100) - 100)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 144);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 100)("step", 10)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(4, 6, "settings.miningSpeedTooltip"))("ngModel", ctx_r1.settings().miningBonus.add(ctx_r1.rational(100)).toNumber());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "settings.miningSpeed"));
  }
}
function SettingsComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-accordionTab", 46);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 26)(3, "div", 32)(4, "div", 28)(5, "p-inputNumber", 145, 13);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_83_Template_p_inputNumber_onBlur_5_listener() {
      let tmp_7_0;
      \u0275\u0275restoreView(_r93);
      const miningProdInput_r94 = \u0275\u0275reference(6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMiningBonus(ctx_r1.rational((tmp_7_0 = miningProdInput_r94.value) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 146);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 32)(12, "div", 28)(13, "p-dropdown", 147);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_83_Template_p_dropdown_onChange_13_listener($event) {
      \u0275\u0275restoreView(_r93);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setResearchSpeed($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 148);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 27)(19, "div", 28)(20, "p-dropdown", 149);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_83_Template_p_dropdown_onChange_20_listener($event) {
      \u0275\u0275restoreView(_r93);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setInserterCapacity($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 150);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("header", \u0275\u0275pipeBind1(1, 15, "settings.bonuses"));
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 0)("step", 10)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(7, 17, "settings.miningProductivityTooltip"))("ngModel", ctx_r1.settings().miningBonus.toNumber());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 19, "settings.miningProductivity"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(14, 21, "settings.researchSpeedTooltip"))("ngModel", ctx_r1.settings().researchBonus)("options", ctx_r1.researchSpeedOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 23, "settings.researchSpeed"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(21, 25, "settings.inserterCapacityTooltip"))("ngModel", ctx_r1.settings().inserterCapacity)("options", ctx_r1.inserterCapacityOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 27, "settings.inserterCapacity"));
  }
}
function SettingsComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 28)(2, "p-dropdown", 151);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_94_Template_p_dropdown_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r95);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPowerUnit($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 152);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(3, 4, "settings.powerUnitTooltip"))("ngModel", ctx_r1.preferences().powerUnit)("options", ctx_r1.powerUnitOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "settings.powerUnit"));
  }
}
var _SettingsComponent = class _SettingsComponent {
  constructor() {
    this.contentSvc = inject(ContentService);
    this.router = inject(Router);
    this.store = inject(Store);
    this.translateSvc = inject(TranslateService);
    this.routerSvc = inject(RouterService);
    this.active = false;
    this.hidden = false;
    this.itemsState = this.store.selectSignal(items_exports.getItemsState);
    this.excludedItemIds = this.store.selectSignal(items_exports.getExcludedItemIds);
    this.recipesState = this.store.selectSignal(recipes_exports.getRecipesState);
    this.excludedRecipeIds = this.store.selectSignal(recipes_exports.getExcludedRecipeIds);
    this.itemIds = this.store.selectSignal(recipes_exports.getAvailableItems);
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.machinesState = this.store.selectSignal(machines_exports.getMachinesState);
    this.settings = this.store.selectSignal(settings_exports.getSettings);
    this.columnsState = this.store.selectSignal(settings_exports.getColumnsState);
    this.options = this.store.selectSignal(settings_exports.getOptions);
    this.modOptions = this.store.selectSignal(settings_exports.getModOptions);
    this.presetOptions = this.store.selectSignal(settings_exports.getPresetOptions);
    this.researchedTechnologyIds = this.store.selectSignal(settings_exports.getAllResearchedTechnologyIds);
    this.recipeIds = this.store.selectSignal(settings_exports.getAvailableRecipes);
    this.gameStates = this.store.selectSignal(settings_exports.getGameStates);
    this.savedStates = this.store.selectSignal(settings_exports.getSavedStates);
    this.preferences = this.store.selectSignal(preferences_exports.preferencesState);
    this.modRecord = this.store.selectSignal(datasets_exports.getModRecord);
    this.machineIds = computed(() => [
      ...coalesce(this.store.selectSignal(machines_exports.getMachinesState)().ids, [])
    ]);
    this.defaults = this.store.selectSignal(settings_exports.getDefaults);
    this.state = "";
    this.editValue = "";
    this.editState = null;
    this.editStateMenu = [
      {
        label: this.translateSvc.instant("settings.createSavedState"),
        icon: "fa-solid fa-plus",
        command: () => this.openCreateState()
      },
      {
        label: this.translateSvc.instant("settings.saveSavedState"),
        icon: "fa-solid fa-floppy-disk",
        command: () => this.overwriteState()
      },
      {
        label: this.translateSvc.instant("settings.editSavedState"),
        icon: "fa-solid fa-pencil",
        command: () => this.openEditState()
      },
      {
        label: this.translateSvc.instant("settings.deleteSavedState"),
        icon: "fa-solid fa-trash",
        command: () => this.clickDeleteState()
      }
    ];
    this.versionsVisible = false;
    this.displayRateOptions = displayRateOptions;
    this.gameOptions = gameOptions;
    this.inserterCapacityOptions = inserterCapacityOptions;
    this.inserterTargetOptions = inserterTargetOptions;
    this.languageOptions = languageOptions;
    this.powerUnitOptions = powerUnitOptions;
    this.researchSpeedOptions = researchBonusOptions;
    this.themeOptions = themeOptions;
    this.maximizeTypeOptions = maximizeTypeOptions;
    this.FuelType = FuelType;
    this.Game = Game;
    this.ItemId = ItemId;
    this.BrowserUtility = BrowserUtility;
    this.rational = rational;
  }
  ngOnInit() {
    this.store.select(settings_exports.getGameStates).pipe(first()).subscribe((states) => {
      this.state = coalesce(Object.keys(states).find((s) => states[s] === BrowserUtility.search), "");
    });
  }
  clickResetSettings() {
    this.contentSvc.confirm({
      icon: "fa-solid fa-exclamation-triangle",
      header: this.translateSvc.instant("settings.reset"),
      message: this.translateSvc.instant("settings.resetWarning"),
      acceptLabel: this.translateSvc.instant("yes"),
      rejectLabel: this.translateSvc.instant("cancel"),
      accept: () => {
        localStorage.clear();
        this.resetSettings();
      }
    });
  }
  setSearch(search) {
    const tree = this.router.parseUrl(this.router.url);
    const params = new URLSearchParams(search);
    params.forEach((value, key) => tree.queryParams[key] = value);
    this.router.navigateByUrl(tree);
  }
  copySearchToClipboard(search) {
    navigator.clipboard.writeText(search);
  }
  setState(id, states) {
    const query = states[id];
    if (query) {
      const queryParams = this.routerSvc.getParams(query);
      this.state = id;
      this.router.navigate([], { queryParams });
    }
  }
  clickSaveState(game) {
    if (!this.editValue || !this.editState)
      return;
    this.saveState(game, this.editValue, BrowserUtility.search);
    if (this.editState === "edit" && this.state) {
      this.removeState(game, this.state);
    }
    this.editState = null;
    this.state = this.editValue;
  }
  openCreateState() {
    this.editValue = "";
    this.editState = "create";
  }
  overwriteState() {
    this.store.select(settings_exports.getGame).pipe(first()).subscribe((game) => {
      this.saveState(game, this.state, BrowserUtility.search);
    });
  }
  openEditState() {
    this.editValue = this.state;
    this.editState = "edit";
  }
  clickDeleteState() {
    this.store.select(settings_exports.getGame).pipe(first()).subscribe((game) => {
      this.removeState(game, this.state);
      this.state = "";
    });
  }
  setGame(game) {
    this.setMod(gameInfo[game].modId);
  }
  setExcludedRecipes(checked, recipesState, data) {
    const payload = [];
    for (const id of data.recipeIds) {
      const value = checked.some((i) => i === id);
      if (value !== recipesState[id].excluded) {
        const def = coalesce(data.defaults?.excludedRecipeIds, []).some((i) => i === id);
        payload.push({ id, value, def });
      }
    }
    this.setRecipeExcludedBatch(payload);
  }
  setExcludedItems(checked, itemsState, data) {
    const payload = [];
    for (const id of data.itemIds) {
      const value = checked.some((i) => i === id);
      if (value !== itemsState[id].excluded) {
        payload.push({ id, value });
      }
    }
    this.setItemExcludedBatch(payload);
  }
  changeFuel(id, value, settings, fuelRankIds) {
    const def = RecipeUtility.bestMatch(coalesce(settings.fuelOptions?.map((o) => o.value), []), fuelRankIds);
    this.setFuel(id, value, def);
  }
  changeModules(id, value) {
    const state = this.machinesState();
    const machine = this.data().machineEntities[id];
    this.setModules(id, RecipeUtility.dehydrateModules(value, coalesce(state.entities[id].moduleOptions, []), state.moduleRankIds, machine.modules));
  }
  changeBeacons(id, value) {
    const def = this.machinesState().beacons;
    this.setBeacons(id, RecipeUtility.dehydrateBeacons(value, def));
  }
  changeDefaultBeacons(value) {
    const def = this.defaults()?.beacons;
    this.setDefaultBeacons(RecipeUtility.dehydrateBeacons(value, def));
  }
  toggleBeaconReceivers(value) {
    this.setBeaconReceivers(value ? rational(1n) : null);
  }
  /** Action Dispatch Methods */
  resetSettings() {
    this.store.dispatch(new app_actions_exports.ResetAction());
  }
  saveState(key, id, value) {
    this.store.dispatch(new preferences_exports.SaveStateAction({ key, id, value }));
  }
  removeState(key, id) {
    this.store.dispatch(new preferences_exports.RemoveStateAction({ key, id }));
  }
  setMod(value) {
    this.store.dispatch(new settings_exports.SetModAction(value));
  }
  setResearchedTechnologies(value) {
    this.store.dispatch(new settings_exports.SetResearchedTechnologiesAction(value));
  }
  setRecipeExcludedBatch(payload) {
    this.store.dispatch(new recipes_exports.SetExcludedBatchAction(payload));
  }
  setItemExcludedBatch(payload) {
    this.store.dispatch(new items_exports.SetExcludedBatchAction(payload));
  }
  setPreset(value) {
    this.store.dispatch(new settings_exports.SetPresetAction(value));
  }
  setFuelRank(value, def) {
    this.store.dispatch(new machines_exports.SetFuelRankAction({ value, def }));
  }
  setModuleRank(value, def) {
    this.store.dispatch(new machines_exports.SetModuleRankAction({ value, def }));
  }
  addMachine(value, def) {
    this.store.dispatch(new machines_exports.AddAction({ value, def }));
  }
  setDefaultBeacons(value) {
    this.store.dispatch(new machines_exports.SetDefaultBeaconsAction(value));
  }
  setDefaultOverclock(value) {
    this.store.dispatch(new machines_exports.SetDefaultOverclockAction(value));
  }
  setMachineRank(value, def) {
    this.store.dispatch(new machines_exports.SetRankAction({ value, def }));
  }
  setMachine(id, value, def) {
    this.store.dispatch(new machines_exports.SetMachineAction({ id, value, def }));
  }
  setFuel(id, value, def) {
    this.store.dispatch(new machines_exports.SetFuelAction({ id, value, def }));
  }
  setModules(id, value) {
    this.store.dispatch(new machines_exports.SetModulesAction({ id, value }));
  }
  setBeacons(id, value) {
    this.store.dispatch(new machines_exports.SetBeaconsAction({ id, value }));
  }
  setOverclock(id, value, def) {
    this.store.dispatch(new machines_exports.SetOverclockAction({ id, value, def }));
  }
  removeMachine(value, def) {
    this.store.dispatch(new machines_exports.RemoveAction({ value, def }));
  }
  setBeaconReceivers(value) {
    this.store.dispatch(new settings_exports.SetBeaconReceiversAction(value));
  }
  setProliferatorSpray(value) {
    this.store.dispatch(new settings_exports.SetProliferatorSprayAction(value));
  }
  setBelt(value, def) {
    this.store.dispatch(new settings_exports.SetBeltAction({ value, def }));
  }
  setPipe(value, def) {
    this.store.dispatch(new settings_exports.SetPipeAction({ value, def }));
  }
  setCargoWagon(value, def) {
    this.store.dispatch(new settings_exports.SetCargoWagonAction({ value, def }));
  }
  setFluidWagon(value, def) {
    this.store.dispatch(new settings_exports.SetFluidWagonAction({ value, def }));
  }
  setFlowRate(value) {
    this.store.dispatch(new settings_exports.SetFlowRateAction(value));
  }
  setInserterTarget(value) {
    this.store.dispatch(new settings_exports.SetInserterTargetAction(value));
  }
  setMiningBonus(value) {
    this.store.dispatch(new settings_exports.SetMiningBonusAction(value));
  }
  setResearchSpeed(value) {
    this.store.dispatch(new settings_exports.SetResearchBonusAction(value));
  }
  setInserterCapacity(value) {
    this.store.dispatch(new settings_exports.SetInserterCapacityAction(value));
  }
  setDisplayRate(value, prev) {
    this.store.dispatch(new settings_exports.SetDisplayRateAction({ value, prev }));
  }
  setPowerUnit(value) {
    this.store.dispatch(new preferences_exports.SetPowerUnitAction(value));
  }
  setLanguage(value) {
    this.translateSvc.use(value);
    this.store.dispatch(new preferences_exports.SetLanguageAction(value));
  }
  setTheme(value) {
    this.store.dispatch(new preferences_exports.SetThemeAction(value));
  }
  setBypassLanding(value) {
    this.store.dispatch(new preferences_exports.SetBypassLandingAction(value));
  }
  setHideDuplicateIcons(value) {
    this.store.dispatch(new preferences_exports.SetHideDuplicateIconsAction(value));
  }
  setDisablePaginator(value) {
    this.store.dispatch(new preferences_exports.SetDisablePaginatorAction(value));
  }
  setMaximizeType(value) {
    this.store.dispatch(new settings_exports.SetMaximizeTypeAction(value));
  }
  setNetProductionOnly(value) {
    this.store.dispatch(new settings_exports.SetNetProductionOnlyAction(value));
  }
  setSurplusMachinesOutput(value) {
    this.store.dispatch(new settings_exports.SetSurplusMachinesOutputAction(value));
  }
  setConvertObjectiveValues(value) {
    this.store.dispatch(new preferences_exports.SetConvertObjectiveValuesAction(value));
  }
};
_SettingsComponent.\u0275fac = function SettingsComponent_Factory(t) {
  return new (t || _SettingsComponent)();
};
_SettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["lab-settings"]], hostVars: 4, hostBindings: function SettingsComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classProp("active", ctx.active)("hidden", ctx.hidden);
  }
}, inputs: { active: "active", hidden: "hidden" }, decls: 147, vars: 172, consts: [["techPicker", ""], ["recipesPicker", ""], ["itemsPicker", ""], ["presetDropdown", ""], ["search", ""], ["nameCtrl", "ngModel"], ["stateMenu", ""], ["tooltip", ""], ["overclockInput", ""], ["beaconsOverlay", ""], ["modulesOverlay", ""], ["flowRateInput", ""], ["miningBonusInput", ""], ["miningProdInput", ""], [1, "p-3"], [1, "d-flex", "align-items-center", "justify-content-between"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-trash", "tooltipPosition", "bottom", 1, "p-button-rounded", "p-button-text", 3, "click", "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-rounded", "p-button-text", "d-inline-flex", "d-none", "d-xl-inline-flex", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-rounded", "p-button-text", "d-inline-flex", "d-sm-none", 3, "click"], [1, "flex-grow-1", "overflow-hidden"], ["styleClass", "mb-5"], [3, "multiple"], ["pTemplate", "header"], [1, "p-inputgroup", "mb-2"], [1, "p-inputgroup"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-outlined", "p-button-rounded", "w-100", 3, "label"], [1, "p-fluid"], [1, "mt-3"], [1, "p-float-label"], ["labDropdownTranslate", "", "inputId", "game", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "game"], [1, "position-relative"], [1, "mt-3", "pb-3"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-microchip", 1, "p-button-rounded", "p-button-outlined", 3, "click", "pTooltip", "label"], [3, "selectIds"], [1, "pb-3"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-flask-vial", 1, "p-button-rounded", "p-button-outlined", 3, "click", "pTooltip", "label"], [3, "selectIds", "header"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-boxes-stacked", 1, "p-button-rounded", "p-button-outlined", 3, "click", "pTooltip", "label"], [3, "selected"], ["labDropdownTranslate", "", "inputId", "preset", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "preset"], ["labDropdownBase", "", "inputId", "default-transport-belt", 3, "onChange", "pTooltip", "ngModel", "options"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["for", "default-transport-belt"], [3, "header"], ["labDropdownTranslate", "", "inputId", "display-rate", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "display-rate"], [1, "text-end"], ["labDropdownTranslate", "", "inputId", "language", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "language"], [1, "position-absolute", "end-0", "bottom-100", "me-1", "mb-1"], ["href", "https://github.com/factoriolab/factoriolab/wiki/Translating-FactorioLab", "target", "_blank"], ["labDropdownTranslate", "", "inputId", "theme", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "theme"], [3, "onChange", "binary", "label", "ngModel"], [3, "onChange", "ngModel", "binary", "label"], ["labDropdownTranslate", "", "inputId", "maximize-type", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "maximize-type"], ["tooltipPosition", "top", 3, "onChange", "ngModel", "binary", "label", "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-dollar-sign", 1, "p-button-rounded", "p-button-outlined", "mb-4", 3, "click", "label"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-grow-1"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-arrow-up-right-from-square", 1, "p-button-outlined", 3, "click"], ["pInputText", "", "type", "text", 3, "ngModel"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-copy", 1, "p-button-outlined", 3, "click"], ["pInputText", "", "pAutoFocus", "", "type", "text", "tooltipPosition", "top", "required", "", 3, "ngModelChange", "keydown.enter", "autofocus", "placeholder", "pTooltip", "ngModel"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-floppy-disk", "tooltipPosition", "top", 1, "p-button-outlined", 3, "click", "pTooltip", "disabled"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-outlined", 3, "click", "pTooltip"], ["tooltipPosition", "top", 3, "onChange", "placeholder", "pTooltip", "ngModel", "options"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-ellipsis-vertical", 1, "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-outlined", 3, "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-ellipsis-vertical", 1, "p-button-outlined", 3, "click"], ["appendTo", "body", 3, "popup", "model"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-outlined", 3, "click", "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-outlined", "p-button-rounded", "w-100", 3, "click", "label"], [1, "p-static-label"], [1, "position-absolute", "end-0", "top-0", "me-1", "mb-1"], ["href", "https://github.com/factoriolab/factoriolab/issues/new?assignees=&labels=mod+support&template=mod-request.md&title=", "target", "_blank"], ["inputId", "mod", "styleClass", "w-100", 3, "onChange", "filter", "autofocusFilter", "pTooltip", "ngModel", "options"], ["pButton", "", "pRipple", "", "icon", "fa-solid fa-info", 1, "p-button-outlined", 3, "click", "pTooltip"], ["appendTo", "body", 3, "visibleChange", "visible", "modal", "dismissableMask", "draggable", "resizable", "breakpoints", "header"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-sm", 3, "value"], ["pTemplate", "body"], ["pTemplate", "footer"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-check", 1, "p-button-outlined", 3, "click", "label"], ["inputId", "modifier-rank", "styleClass", "icons", "appendTo", "body", "scrollHeight", "40vh", "panelStyleClass", "tooltip", 3, "onChange", "pTooltip", "ngModel", "options"], ["pTemplate", "selectedItems"], ["for", "modifier-rank"], [1, "d-flex"], [1, "mx-2", 3, "class"], [1, "mx-2"], [1, "d-flex", "align-items-center", "p-2", "w-100", "h-100", 3, "pTooltip"], [1, "ms-3", "text-truncate"], ["type", "fuel", 3, "id"], ["inputId", "fuel-rank", "styleClass", "icons", "appendTo", "body", "scrollHeight", "40vh", "panelStyleClass", "tooltip", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "fuel-rank"], [1, "p-inputgroup", "flex-wrap", "machine-preference", "mb-1"], [1, "p-inputgroup-addon", 3, "pTooltip"], [1, "fa-solid", "fa-industry"], ["labDropdownBase", "icon", 3, "onChange", "ngModel", "pTooltip", "options"], ["labNoDrag", "", "suffix", "%", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", "inputStyleClass", "text-end", 3, "min", "max", "step", "maxFractionDigits", "showButtons", "pTooltip", "ngModel"], [3, "onReorder", "value", "dragdrop"], [1, "pt-2"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100"], [1, "fa-solid", "fa-plus"], [1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip"], ["type", "machine", 3, "id"], ["labNoDrag", "", "suffix", "%", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", "inputStyleClass", "text-end", 3, "onBlur", "min", "max", "step", "maxFractionDigits", "showButtons", "pTooltip", "ngModel"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "icons", "p-button-text", "flex-column", 3, "click", "pTooltip"], [1, "hover-icon", "fa-solid", "fa-gear"], [3, "setValue"], [1, "p-button-icon"], [1, "p-button-icon", 3, "class"], ["type", "beacon", 3, "id"], [1, "p-inputgroup", "flex-wrap", "machine-preference"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-grip-lines", 1, "p-button-outlined", "cursor-grab"], ["labDropdownBase", "icon", "labNoDrag", "", 3, "onChange", "pTooltip", "ngModel", "options"], ["labDropdownBase", "icon", "labNoDrag", "", 3, "pTooltip", "ngModel", "options"], ["pButton", "", "pRipple", "", "labNoDrag", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-outlined", "ms-auto", 3, "click", "pTooltip"], ["type", "module", 3, "id"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "icons", "p-button-text", 3, "click", "pTooltip"], ["tooltipPosition", "bottom", 3, "onChange", "ngModel", "binary", "label", "pTooltip"], ["for", "beacon-receivers", 1, "p-static-label"], ["inputId", "beacon-receivers", 1, "w-100", 3, "setValue", "pTooltip", "value"], ["labDropdownBase", "", "inputId", "proliferator-self-spray", 3, "onChange", "autoDisplayFirst", "pTooltip", "ngModel", "options"], ["for", "proliferator-self-spray"], [1, "d-flex", "align-items-center", "h-100"], ["type", "belt", 3, "id"], ["labDropdownBase", "", "inputId", "default-pipe", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "default-pipe"], ["type", "pipe", 3, "id"], ["labDropdownBase", "", "inputId", "default-cargo-wagon", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "default-cargo-wagon"], ["type", "cargo-wagon", 3, "id"], ["labDropdownBase", "", "inputId", "default-fluid-wagon", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "default-fluid-wagon"], ["type", "fluid-wagon", 3, "id"], ["inputId", "pipe-flow-rate", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", 3, "onBlur", "suffix", "min", "step", "showButtons", "pTooltip", "ngModel"], ["for", "pipe-flow-rate"], ["href", "https://wiki.factorio.com/Fluid_system#Pipelines", "target", "_blank"], ["labDropdownTranslate", "", "inputId", "inserter-target", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "inserter-target"], ["inputId", "mining-speed", "suffix", "%", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", 3, "onBlur", "min", "step", "showButtons", "pTooltip", "ngModel"], ["for", "mining-speed"], ["inputId", "mining-productivity", "prefix", "+", "suffix", "%", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", 3, "onBlur", "min", "step", "showButtons", "pTooltip", "ngModel"], ["for", "mining-productivity"], ["labDropdownTranslate", "", "inputId", "research-bonus", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "research-speed"], ["labDropdownTranslate", "", "inputId", "inserter-capacity", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "inserter-capacity"], ["labDropdownTranslate", "", "inputId", "power-unit", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "power-unit"]], template: function SettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "button", 16);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clickResetSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.contentSvc.toggleSettingsXl());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 18);
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.contentSvc.toggleSettings());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 19)(11, "p-scrollPanel", 20)(12, "p-accordion", 21)(13, "p-accordionTab");
    \u0275\u0275template(14, SettingsComponent_ng_template_14_Template, 5, 4, "ng-template", 22)(15, SettingsComponent_Conditional_15_Template, 5, 1, "div", 23)(16, SettingsComponent_Conditional_16_Template, 9, 15, "div", 23)(17, SettingsComponent_Conditional_17_Template, 6, 9, "div", 24)(18, SettingsComponent_Conditional_18_Template, 2, 3, "button", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-accordionTab");
    \u0275\u0275template(20, SettingsComponent_ng_template_20_Template, 6, 4, "ng-template", 22);
    \u0275\u0275elementStart(21, "div", 26)(22, "div", 27)(23, "span", 28)(24, "p-dropdown", 29);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setGame($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 30);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, SettingsComponent_Conditional_29_Template, 3, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, SettingsComponent_Conditional_30_Template, 20, 32, "div", 31);
    \u0275\u0275elementStart(31, "div", 32)(32, "button", 33);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const techPicker_r16 = \u0275\u0275reference(37);
      return \u0275\u0275resetView(techPicker_r16.clickOpen(ctx.researchedTechnologyIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "lab-tech-picker", 34, 0);
    \u0275\u0275listener("selectIds", function SettingsComponent_Template_lab_tech_picker_selectIds_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setResearchedTechnologies($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 35)(39, "button", 36);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const recipesPicker_r17 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(recipesPicker_r17.clickOpen("recipe", ctx.recipeIds(), ctx.excludedRecipeIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "lab-picker", 37, 1);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275listener("selectIds", function SettingsComponent_Template_lab_picker_selectIds_42_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setExcludedRecipes($event, ctx.recipesState(), ctx.data()));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "button", 38);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const itemsPicker_r18 = \u0275\u0275reference(50);
      return \u0275\u0275resetView(itemsPicker_r18.clickOpen("item", ctx.itemIds(), ctx.excludedItemIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "lab-picker", 37, 2);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275listener("selectIds", function SettingsComponent_Template_lab_picker_selectIds_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setExcludedItems($event, ctx.itemsState(), ctx.data()));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "p-accordionTab", 39);
    \u0275\u0275template(53, SettingsComponent_ng_template_53_Template, 5, 4, "ng-template", 22);
    \u0275\u0275elementStart(54, "div", 26)(55, "div", 32)(56, "span", 28)(57, "p-dropdown", 40, 3);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_57_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setPreset($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "label", 41);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(63, SettingsComponent_Conditional_63_Template, 9, 8, "div", 32)(64, SettingsComponent_Conditional_64_Template, 9, 8, "div", 32)(65, SettingsComponent_Conditional_65_Template, 14, 17)(66, SettingsComponent_Conditional_66_Template, 4, 8, "div", 35)(67, SettingsComponent_Conditional_67_Template, 6, 7, "div", 35)(68, SettingsComponent_Conditional_68_Template, 9, 9, "div", 32);
    \u0275\u0275elementStart(69, "div", 32)(70, "div", 28)(71, "p-dropdown", 42);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_71_listener($event) {
      let tmp_5_0;
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setBelt($event.value, (tmp_5_0 = ctx.data().defaults) == null ? null : tmp_5_0.beltId));
    });
    \u0275\u0275template(73, SettingsComponent_ng_template_73_Template, 1, 1, "ng-template", 43)(74, SettingsComponent_ng_template_74_Template, 7, 6, "ng-template", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "label", 45);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(78, SettingsComponent_Conditional_78_Template, 9, 8, "div", 32)(79, SettingsComponent_Conditional_79_Template, 9, 8, "div", 32)(80, SettingsComponent_Conditional_80_Template, 9, 8, "div", 32)(81, SettingsComponent_Conditional_81_Template, 20, 24)(82, SettingsComponent_Conditional_82_Template, 8, 10, "div", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(83, SettingsComponent_Conditional_83_Template, 25, 29, "p-accordionTab", 46);
    \u0275\u0275elementStart(84, "p-accordionTab", 46);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementStart(86, "div", 26)(87, "div", 32)(88, "span", 28)(89, "p-dropdown", 47);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_89_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setDisplayRate($event.value, ctx.settings().displayRate));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "label", 48);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(94, SettingsComponent_Conditional_94_Template, 7, 8, "div", 32);
    \u0275\u0275elementStart(95, "div", 32);
    \u0275\u0275element(96, "div", 49);
    \u0275\u0275elementStart(97, "div", 28)(98, "p-dropdown", 50);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_98_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setLanguage($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "label", 51);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "small", 52)(104, "a", 53);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(107, "div", 32)(108, "div", 28)(109, "p-dropdown", 54);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_109_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setTheme($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "label", 55);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "div", 35)(115, "p-checkbox", 56);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_115_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setBypassLanding($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "div", 35)(118, "p-checkbox", 57);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_118_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setHideDuplicateIcons($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div")(121, "p-checkbox", 57);
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_121_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setDisablePaginator($event.checked));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(123, "p-accordionTab", 46);
    \u0275\u0275pipe(124, "translate");
    \u0275\u0275elementStart(125, "div", 26)(126, "div", 32)(127, "span", 28)(128, "p-dropdown", 58);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_128_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setMaximizeType($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "label", 59);
    \u0275\u0275text(131);
    \u0275\u0275pipe(132, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(133, "div", 35)(134, "p-checkbox", 60);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_134_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setNetProductionOnly($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 35)(138, "p-checkbox", 60);
    \u0275\u0275pipe(139, "translate");
    \u0275\u0275pipe(140, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_138_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setSurplusMachinesOutput($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "div", 35)(142, "p-checkbox", 60);
    \u0275\u0275pipe(143, "translate");
    \u0275\u0275pipe(144, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_142_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setConvertObjectiveValues($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "button", 61);
    \u0275\u0275pipe(146, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_145_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.contentSvc.showCosts$.next());
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_34_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 86, "settings.header"));
    \u0275\u0275advance(3);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(7, 88, "settings.reset"));
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(165, _c03));
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.BrowserUtility.isStandalone ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.editState ? 16 : ctx.savedStates().length ? 17 : 18);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("pb-3", ctx.data().game === ctx.Game.Factorio);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(25, 90, "settings.gameTooltip"))("ngModel", ctx.data().game)("options", ctx.gameOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 92, "settings.game"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.data().game !== ctx.Game.Factorio ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 30 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(33, 94, "settings.techsTooltip"))("label", ctx.researchedTechnologyIds() ? \u0275\u0275pipeBind2(34, 96, "settings.techsResearched", \u0275\u0275pureFunction1(166, _c16, ctx.researchedTechnologyIds().length)) : \u0275\u0275pipeBind1(35, 99, "settings.allTechsResearched"));
    \u0275\u0275advance(7);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(40, 101, "settings.recipesTooltip"))("label", \u0275\u0275pipeBind2(41, 103, "settings.recipesExcluded", \u0275\u0275pureFunction1(168, _c16, ctx.excludedRecipeIds().length)));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(44, 106, "settings.recipesHeader"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(47, 108, "settings.itemsTooltip"))("label", \u0275\u0275pipeBind2(48, 110, "settings.itemsExcluded", \u0275\u0275pureFunction1(170, _c16, ctx.excludedItemIds().length)));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(51, 113, "settings.itemsHeader"));
    \u0275\u0275advance(3);
    \u0275\u0275property("selected", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(59, 115, "settings.presetTooltip"))("ngModel", ctx.settings().preset)("options", ctx.presetOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 117, "settings.preset"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.data().moduleIds.length > 1 ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().fuelIds.length && ctx.data().game !== ctx.Game.Satisfactory ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game !== ctx.Game.CaptainOfIndustry ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_34_0 = ctx.settings().beaconReceivers) ? 67 : -1, tmp_34_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.DysonSphereProgram ? 68 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(72, 119, "settings.defaultTransportBeltTooltip"))("ngModel", ctx.settings().beltId)("options", ctx.options().belts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 121, "settings.defaultTransportBelt"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.data().pipeIds.length > 1 ? 78 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().cargoWagonIds.length > 1 ? 79 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().fluidWagonIds.length > 1 ? 80 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 81 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.DysonSphereProgram ? 82 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 83 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("header", \u0275\u0275pipeBind1(85, 123, "settings.display"));
    \u0275\u0275advance(5);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(90, 125, "settings.displayRateTooltip"))("ngModel", ctx.settings().displayRate)("options", ctx.displayRateOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 127, "settings.displayRate"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.columnsState().power.show ? 94 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(99, 129, "settings.languageTooltip"))("ngModel", ctx.preferences().language)("options", ctx.languageOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 131, "settings.language"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 133, "settings.helpTranslate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(110, 135, "settings.themeTooltip"))("ngModel", ctx.preferences().theme)("options", ctx.themeOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 137, "settings.theme"));
    \u0275\u0275advance(3);
    \u0275\u0275property("binary", true)("label", \u0275\u0275pipeBind1(116, 139, "settings.bypassLanding"))("ngModel", ctx.preferences().bypassLanding);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.preferences().hideDuplicateIcons)("binary", true)("label", \u0275\u0275pipeBind1(119, 141, "settings.hideDuplicateIcons"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.preferences().disablePaginator)("binary", true)("label", \u0275\u0275pipeBind1(122, 143, "settings.disablePaginator"));
    \u0275\u0275advance(2);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(124, 145, "settings.advanced"));
    \u0275\u0275advance(5);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(129, 147, "settings.maximizeTypeTooltip"))("ngModel", ctx.settings().maximizeType)("options", ctx.maximizeTypeOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(132, 149, "settings.maximizeType"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.settings().netProductionOnly)("binary", true)("label", \u0275\u0275pipeBind1(135, 151, "settings.netProductionOnly"))("pTooltip", \u0275\u0275pipeBind1(136, 153, "settings.netProductionOnlyTooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.settings().surplusMachinesOutput)("binary", true)("label", \u0275\u0275pipeBind1(139, 155, "settings.surplusMachinesOutput"))("pTooltip", \u0275\u0275pipeBind1(140, 157, "settings.surplusMachinesOutputTooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.preferences().convertObjectiveValues)("binary", true)("label", \u0275\u0275pipeBind1(143, 159, "settings.convertObjectiveValues"))("pTooltip", \u0275\u0275pipeBind1(144, 161, "settings.convertObjectiveValuesTooltip"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(146, 163, "settings.openCosts"));
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, Accordion, AccordionTab, PrimeTemplate, AutoFocus, Tooltip, ButtonDirective, Checkbox, Dialog, Dropdown, InputNumber, InputText, Menu, MultiSelect, OrderList, Ripple, ScrollPanel, Table, InputNumberComponent, PickerComponent, TooltipComponent, DropdownTranslateDirective, BeaconsOverlayComponent, ModulesOverlayComponent, TechPickerComponent, DropdownBaseDirective, NoDragDirective, KeyValuePipe, TranslatePipe, IconSmClassPipe, FilterOptionsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: 4;\n  top: 0;\n  left: 0;\n  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  width: 322px;\n  height: 100%;\n  background-color: var(--surface-overlay);\n}\n@media (max-width: 1199.98px) {\n  [_nghost-%COMP%] {\n    transform: translate(-100%);\n  }\n  .active[_nghost-%COMP%] {\n    transform: translate(0);\n  }\n}\n@media (min-width: 1200px) {\n  .hidden[_nghost-%COMP%] {\n    transform: translate(-100%);\n  }\n}\n[_nghost-%COMP%]     .p-scrollpanel .p-scrollpanel-content {\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]     .p-scrollpanel .p-scrollpanel-bar-x {\n  visibility: hidden;\n}\n[_nghost-%COMP%]     .p-accordion {\n  width: 323px;\n}\n/*# sourceMappingURL=settings.component.css.map */"], changeDetection: 0 });
var SettingsComponent = _SettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/routes/main/components/settings/settings.component.ts", lineNumber: 68 });
})();

// src/app/routes/main/main-shared.module.ts
var _MainSharedModule = class _MainSharedModule {
};
_MainSharedModule.\u0275fac = function MainSharedModule_Factory(t) {
  return new (t || _MainSharedModule)();
};
_MainSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MainSharedModule });
_MainSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [FormsModule, AppSharedModule, FormsModule] });
var MainSharedModule = _MainSharedModule;

export {
  ObjectivesComponent,
  SettingsComponent,
  StepsComponent,
  MainSharedModule
};
//# sourceMappingURL=chunk-KBTB2AWJ.js.map
