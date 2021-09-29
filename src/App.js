import React, { Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';
import Notification from './components/Notification';

import './App.scss';

class App extends Component {
  // static defaultProps = {
  //   initialValue: 0,
  // };

  // static propTypes = {};

  // состояние. публичное свойство state. свойство экземпляра, всегда объект. от свойств этого объекта зависит разметка
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const targetBtn = e.target.textContent.toLowerCase();
    // const targetBtn = e.target.textContent;
    // const targetBtn = e.currentTarget;
    // const targetBtn = e.target;

    // prevActualState - ссылка на актуальное состояние на момент обновления, вызова этой функции
    this.setState(prevState => {
      return { [targetBtn]: prevState[targetBtn] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = 0;

    total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let positivePercentage = 0;

    positivePercentage = Math.round((good * 100) / (good + neutral + bad)) || 0;
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="container">
        <h1 className="visually_hidden">Feedback</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              // поднятие состояния-от родителя вниз детей кидаются пропсы
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
// ---------------------------------------------------
// метод класса
// countPositiveFeedbackPercentage() {}-нет привязки контекста
// публичное свойство и стрелка
//   countPositiveFeedbackPercentage = () => {}

// публичное свойство класса- - передать коллбек как обработчик события в эл делать публичн.свой.класса в которую закидую стрелку

//super-это вызов контсруктора родителя(React.Component), до того как использовать this внутри конструктора ребенка(this.state = {};)

// компоненты одной сущности хранить в одной папке

// записать, не основываясь на предыдущем - объект
// this.setState({value: 123123123})
// записать основываясь на предыдущем - функция
//  this.setState(prevState => {
// return { value: prevState.value + 1 };
// });
// или
// this.setState(prevState => ({
// value: prevState.value + 1,
// }));

// массив объектов const colors =[{},{},{}]
//  <FeedbackOptions options={colors}/>
// в отдельном файле компонента что бы обратиться к options - this.props.options

// делегирование встроено в реакт по умолчанию
// onClick-это регистрация функции, при клики на кнопку. те addEventListener не вешается.

// onClick={this.setActiveIdx(index)}-на это место будет возвращаен вызов функции-результат- те вернет undefind
// onClick={() => this.setActiveIdx(index)}-вернут ссылку на функцию с индеком
