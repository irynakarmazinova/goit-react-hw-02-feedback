// import React from 'react';
import { Component } from 'react';

import Section from 'components/Section/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';
import Notification from 'components/Notification/Notification';

import './sass/utils/visually-hidden.scss';

// class Feedback extends React.Component {
class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  // static propTypes = {};

  // состояние. публичное свойство state. свойство экземпляра, всегда объект. от свойств этого объекта зависит разметка
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    positivePercentage: this.props.initialValue,
    // options:this.props.initialValue,
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

  // total = {}
  // positivePercentage = {}
  // options,
  // onLeaveFeedback,

  // подсчитывающие эти значения основываясь на данных в состоянии (вычисляемые данные)
  // общего количества собранных отзывов из всех категорий
  countTotalFeedback = e => {
    // console.log(e.target);

    this.setState(prevActualState => {
      return {
        // пушить в массив и рендерить от туда значение?
        total: (prevActualState.total =
          prevActualState.good + prevActualState.neutral + prevActualState.bad),
        // total: (this.total = this.good + this.neutral + this.bad),
      };
    });
  };

  // процент положительных отзывов
  countPositiveFeedbackPercentage = e => {
    console.log(e.target);
  };

  render() {
    return (
      <div>
        <h1 className="visually_hidden">Feedback</h1>

        <Section>
          <FeedbackOptions
            onGood={this.good}
            onNeutral={this.neutral}
            onBad={this.bad}
            // options={},
            // onLeaveFeedback={},
            // onTotal={this.total}
            // onCountTotalFeedback={this.countTotalFeedback}
            // onPositivePercentage={this.positivePercentage}
            // onCountPositiveFeedbackPercentage={
            //   this.countPositiveFeedbackPercentage
            // }
          />
        </Section>

        <Section>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            // hide={this.hide}
            total={this.state.total}
            // onCountTotalFeedback={this.countTotalFeedback}
            positivePercentage={this.state.positivePercentage}
            // onCountPositiveFeedbackPercentage={
            //   this.countPositiveFeedbackPercentage
            // }
          />

          {/* hide в другом файле, как к нему обратиться, не через this */}
          <Notification hide={this.hide} />
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

//super-это вызов контсруктора родителя(React.Component), до того как использовать this внутри конструктора ребенка(this.state = {};)

// компоненты одной сущности хранить в одной папке
