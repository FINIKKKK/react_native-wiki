import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ss from './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { values } from '../../../screens/AddUsers';

export interface TItem {
  value: string;
  label: string;
}

interface SelectProps {
  values: TItem[];
  setValue: (item: TItem) => void;
  icon?: IconDefinition;
  label?: string;
}

export const Select: React.FC<SelectProps> = (props) => {
  /**
   * Переменные ----------------
   */
  const [activeItem, setActiveItem] = React.useState<TItem>(values[0]);
  const [isOpen, setIsOpen] = React.useState(false);

  /**
   * Методы ----------------
   */
  // Установить активный элемент
  const setActive = (item: TItem) => {
    props.setValue(item);
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <View style={ss.select}>
      <TouchableOpacity style={ss.field} onPress={() => setIsOpen(!isOpen)}>
        {props.icon && (
          <FontAwesomeIcon
            icon={props.icon}
            style={ss.icon}
            color="#B5B4BE"
            size={20}
          />
        )}
        <View style={ss.selected}>
          <Text style={ss.label}>{activeItem.label}</Text>
          <FontAwesomeIcon
            icon={faCaretDown}
            style={ss.caret}
            color="#0B55BB"
            size={20}
          />
        </View>
      </TouchableOpacity>

      {isOpen && (
        <FlatList
          data={props.values}
          renderItem={({ item }) => (
            <TouchableOpacity style={ss.item} onPress={() => setActive(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.value}
          style={ss.dropdown}
        />
      )}
    </View>
  );
};
