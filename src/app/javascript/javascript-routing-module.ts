import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Javascript } from './javascript';
// Components
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

// Advanced
import { JsWhatisjs } from './components/js-whatisjs/js-whatisjs';
import { JsThiskeyword } from './components/js-thiskeyword/js-thiskeyword';
import { JsPrimitivevsobject } from './components/js-primitivevsobject/js-primitivevsobject';
import { JsArrowfunction } from './components/js-arrowfunction/js-arrowfunction';

const routes: Routes = [
  {
    path: '',
    component: Javascript,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'intro' },

      // Basics
      { path: 'intro', component: JsIntro },
      { path: 'comments', component: JsComments },
      { path: 'variables', component: JsVariables },
      { path: 'datatypes', component: JsDatatypes },
      { path: 'operators', component: JsOperators },
      { path: 'conditionals', component: JsConditionals },
      { path: 'loops', component: JsLoops },
      { path: 'functions', component: JsFunctions },
      { path: 'array', component: JsArray },
      { path: 'objects', component: JsObjects },

      // Missing topics you added
      { path: 'template-literals', component: JsTemplateliterals },
      { path: 'conversion-coercion', component: JsConversioncoercion },
      { path: 'truthy-falsy', component: JsTruthyfalsy },
      { path: 'equality-operator', component: JsEqualityoperator },
      { path: 'statements-expressions', component: JsStatementsexpressions },
      { path: 'prompt', component: JsPrompt },
      { path: 'if-else', component: JsIfelse },
      { path: 'switch', component: JsSwitch },

      // Advanced
      { path: 'what-is-js', component: JsWhatisjs },
      { path: 'this-keyword', component: JsThiskeyword },
      { path: 'primitive-vs-object', component: JsPrimitivevsobject },
      { path: 'arrow-function', component: JsArrowfunction },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavascriptRoutingModule {}
