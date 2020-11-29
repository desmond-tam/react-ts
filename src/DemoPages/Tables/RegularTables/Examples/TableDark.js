import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';


function get_customer_loan(loans) {
  return {
      Loans:loans.map((l,index) => {
          return Object.assign(l,{
              Selected:false,
              Index:index,
             
          });
      }) || [],
      TotalCarryOver:function () {
          return loans.reduce((acc, current) => acc + current.CarryOver, 0);
      },
      SelectedCarryOverAmount : function () {
          var total = 0;
         this.Loans.filter(element => {
             return (element.Selected);
         }).forEach(element => {
              total += element.CarryOver;
         });
         return total;
      },
      ApplyNewLoan:function () {
          return loans.length <= 3;
      }
  }
}



const get_loans = () => {
  return [{
      AccountNo: 522399332,
      AccountName:'Home Loan',
      Balance:1368.00,
      CarryOver:1828.00,
      EarlyFee:33.00,
      Interest:295.00,
  },{
    AccountNo:651921865,
    AccountName:'Car Loan',
    Balance:1839.00,
    Interest:238.00,
    EarlyFee:421.00,
    CarryOver:1191.00
  },
  {
    AccountNo:90895177,
    AccountName:'Personal Loan',
    Balance:1856.00,
    Interest:295.00,
    EarlyFee:423.00,
    CarryOver:1023.00
  }];
}

function formatNumber(number) {
  return number.toLocaleString(navigator.language,{ minimumFractionDigits: 2 });
}

export const TableDark = () => {
    const [customerLoans,updateCustomerLoans] = useState(get_customer_loan([]));

    useEffect(function effectFunction() {
        async function fetchLoans() {
            const data = await get_customer_loan(get_loans());
            //const json = await data();
            updateCustomerLoans(data);
        }
        fetchLoans();
    }, []);

    return (
      <Table hover striped dark className="mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Account Name</th>
            <th>Balance</th>
            <th>Carry Over</th>
          </tr>
        </thead>
        <tbody>
          {
            customerLoans.Loans.map((p,i) => (
            <tr key={i}>
                <td>{p.AccountNo}</td>
                <td>{p.AccountName}</td>
                <td>{formatNumber(p.Balance)}</td>
                <td>{formatNumber(p.CarryOver)}</td>
            </tr>
            ))
          }
        </tbody>
      </Table>
    );
  
}
