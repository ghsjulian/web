import React from "react";
import "../styles/add-product.css";

const AddProduct = () => {
  return (
    <>
      <div class="form-card">
        <div class="form-header">
          <h2 class="form-title">Product Information</h2>
          <div class="form-actions">
            <button class="btn btn-secondary">
              <i class="fas fa-save"></i> Save Draft
            </button>
            <button class="btn btn-primary">
              <i class="fas fa-paper-plane"></i> Publish
            </button>
          </div>
        </div>
        <form id="addProductForm">
          <div class="form-grid">
            <div class="form-group">
              <label htmlFor="productName">
                Product Name <span style={{ color: "#dc3545" }}>*</span>
              </label>
              <input
                type="text"
                id="productName"
                placeholder="e.g., Samsung Galaxy A55"
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="sku">
                SKU <span style={{ color: "#dc3545" }}>*</span>
              </label>
              <input
                type="text"
                id="sku"
                placeholder="e.g., SAM-A55-BLK"
                required
              />
            </div>
          </div>
          <div class="form-grid">
            <div class="form-group">
              <label htmlFor="category">
                Category <span style={{ color: "#dc3545" }}>*</span>
              </label>
              <select id="category" required>
                <option value="">Select Category</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="accessories">Accessories</option>
                <option value="audio">Audio</option>
                <option value="wearables">Wearables</option>
              </select>
            </div>
            <div class="form-group">
              <label htmlFor="brand">Brand</label>
              <select id="brand">
                <option value="">Select Brand</option>
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="xiaomi">Xiaomi</option>
                <option value="oneplus">OnePlus</option>
                <option value="realme">Realme</option>
              </select>
            </div>
          </div>
          <div class="form-grid">
            <div class="form-group">
              <label htmlFor="price">
                Regular Price (BDT) <span style={{ color: "#dc3545" }}>*</span>
              </label>
              <input
                type="number"
                id="price"
                placeholder="e.g., 35990"
                min="0"
                step="1"
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="salePrice">Sale Price (BDT)</label>
              <input
                type="number"
                id="salePrice"
                placeholder="e.g., 32990"
                min="0"
                step="1"
              />
            </div>
            <div class="form-group">
              <label htmlFor="stock">
                Stock Quantity <span style={{ color: "#dc3545" }}>*</span>
              </label>
              <input
                type="number"
                id="stock"
                placeholder="e.g., 50"
                min="0"
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="lowStock">Low Stock Alert</label>
              <input
                type="number"
                id="lowStock"
                placeholder="e.g., 10"
                min="0"
                value="10"
              />
            </div>
          </div>
          <div class="form-group full-width">
            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              id="shortDesc"
              placeholder="Brief overview (max 160 chars)"
            ></textarea>
          </div>
          <div class="form-group full-width">
            <label htmlFor="fullDesc">
              Full Description <span style={{ color: "#dc3545" }}>*</span>
            </label>
            <textarea
              id="fullDesc"
              placeholder="Detailed product description, features, specs..."
              required
            ></textarea>
          </div>
          <div class="form-group full-width">
            <label>
              Product Images <span style={{ color: "#dc3545" }}>*</span>
            </label>
            <div class="file-upload">
              <input type="file" id="productImages" multiple accept="image/*" />
              <label htmlFor="productImages" class="file-upload-label">
                <i class="fas fa-cloud-upload-alt"></i>
                <div>
                  <strong>Click to upload</strong> or drag and drop
                  <br />
                  <small>PNG, JPG, GIF up to 5MB each (Max 6 images)</small>
                </div>
              </label>
            </div>
            <div class="image-preview" id="imagePreview"></div>
          </div>
          <div class="form-group full-width">
            <label>Specifications</label>
            <div id="specsContainer">
              <div class="form-grid" style={{ alignItems: "end" }}>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Spec Name (e.g., RAM)"
                    class="spec-name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Spec Value (e.g., 8GB)"
                    class="spec-value"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  onclick="this.parentElement.parentElement.remove()"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-outline"
              style={{ marginTop: "0.5rem" }}
            >
              <i class="fas fa-plus"></i> Add Specification
            </button>
          </div>
          <div class="form-group full-width">
            <label htmlFor="tags">Tags</label>
            <div class="tags-input" id="tagsInput">
              <input type="text" placeholder="Type tag and press Enter..." />
            </div>
          </div>
          <div class="form-group full-width">
            <label htmlFor="metaTitle">Meta Title</label>
            <input
              type="text"
              id="metaTitle"
              placeholder="SEO title (60 chars)"
              maxlength="60"
            />
          </div>
          <div class="form-group full-width">
            <label htmlFor="metaDesc">Meta Description</label>
            <textarea
              id="metaDesc"
              placeholder="SEO description (160 chars)"
              maxlength="160"
            ></textarea>
          </div>
          <div class="form-grid">
            <div class="form-group">
              <div class="status-toggle">
                <label>Publish Status</label>
                <label class="toggle-switch">
                  <input type="checkbox" id="publishStatus" checked />
                  <span class="slider"></span>
                </label>
                <span id="statusText">Published</span>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox-group">
                <input type="checkbox" id="featured" />
                <label htmlFor="featured">Mark as Featured Product</label>
              </div>
            </div>
          </div>
          <div class="alert alert-info">
            <i class="fas fa-info-circle"></i>
            <div>
              <strong>Tip:</strong> All fields marked with{" "}
              <span style={{ color: "#dc3545" }}>*</span> are required. Product
              will be live immediately if published.
            </div>
          </div>
          <div
            class="form-actions"
            style={{ marginTop: "2rem", justifyContent: "flex-end" }}
          >
            <button type="button" class="btn btn-secondary">
              <i class="fas fa-ban"></i> Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              <i class="fas fa-check"></i> Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
