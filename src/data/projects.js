let projects = [
  {
    name: "Portfolio",
    description: `This very website you're now watching, created with React and Styled-Components and hosted on github pages with ability of choosing dark or light theme `,
    githubLink: "https://github.com/hmdrzaa11",
    image: "portfolio.png",
    stack: ["React", "Styled-Components"],
  },
  {
    name: "Maze",
    description: `This is the "Maze" game which written in Vanilla js and i kept it very simple and its only in dark version`,
    githubLink: "https://github.com/hmdrzaa11/maze",
    image: "maze.png",
    stack: ["Javascript", "Matter.js"],
  },
  {
    name: "Movie Fight",
    description: `This is the "Movie Fight" and written in Vanilla js and fetches data from an API  and compares 2 movies side by side based on the IMDB and awards that each won etc.`,
    githubLink: "https://github.com/hmdrzaa11/movie-fight",
    image: "movieFight.png",
    stack: ["Javascript"],
  },
  {
    name: "Natours",
    description: `
    This is the "Natours" project written in Javascript and its my first fullstack project and it has a full feature API with json-web-token
    authentication and sending Email and reset password and forgot password functionality it also has the Stripe in it 
    `,
    githubLink: "https://github.com/hmdrzaa11/Natours-React",
    image: "natours.png",
    stack: ["Node", "Express", "MongoDB", "Mongoose", "React", "Redux", "Jwt"],
  },
  {
    name: "Chat",
    description: `
    This is the "Chat" project written in Javascript and express and socket.io and react and its going to ask you a username and then 
    redirects you to the "Namespaces" and provided from the server and each of them contains some rooms and then you click on a room and go to it
    and it has the room total dynamically change you can go to other rooms and come back and also keep a history of each room for new users that 
    join.
    `,
    githubLink: "https://github.com/hmdrzaa11/chat-app-react",
    image: "chat.png",
    stack: [
      "Node",
      "Express",
      "Socket.io",
      "Websocket",
      "React",
      "Redux",
      "Styled-Components",
    ],
  },
  {
    name: "Performance Load",
    description: `
    This is the "Performance Load" project written in Javascript and socket.io and its Real time app and uses a client socket on the server to 
    monitor the cpu and memory and show them on a canvas in the front-end as realtime and its scalable app and uses the redis server do that
    and switch to long polling ajax request to be able to work with it you need to go to "client" , "nodeClient","server" and "npm install" 
    and you need to have "redis" and "mongodb" running in background and its not responsive.
    `,
    githubLink: "https://github.com/hmdrzaa11/perfload",
    image: "perfload.png",
    stack: [
      "Node",
      "Express",
      "Socket.io",
      "Websocket",
      "React",
      "Mongoose",
      "MongoDB",
      "Redis",
    ],
  },
];
export default projects;
