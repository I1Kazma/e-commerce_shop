const Filter = () => {
  return (
    <div>
      <h2 className="mt-12 flex justify-between">
        <div className="flex gap-6 flex-wrap">
          <select
            name="type"
            id=""
            className="py-2 px-4 rounded-2xl test-xs font-medium bg-[#EBEDED]"
          >
            <option value="Type">Type</option>
            <option value="Physical">Physical</option>
            <option value="Digital">Digital</option>
          </select>
          <input
            type="text"
            name="min"
            placeholder="min price"
            className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          />
          <input
            type="text"
            name="max"
            placeholder="max price"
            className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          />
          <select
            name="Size"
            id=""
            className="py-2 px-4 rounded-2xl test-xs font-medium bg-[#EBEDED]"
          >
            <option value="Type">Size</option>
          </select>
          <select
            name="Color"
            id=""
            className="py-2 px-4 rounded-2xl test-xs font-medium bg-[#EBEDED]"
          >
            <option value="Type">Color</option>
          </select>
          <select
            name="Category"
            id=""
            className="py-2 px-4 rounded-2xl test-xs font-medium bg-[#EBEDED]"
          >
            <option value="Type">Category</option>
            <option value="Physical">New Arrival</option>
            <option value="Digital">Popular</option>
          </select>
          <select
            name="All Filters"
            id=""
            className="py-2 px-4 rounded-2xl test-xs font-medium bg-[#EBEDED]"
          >
            <option value="Type">All Filters</option>
          </select>
        </div>
        <div className="">
          <select
            name="Sort"
            id=""
            className="py-2 px-4 rounded-2xl test-xs font-medium bg-[#EBEDED]"
          >
            <option>Sort By</option>
            <option value="Type">Price (low to high)</option>
            <option value="Type">Price (high to low)</option>
            <option value="Type">Newest</option>
            <option value="Type">Oldest</option>
          </select>
        </div>
      </h2>
    </div>
  );
};

export default Filter;
