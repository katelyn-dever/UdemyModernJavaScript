// student score, total possible score
// generate letter grade and percentage
// i.e. 15/20 - You got a C (75%)

let gradeCalc = function (score, totalScore) {
	let percent = (score / totalScore) * 100
	let letterGrade = ''

	if (percent >= 90) {
		letterGrade = 'A'
	} else if (percent >= 80) {
		letterGrade = 'B'
	} else if (percent >= 70) {
		letterGrade = 'C'
	} else if (percent >= 60) {
		letterGrade = 'D'
	} else {
		letterGrade = 'F'
	}

	return `You got a ${letterGrade} (${percent}%)!`
}

let result = gradeCalc(18,20)
console.log(result)