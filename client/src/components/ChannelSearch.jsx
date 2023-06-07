import React from 'react'
import {useState,useEffect} from 'react';
import {useChatContext} from 'stream-chat-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const ChannelSearch = () => {
  const [query,setQuery] = useState('');
  const [loading,setLoading] = useState(false);

  const getChannel = async(prompt) => {
    try{
      
    }
    catch(error){
      setQuery('')
    }
  }

  const onSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
    getChannel(event.target.value);
  }

  return (
    <div className='channel-search__container'>
      <div className='channel-search__input__wrapper'>
        <div className='channel-search__input__icon'>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </div>
        <input 
        type="text"
        className="channel-search__input-text"
        placeholder="Search"
        value = {query}
        onChange={onSearch}
        />
      </div>
    </div>
  )
}

export default ChannelSearch