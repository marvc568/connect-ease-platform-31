import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Button } from "@/components/ui/button";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SuccessStory = () => {
  const [salesGrowth, setSalesGrowth] = useState(0);
  const [customerCount, setCustomerCount] = useState(50);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);

  const chartData = {
    labels: ['نمو المبيعات', 'عدد الزبائن'],
    datasets: [
      {
        label: 'النمو',
        data: [salesGrowth, customerCount],
        backgroundColor: ['rgba(40, 167, 69, 0.6)', 'rgba(0, 123, 255, 0.6)'],
        borderColor: ['rgb(40, 167, 69)', 'rgb(0, 123, 255)'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'نمو المبيعات وعدد الزبائن',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200,
      },
    },
  };

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSalesGrowth(0);
    setCustomerCount(50);
  };

  useEffect(() => {
    if (isAnimating) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [isAnimating, salesGrowth, customerCount]);

  const animate = () => {
    if (salesGrowth < 100) {
      setSalesGrowth(prev => Math.min(prev + 1, 100));
      setCustomerCount(prev => Math.min(prev + 2, 250));
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">قصة نجاح مطعم XYZ</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <Bar data={chartData} options={chartOptions} />
        <div className="mt-6 text-center">
          <Button onClick={startAnimation} disabled={isAnimating}>
            {isAnimating ? 'جارٍ عرض القصة...' : 'ابدأ القصة'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;