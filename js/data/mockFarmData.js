const mockFarmData = {
  farms: [
    {
      id: 1,
      name: 'Happy Farm',
      location: 'Nairobi',
      cropType: 'Maize',
      size: '50 acres',
      owner: 'John Doe'
    },
    {
      id: 2,
      name: 'Sunny Farm',
      location: 'Mombasa',
      cropType: 'Tea',
      size: '30 acres',
      owner: 'Jane Smith'
    }
  ],
  transporters: [
    {
      id: 1,
      name: 'Fast Transport',
      contact: '0712345678',
      capacity: '20 tons'
    },
    {
      id: 2,
      name: 'Quick Ship',
      contact: '0723456789',
      capacity: '15 tons'
    }
  ],
  buyers: [
    {
      id: 1,
      name: 'Supermarket Chain',
      location: 'Nairobi',
      contact: 'info@supermarket.com'
    },
    {
      id: 2,
      name: 'Local Grocery',
      location: 'Mombasa',
      contact: 'info@localgrocery.com'
    }
  ]
};

export default mockFarmData;