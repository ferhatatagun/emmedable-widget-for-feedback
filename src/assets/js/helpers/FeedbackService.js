import { FeedbackWidget } from "../FeedbackWidget";
import { apiUrl, token } from "../utils/settings";

export class FeedbackService {
  constructor(_fetchQuery, _fetchVariables, _fetchSpecs) {
    this.query = _fetchQuery;
    this.variables = _fetchVariables;
    this.specs = _fetchSpecs;

    this.fetcher = function () {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          // "x-hasura-allowed-roles": [
          //     "anonymous"
          // ],
          // "x-hasura-default-role": "anonymous"
        },
        body: JSON.stringify({
          query: this.query,
          variables: this.variables,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          // console.log('data returned:', data);

          const FeedbackWidgetInit = new FeedbackWidget({
            data,
            position: this.specs.position,
            situation: this.specs.situation,
            darkMode: this.specs.darkMode,
          });

          FeedbackWidgetInit.init(data);
        })
        .catch((err) => console.log(err));
    };
  }
}
