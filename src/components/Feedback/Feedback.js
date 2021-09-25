import React from 'react';
import '../../sass/utils/visually-hidden.scss';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

//  блок кнопок
class Feedback extends React.Component {
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
  total = () => {
    this.setState(prevActualState => {
      return { total: prevActualState.total + 1 };
    });
  };
  positivePercentage = () => {
    this.setState(prevActualState => {
      return { positivePercentage: prevActualState.positivePercentage + 1 };
    });
  };

  // подсчитывающие эти значения основываясь на данных в состоянии (вычисляемые данные)
  // общего количества собранных отзывов из всех категорий
  countTotalFeedback = e => {
    // console.log(e.target);

    // prevActualState - ссылка на актуальное состояние на момент обновления, вызова этой функции
    this.setState(prevActualState => {
      return {
        total:
          prevActualState.good + prevActualState.neutral + prevActualState.bad,
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
        <FeedbackOptions
          onGood={this.good}
          onNeutral={this.neutral}
          onBad={this.bad}
          onTotal={this.total}
          onCountTotalFeedback={this.countTotalFeedback}
          onPositivePercentage={this.positivePercentage}
          onCountPositiveFeedbackPercentage={
            this.countPositiveFeedbackPercentage
          }
        />

        <Statistics
          onGood={this.state.good}
          onNeutral={this.state.neutral}
          onBad={this.state.bad}
          onTotal={this.state.total}
          onCountTotalFeedback={this.state.total}
          onPositivePercentage={this.state.positivePercentage}
          onCountPositiveFeedbackPercentage={
            this.countPositiveFeedbackPercentage
          }
        />

        {/* <div>
          <h1 className="visually_hidden">Feedback</h1>
          <h2>Please leave feedback</h2>
          <button className="btn" onClick={this.state.good}>
            Good
          </button>
          <button className="btn" onClick={this.state.neutral}>
            Neutral
          </button>
          <button className="btn" onClick={this.state.bad}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>
            Total: {this.countTotalFeedback}
            {this.state.total}
          </p>
          <p>
            Positive feedback: {this.countPositiveFeedbackPercentage}
            {this.state.positivePercentage}%
          </p>

          <p>No feedback given</p>
        </div> */}
      </div>
    );
  }
}

export default Feedback;
// ---------------------------------------------------
// метод класса
// countPositiveFeedbackPercentage() {}-нет привязки контекста
// публичное свойство и стрелка
//   countPositiveFeedbackPercentage = () => {}

//super-это вызов контсруктора родителя(React.Component), до того как использовать this внутри конструктора ребенка(this.state = {};)
