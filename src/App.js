import React, { Component } from 'react';

import Section from 'components/Section/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';
import Notification from 'components/Notification/Notification';

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

  good = () => {
    // prevActualState - ссылка на актуальное состояние на момент обновления, вызова этой функции
    this.setState(prevActualState => ({
      good: prevActualState.good + 1,
    }));
  };
  neutral = () => {
    this.setState(prevActualState => ({
      neutral: prevActualState.neutral + 1,
    }));
  };
  bad = () => {
    this.setState(prevActualState => {
      return { bad: prevActualState.bad + 1 };
    });
  };

  options = () => {
    const keys = Object.keys(this.state);
    const key = keys.map(key => key);
    // const key = keys.map(key => `${key} : ${this.state[key]}`);
    return key;
  };

  onLeaveFeedback = () => {
    // const values = this.setState(prevActualState => {
    //   const value = Object.values(this.state);
    //   return { value: prevActualState.value + 1 };
    // });
    // console.log(values);
    // return values;
    // this.setState(prevActualState => {
    //   return { this.options: prevActualState.this.options + 1 };
    // });
    // return this.options();
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

    // if (positivePercentage === 0) {
    //   return positivePercentage;
    // } else {
    //  positivePercentage = Math.round((good * 100) / (good + neutral + bad));
    // return positivePercentage;
    // }

    positivePercentage = Math.round((good * 100) / (good + neutral + bad));
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1 className="visually_hidden">Feedback</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // onGood={this.good}
            // onNeutral={this.neutral}
            // onBad={this.bad}
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            // поднятие состояния-от родителя вниз детей кидаются пропсы
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />

          {this.countTotalFeedback === 0 && (
            <Notification message="No feedback given" />
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
//  this.setState(prevActualState => {
// return { value: prevActualState.value + 1 };
// });
// или
// this.setState(prevActualState => ({
// value: prevActualState.value + 1,
// }));

// массив объектов const colors =[{},{},{}]
//  <FeedbackOptions options={colors}/>
// в отдельном файле компонента что бы обратиться к options - this.props.options

// делегирование встроено в реакт по умолчанию
// onClick-это регистрация функции, при клики на кнопку. те addEventListener не вешается.

// onClick={this.setActiveIdx(index)}-на это место будет возвращаен вызов функции-результат- те вернет undefind
// onClick={() => this.setActiveIdx(index)}-вернут ссылку на функцию с индеком

// -----------------
// в options ты передаешь массив значений своих будущих кнопок, в onLeaveFeedback ты передаешь колбек для кнопок. массив значение будущих кнопок-Передаєш туди state i map-аєш його ключі, щоб кнопки були good, neutral і т.д.
