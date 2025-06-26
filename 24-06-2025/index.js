	var student = {
			studentName:"John",
			studentAddress:"Hyd",
			studentMarks:85
			}

            student["studentName"]="Bhaskar"
            
for(let a in student){
    console.log(a+" : "+student[a]);
}