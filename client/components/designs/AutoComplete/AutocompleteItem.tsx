import { FC } from 'react';
import {
  AutocompleteIcon,
  AutocompleteItemContainer,
} from './autocomplete.styles';
import SearchIcon from '@mui/icons-material/Search';
import { AutocompleteType } from './autocomplete.type';
import Link from 'next/link';

const AutocompleteItem: FC<AutocompleteType> = ({ content, link }) => {
  return (
    <Link href={link}>
      <AutocompleteItemContainer>
        <AutocompleteIcon disableRipple>
          <SearchIcon fontSize="small" />
        </AutocompleteIcon>
        {content}
      </AutocompleteItemContainer>
    </Link>
  );
};

export default AutocompleteItem;
