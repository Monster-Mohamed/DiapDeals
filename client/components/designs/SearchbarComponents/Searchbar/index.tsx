import React, { FocusEvent, KeyboardEvent, useState } from 'react';
import {
  SearchbarContainer,
  SearchbarInput,
  SearchButton,
} from './searchbar.styles';
import SearchIcon from '@mui/icons-material/Search';
import AutoComplete from '../AutoComplete';
import { useRouter } from 'next/router';
import { AutocompleteType } from '../AutoComplete/autocomplete.type';

export type Focus = FocusEvent<HTMLInputElement>;

const DEMOAPI: AutocompleteType[] = [
  {
    content: 'Banana',
    link: 'banana',
  },
  {
    content: 'Apple',
    link: 'apple',
  },
  {
    content: 'Meat',
    link: 'meat',
  },
  {
    content: 'Chicken',
    link: 'chicken',
  },
  {
    content: 'Sea Food',
    link: 'sea-food',
  },
];

const Searchbar = () => {
  const [openAutoComplete, setOpenAutoComplete] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState<AutocompleteType[]>([]);
  const router = useRouter();

  const searchApiHandler = () => {
    const searchedItems = DEMOAPI.filter((i) =>
      i.content?.toString().toLowerCase().includes(searchText)
    );
    setItems(searchedItems);
  };

  const autocompleteHandler = (v: Focus) => {
    setSearchText(v.target.value);
    if (v.target.value.length > 0) {
      searchApiHandler();
      setOpenAutoComplete(true);
    } else {
      setOpenAutoComplete(false);
    }
  };

  const remove = () => {
    setTimeout(() => {
      setOpenAutoComplete(false);
    }, 100);
  };

  const searchBtnHandler = () => {
    router.push(`deals/${searchText}`);
  };

  const searchWhenHitEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      router.push(`deals/${searchText}`);
    }
  };

  return (
    <SearchbarContainer onSubmit={(e) => e.preventDefault()}>
      <SearchbarInput
        onChange={autocompleteHandler}
        onFocus={autocompleteHandler}
        onBlur={remove}
        onKeyDown={searchWhenHitEnter}
        placeholder="Search Online Deals, Local Deals, Olx Section"
      />
      <SearchButton onClick={searchBtnHandler}>
        <SearchIcon />
      </SearchButton>
      {openAutoComplete && (
        <AutoComplete searchText={searchText} items={items} />
      )}
    </SearchbarContainer>
  );
};

export default Searchbar;
