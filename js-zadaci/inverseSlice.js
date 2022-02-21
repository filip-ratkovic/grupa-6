function inverseSlice(items, a, b) {
    c = b - a;
    items.splice(a, c);

    return items;
}

console.log(inverseSlice([1, 2, 3, 4, 5, 6], 2, 4));