import { Input } from 'baseui/input';
import React, {useEffect, useState} from 'react';
import { StatefulMenu } from "baseui/menu";
import emojis from "./emojiList.json";

function FancyInput({ placeholder }) {
  const [inputValue, setInputValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [emojiData, setEmojiData] = useState([]);
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    //Emoji list collected from https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb/
    setEmojiData(emojis.emojis);
    setFilteredEmojis(emojis.emojis);
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    
    const words = value.split(" ");
    const lastWord = words[words.length - 1];

    // Check if the last word of input contains a colon followed by 2 or more characters
    const regex = /:.{2,}/;
    if (regex.test(lastWord)) {
      showEmojiPicker();
      const filtered = emojiData.filter(
          (emoji) =>
              emoji.shortname.toLowerCase().includes(lastWord.toLowerCase())
      );
      setFilteredEmojis(filtered);
    } else {
      hideEmojiPicker();
    }
  };

  const handleEmojiClick = (emoji) => {
    setInputValue((prevValue) => {
      const index = prevValue.lastIndexOf(':');
      return prevValue.slice(0, index !== -1 ? index : prevValue.length) + emoji.emoji + ' ';
    });
    hideEmojiPicker();
  };

  const showEmojiPicker = () => {
    setShowPicker(true);
  };

  const hideEmojiPicker = () => {
    setShowPicker(false);
  };

  return (
      <div>
        <Input
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
        />
        {showPicker && filteredEmojis.length > 0 && (
            <StatefulMenu
                items={filteredEmojis.map((emoji) => ({
                  label: (
                      <span onClick={() => handleEmojiClick(emoji)}>
                {emoji.emoji} - {emoji.shortname}
              </span>
                  ),
                }))}
            />
        )}
      </div>
  );
}

export {FancyInput};

