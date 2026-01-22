// 1. Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
	this.id = id; // mã sản phẩm
	this.name = name; // tên sản phẩm
	this.price = price; // giá sản phẩm
	this.quantity = quantity; // số lượng tồn kho
	this.category = category; // danh mục sản phẩm
	this.isAvailable = isAvailable; // trạng thái bán (true/false)
}

// 2. Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
	new Product(1, "iPhone 17", 35000000, 10, "Electronics", true),
	new Product(2, "MacBook Air", 25000000, 5, "Electronics", true),
	new Product(3, "AirPods Pro", 6000000, 0, "Accessories", false),
	new Product(4, "Apple Watch", 12000000, 3, "Accessories", true),
	new Product(5, "Samsung TV", 18000000, 2, "Electronics", true),
	new Product(6, "Mouse Logitech", 800000, 15, "Accessories", true)
];

// 3. Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
const namePriceArr = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3 - Mảng chỉ chứa name, price:", namePriceArr);

// 4. Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStock = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", inStock);

// 5. Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensive = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có sản phẩm giá > 30tr không?", hasExpensive);

// 6. Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán không
const allAccessoriesAvailable = products
	.filter(p => p.category === "Accessories")
	.every(p => p.isAvailable === true);
console.log("Câu 6 - Tất cả Accessories đang bán?", allAccessoriesAvailable);

// 7. Tính tổng giá trị kho hàng (price × quantity)
const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log("Câu 7 - Tổng giá trị kho hàng:", totalValue);

// 8. Dùng for...of duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("Câu 8 - Thông tin từng sản phẩm:");
for (const p of products) {
	console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// 9. Dùng for...in để in ra tên thuộc tính và giá trị tương ứng của từng sản phẩm
console.log("Câu 9 - Thuộc tính và giá trị từng sản phẩm:");
for (const p of products) {
	for (const key in p) {
		console.log(`Thuộc tính: ${key} | Giá trị: ${p[key]}`);
	}
	console.log("---");
}

// 10. Lấy danh sách tên các sản phẩm đang bán và còn hàng
const sellingNames = products
	.filter(p => p.isAvailable && p.quantity > 0)
	.map(p => p.name);
console.log("Câu 10 - Tên sản phẩm đang bán và còn hàng:", sellingNames);
