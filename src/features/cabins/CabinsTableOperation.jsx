import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinsTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (low - high)" },
          { value: "regularPrice-desc", label: "Sort by Price (high - low)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low - high)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high - low)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinsTableOperation;
