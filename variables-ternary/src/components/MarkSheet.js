import React from 'react'

function MarkSheet(props) {

    let engMarks = Number(props.engMarks);
    let hinMarks = Number(props.hinMarks);
    let telMarks = Number(props.telMarks);
    let matMarks = Number(props.matMarks);
    let sciMarks = Number(props.sciMarks);
    let socMarks = Number(props.socMarks);
    
    let total = engMarks+hinMarks+telMarks+matMarks+sciMarks+socMarks;

    let percentage =total/600*100;
     
  return (
    <div>
      <table>
        <caption>{props.studentName} MARK SHEET</caption>
        <thead>
            <tr>
                <th>SUBJECT</th>
                <th>MAX MARKS</th>
                <th>MARKS OBTAINED</th>
                <th>RESULTS</th>
                <th>REMARKS</th>
            </tr>
           
        </thead>
        <tbody>
            <tr>
                <td>ENGLISH</td>
                <td>100</td>
                <td>{engMarks}</td>
                <td>{engMarks >= 35 ? 'PASS' : 'fail'}</td>
                <td>{engMarks >= 35 ? 'GOOD' : 'bad'}</td>
            </tr>
            <tr>
                <td>HINDI</td>
                <td>100</td>
                <td>{hinMarks}</td>
                <td>{hinMarks >= 35 ? 'PASS' : 'fail'}</td>
                <td>{hinMarks >= 35 ? 'GOOD' : 'bad'}</td>
            </tr>
            <tr>
                <td>TELUGU</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>{telMarks >= 35 ? 'PASS' : 'fail'}</td>
                <td>{telMarks >= 35 ? 'GOOD' : 'bad'}</td>
            </tr>
            <tr>
                <td>MATHS</td>
                <td>100</td>
                <td>{matMarks}</td>
                <td>{matMarks >= 35 ? 'PASS' : 'fail'}</td>
                <td>{matMarks >= 35 ? 'GOOD' : 'bad'}</td>
            </tr>
            <tr>
                <td>SCIENCE</td>
                <td>100</td>
                <td>{sciMarks}</td>
                <td>{sciMarks >= 35 ? 'PASS' : 'fail'}</td>
                <td>{sciMarks >= 35 ? 'GOOD' : 'bad'}</td>
            </tr>
            <tr>
                <td>SOCIAL</td>
                <td>100</td>
                <td>{socMarks}</td>
                <td>{socMarks >= 35 ? 'PASS' : 'fail'}</td>
                <td>{socMarks >= 35 ? 'GOOD' : 'bad'}</td>
            </tr>
        </tbody>
        <tfoot>
            
            <tr>
                <th>TOTAL</th>
                <th>600</th>
                <th>{total}({percentage.toFixed(2)}%)</th>
                <th>NOT COVERED</th>
                <th>NOT COVERED</th>
            </tr>
    
        </tfoot>
      </table>
    </div>
  )
}

export default MarkSheet
