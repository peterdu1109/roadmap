import React, { useState } from 'react';
import { Plus, LogOut } from 'lucide-react';
import { RoadmapContainer } from '../components/roadmap/RoadmapContainer';
import { RoadmapItemModal } from '../components/admin/RoadmapItemModal';
import { useRoadmapStore } from '../store/roadmapStore';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import type { RoadmapItem } from '../types/roadmap';

export function AdminDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<RoadmapItem | null>(null);
  
  const { items, addItem, updateItem, deleteItem } = useRoadmapStore();
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSubmit = (data: Omit<RoadmapItem, 'id'>) => {
    if (editingItem) {
      updateItem(editingItem.id, data);
    } else {
      addItem(data);
    }
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleEdit = (item: RoadmapItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(id);
    }
  };

  const handleAddNew = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            onClick={handleAddNew}
          >
            <Plus className="w-4 h-4" />
            Add Item
          </button>
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <RoadmapContainer
        items={items}
        isAdmin={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <RoadmapItemModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingItem(null);
        }}
        onSubmit={handleSubmit}
        initialData={editingItem || undefined}
        title={editingItem ? 'Edit Roadmap Item' : 'Add New Roadmap Item'}
      />
    </>
  );
}