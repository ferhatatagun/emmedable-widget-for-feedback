// import { FeedbackWidget } from './assets/js/FeedbackWidget';
import { FeedbackService } from "./assets/js/helpers/FeedbackService";
import { ForId_Feedback_polls_Query } from "./assets/js/utils/queries";

const calledScript = document.getElementById("feedbackWidget");
const calledWidgetSpecs = {
  feedbackId: calledScript.attributes["feedback-id"].value,
  position: calledScript.attributes["display-position"].value,
  situation: calledScript.attributes["location-situation"].value,
  darkMode: calledScript.attributes["dark-mode"].value,
};

const widgetService = new FeedbackService(
  ForId_Feedback_polls_Query,
  { id: calledWidgetSpecs.feedbackId },
  calledWidgetSpecs
);

widgetService.fetcher(
  ForId_Feedback_polls_Query,
  { id: calledWidgetSpecs.feedbackId },
  calledWidgetSpecs
);
