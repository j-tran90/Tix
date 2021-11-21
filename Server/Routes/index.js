"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const survey_1 = require("../Controller/survey");
const question_1 = require("../Controller/question");
const user_1 = require("../Controller/user");
router.get('/', survey_1.DisplayAllSurveyListPage);
router.get('/home', survey_1.DisplaySurveyListPage);
router.get('/sign-in', user_1.DisplaySignInPage);
router.post('/sign-in', user_1.ProcessSignInPage);
router.get('/sign-out', user_1.ProcessSignOutPage);
router.get('/register', user_1.DisplayRegisterPage);
router.post('/register', user_1.ProcessRegisterPage);
router.get('/survey-list', user_1.requireAuth, survey_1.DisplaySurveyListPage);
router.get('/survey-list-all', survey_1.DisplayAllSurveyListPage);
router.get('/add-survey', user_1.requireAuth, survey_1.DisplayAddSurveyPage);
router.post('/add-survey', user_1.requireAuth, survey_1.ProcessAddSurveyPage);
router.get('/delete-survey/:id', user_1.requireAuth, survey_1.ProcessDeleteSurveyPage);
router.get('/question/:id', user_1.requireAuth, question_1.DisplayQuestionPage);
router.post('/question/:id', user_1.requireAuth, question_1.ProcessQuestionPage);
router.get('/add-question-mc/:id', user_1.requireAuth, question_1.DisplayAddMCQuestionPage);
router.post('/add-question-mc/:id', user_1.requireAuth, question_1.ProcessAddMCQuestionPage);
router.get('/add-question-tf/:id', user_1.requireAuth, question_1.DisplayAddTFQuestionPage);
router.post('/add-question-tf/:id', user_1.requireAuth, question_1.ProcessAddTFQuestionPage);
router.get('/add-question-sa/:id', user_1.requireAuth, question_1.DisplayAddSAQuestionPage);
router.post('/add-question-sa/:id', user_1.requireAuth, question_1.ProcessAddSAQuestionPage);
router.get('/update-question/:id', user_1.requireAuth, question_1.DisplayUpdateQuestionPage);
router.post('/update-question/:id', user_1.requireAuth, question_1.ProcessUpdateQuestionPage);
router.get('/delete-question/:id', user_1.requireAuth, question_1.ProcessDeleteQuestionPage);
router.get('/date', user_1.requireAuth, question_1.DisplayDatePage);
router.post('/date', user_1.requireAuth, question_1.ProcessDatePage);
router.get('/take-survey/:id', survey_1.DisplayTakeSurveyPage);
router.post('/take-survey/:id', survey_1.ProcessTakeSurveyPage);
module.exports = router;
//# sourceMappingURL=index.js.map