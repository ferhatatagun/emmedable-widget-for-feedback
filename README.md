# Feedback Widget

This project allows you to receive feedback using the Feedback Widget.

Bu proje, Geri Bildirim Widget'ı kullanarak geri bildirim almanıza olanak sağlar.

## Installation

Download the project files and publish them on a web server. Then, you can view the Feedback Widget by opening the `index.html` file in a browser.

Proje dosyalarını indirin ve bir web sunucusunda yayınlayın. Ardından, Tarayıcıda `index.html` dosyasını açarak Feedback Widget'ı görüntüleyebilirsiniz.

## Using the Widget Service

You can use the widget service of the Feedback Widget to retrieve feedback. In the `app.js` file, the following code snippet demonstrates instantiating the widget service:

Geri Bildirim Widget'ı'nın widget servisini kullanarak geri bildirimleri alabilirsiniz. `app.js` dosyasında aşağıdaki kod parçası, widget servisini örneklendirmeyi göstermektedir:

```javascript
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
```

This code snippet creates an instance of the `FeedbackService` class and then uses the `fetcher` method to retrieve feedback.

Bu kod parçası, `FeedbackService` sınıfından bir örnek oluşturur ve ardından `fetcher` yöntemini kullanarak geri bildirimleri getirir.

### Parameters

In the code snippet where the `FeedbackService` is instantiated, the following parameters are used:

Bu kod parçası `FeedbackService` örneklendiği yerde aşağıdaki parametreleri kullanır:

- `ForId_Feedback_polls_Query`: Represents the GraphQL query to be used for fetching feedback. It should be replaced with a GraphQL query that suits your project requirements.
- `ForId_Feedback_polls_Query`: Geri bildirimleri almak için kullanılacak GraphQL sorgusunu temsil eder. Projelerinizin gereksinimlerine uygun bir GraphQL sorgusuyla değiştirilmelidir.

- `{ id: calledWidgetSpecs.feedbackId }`: Represents a specific feedback ID from which the feedback will be retrieved. It should be replaced with the value of the `calledWidgetSpecs.feedbackId` variable.
- `{ id: calledWidgetSpecs.feedbackId }`: Geri bildirimlerin alınacağı belirli bir geri bildirim ID'sini temsil eder. `calledWidgetSpecs.feedbackId` değişkeninin değeriyle değiştirilmelidir.

- `calledWidgetSpecs`: Represents an object containing widget specifications. It should be replaced with the widget specifications according to your needs.
- `calledWidgetSpecs`: Widget özelliklerini içeren bir nesneyi temsil eder. İhtiyaçlarınıza göre widget özelliklerini içeren bir nesneyle değiştirilmelidir.

Yukarıdaki kod parçasını projenizin gereksinimlerine göre düzenleyerek widget servisini kullanabilir ve parametreleri ile geri bildirim alma işlemlerini projenize göre ayarlayabilirsiniz.

###### Running the Command will make the Feedback Widget work on a local server, and users will be able to leave their feedback.

###### Komut çalıştırıldığında, Feedback Widget yerel sunucuda çalışacak ve kullanıcılar geri bildirimlerini bırakabilecektir.

## Contributing

If you would like to contribute to the project, please submit a "Pull Request" to the GitHub repository. We appreciate your contributions.

Projeye katkıda bulunmak isterseniz, lütfen GitHub deposuna bir "Pull Request" gönderin. Katkılarınızı değerlendiriyoruz.

## License

This project is licensed under the MIT License. For more information, please see the `LICENSE` file.

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasını inceleyebilirsiniz.
