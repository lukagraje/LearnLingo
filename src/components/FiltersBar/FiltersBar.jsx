import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectFilterOptions,
  selectFilters,
} from "../../redux/teachers/teachersSelectors";

import { fetchTeachers } from "../../redux/teachers/teachersOperations";

import { setFilter, resetFilters } from "../../redux/teachers/teachersSlice";
import { Button, FilterWrapper, LabelTitle } from "./FiltersBar.styled";

import { FormControl, MenuItem, styled, Select } from "@mui/material";
import { MdCancel } from "react-icons/md";

export const FiltersBar = () => {
  const StyledSelect = styled(Select)(() => ({
    borderRadius: "14px",
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  }));

  const dispatch = useDispatch();

  const filterOptions = useSelector(selectFilterOptions);
  const filters = useSelector(selectFilters);

  const [localFilters, setLocalFilters] = useState({
    language: "",
    level: "",
    price: "",
  });

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  useEffect(() => {
    setLocalFilters({
      language: filters.language || "",
      level: filters.level || "",
      price: filters.price || "",
    });
  }, [filters]);

  const handleFilterChange = useCallback(
    (filterType, value) => {
      setLocalFilters((prev) => ({ ...prev, [filterType]: value }));
      dispatch(setFilter({ filterType, value }));
    },
    [dispatch]
  );

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <FilterWrapper>
      <FormControl sx={{ marginRight: "20px", minWidth: 221 }} size="small">
        <LabelTitle id="language-select-label">Languages</LabelTitle>
        <StyledSelect
          labelId="language-select-label"
          value={localFilters.language}
          onChange={(e) =>
            handleFilterChange("language", e.target.value || null)
          }
        >
          <MenuItem value="">All</MenuItem>
          {filterOptions.languages.map((language) => (
            <MenuItem key={language} value={language}>
              {language}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
      <FormControl sx={{ marginRight: "20px", minWidth: 198 }} size="small">
        <LabelTitle id="knowledge-select-label">Level of knowledge</LabelTitle>
        <StyledSelect
          labelId="knowledge-select-label"
          value={localFilters.level}
          onChange={(e) => handleFilterChange("level", e.target.value || null)}
        >
          <MenuItem value="">All</MenuItem>
          {filterOptions.levels.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
      <FormControl sx={{ minWidth: 124 }} size="small">
        <LabelTitle id="price-select-label">Price</LabelTitle>
        <StyledSelect
          labelId="price-select-label"
          type="number"
          value={localFilters.price}
          placeholder="Enter max price"
          onChange={(e) =>
            handleFilterChange("price", e.target.value ? +e.target.value : null)
          }
        >
          <MenuItem value="">All</MenuItem>
          {filterOptions.prices.map((price) => (
            <MenuItem key={price} value={price}>
              {price}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
      {Object.values(filters).join("") !== "" && (
        <Button onClick={handleResetFilters}>
          <MdCancel />
        </Button>
      )}
    </FilterWrapper>
  );
};
