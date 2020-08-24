namespace Teacher1{
      export namespace Student{
      export class CollegeStudent{
        StudentDetails(){
         let StudentName:string ='logesh';
         let StudentId:number = 201015;
         console.log(StudentName)
         console.log(StudentId)
        }
      }
    }
  }
  let all = new Teacher1.Student.CollegeStudent();
  all.StudentDetails();