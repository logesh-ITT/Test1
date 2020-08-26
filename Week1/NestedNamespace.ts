namespace Teacher1{
      export namespace Student{
      export class CollegeStudent{
        StudentDetails(){
         let Student_name:string ='logesh';
         let Student_id:number = 201015;
         console.log(Student_name)
         console.log(Student_id)
        }
      }
    }
  }
  let all = new Teacher1.Student.CollegeStudent();
  all.StudentDetails();

  