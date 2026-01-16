import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptRoutingModule } from './javascript-routing-module';

// Components
import { Javascript } from './javascript';
import { JsIntro } from './components/js-intro/js-intro';
import { JsComments } from './components/js-comments/js-comments';
import { JsVariables } from './components/js-variables/js-variables';
import { JsDatatypes } from './components/js-datatypes/js-datatypes';
import { JsOperators } from './components/js-operators/js-operators';
import { JsConditionals } from './components/js-conditionals/js-conditionals';
import { JsLoops } from './components/js-loops/js-loops';
import { JsFunctions } from './components/js-functions/js-functions';
import { JsArray } from './components/js-array/js-array';
import { JsObjects } from './components/js-objects/js-objects';
import { JsTemplateliterals } from './components/js-templateliterals/js-templateliterals';
import { JsConversioncoercion } from './components/js-conversioncoercion/js-conversioncoercion';
import { JsTruthyfalsy } from './components/js-truthyfalsy/js-truthyfalsy';
import { JsEqualityoperator } from './components/js-equalityoperator/js-equalityoperator';
import { JsStatementsexpressions } from './components/js-statementsexpressions/js-statementsexpressions';
import { JsPrompt } from './components/js-prompt/js-prompt';
import { JsIfelse } from './components/js-ifelse/js-ifelse';
import { JsSwitch } from './components/js-switch/js-switch';
import { JsWhatisjs } from './components/js-whatisjs/js-whatisjs';
import { JsThiskeyword } from './components/js-thiskeyword/js-thiskeyword';
import { JsPrimitivevsobject } from './components/js-primitivevsobject/js-primitivevsobject';
import { JsArrowfunction } from './components/js-arrowfunction/js-arrowfunction';


@NgModule({
  declarations: [
    Javascript,
    JsIntro,
    JsComments,
    JsVariables,
    JsDatatypes,
    JsOperators,
    JsConditionals,
    JsLoops,
    JsFunctions,
    JsArray,
    JsObjects,
    JsTemplateliterals,
    JsConversioncoercion,
    JsTruthyfalsy,
    JsEqualityoperator,
    JsStatementsexpressions,
    JsPrompt,
    JsIfelse,
    JsSwitch,
    JsWhatisjs,
    JsThiskeyword,
    JsPrimitivevsobject,
    JsArrowfunction
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
