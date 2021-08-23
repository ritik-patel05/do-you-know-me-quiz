const readLineSync = require('readline-sync');
const chalk = require('chalk');

var points = 0;

function playQuestion(questionObject) {
	// Display question acc to Type.
	var question = questionObject.question;
	question += '\n';

	// Mapping for option to array indexing.
	var options = ['a', 'b', 'c', 'd'];

	if (questionObject.questionType === 'Options') {
		question += 'Choose the correct option. \n';
		for (var i = 0; i < questionObject.options.length; ++i) {
			question +=
				chalk.white(options[i]) + '. ' + questionObject.options[i];
			question += '\n';
		}
	}

	var givenAnswer = readLineSync.question(chalk.blueBright(question));
	givenAnswer = givenAnswer.toLowerCase();

	console.log('\n');

	// Give results
	if (
		questionObject.questionType === 'Options' &&
		options[questionObject.answer] === givenAnswer
	) {
		console.log(chalk.green("Great, That's Correct!"));
		points += 1;
	} else if (
		questionObject.questionType === 'Subjective' &&
		givenAnswer === questionObject.answer.toLowerCase()
	) {
		console.log(chalk.green("Great, That's Correct!"));
		points += 1;
	} else {
		console.log(chalk.red('Wrong!!!'));
	}
	console.log(chalk.yellowBright('Your score: ') + chalk.cyan(points));
	console.log('======== \n');
}

var questionsToAsk = [
	{
		question: 'State in which I was born?',
		questionType: 'Subjective',
		answer: 'Gujarat',
	},
	{
		question: 'School in which I studied till 10th Standard?',
		questionType: 'Options',
		options: ['SDA', 'APS', 'DPS'],
		answer: 0,
	},
	{
		question: 'Do I love playing games on laptop?',
		questionType: 'Options',
		options: ['Yes', 'No'],
		answer: 0,
	},
	{
		question: 'Sport that I love to play the most?',
		questionType: 'Options',
		options: ['Cricket', 'Football', 'Volleyball'],
		answer: 1,
	},
];

var userScores = [
	{
		userName: 'Parth',
		score: 3,
	},
	{
		userName: 'Puru',
		score: 2,
	},
];

// Welcome
var userName = readLineSync.question("Hi! What's your name?\n");

console.log(
	'\nWelcome,' +
		userName +
		'!!! To Quiz for How Well You Know Your Friend, RITIK \n'
);

// Play the quiz
for (var i = 0; i < questionsToAsk.length; ++i) {
	playQuestion(questionsToAsk[i]);
}

// Their score
console.log(
	'Thank you!! Just know I always ' +
		chalk.redBright('LOVE YOU') +
		' xD.\n' +
		chalk.yellow('SCORE') +
		': ' +
		chalk.cyanBright(points) +
		'\n'
);

// Let them know of scores of my friends.
console.log(
	'Best scores of my friends are here, ping me to add yours with a screenshot!'
);
for (var i = 0; i < userScores.length; ++i) {
	console.log(
		chalk.yellow(userScores[i].userName) +
			': ' +
			chalk.cyanBright(userScores[i].score)
	);
}
