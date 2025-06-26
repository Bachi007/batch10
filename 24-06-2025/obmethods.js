	var student = {
			studentFirstName:"John",
            studentLastName:"J",
			studentAddress:"Hyd",
			studentMarks:85,
            studentFullName:function(location,city){
                return this.studentFirstName+this.studentLastName+` from ${location} in ${city}`;
            }
			}


            var student2={
                studentFirstName:"Jack",
                studentLastName:" K"
            }
            fullname=student.studentFullName.bind(student2,"gachibowli","Hyd")
            console.log(fullname());       