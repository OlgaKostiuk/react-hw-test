const tests = {
    ru: [
        {
            question: "Вызов какого метода приводит к изменению состояния компонента ?",
            code: null,
            choiceSet: [
                "updateState()",
                "changeState",
                "setStateless()",
                "setState()",
                "putState()"
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "setState()"
        },
        {
            question: "Выберите правильный вариант определения inline-стилей в JSX.",
            code: null,
            choiceSet: [
                "<div propsStyle={{display: \"none\"}} />",
                "<div styleNames=\"display: none;\" />",
                "<div style={{display: \"none\"}} />",
                "<div style={display: \"none\"} />",
                "<div style={`display: none;`} />"
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "<div style={{display: \"none\"}} />"
        },
        {
            question: "Вызываются ли у Stateless Functional Components в React.js методы жизненного цикла ?",
            code: null,
            choiceSet: [
                "Да",
                "Нет"
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "Да"
        },
        {
            question: "Выберите правильный вариант задания класса в JSX.",
            code: null,
            choiceSet: [
                "<div propsClass=\"display-none\" />",
                "<div className=\"display-none\" />",
                "<div classes={['display-none']} />",
                "<div class={'display-none'} />",
                "<div classNames={`display-none`} />"
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "<div className=\"display-none\" />"
        },
        {
            question: "Возможно ли получить доступ к значению элемента дочернего компонента через ref этого элемента ?",
            code: null,
            choiceSet: [
                "Да, если передать в props значение ref для дочернего компонента и добраться до элемента путем цепочки ref-ов",
                "Нет, не возможно получить доступ к элементам дочернего компонента, так как это противоречит философии React.js",
                "Да, можно получить доступ с помощью ключевого слова this"
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "Да, если передать в props значение ref для дочернего компонента и добраться до элемента путем цепочки ref-ов"
        },
        {
            question: "Приемлемо ли использование setState() метода в componentDidMount() ?",
            code: null,
            choiceSet: [
                "Да",
                "Нет"
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "Нет"
        },
        {
            question: "В результате присвоения какого key элементу будет снижен performance ?",
            code: null,
            choiceSet: [
                "index в результате вызова метода map()",
                "Элемент не имеет key",
                "Math.random()",
                "Уникальный key, например, id записи из БД"
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "Math.random()"
        },
        {
            question: "С каким DOM взаимодействует React.js ?",
            code: null,
            choiceSet: [
                "Shadow DOM",
                "Native DOM",
                "Virtual DOM"
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "Virtual DOM"
        },
        {
            question: "Что будет отображено на странице в результате выполнения преобразования данного JSX ?",
            code: `<div>{true && "<span>foo</span>" || null}</div>`,
            choiceSet: [
                "undefined",
                "<span>foo</span>",
                "foo",
                "true",
                "null"
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "<span>foo</span>"
        },
        {
            question: "Что будет отображено на странице ?",
            code: `class Application extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

React.render(
  <Application><div>foo</div></Application>, 
  document.getElementById('app')
)`,
            choiceSet: [
                "undefined",
                "error",
                "foo",
                "null",
                "\"<div>foo</div>\""
            ],
            hint: "<a href='https://reactjs.org/'>Официальный сайт React</a>",
            correctAnswer: "foo"
        }
    ],
    en: [
        {
            question: "Which method call causes a component to change state?",
            code: null,
            choiceSet: [
                "updateState()",
                "changeState",
                "setStateless()",
                "setState()",
                "putState()"
            ],
            hint: "<a href='https://reactjs.org/'>React official website</a>",
            correctAnswer: "setState()"
        },
        {
            question: "Choose the correct definition of inline-styles in JSX.",
            code: null,
            choiceSet: [
                "<div propsStyle={{display: \"none\"}} />",
                "<div styleNames=\"display: none;\" />",
                "<div style={{display: \"none\"}} />",
                "<div style={display: \"none\"} />",
                "<div style={`display: none;`} />"
            ],
            hint: "<a href='https://reactjs.org/'>React official website</a>",
            correctAnswer: "<div style={{display: \"none\"}} />"
        },
        {
            question: "Does Stateless Functional Components in React.js invoke life cycle methods?",
            code: null,
            choiceSet: [
                "Yes",
                "No"
            ],
            hint: "<a href='https://reactjs.org/'>React official website</a>",
            correctAnswer: "Yes"
        },
        {
            question: "Choose the correct class assignment option in JSX.",
            code: null,
            choiceSet: [
                "<div propsClass=\"display-none\" />",
                "<div className=\"display-none\" />",
                "<div classes={['display-none']} />",
                "<div class={'display-none'} />",
                "<div classNames={`display-none`} />"
            ],
            hint: "<a href='https://reactjs.org/'>React official website</a>",
            correctAnswer: "<div className=\"display-none\" />"
        },
        {
            question: "Is it possible to access the value of the element of the child component through the ref of this element?",
            code: null,
            choiceSet: [
                "Yes, if you pass the ref value for the child component to props and get to the element through a chain of refs",
                "No, it is not possible to access the elements of the child component, since this is contrary to the philosophy of React.js",
                "Yes, you can access using the this keyword"
            ],
            hint: "<a href='https://reactjs.org/'>React official website</a>",
            correctAnswer: "Yes, if you pass the ref value for the child component to props and get to the element through a chain of refs"
        },
        {
            question: "Is using the setState () method acceptable in componentDidMount ()?",
            code: null,
            choiceSet: [
                "Yes",
                "No"
            ],
            hint: "<a href='https://reactjs.org/'>React official website</a>",
            correctAnswer: "No"
        },
        {
            question: "As a result of the assignment of which key element will be reduced performance?",
            code: null,
            choiceSet: [
                "index as a result of calling the map () method",
                "Item does not have a key",
                "Math.random()",
                "Unique key, for example, record id from database"
            ],
            hint: "<a href='https://reactjs.org/'>React official website</a>",
            correctAnswer: "Math.random()"
        },
        {
            question: "What DOM does React.js interact with?",
            code: null,
            choiceSet: [
                "Shadow DOM",
                "Native DOM",
                "Virtual DOM"
            ],
            hint: "<a href='https://reactjs.org/'>React official website</a>",
            correctAnswer: "Virtual DOM"
        },
        {
            question: "What will be displayed on the page as a result of the conversion of this JSX?",
            code: `<div>{true && "<span>foo</span>" || null}</div>`,
            choiceSet: [
                "undefined",
                "<span>foo</span>",
                "foo",
                "true",
                "null"
            ],
            hint: "<a href='https://reactjs.org/'>React official website</a>",
            correctAnswer: "<span>foo</span>"
        },
        {
            question: "What will be displayed on the page?",
            code: `class Application extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

React.render(
  <Application><div>foo</div></Application>, 
  document.getElementById('app')
)`,
            choiceSet: [
                "undefined",
                "error",
                "foo",
                "null",
                "\"<div>foo</div>\""
            ],
            hint: "",
            correctAnswer: "foo"
        }
    ]
};

export const testsJson = JSON.stringify(tests);