import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { LuSmile, LuX } from 'react-icons/lu';

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-6">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 bg-white dark:bg-[#1f1f1f] shadow-sm transition"
      >
        <div className="w-11 h-11 flex items-center justify-center text-2xl bg-purple-100 text-purple-600 rounded-full shadow-inner">
          {icon ? <span className="text-xl">{icon}</span> : <LuSmile />}
        </div>
        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
          {icon ? 'Change Emoji' : 'Pick Emoji'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-3 right-0 animate-fadeIn">
          <div className="relative w-[320px] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-emoji bg-white dark:bg-[#1f1f1f] overflow-hidden">
            <button
              className="absolute top-2 right-2 z-10 w-6 h-6 bg-white dark:bg-[#2b2b2b] border border-gray-300 dark:border-gray-600 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <LuX size={14} />
            </button>

            <EmojiPicker
              onEmojiClick={(emoji) => {
                onSelect(emoji.emoji);
                setIsOpen(false);
              }}
              emojiStyle="native"
              height={360}
              width="100%"
              lazyLoadEmojis
              previewConfig={{ showPreview: false }}
              skinTonesDisabled={false}
              searchDisabled={false}
              autoFocusSearch
              theme="auto" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
