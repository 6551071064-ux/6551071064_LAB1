/* ==========================================================================
   NTP BRACELETS - JavaScript Xử Lý 20 Mẫu Vòng Tay (UTF-8)
   Thư mục: Scripts/main.js
   ========================================================================== */

const PRODUCTS = [
  {
    id: 1,
    name: "Vòng Hạt Pastel Hoa Xà Cừ Trắng",
    category: "Vòng Hạt & Ngọc Trai",
    price: 35000,
    badge: "Bán chạy",
    image: "Images/bracelet-01.png",
    material: "Hạt đá pastel cam đào, ngọc trai nước ngọt & hoa xà cừ khóa bạc",
    desc: "Sắc cam đào phối xanh ngọc dịu nhẹ cùng điểm nhấn hoa xà cừ trắng thanh thoát, dễ dàng điều chỉnh độ rộng."
  },
  {
    id: 2,
    name: "Vòng Dây Trắng Hoa Anh Đào Hồng",
    category: "Vòng Dây Đan Handmade",
    price: 37000,
    badge: "Yêu thích",
    image: "Images/bracelet-02.png",
    material: "Dây dù trắng đan tay, hạt pha lê hoa anh đào & thạch anh hồng",
    desc: "Thiết kế dây rút mềm mại điểm xuyết những đóa hoa anh đào hồng trong suốt đầy nữ tính."
  },
  {
    id: 3,
    name: "Vòng Dây Bện Tím Pastel Hoa Bạc",
    category: "Vòng Dây Đan Handmade",
    price: 39000,
    badge: "Tối giản",
    image: "Images/bracelet-03.png",
    material: "Dây lụa bện tím pastel & charm hoa 5 cánh mạ bạc sáng bóng",
    desc: "Phong cách tối giản thanh lịch với sắc tím oải hương nhẹ nhàng và mặt hoa bạc tinh tế."
  },
  {
    id: 4,
    name: "Vòng Dây Nâu Đan Hạt Hồng Dâu",
    category: "Vòng Dây Đan Handmade",
    price: 39000,
    badge: "Handmade",
    image: "Images/bracelet-04.png",
    material: "Dây sáp nâu đan thủ công, hạt đá hồng dâu & lá pha lê xanh",
    desc: "Sự kết hợp ấm áp giữa dây nâu trầm và các hạt đá hồng trong trẻo mang lại vẻ ngọt ngào cổ điển."
  },
  {
    id: 5,
    name: "Vòng Dây Nâu Hoa Pha Lê Ngọc Trai",
    category: "Vòng Dây Đan Handmade",
    price: 40000,
    badge: "Mới về",
    image: "Images/bracelet-05.png",
    material: "Dây sáp nâu vintage, hoa pha lê ánh xanh & ngọc trai trắng",
    desc: "Những bông hoa pha lê bắt sáng lung linh xen kẽ hạt ngọc trai tạo nên vẻ đẹp như khu vườn sớm mai."
  },
  {
    id: 6,
    name: "Vòng Dây Xoắn Nâu Ngôi Sao Vintage",
    category: "Vòng Dây Đan Handmade",
    price: 35000,
    badge: "Unisex",
    image: "Images/bracelet-06.png",
    material: "Dây xoắn nâu mộc, charm ngôi sao pha lê khói & xoắn ốc bạc",
    desc: "Kiểu đan xoắn thủ công cá tính phối charm sao thủy tinh và mặt xoắn ốc bạc phong cách boho."
  },
  {
    id: 7,
    name: "Vòng Dây Nâu Hoa Bạc Nhụy Đỏ",
    category: "Vòng Dây Đan Handmade",
    price: 36000,
    badge: "Độc đáo",
    image: "Images/bracelet-07.png",
    material: "Dây đan nâu trầm, charm hoa bạc đính đá đỏ & lá thủy tinh",
    desc: "Điểm nhấn bông hoa bạc nhụy đỏ nổi bật giữa dải hạt xanh ngọc và chiếc lá thủy tinh trong vắt."
  },
  {
    id: 8,
    name: "Vòng Dây Kem Cỏ Bốn Lá May Mắn",
    category: "Vòng Dây Đan Handmade",
    price: 39000,
    badge: "May mắn",
    image: "Images/bracelet-08.png",
    material: "Dây kem sữa đan tay, charm cỏ bốn lá xanh ngọc & ngọc trai nhỏ",
    desc: "Mang thông điệp bình an và may mắn với biểu tượng cỏ bốn lá xanh ngọc bích dịu mắt."
  },
  {
    id: 9,
    name: "Vòng Dây Cát Biển Sao Biển & Vỏ Sò",
    category: "Vòng Dây Đan Handmade",
    price: 39000,
    badge: "Mùa hè",
    image: "Images/bracelet-09.png",
    material: "Dây bện màu cát, charm sao biển ánh xà cừ, vỏ sò & cá bạc",
    desc: "Lấy cảm hứng từ đại dương xanh mát với những chi tiết sao biển và vỏ sò lung linh dưới nắng."
  },
  {
    id: 10,
    name: "Vòng Ngọc Trai Hai Tầng Charm Nơ Bạc",
    category: "Vòng Hạt & Ngọc Trai",
    price: 39000,
    badge: "Hot trend",
    image: "Images/bracelet-10.png",
    material: "Chuỗi ngọc trai nhân tạo hai tầng, hạt hồng ombre & charm nơ bạc",
    desc: "Thiết kế hai lớp bồng bềnh điệu đà kết hợp charm nơ bạc trendy và hạt hồng chuyển sắc."
  },
  {
    id: 11,
    name: "Vòng Hạt Đá Xanh Bơ Hoa Xà Cừ",
    category: "Vòng Hạt & Ngọc Trai",
    price: 38000,
    badge: "Thanh mát",
    image: "Images/bracelet-11.png",
    material: "Đá xanh bơ tự nhiên, hoa xà cừ trắng & hạt pha lê vàng chanh",
    desc: "Tông xanh bơ tươi mát phối cùng hoa trắng và dây xích bạc tăng giảm tiện lợi."
  },
  {
    id: 12,
    name: "Vòng Dây Xanh Biển Vỏ Ốc & Trăng Khuyết",
    category: "Vòng Dây Đan Handmade",
    price: 39000,
    badge: "Biển xanh",
    image: "Images/bracelet-12.png",
    material: "Dây xoắn xanh trắng, vỏ ốc tự nhiên, sao biển & trăng khuyết bạc",
    desc: "Sắc xanh biển hòa quyện cùng vỏ ốc trắng và đá xanh băng mang hơi thở tự do của biển cả."
  },
  {
    id: 13,
    name: "Vòng Dây Oải Hương Đá Thạch Anh Tím",
    category: "Vòng Đá Thiên Nhiên",
    price: 39000,
    badge: "Phong thủy",
    image: "Images/bracelet-13.png",
    material: "Dây bện tím trắng, đá thạch anh tím tự nhiên & charm sao bạc",
    desc: "Các viên đá thạch anh tím cắt thô tự nhiên kết hợp ngôi sao bạc ở tâm điểm đầy mộng mơ."
  },
  {
    id: 14,
    name: "Vòng Dây Rêu Bọc Đá Aquamarine Xanh",
    category: "Vòng Đá Thiên Nhiên",
    price: 40000,
    badge: "Thủ công",
    image: "Images/bracelet-14.png",
    material: "Dây đan xanh rêu nâu, đá Aquamarine bọc lưới & chuông đồng nhỏ",
    desc: "Kỹ thuật đan lưới ôm trọn từng viên đá xanh ngọc thô tự nhiên kèm chuông đồng cổ điển."
  },
  {
    id: 15,
    name: "Vòng Dây Xoắn Đá Peridot Xanh Lục",
    category: "Vòng Đá Thiên Nhiên",
    price: 38000,
    badge: "Tự nhiên",
    image: "Images/bracelet-15.png",
    material: "Dây xoắn nâu mộc & đá Peridot xanh lục bảo tự nhiên",
    desc: "Viên đá Peridot xanh tươi được đan lưới chắc chắn ở trung tâm tỏa sáng rực rỡ dưới nắng."
  },
  {
    id: 16,
    name: "Vòng Đá Thạch Anh Lựu Đỏ Rượu Vang",
    category: "Vòng Đá Thiên Nhiên",
    price: 39000,
    badge: "Cao cấp",
    image: "Images/bracelet-16.png",
    material: "Đá Garnet đỏ lựu cắt lát tự nhiên & khóa càng cua bạc",
    desc: "Chuỗi đá Garnet đỏ trầm quyến rũ xếp tầng dày dặn, tôn da và mang năng lượng ấm áp."
  },
  {
    id: 17,
    name: "Vòng Hoa Anh Đào Pha Lê (Bản Đặc Biệt)",
    category: "Vòng Dây Đan Handmade",
    price: 38000,
    badge: "Quà tặng",
    image: "Images/bracelet-17.png",
    material: "Dây rút trắng lụa, hoa anh đào pha lê hồng & hạt thạch anh",
    desc: "Phiên bản tuyển chọn sắc nét dành làm quà tặng bạn thân với hộp nhung xinh xắn."
  },
  {
    id: 18,
    name: "Vòng Đại Dương Vỏ Ốc & Sao Biển (Limited)",
    category: "Vòng Dây Đan Handmade",
    price: 36000,
    badge: "Giới hạn",
    image: "Images/bracelet-18.png",
    material: "Dây đan xanh trắng sóng biển, vỏ ốc tự nhiên & đá xanh băng",
    desc: "Phiên bản giới hạn dành cho những tâm hồn yêu biển với nút thắt rút vừa mọi cổ tay."
  },
  {
    id: 19,
    name: "Vòng Đá Garnet Đỏ Lựu Khóa Bạc (Limited)",
    category: "Vòng Đá Thiên Nhiên",
    price: 35000,
    badge: "Giới hạn",
    image: "Images/bracelet-19.png",
    material: "Đá thạch anh lựu đỏ tự nhiên tuyển hạt đều & xích bạc",
    desc: "Phiên bản đá đỏ lựu ánh vang sang trọng, dễ phối cùng đồng hồ hoặc lắc tay bạc."
  },
  {
    id: 20,
    name: "Vòng Hoa Xà Cừ & Đá Xanh Bơ (Bản Thanh Mảnh)",
    category: "Vòng Hạt & Ngọc Trai",
    price: 39000,
    badge: "Yêu thích",
    image: "Images/bracelet-20.png",
    material: "Hạt đá xanh ngọc nhạt, hoa xà cừ 4 cánh & pha lê ánh vàng",
    desc: "Thiết kế nhẹ nhàng tôn cổ tay thanh mảnh, phù hợp diện đi học và dạo phố hằng ngày."
  }
];

let currentCategory = "Tất cả";
let currentSearch = "";
let currentSort = "default";
let selectedProduct = null;
let selectedSize = "16cm";
let cart = JSON.parse(localStorage.getItem("ntp_bracelet_cart_v2")) || [];

function formatVND(amount) {
  return amount.toLocaleString("vi-VN") + "₫";
}

function saveCart() {
  localStorage.setItem("ntp_bracelet_cart_v2", JSON.stringify(cart));
  updateCartUI();
}

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function getFilteredProducts() {
  let list = PRODUCTS.filter((p) => {
    const matchCat = currentCategory === "Tất cả" || p.category === currentCategory;
    const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase().trim());
    return matchCat && matchSearch;
  });

  if (currentSort === "price-asc") {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    list = [...list].sort((a, b) => b.price - a.price);
  }
  return list;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const limit = grid.dataset.limit ? parseInt(grid.dataset.limit, 10) : PRODUCTS.length;
  const items = getFilteredProducts().slice(0, limit);

  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding: 32px; color: var(--text-muted);">Không tìm thấy mẫu vòng tay phù hợp với từ khóa của bạn.</p>`;
    return;
  }

  grid.innerHTML = items.map((p) => `
    <article class="product-card">
      <div class="product-thumb" onclick="openProductModal(${p.id})">
        <span class="product-badge">${p.badge}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <div class="product-cat">${p.category}</div>
        <h3 class="product-title" onclick="openProductModal(${p.id})">${p.name}</h3>
        <div class="product-price">${formatVND(p.price)}</div>
        <div class="product-actions">
          <button class="btn btn-outline btn-sm" onclick="openProductModal(${p.id})">Chi tiết</button>
          <button class="btn btn-primary btn-sm" onclick="quickAdd(${p.id})">+ Giỏ hàng</button>
        </div>
      </div>
    </article>
  `).join("");
}

function openProductModal(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  selectedProduct = product;
  selectedSize = "16cm";

  const modal = document.getElementById("productModal");
  const backdrop = document.getElementById("globalBackdrop");
  if (!modal || !backdrop) return;

  document.getElementById("modalImg").src = product.image;
  document.getElementById("modalImg").alt = product.name;
  document.getElementById("modalCat").textContent = product.category;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalPrice").textContent = formatVND(product.price);
  document.getElementById("modalDesc").textContent = product.desc;
  document.getElementById("modalMaterial").textContent = product.material;

  document.querySelectorAll(".size-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.size === selectedSize);
  });

  backdrop.classList.add("open");
  modal.classList.add("open");
}

function closeAllModals() {
  const modal = document.getElementById("productModal");
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("globalBackdrop");
  if (modal) modal.classList.remove("open");
  if (drawer) drawer.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("globalBackdrop");
  if (drawer && backdrop) {
    backdrop.classList.add("open");
    drawer.classList.add("open");
  }
}

function addToCart(productId, size = "16cm") {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId && item.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      qty: 1
    });
  }
  saveCart();
  showToast(`Đã thêm "${product.name}" (${size}) vào giỏ hàng!`);
}

function quickAdd(productId) {
  addToCart(productId, "16cm");
}

function changeQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function updateCartUI() {
  const countEl = document.getElementById("cartCount");
  const listEl = document.getElementById("cartItemsList");
  const totalEl = document.getElementById("cartTotal");

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (countEl) countEl.textContent = totalQty;
  if (totalEl) totalEl.textContent = formatVND(totalPrice);

  if (!listEl) return;
  if (cart.length === 0) {
    listEl.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 36px 0;">Giỏ hàng của bạn đang trống.</p>`;
    return;
  }

  listEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <div style="font-weight:600; font-size:0.92rem;">${item.name}</div>
        <div style="font-size:0.8rem; color:var(--text-muted);">Size cổ tay: ${item.size}</div>
        <div style="font-weight:700; color:var(--gold); font-size:0.9rem; margin-top:2px;">${formatVND(item.price * item.qty)}</div>
        <div class="qty-controls">
          <button onclick="changeQty(${idx}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${idx}, 1)">+</button>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderProducts();
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  document.querySelectorAll(".size-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".size-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      selectedSize = chip.dataset.size;
    });
  });

  const modalAddBtn = document.getElementById("modalAddToCart");
  if (modalAddBtn) {
    modalAddBtn.addEventListener("click", () => {
      if (selectedProduct) {
        addToCart(selectedProduct.id, selectedSize);
        closeAllModals();
        openCartDrawer();
      }
    });
  }

  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        showToast("Vui lòng chọn ít nhất 1 sản phẩm trước khi đặt hàng!");
        return;
      }
      const customerName = document.getElementById("custName").value.trim();
      cart = [];
      saveCart();
      checkoutForm.reset();
      closeAllModals();
      showToast(`Cảm ơn ${customerName}! Đơn hàng vòng tay của bạn đã được ghi nhận.`);
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const sender = document.getElementById("senderName").value.trim();
      contactForm.reset();
      showToast(`Đã gửi yêu cầu thành công! NTP sẽ liên hệ ${sender} trong 15 phút.`);
    });
  }

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});
