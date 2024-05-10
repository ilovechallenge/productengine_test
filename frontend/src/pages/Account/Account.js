import React from 'react';
import AppHeader from '../../components/Header/Header';
import { useState } from 'react';
import { useGetUsersQuery } from '../../services/api';

import "./account.css";

function Account() {
  const [accountId, setAccountId] = useState('');
  const [accountDetails, setAccountDetails] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const { data: userData, isLoading } = useGetUsersQuery();
  console.log(userData)

  const handleInputChange = (event) => {
    setAccountId(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Searching for accountId:', accountId);
    let mockAccountDetails = {
      accountId: accountId,
      ownerFirstName: 'John',
      ownerLastName: 'Doe',
      ownerAddress: '123 Main St, City, Country',
      dateCreated: '2022-04-20',
      isPaidAccount: true,
    };
    mockAccountDetails = userData;
    setAccountDetails(mockAccountDetails);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="account-page">
      <AppHeader />
      <h1>Account Page</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Account ID"
          value={accountId}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      {accountDetails && (
        <div className="account-details">
          <h2>Account Details</h2>
          <p>Account ID: {accountDetails.accountId}</p>
          <p>Owner First Name: {accountDetails.ownerFirstName}</p>
          <p>Owner Last Name: {accountDetails.ownerLastName}</p>
          <p>Owner Address: {accountDetails.ownerAddress}</p>
          <p>Date Created: {accountDetails.dateCreated}</p>
          <p>Paid Account: {accountDetails.isPaidAccount ? 'Yes' : 'No'}</p>
          {editMode ? (
            <button onClick={handleEditClick}>Cancel Edit</button>
          ) : (
            <button onClick={handleEditClick}>Edit Account</button>
          )}
        </div>
      )}
  </div>
  );
}

export default Account;
