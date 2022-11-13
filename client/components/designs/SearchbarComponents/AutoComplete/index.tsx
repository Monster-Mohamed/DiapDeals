import React, { FC } from 'react';
import { AutoCompleteContainer } from '../AutoComplete/autocomplete.styles';
import AutocompleteItem from './AutocompleteItem';
import { AutocompleteItemsType } from './autocompleteItems.type';

const AutoComplete: FC<AutocompleteItemsType> = ({ items, searchText }) => {
  const all = items.map((i) => (
    <AutocompleteItem key={i.link} content={i.content} link={i.link} />
  ));

  return (
    <AutoCompleteContainer>
      {all.length > 0 ? (
        all
      ) : (
        <AutocompleteItem
          content={searchText}
          link={searchText?.toLowerCase()}
        />
      )}
    </AutoCompleteContainer>
  );
};

export default AutoComplete;
