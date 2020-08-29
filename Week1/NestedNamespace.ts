namespace Teacher1{
      export namespace Student{
      export class CollegeStudent{
        studentDetails(){
         let studentName:string ='logesh';
         let studentId:number = 201015;
         console.log(studentName)
         console.log(studentId)
        }
      }
    }
  }
  let all = new Teacher1.Student.CollegeStudent();
  all.studentDetails();

  